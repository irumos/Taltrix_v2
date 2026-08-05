import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { CodeEditor } from "@/components/editor/CodeEditor";
import { TaltrixBadge, Window } from "@/components/ui-kit";
import { useExecution } from "@/contexts/ExecutionContext";

export function EditorPane() {
  const { trace, step, language } = useExecution();

  return (
    <Window
      title={trace.fileName}
      icon={Code2}
      className="h-full"
      bodyClassName="p-0"
      actions={
        <>
          <TaltrixBadge tone="primary">{trace.label}</TaltrixBadge>
          <motion.span
            key={step.line}
            initial={{ opacity: 0.4, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <TaltrixBadge tone="accent">line {step.line}</TaltrixBadge>
          </motion.span>
        </>
      }
    >
      <CodeEditor
        key={language}
        highlightLine={step.line}
        language={trace.monacoLanguage}
        value={trace.code}
      />
    </Window>
  );
}
