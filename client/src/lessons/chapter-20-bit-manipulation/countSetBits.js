import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const countSetBitsLesson = {
  id: 'count-set-bits',
  chapterId: 20,
  title: "Count Set Bits",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Population Count",
        paragraphs: [
          "Shanvi, count how many 1s are in the binary representation of N.",
          "Example: 5 (101) -> 2.",
          "7 (111) -> 3."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "15 (1111). Count?",
        options: [
          { text: "3", feedback: "1+2+4=7." },
          { text: "4", feedback: "Correct! 8+4+2+1=15." },
          { text: "5", feedback: "Too many." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Loop 32 times.",
        issues: [
          "Check bit 0, bit 1, ... bit 31.",
          "If set, count++.",
          "O(32) -> O(1).",
          "But can we go faster if N has few bits?"
        ],
        codeSnippet: `
for i=0 to 31: if checkKthBit(i) count++
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Brian Kernighan's Algorithm.",
        paragraphs: [
          "Magic trick: `n = n & (n - 1)`.",
          "This operation removes the RIGHTMOST set bit.",
          "Repeat until n becomes 0.",
          "Number of steps = Number of set bits."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Count = 0.",
          "While n > 0:",
          "  n = n & (n - 1).",
          "  count++.",
          "Return count."
        ],
        codeLines: [
          "public int hammingWeight(int n) {",
          "    int count = 0;",
          "    while (n != 0) {",
          "        n = n & (n - 1);",
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
        description: "N=5 (101).",
        frames: [
          { array: [1, 0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "N: 101. N-1: 100. N&(N-1): 100 (4). Count=1." },
          { array: [1, 0, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "N: 100. N-1: 011. N&(N-1): 000 (0). Count=2." },
          { array: [0, 0, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "N is 0. Stop." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Bit by bit.",
        takeaways: [
          "Brian Kernighan's is O(Set Bits).",
          "Java has `Integer.bitCount(n)`.",
          "Useful for Hamming Distance."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Lookup Table?",
        task: "O(1) for massive stream?",
        solution: "Precompute bit counts for 0-255. Split 32-bit int into 4 bytes. Sum lookups.",
        explanation: "Fastest for bulk processing."
      }
    }
  ]
};
