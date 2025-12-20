import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const reverseIntegerLesson = {
  id: 'reverse-integer',
  chapterId: 21,
  title: "Reverse Integer",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Flip It",
        paragraphs: [
          "Shanvi, reverse the digits of a 32-bit signed integer.",
          "Example: 123 -> 321.",
          "Example: -123 -> -321.",
          "Example: 120 -> 21."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "1000000009 reversed?",
        options: [
          { text: "9000000001", feedback: "Overflows 32-bit int!" },
          { text: "0", feedback: "Correct! Return 0 on overflow." },
          { text: "Error", feedback: "Handle gracefully." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "String Reverse.",
        issues: [
          "Convert to string.",
          "Reverse string.",
          "Parse back to int.",
          "Catch NumberFormatException for overflow.",
          "Okay, but slow."
        ],
        codeSnippet: `
try { return Integer.parseInt(...) }
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Modulo and Divide.",
        paragraphs: [
          "Extract last digit: `pop = x % 10`.",
          "Remove last digit: `x /= 10`.",
          "Push to result: `rev = rev * 10 + pop`.",
          "Check for overflow BEFORE pushing."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Safe Math.",
        explanations: [
          "Loop while x != 0.",
          "Pop digit.",
          "Check if rev > MAX/10 or < MIN/10.",
          "Update rev.",
          "Return rev."
        ],
        codeLines: [
          "public int reverse(int x) {",
          "    int rev = 0;",
          "    while (x != 0) {",
          "        int pop = x % 10;",
          "        x /= 10;",
          "        if (rev > Integer.MAX_VALUE/10 || (rev == Integer.MAX_VALUE/10 && pop > 7)) return 0;",
          "        if (rev < Integer.MIN_VALUE/10 || (rev == Integer.MIN_VALUE/10 && pop < -8)) return 0;",
          "        rev = rev * 10 + pop;",
          "    }",
          "    return rev;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "X = 123.",
        frames: [
          { array: [123], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Rev=0." },
          { array: [12], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 3. Rev = 0*10 + 3 = 3." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 2. Rev = 3*10 + 2 = 32." },
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 1. Rev = 32*10 + 1 = 321." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Watch your limits.",
        takeaways: [
          "Overflow is the main challenge here.",
          "Time: O(log X).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Palindrome?",
        task: "Check if palindrome without string?",
        solution: "Reverse half the number and compare.",
        explanation: "Next lesson!"
      }
    }
  ]
};
