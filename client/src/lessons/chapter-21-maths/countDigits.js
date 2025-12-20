import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const countDigitsLesson = {
  id: 'count-digits',
  chapterId: 21,
  title: "Count Digits",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "How Long?",
        paragraphs: [
          "Shanvi, count the number of digits in an integer N.",
          "Example: 12345 -> 5.",
          "Example: 7 -> 1."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "N = 0. Digits?",
        options: [
          { text: "0", feedback: "It's a number." },
          { text: "1", feedback: "Correct! The digit is '0'." },
          { text: "Undefined", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "String Conversion.",
        issues: [
          "String.valueOf(N).length().",
          "Simple.",
          "But uses O(D) space for the string.",
          "Can we do it mathematically?"
        ],
        codeSnippet: `
return String.valueOf(n).length();
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Repeated Division.",
        paragraphs: [
          "Divide N by 10 repeatedly until it becomes 0.",
          "Count how many divisions it takes.",
          "Example: 123 / 10 = 12 (1). 12 / 10 = 1 (2). 1 / 10 = 0 (3).",
          "Special case: N=0 is 1 digit."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Handle N=0 explicitly.",
          "Take absolute value.",
          "While n > 0: n /= 10, count++.",
          "Return count."
        ],
        codeLines: [
          "public int countDigits(int n) {",
          "    if (n == 0) return 1;",
          "    n = Math.abs(n);",
          "    int count = 0;",
          "    while (n > 0) {",
          "        n = n / 10;",
          "        count++;",
          "    }",
          "    return count;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "N=123.",
        frames: [
          { array: [123], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Count=0." },
          { array: [12], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "123/10 = 12. Count=1." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "12/10 = 1. Count=2." },
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "1/10 = 0. Count=3. Stop." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "It counts.",
        takeaways: [
          "Logarithmic time complexity: O(log10 N).",
          "Space: O(1).",
          "Alternative: `(int)Math.log10(n) + 1`."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Evenly Dividing Digits?",
        task: "Count digits that divide N?",
        solution: "Extract digit, check n % digit == 0.",
        explanation: "Standard problem."
      }
    }
  ]
};
