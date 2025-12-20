import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const powerOfTwoLesson = {
  id: 'power-of-two',
  chapterId: 20,
  title: "Power of Two",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Binary Solo",
        paragraphs: [
          "Shanvi, check if a number is a power of two.",
          "1, 2, 4, 8, 16, 32...",
          "In binary: 1, 10, 100, 1000..."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "6 (110). Power of 2?",
        options: [
          { text: "Yes", feedback: "Has two 1s." },
          { text: "No", feedback: "Correct! Powers of 2 have exactly ONE set bit." },
          { text: "Maybe", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Loop divide.",
        issues: [
          "While n % 2 == 0, n /= 2.",
          "If n == 1 return true.",
          "O(log N)."
        ],
        codeSnippet: `
while(n%2==0) n/=2
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Bit Trick.",
        paragraphs: [
          "If N is a power of 2, it has exactly one '1'.",
          "So `n & (n - 1)` should be 0.",
          "Example: 8 (1000) & 7 (0111) = 0000.",
          "Example: 6 (110) & 5 (101) = 100 != 0."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "One Liner.",
        explanations: [
          "Check if n > 0.",
          "Check if (n & (n-1)) == 0."
        ],
        codeLines: [
          "public boolean isPowerOfTwo(int n) {",
          "    return n > 0 && (n & (n - 1)) == 0;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "N=8 vs N=6.",
        frames: [
          { array: [1, 0, 0, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "8: 1000. 7: 0111. 8&7 = 0. True." },
          { array: [0, 1, 1, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "6: 0110. 5: 0101. 6&5 = 0100 (4). False." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "The lonely one.",
        takeaways: [
          "Powers of 2 are fundamental in computing.",
          "This trick is used in memory allocation and alignment.",
          "Time: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Power of 4?",
        task: "Check if power of 4?",
        solution: "Power of 2 AND (n-1)%3 == 0. Or check bit position.",
        explanation: "1, 4, 16... (1, 100, 10000). 1s are at even positions."
      }
    }
  ]
};
