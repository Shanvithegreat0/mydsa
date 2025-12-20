import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const minStackLesson = {
  id: 'min-stack-design',
  chapterId: 29,
  title: "Design Min Stack",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Stack with Benefits",
        paragraphs: [
          "Shanvi, design a Stack that supports push, pop, top, and getMin.",
          "All operations must be O(1)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Stack: [5, 2, 8, 1]. Min?",
        options: [
          { text: "5", feedback: "No." },
          { text: "1", feedback: "Correct!" },
          { text: "2", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Scan for Min.",
        issues: [
          "Keep a variable `min`.",
          "When pushing, update min.",
          "When popping, if we pop the min, we must scan the whole stack to find the NEW min.",
          "Pop becomes O(N)."
        ],
        codeSnippet: `
pop() { scanStack() }
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Stacks.",
        paragraphs: [
          "Use a main stack for data.",
          "Use a `minStack` to store the minimums.",
          "Push: push x to main. If x <= minStack.peek(), push x to minStack.",
          "Pop: pop main. If popped value == minStack.peek(), pop minStack."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Stack<Integer> s, minS.",
          "push(x): s.push(x). If minS empty or x <= minS.peek(), minS.push(x).",
          "pop(): val = s.pop(). If val.equals(minS.peek()), minS.pop().",
          "getMin(): minS.peek()."
        ],
        codeLines: [
          "class MinStack {",
          "    Stack<Integer> s = new Stack<>();",
          "    Stack<Integer> minS = new Stack<>();",
          "    public void push(int val) {",
          "        s.push(val);",
          "        if (minS.isEmpty() || val <= minS.peek()) {",
          "            minS.push(val);",
          "        }",
          "    }",
          "    public void pop() {",
          "        if (s.pop().equals(minS.peek())) {",
          "            minS.pop();",
          "        }",
          "    }",
          "    public int top() { return s.peek(); }",
          "    public int getMin() { return minS.peek(); }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Push 5, 2, 8, 1.",
        frames: [
          { array: [5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Push 5. MinS: [5]." },
          { array: [5, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Push 2. 2 < 5. MinS: [5, 2]." },
          { array: [5, 2, 8], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Push 8. 8 > 2. MinS: [5, 2]." },
          { array: [5, 2, 8, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Push 1. 1 < 2. MinS: [5, 2, 1]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Supporting role.",
        takeaways: [
          "Auxiliary stack tracks state history.",
          "Space: O(N).",
          "Time: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "One Stack?",
        task: "O(1) space extra?",
        solution: "Store (val - min) in stack. If negative, it means new min. Restore min on pop.",
        explanation: "Math trick. Risk of overflow."
      }
    }
  ]
};
