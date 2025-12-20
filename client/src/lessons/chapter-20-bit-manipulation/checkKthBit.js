import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const checkKthBitLesson = {
  id: 'check-kth-bit',
  chapterId: 20,
  title: "Check if Kth Bit is Set",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Bit Inspection",
        paragraphs: [
          "Shanvi, given a number N, check if the K-th bit (0-indexed from right) is 1 or 0.",
          "Example: N=5 (101), K=0 -> Yes (1). K=1 -> No (0)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "N=4 (100), K=2. Set?",
        options: [
          { text: "No", feedback: "Bit 2 is the third from right." },
          { text: "Yes", feedback: "Correct! 100 has 1 at index 2." },
          { text: "Maybe", feedback: "Binary is exact." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Convert to String?",
        issues: [
          "Integer.toBinaryString(N).",
          "Check char at length-1-K.",
          "O(log N) space and time.",
          "Slow."
        ],
        codeSnippet: `
str.charAt(...)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Masking.",
        paragraphs: [
          "Create a 'mask' with only the K-th bit set: `1 << K`.",
          "AND it with N: `N & (1 << K)`.",
          "If result != 0, then the bit is set."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Mask = 1 << k.",
          "If (n & mask) != 0, return true.",
          "Else return false."
        ],
        codeLines: [
          "public boolean checkKthBit(int n, int k) {",
          "    return (n & (1 << k)) != 0;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "N=5 (101), K=0.",
        frames: [
          { array: [1, 0, 1], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "N: 101." },
          { array: [0, 0, 1], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Mask (1<<0): 001." },
          { array: [0, 0, 1], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "N & Mask: 001 (!= 0). True." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Mask off.",
        takeaways: [
          "Left shift creates a mask.",
          "AND checks the mask.",
          "Time: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Right Shift?",
        task: "Can you do it by shifting N?",
        solution: "Yes. `(N >> K) & 1`.",
        explanation: "Move the bit to position 0 and check it."
      }
    }
  ]
};
