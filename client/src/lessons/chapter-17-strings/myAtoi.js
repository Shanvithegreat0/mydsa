import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const myAtoiLesson = {
  id: 'my-atoi',
  chapterId: 17,
  title: "String to Integer (atoi)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Parsing Numbers",
        paragraphs: [
          "Shanvi, implement a function that converts a string to a 32-bit signed integer.",
          "Handle spaces, signs (+/-), and overflow.",
          "Stop at first non-digit."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "'   -42 with words'. Result?",
        options: [
          { text: "Error", feedback: "Should handle gracefully." },
          { text: "-42", feedback: "Correct! Ignore leading space, read -, read 42, stop at space." },
          { text: "0", feedback: "It has a number." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Just parse?",
        issues: [
          "Overflow is the tricky part.",
          "If number > Integer.MAX_VALUE, clamp it.",
          "Need to check BEFORE adding the digit."
        ],
        codeSnippet: `
res = res * 10 + digit
// Check overflow here
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "State Machine Logic.",
        paragraphs: [
          "1. Skip whitespace.",
          "2. Check sign (+/-).",
          "3. Read digits.",
          "   - Check overflow: if res > MAX/10 or (res == MAX/10 and digit > 7).",
          "   - Update res.",
          "4. Return res * sign."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Careful Implementation.",
        explanations: [
          "Handle empty string.",
          "While ' ', i++.",
          "Check sign.",
          "While isDigit:",
          "  Check overflow against Integer.MAX_VALUE.",
          "  res = res * 10 + digit.",
          "Return result."
        ],
        codeLines: [
          "public int myAtoi(String s) {",
          "    int i = 0, n = s.length(), sign = 1, res = 0;",
          "    while (i < n && s.charAt(i) == ' ') i++;",
          "    if (i < n && (s.charAt(i) == '+' || s.charAt(i) == '-')) {",
          "        sign = (s.charAt(i) == '-') ? -1 : 1;",
          "        i++;",
          "    }",
          "    while (i < n && Character.isDigit(s.charAt(i))) {",
          "        int digit = s.charAt(i) - '0';",
          "        if (res > Integer.MAX_VALUE / 10 || (res == Integer.MAX_VALUE / 10 && digit > 7)) {",
          "            return (sign == 1) ? Integer.MAX_VALUE : Integer.MIN_VALUE;",
          "        }",
          "        res = res * 10 + digit;",
          "        i++;",
          "    }",
          "    return res * sign;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Str: ' -42'.",
        frames: [
          { array: [' '], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Skip space." },
          { array: ['-'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Sign = -1." },
          { array: ['4'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Res = 4." },
          { array: ['2'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Res = 40 + 2 = 42." },
          { array: ['42'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "End. Return 42 * -1 = -42." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Edge cases matter.",
        takeaways: [
          "Overflow check is the most important part.",
          "MAX_VALUE is 2147483647 (ends in 7).",
          "Time: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Valid Number?",
        task: "Parse floats like '1.2e-5'?",
        solution: "Much harder state machine (LeetCode 65).",
        explanation: "Requires handling E, dots, signs in various places."
      }
    }
  ]
};
