import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const singleNumberLesson = {
  id: 'single-number',
  chapterId: 20,
  title: "Single Number",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Odd One Out",
        paragraphs: [
          "Shanvi, every number in the array appears TWICE, except for ONE.",
          "Find that single number.",
          "Example: [4, 1, 2, 1, 2] -> 4."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "[2, 2, 1]. Single?",
        options: [
          { text: "2", feedback: "Appears twice." },
          { text: "1", feedback: "Correct!" },
          { text: "0", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "HashMap.",
        issues: [
          "Count frequency of each number.",
          "Return the one with count 1.",
          "O(N) time, but O(N) space.",
          "Can we do O(1) space?"
        ],
        codeSnippet: `
Map<Integer, Integer> counts...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "XOR Magic.",
        paragraphs: [
          "Recall: A ^ A = 0.",
          "And: A ^ 0 = A.",
          "And: XOR is associative/commutative.",
          "So: 4 ^ 1 ^ 2 ^ 1 ^ 2 = 4 ^ (1^1) ^ (2^2) = 4 ^ 0 ^ 0 = 4.",
          "Just XOR everything!"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Res = 0.",
          "Loop through array.",
          "Res ^= num.",
          "Return Res."
        ],
        codeLines: [
          "public int singleNumber(int[] nums) {",
          "    int res = 0;",
          "    for (int num : nums) {",
          "        res ^= num;",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [4, 1, 2, 1, 2].",
        frames: [
          { array: [4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "0 ^ 4 = 4." },
          { array: [4, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "4 ^ 1 = 5." },
          { array: [4, 1, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "5 ^ 2 = 7." },
          { array: [4, 1, 2, 1], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "7 ^ 1 = 6 (Note: 4^2=6)." },
          { array: [4, 1, 2, 1, 2], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "6 ^ 2 = 4. Result 4." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Cancel culture.",
        takeaways: [
          "XOR cancels out duplicates.",
          "Time: O(N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Missing Number?",
        task: "Arr 0 to N, one missing.",
        solution: "XOR all indices 0..N with all array elements. Result is missing.",
        explanation: "Same principle."
      }
    }
  ]
};
