import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const removeDuplicatesLesson = {
  id: 'remove-duplicates',
  chapterId: 16,
  title: "Remove Duplicates from Sorted Array",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Cleaning Up",
        paragraphs: [
          "Shanvi, you have a sorted array with duplicates.",
          "Remove duplicates IN-PLACE.",
          "Return the new length.",
          "Example: [1, 1, 2] -> [1, 2, _]."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]. Unique count?",
        options: [
          { text: "10", feedback: "That's total length." },
          { text: "5", feedback: "Correct! 0, 1, 2, 3, 4." },
          { text: "4", feedback: "Missed one." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Use a Set?",
        issues: [
          "Add all to Set.",
          "Copy back to array.",
          "O(N) space.",
          "We need O(1) space."
        ],
        codeSnippet: `
Set<Integer> set = new HashSet<>();
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Pointers (Slow and Fast).",
        paragraphs: [
          "Pointer i (Slow): Tracks the position of the last unique element.",
          "Pointer j (Fast): Scans the array.",
          "If nums[j] != nums[i]:",
          "  i++.",
          "  nums[i] = nums[j].",
          "Else: j++ (Skip duplicate)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "If length 0, return 0.",
          "i = 0.",
          "Loop j from 1 to N-1.",
          "If nums[j] != nums[i], increment i and copy.",
          "Return i + 1."
        ],
        codeLines: [
          "public int removeDuplicates(int[] nums) {",
          "    if (nums.length == 0) return 0;",
          "    int i = 0;",
          "    for (int j = 1; j < nums.length; j++) {",
          "        if (nums[j] != nums[i]) {",
          "            i++;",
          "            nums[i] = nums[j];",
          "        }",
          "    }",
          "    return i + 1;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [1, 1, 2].",
        frames: [
          { array: [1, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0 (1). j=1 (1). Equal. Skip." },
          { array: [1, 2, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=0. j=2 (2). Not equal. i++. nums[1] = 2. Arr: [1, 2, 2]." },
          { array: [1, 2, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "End. Return i+1 = 2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Keep it tidy.",
        takeaways: [
          "In-place modification often uses two pointers.",
          "Time: O(N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Remove Element?",
        task: "Remove all instances of Val.",
        solution: "Same logic. If nums[j] != val, copy to nums[i], i++.",
        explanation: "LeetCode 27."
      }
    }
  ]
};
