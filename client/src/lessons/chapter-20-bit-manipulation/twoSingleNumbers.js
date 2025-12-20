import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const twoSingleNumbersLesson = {
  id: 'two-single-numbers',
  chapterId: 20,
  title: "Two Single Numbers",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Double Trouble",
        paragraphs: [
          "Shanvi, now TWO numbers appear once. All others appear twice.",
          "Find them.",
          "Example: [1, 2, 1, 3, 2, 5] -> 3 and 5."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "XOR all elements?",
        options: [
          { text: "0", feedback: "No." },
          { text: "3 ^ 5", feedback: "Correct! Duplicates cancel. Result is A ^ B." },
          { text: "3 + 5", feedback: "XOR, not sum." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "HashMap again.",
        issues: [
          "Works, but O(N) space.",
          "We want O(1) space."
        ],
        codeSnippet: `
Map<Integer, Integer>...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Divide and Conquer.",
        paragraphs: [
          "Let XOR sum = X = A ^ B.",
          "Since A != B, X != 0.",
          "So X must have at least one set bit.",
          "Pick any set bit (e.g., rightmost).",
          "This bit is set in A but not B (or vice versa).",
          "Divide array into two groups: Group 1 has this bit set, Group 2 doesn't.",
          "XOR Group 1 -> A. XOR Group 2 -> B."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "XOR all to get X.",
          "Find rightmost set bit: mask = X & -X.",
          "A = 0, B = 0.",
          "Loop array.",
          "If (num & mask) == 0: A ^= num.",
          "Else: B ^= num.",
          "Return [A, B]."
        ],
        codeLines: [
          "public int[] singleNumber(int[] nums) {",
          "    int xor = 0;",
          "    for (int num : nums) xor ^= num;",
          "    int mask = xor & -xor;",
          "    int a = 0, b = 0;",
          "    for (int num : nums) {",
          "        if ((num & mask) == 0) a ^= num;",
          "        else b ^= num;",
          "    }",
          "    return new int[]{a, b};",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [1, 2, 1, 3, 2, 5].",
        frames: [
          { array: [1, 2, 1, 3, 2, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "XOR all = 3 ^ 5 = 011 ^ 101 = 110 (6)." },
          { array: [6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Rightmost bit of 6 (110) is 2 (010)." },
          { array: [2, 2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Group 1 (Bit 2 set): 2, 3, 2. XOR = 3." },
          { array: [1, 1, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Group 2 (Bit 2 unset): 1, 1, 5. XOR = 5." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Divide to distinguish.",
        takeaways: [
          "Using a differentiating bit allows us to separate the two unique numbers.",
          "Time: O(N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Thrice?",
        task: "All appear 3 times except one?",
        solution: "Count bits at each position % 3.",
        explanation: "Generalizes to any K."
      }
    }
  ]
};
