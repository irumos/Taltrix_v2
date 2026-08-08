import { lazy, Suspense, useEffect, useRef, useMemo } from "react";
import { ClientOnly } from "@/components/common/ClientOnly";
import { DEMO_CODE } from "@/data/execution";
import { useSettings } from "@/contexts/SettingsContext";
import { useOptionalExecution } from "@/contexts/ExecutionContext";
import { FloatingExecutionStatus } from "./FloatingExecutionStatus";
import { ExecutionFlowOverlay, type FlowType } from "./ExecutionFlowOverlay";

const Monaco = lazy(async () => {
  const [{ default: Editor, loader }] = await Promise.all([import("@monaco-editor/react")]);
  loader.init().then((monaco) => {
    monaco.editor.defineTheme("taltrix", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "5b6784", fontStyle: "italic" },
        { token: "keyword", foreground: "a78bfa" },
        { token: "string", foreground: "67e8f9" },
        { token: "number", foreground: "f59e0b" },
      ],
      colors: {
        "editor.background": "#0D1224",
        "editor.lineHighlightBackground": "#141B2D00",
        "editorLineNumber.foreground": "#3d4a68",
        "editorGutter.background": "#0D1224",
        "editor.selectionBackground": "#7C3AED44",
      },
    });
    monaco.editor.setTheme("taltrix");
  });
  return { default: Editor };
});

function Skeleton({ code = DEMO_CODE }: { code?: string }) {
  return (
    <pre className="h-full overflow-auto bg-surface p-5 font-mono text-[13px] leading-[1.9] text-muted-foreground">
      {code}
    </pre>
  );
}

export function CodeEditor({
  highlightLine,
  height = "100%",
  language = "python",
  value = DEMO_CODE,
}: {
  highlightLine?: number;
  height?: string;
  language?: string;
  value?: string;
}) {
  const { settings } = useSettings();
  const exec = useOptionalExecution();
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);
  const decorationsRef = useRef<string[]>([]);

  const handleEditorMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    try {
      monaco.editor.defineTheme("taltrix", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "5b6784", fontStyle: "italic" },
          { token: "keyword", foreground: "a78bfa" },
          { token: "string", foreground: "67e8f9" },
          { token: "number", foreground: "f59e0b" },
        ],
        colors: {
          "editor.background": "#0D1224",
          "editor.lineHighlightBackground": "#141B2D00",
          "editorLineNumber.foreground": "#3d4a68",
          "editorGutter.background": "#0D1224",
          "editor.selectionBackground": "#7C3AED44",
        },
      });
      monaco.editor.setTheme("taltrix");
    } catch {
      // theme already defined or fallback
    }
  };


  // Extract step metrics & line context
  const currentLine = highlightLine ?? exec?.step?.line;
  const index = exec?.index ?? 0;
  const steps = exec?.trace?.steps;
  const mode = exec?.mode ?? "learn";

  const prevLine = useMemo(() => {
    if (!steps || index <= 0) return undefined;
    return steps[index - 1]?.line;
  }, [steps, index]);

  const nextLine = useMemo(() => {
    if (!steps || index >= steps.length - 1) return undefined;
    return steps[index + 1]?.line;
  }, [steps, index]);

  // Flow detection (Function Calls, Function Returns, Loop Repetitions)
  const { flowType, detailText } = useMemo<{ flowType: FlowType; detailText: string }>(() => {
    if (!steps || index <= 0 || !exec?.step) return { flowType: null, detailText: "" };
    const currentStep = exec.step;
    const prevStep = steps[index - 1];

    if (currentStep.stack && prevStep?.stack) {
      if (currentStep.stack.length > prevStep.stack.length) {
        return {
          flowType: "function-call",
          detailText: `↓ Entering ${currentStep.currentFunction || "function"}()`,
        };
      }
      if (currentStep.stack.length < prevStep.stack.length) {
        return {
          flowType: "function-return",
          detailText: `↑ Returning to ${currentStep.currentFunction || "caller"}`,
        };
      }
    }

    if (
      prevStep &&
      currentStep.line <= prevStep.line &&
      currentStep.currentFunction === prevStep.currentFunction &&
      Math.abs(currentStep.line - prevStep.line) > 1
    ) {
      return {
        flowType: "loop-iteration",
        detailText: `↺ Loop back to line ${currentStep.line}`,
      };
    }

    return { flowType: null, detailText: "" };
  }, [steps, index, exec?.step]);

  // Animation timing
  const speed = settings.visualization.animationSpeed;
  const transitionDuration =
    settings.accessibility.reduceMotion || speed === "instant"
      ? "0s"
      : speed === "slow"
        ? "0.6s"
        : speed === "fast"
          ? "0.15s"
          : "0.35s";

  // Update multi-tier Monaco decorations whenever currentLine, prevLine, or nextLine changes
  useEffect(() => {
    const editor = editorRef.current;
    const monaco = monacoRef.current;
    if (!editor || !monaco) return;

    const newDecorations: any[] = [];

    // 1. Primary Current Execution Line
    if (currentLine) {
      newDecorations.push({
        range: new monaco.Range(currentLine, 1, currentLine, 1),
        options: {
          isWholeLine: true,
          className: "taltrix-current-line-bg",
          glyphMarginClassName: "taltrix-current-gutter-glyph",
          lineNumberClassName: "taltrix-current-line-number",
        },
      });
    }

    // 2. Previous Executed Line (if distinct)
    if (prevLine && prevLine !== currentLine) {
      newDecorations.push({
        range: new monaco.Range(prevLine, 1, prevLine, 1),
        options: {
          isWholeLine: true,
          className: "taltrix-previous-line-bg",
          glyphMarginClassName: "taltrix-previous-gutter-glyph",
          lineNumberClassName: "taltrix-previous-line-number",
        },
      });
    }

    // 3. Predicted Next Line (Learn Mode only, if distinct)
    if (mode === "learn" && nextLine && nextLine !== currentLine && nextLine !== prevLine) {
      newDecorations.push({
        range: new monaco.Range(nextLine, 1, nextLine, 1),
        options: {
          isWholeLine: true,
          className: "taltrix-next-line-bg",
          glyphMarginClassName: "taltrix-next-gutter-glyph",
        },
      });
    }

    decorationsRef.current = editor.deltaDecorations(decorationsRef.current, newDecorations);

    // Auto-scroll Monaco to keep active executing line centered
    if (currentLine && settings.visualization.autoScroll) {
      editor.revealLineInCenter(currentLine, 0); // 0 = Smooth scroll
    }
  }, [currentLine, prevLine, nextLine, mode, settings.visualization.autoScroll]);

  return (
    <div className="relative h-full" data-cursor="text">
      {/* Dynamic CSS for Execution Cursor System */}
      <style>{`
        /* Current Line Highlight */
        .taltrix-current-line-bg {
          background: linear-gradient(90deg, rgba(34, 211, 238, 0.22) 0%, rgba(168, 85, 247, 0.10) 70%, transparent 100%) !important;
          border-left: 3px solid #22d3ee !important;
          box-shadow: inset 0 0 16px rgba(34, 211, 238, 0.16);
          transition: all ${transitionDuration} cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .taltrix-current-gutter-glyph {
          background: #22d3ee;
          border-radius: 50%;
          box-shadow: 0 0 12px #22d3ee;
          width: 8px !important;
          height: 8px !important;
          margin-left: 4px;
          margin-top: 7px;
          transition: all ${transitionDuration} ease !important;
        }
        .taltrix-current-line-number {
          color: #22d3ee !important;
          font-weight: 700 !important;
          text-shadow: 0 0 8px rgba(34, 211, 238, 0.4);
        }

        /* Previous Line Highlight */
        .taltrix-previous-line-bg {
          background: linear-gradient(90deg, rgba(168, 85, 247, 0.12) 0%, rgba(59, 130, 246, 0.05) 70%, transparent 100%) !important;
          border-left: 2px solid rgba(168, 85, 247, 0.5) !important;
          opacity: 0.85;
          transition: all ${transitionDuration} ease !important;
        }
        .taltrix-previous-gutter-glyph {
          background: #a855f7;
          border-radius: 50%;
          opacity: 0.6;
          width: 6px !important;
          height: 6px !important;
          margin-left: 5px;
          margin-top: 8px;
        }
        .taltrix-previous-line-number {
          color: #c084fc !important;
          opacity: 0.85;
        }

        /* Next Line Preview Highlight */
        .taltrix-next-line-bg {
          background: linear-gradient(90deg, rgba(52, 211, 153, 0.08) 0%, transparent 80%) !important;
          border-left: 2px dashed rgba(52, 211, 153, 0.4) !important;
          transition: all ${transitionDuration} ease !important;
        }
        .taltrix-next-gutter-glyph {
          background: #34d399;
          border-radius: 2px;
          opacity: 0.5;
          width: 5px !important;
          height: 5px !important;
          margin-left: 5px;
          margin-top: 8px;
        }
      `}</style>

      <FloatingExecutionStatus />
      <ExecutionFlowOverlay flowType={flowType} detailText={detailText} />

      <ClientOnly fallback={<Skeleton code={value} />}>
        <Suspense fallback={<Skeleton code={value} />}>
          <Monaco
            key={language}
            height={height}
            language={language}
            defaultValue={value}
            theme="taltrix"
            onMount={handleEditorMount}
            options={{
              fontFamily: `${settings.editor.codeFont}, monospace`,
              fontSize: settings.editor.fontSize,
              lineHeight: settings.editor.lineHeight,
              lineNumbers: settings.editor.showLineNumbers,
              minimap: { enabled: settings.editor.showMinimap },
              wordWrap: settings.editor.wordWrap,
              tabSize: settings.editor.tabSize,
              cursorStyle: settings.editor.cursorStyle,
              cursorBlinking: settings.editor.cursorBlink,
              readOnly: settings.editor.readOnly,
              scrollBeyondLastLine: false,
              padding: { top: 16, bottom: 16 },
              renderLineHighlight: settings.editor.currentLineHighlight ? "all" : "none",
              smoothScrolling: true,
              glyphMargin: true,
              scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
            }}
          />
        </Suspense>
      </ClientOnly>
    </div>
  );
}