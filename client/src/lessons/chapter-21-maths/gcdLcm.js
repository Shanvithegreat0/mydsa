import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const gcdLcmLesson = {
  id: 'gcd-lcm',
  chapterId: 21,
  title: "GCD and LCM",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Common Ground",
        paragraphs: [
          "Shanvi, find the Greatest Common Divisor (GCD) of two numbers.",
          "Example: GCD(12, 18) = 6.",
          "Also find Least Common Multiple (LCM).",
          "LCM(12, 18) = 36."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "GCD(7, 13)?",
        options: [
          { text: "7", feedback: "13 is prime." },
          { text: "1", feedback: "Correct! Coprime." },
          { text: "91", feedback: "That's LCM." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Loop down.",
        issues: [
          "Start from min(a, b).",
          "Loop down to 1.",
          "First number that divides both is GCD.",
          "O(min(a, b)). Too slow for large numbers."
        ],
        codeSnippet: `
for i=min to 1: if a%i==0 && b%i==0 return i
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Euclidean Algorithm.",
        paragraphs: [
          "GCD(a, b) = GCD(b, a % b).",
          "Repeat until b becomes 0.",
          "Then a is the GCD.",
          "LCM(a, b) = (a * b) / GCD(a, b)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Recursive GCD function.",
          "Base case: b == 0 return a.",
          "Recursive: gcd(b, a % b).",
          "LCM formula."
        ],
        codeLines: [
          "public int gcd(int a, int b) {",
          "    if (b == 0) return a;",
          "    return gcd(b, a % b);",
          "}",
          "public int lcm(int a, int b) {",
          "    if (a == 0 || b == 0) return 0;",
          "    return (a * b) / gcd(a, b);",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "GCD(48, 18).",
        frames: [
          { array: [48, 18], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "GCD(48, 18) -> GCD(18, 48%18=12)." },
          { array: [18, 12], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "GCD(18, 12) -> GCD(12, 18%12=6)." },
          { array: [12, 6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "GCD(12, 6) -> GCD(6, 12%6=0)." },
          { array: [6, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "b=0. Return 6." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Euclid's legacy.",
        takeaways: [
          "One of the oldest algorithms.",
          "Time: O(log(min(a, b))).",
          "Very fast."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Extended Euclidean?",
        task: "Find x, y such that ax + by = gcd(a, b)?",
        solution: "Used in modular inverse.",
        explanation: "Advanced number theory."
      }
    }
  ]
};
