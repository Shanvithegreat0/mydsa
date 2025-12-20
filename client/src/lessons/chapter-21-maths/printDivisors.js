import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const printDivisorsLesson = {
  id: 'print-divisors',
  chapterId: 21,
  title: "Print All Divisors",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Factors",
        paragraphs: [
          "Shanvi, print all numbers that divide N evenly.",
          "Example: 36 -> 1, 2, 3, 4, 6, 9, 12, 18, 36."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Divisors of 7?",
        options: [
          { text: "1, 7", feedback: "Correct! It's prime." },
          { text: "1, 2, 3", feedback: "No." },
          { text: "7", feedback: "Missing 1." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Loop to N.",
        issues: [
          "Loop i from 1 to N.",
          "If n % i == 0, print i.",
          "O(N).",
          "Slow if N is 10^9."
        ],
        codeSnippet: `
for i=1 to n: if n%i==0 print i
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Square Root.",
        paragraphs: [
          "Divisors come in pairs.",
          "If i divides N, then N/i also divides N.",
          "Example: 36. 4 divides 36 -> 36/4 = 9 also divides 36.",
          "We only need to check up to sqrt(N).",
          "If i*i == N, print i once."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Loop i from 1 to sqrt(n).",
          "If n % i == 0:",
          "  Print i.",
          "  If i != n/i, print n/i.",
          "Note: This prints out of order. Store in list and sort if needed."
        ],
        codeLines: [
          "public void printDivisors(int n) {",
          "    for (int i = 1; i * i <= n; i++) {",
          "        if (n % i == 0) {",
          "            System.out.print(i + \" \");",
          "            if (i != n / i) {",
          "                System.out.print((n / i) + \" \");",
          "            }",
          "        }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "N=36.",
        frames: [
          { array: [1, 36], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=1. 1 and 36." },
          { array: [2, 18], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=2. 2 and 18." },
          { array: [3, 12], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=3. 3 and 12." },
          { array: [4, 9], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=4. 4 and 9." },
          { array: [6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=6. 6*6=36. Print 6 once." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Root of the problem.",
        takeaways: [
          "Time: O(sqrt(N)).",
          "Much faster than O(N).",
          "Fundamental for primality testing."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Prime Factorization?",
        task: "Print prime factors?",
        solution: "Divide by 2 until odd. Then loop 3 to sqrt(n).",
        explanation: "Similar logic."
      }
    }
  ]
};
