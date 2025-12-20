import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const bitwiseBasicsLesson = {
  id: 'bitwise-basics',
  chapterId: 20,
  title: "Bitwise Operators Basics",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Under the Hood",
        paragraphs: [
          "Shanvi, computers think in 0s and 1s.",
          "Bitwise operators work directly on these bits.",
          "AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), Right Shift (>>)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "5 (101) & 3 (011) = ?",
        options: [
          { text: "7 (111)", feedback: "That's OR." },
          { text: "1 (001)", feedback: "Correct! 1&0=0, 0&1=0, 1&1=1." },
          { text: "6 (110)", feedback: "That's XOR." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Why use them?",
        issues: [
          "They seem confusing.",
          "Why not just use + and -?",
          "Because they are extremely fast and essential for certain algorithms (flags, masks, graphics)."
        ],
        codeSnippet: `
// Fast math
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Truth Tables.",
        paragraphs: [
          "&: Both must be 1.",
          "|: At least one is 1.",
          "^: Different bits = 1 (Same bits = 0).",
          "~: Flip all bits.",
          "<<: Multiply by 2.",
          ">>: Divide by 2."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Playground.",
        explanations: [
          "Demonstrate basic ops.",
          "5 & 3 -> 1.",
          "5 | 3 -> 7.",
          "5 ^ 3 -> 6.",
          "~5 -> -6 (Two's complement)."
        ],
        codeLines: [
          "public void bitwisePlayground() {",
          "    int a = 5; // 101",
          "    int b = 3; // 011",
          "    System.out.println(a & b); // 1",
          "    System.out.println(a | b); // 7",
          "    System.out.println(a ^ b); // 6",
          "    System.out.println(~a);    // -6",
          "    System.out.println(a << 1); // 10",
          "    System.out.println(a >> 1); // 2",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "5 (101) vs 3 (011).",
        frames: [
          { array: [1, 0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "A: 101" },
          { array: [0, 1, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "B: 011" },
          { array: [0, 0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "A & B: 001 (1)" },
          { array: [1, 1, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "A | B: 111 (7)" },
          { array: [1, 1, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "A ^ B: 110 (6)" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Bits and pieces.",
        takeaways: [
          "XOR is very useful for toggling.",
          "Shifts are fast multiplication/division.",
          "Time: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Swap?",
        task: "Swap two numbers without temp var?",
        solution: "a = a^b; b = a^b; a = a^b;",
        explanation: "Classic XOR trick."
      }
    }
  ]
};
