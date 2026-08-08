import { ExecutionStep } from '@/types/execution';

export type ExplanationMode = 'beginner' | 'intermediate' | 'advanced' | 'professor';

export interface VariableChange {
  name: string;
  oldVal: string;
  newVal: string;
}

export interface StoryPayload {
  title: string;
  story: string;
  why: string;
  changedVariables: VariableChange[];
  nextStepPreview: string;
  stepCategory:
    | 'start'
    | 'assignment'
    | 'condition'
    | 'loop'
    | 'function_call'
    | 'recursion'
    | 'return'
    | 'print'
    | 'error'
    | 'end';
}

export class ExecutionStoryService {
  /**
   * Generates a beginner-friendly, educational narrative for the current step.
   */
  static generateStory(
    step: ExecutionStep,
    index: number,
    totalSteps: number,
    prevStep?: ExecutionStep,
    nextStep?: ExecutionStep,
    mode: ExplanationMode = 'beginner'
  ): StoryPayload {
    // 1. Determine Variable Changes (Diff)
    const changedVariables: VariableChange[] = [];
    if (step.variables) {
      const prevMap = new Map<string, string>();
      if (prevStep?.variables) {
        prevStep.variables.forEach((v) => prevMap.set(v.name, String(v.value)));
      }

      step.variables.forEach((v) => {
        const valStr = String(v.value);
        const oldVal = prevMap.get(v.name);
        if (oldVal === undefined) {
          changedVariables.push({ name: v.name, oldVal: 'undefined', newVal: valStr });
        } else if (oldVal !== valStr) {
          changedVariables.push({ name: v.name, oldVal, newVal: valStr });
        }
      });
    }

    // 2. Classify Step & Context
    let category: StoryPayload['stepCategory'] = 'assignment';
    let title = 'Code Execution Step';
    let story = '';
    let why = '';

    const summary = step.deepExplanation || '';
    const codeLine = step.line ? `Line ${step.line}` : '';

    if (index === 0) {
      category = 'start';
      title = 'Program Execution Started';
      story =
        mode === 'beginner'
          ? 'The computer gets ready and starts reading your program from the very top.'
          : mode === 'professor'
          ? 'The execution runtime initializes stack frame memory and begins instruction evaluation.'
          : 'Execution context created. Memory addresses are ready to track variable declarations.';
      why = 'Every program begins by setting up memory space for functions and variables.';
    } else if (index === totalSteps - 1) {
      category = 'end';
      title = 'Execution Completed';
      story =
        mode === 'beginner'
          ? 'Hooray! The program finished running all commands successfully.'
          : mode === 'professor'
          ? 'Instruction counter reached program termination point. Memory allocated to stack frames has been reclaimed.'
          : 'The program reached the end of execution and returned 0 errors.';
      why = 'There are no remaining statements left in the call stack to execute.';
    } else if (step.stack && prevStep?.stack && step.stack.length > prevStep.stack.length) {
      const topFrame = step.stack[step.stack.length - 1];
      const isRecursive = step.stack.some((f, idx) => idx < step.stack.length - 1 && f.name === topFrame?.name);

      if (isRecursive) {
        category = 'recursion';
        title = `Recursive Call: ${topFrame?.name}()`;
        const argStr = step.variables.map((v) => `${v.name} = ${v.value}`).join(', ');
        story =
          mode === 'beginner'
            ? `The function ${topFrame?.name}() calls itself with ${argStr || 'new values'}. Before it can compute the final result, it must wait for this smaller step to finish first!`
            : mode === 'professor'
            ? `Recursive invocation detected on ${topFrame?.name}(). A new activation record is pushed onto the call stack.`
            : `Function ${topFrame?.name}() entered a recursive sub-call with parameters (${argStr}).`;
        why = 'Recursion breaks complex problems down into identical smaller sub-problems.';
      } else {
        category = 'function_call';
        title = `Function Called: ${topFrame?.name}()`;
        story =
          mode === 'beginner'
            ? `The program pauses the current code and jumps into the ${topFrame?.name}() function to run its instructions.`
            : mode === 'professor'
            ? `Control transferred to function sub-routine ${topFrame?.name}(). Call stack frame initialized at address frame #${step.stack.length}.`
            : `Entered function ${topFrame?.name}(). A new call stack frame has been opened.`;
        why = 'Functions encapsulate reusable logic and receive arguments to compute specific outputs.';
      }
    } else if (step.stack && prevStep?.stack && step.stack.length < prevStep.stack.length) {
      category = 'return';
      const returnedFrame = prevStep.stack[prevStep.stack.length - 1];
      title = `Function Returned: ${returnedFrame?.name}()`;
      story =
        mode === 'beginner'
          ? `The function ${returnedFrame?.name}() finished its work and sent its result back to the code that called it.`
          : mode === 'professor'
          ? `Sub-routine ${returnedFrame?.name}() executed return statement. Stack frame popped and control restored to caller.`
          : `Function ${returnedFrame?.name}() completed execution and returned control to caller.`;
      why = 'When a function finishes, its temporary memory frame is closed and variables inside it are cleaned up.';
    } else if (changedVariables.length > 0) {
      category = 'assignment';
      const mainVar = changedVariables[0];
      title = `Variable ${mainVar?.name} Updated`;
      story =
        mode === 'beginner'
          ? `The variable ${mainVar?.name} was changed from ${mainVar?.oldVal} to ${mainVar?.newVal}.`
          : mode === 'professor'
          ? `Assignment operation mutated memory address of identifier '${mainVar?.name}' (${mainVar?.oldVal} → ${mainVar?.newVal}).`
          : `Updated ${mainVar?.name} value to ${mainVar?.newVal} in local stack memory.`;
      why = 'Variables store data values that your program can update as calculations proceed.';
    } else if (summary.toLowerCase().includes('if') || summary.toLowerCase().includes('condition')) {
      category = 'condition';
      title = 'Condition Evaluated';
      story =
        mode === 'beginner'
          ? 'The computer asks a True or False question here to decide which branch of code to follow next.'
          : mode === 'professor'
          ? 'Conditional branch expression evaluated. Control flow directed according to boolean outcome.'
          : 'Decision branch evaluated. The program selects the matching branch path.';
      why = 'Conditionals allow programs to make dynamic decisions based on current variable values.';
    } else if (summary.toLowerCase().includes('loop') || summary.toLowerCase().includes('for') || summary.toLowerCase().includes('while')) {
      category = 'loop';
      title = 'Loop Iteration';
      story =
        mode === 'beginner'
          ? 'The program is looping! It repeats these instructions for each item in the collection.'
          : mode === 'professor'
          ? 'Loop counter incremented. Iteration condition remains valid for next cycle.'
          : 'Loop iteration executed. Control flow repeats for the next element.';
      why = 'Loops prevent repeating code manually by automating iterations over data.';
    } else if (summary.toLowerCase().includes('print') || summary.toLowerCase().includes('output')) {
      category = 'print';
      title = 'Output Printed to Terminal';
      story =
        mode === 'beginner'
          ? 'The program outputs a message to the console screen so you can read the result.'
          : mode === 'professor'
          ? 'Standard I/O output stream written to stdout terminal buffer.'
          : 'Printed result to terminal console.';
      why = 'Printing allows students and developers to inspect program outputs visually.';
    } else {
      category = 'assignment';
      title = `Executing ${codeLine}`;
      story =
        mode === 'beginner'
          ? summary || `The computer evaluates line ${step.line} and moves to the next instruction.`
          : mode === 'professor'
          ? `Statement on line ${step.line} processed by interpreter.`
          : summary || `Executed statement on line ${step.line}.`;
      why = 'Programs execute line-by-line in sequential order unless a jump or loop occurs.';
    }

    // 3. Generate Next Step Preview
    let nextStepPreview = 'End of execution reached.';
    if (nextStep) {
      if (nextStep.stack && step.stack && nextStep.stack.length > step.stack.length) {
        const nextFrame = nextStep.stack[nextStep.stack.length - 1];
        nextStepPreview = `The program will now enter function ${nextFrame?.name}().`;
      } else if (nextStep.line) {
        nextStepPreview = `Next, the computer will move to execute line ${nextStep.line}.`;
      }
    }

    return {
      title,
      story,
      why,
      changedVariables,
      nextStepPreview,
      stepCategory: category,
    };
  }
}
