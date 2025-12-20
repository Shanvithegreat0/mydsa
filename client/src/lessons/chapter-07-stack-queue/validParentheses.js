import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const validParenthesesLesson = {
  id: 'valid-parentheses',
  chapterId: 7,
  title: "Valid Parentheses",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Matching Brackets",
        paragraphs: [
          "Shanvi, code is full of brackets: (), {}, [].",
          "They must be closed in the correct order.",
          "([)] is wrong. ([]) is right."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Is '{[}' valid?",
        options: [
          { text: "Yes", feedback: "Missing ] and closing } too early." },
          { text: "No", feedback: "Correct. [ is not closed." },
          { text: "Maybe", feedback: "It's binary." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Count counters?",
        issues: [
          "Count ( as +1, ) as -1.",
          "Works for single type (()).",
          "Fails for multiple types: ([)] would pass counters but is invalid.",
          "We need to track the *most recent* open bracket."
        ]
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Use a Stack.",
        paragraphs: [
          "When you see an OPEN bracket, Push it.",
          "When you see a CLOSE bracket, Check the Top.",
          "Does Top match the Close? If yes, Pop. If no, Invalid.",
          "At the end, Stack must be empty."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Stack Solution.",
        explanations: [
          "Loop through string.",
          "If open, push.",
          "If close, check stack empty (fail) or peek mismatch (fail).",
          "Else pop.",
          "Return stack.isEmpty()."
        ],
        codeLines: [
          "public boolean isValid(String s) {",
          "    Stack<Character> stack = new Stack<>();",
          "    for (char c : s.toCharArray()) {",
          "        if (c == '(' || c == '{' || c == '[') {",
          "            stack.push(c);",
          "        } else {",
          "            if (stack.isEmpty()) return false;",
          "            char top = stack.pop();",
          "            if (c == ')' && top != '(') return false;",
          "            if (c == '}' && top != '{') return false;",
          "            if (c == ']' && top != '[') return false;",
          "        }",
          "    }",
          "    return stack.isEmpty();",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Checking '{[]}'.",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Push {. Stack: {." },
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Push [. Stack: {, [." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "See ]. Match with [. Pop. Stack: {." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "See }. Match with {. Pop. Stack: Empty. Valid!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Every beginning needs an end.",
        takeaways: [
          "Stack is perfect for nested structures.",
          "O(N) time, O(N) space.",
          "Common interview question."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Longest Valid Parentheses?",
        task: "Find length of longest valid substring.",
        solution: "Harder. Use stack to store INDICES, or use counters.",
        explanation: "Stack stores indices of unmatched brackets."
      }
    }
  ]
};
