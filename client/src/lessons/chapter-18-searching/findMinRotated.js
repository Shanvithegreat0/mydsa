import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const findMinRotatedLesson = {
  id: 'find-min-rotated',
  chapterId: 18,
  title: "Find Minimum in Rotated Sorted Array",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Drop",
        paragraphs: [
          "Shanvi, back to the rotated array: [4, 5, 6, 7, 0, 1, 2].",
          "Find the MINIMUM element (0).",
          "This is the pivot point."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [3, 4, 5, 1, 2]. Min?",
        options: [
          { text: "3", feedback: "Start." },
          { text: "1", feedback: "Correct!" },
          { text: "2", feedback: "End." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Linear.",
        issues: [
          "Loop and find min.",
          "O(N).",
          "We want O(log N)."
        ],
        codeSnippet: `
Math.min(...)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Compare with Right.",
        paragraphs: [
          "If nums[mid] > nums[right]:",
          "  The minimum MUST be to the right (because mid is part of the left sorted portion).",
          "  L = mid + 1.",
          "Else (nums[mid] <= nums[right]):",
          "  The minimum is at mid or to the left.",
          "  R = mid."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "L=0, R=N-1.",
          "While L < R.",
          "If nums[mid] > nums[right]: L = mid + 1.",
          "Else: R = mid.",
          "Return nums[L]."
        ],
        codeLines: [
          "public int findMin(int[] nums) {",
          "    int left = 0, right = nums.length - 1;",
          "    while (left < right) {",
          "        int mid = left + (right - left) / 2;",
          "        if (nums[mid] > nums[right]) left = mid + 1;",
          "        else right = mid;",
          "    }",
          "    return nums[left];",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [4, 5, 6, 7, 0, 1, 2].",
        frames: [
          { array: [4, 5, 6, 7, 0, 1, 2], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "L=0, R=6. Mid=3 (7). 7 > 2 (Right). Min is Right. L=4." },
          { array: [4, 5, 6, 7, 0, 1, 2], highlightIndex: 5, currentSum: 0, maxSum: 0, explanation: "L=4, R=6. Mid=5 (1). 1 < 2. Min is Left/Mid. R=5." },
          { array: [4, 5, 6, 7, 0, 1, 2], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "L=4, R=5. Mid=4 (0). 0 < 1. R=4." },
          { array: [4, 5, 6, 7, 0, 1, 2], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "L=4, R=4. Return nums[4]=0." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Bottom of the barrel.",
        takeaways: [
          "Comparing with Right is safer than Left for finding minimum.",
          "Time: O(log N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Duplicates?",
        task: "[2, 2, 2, 0, 1, 2]?",
        solution: "If nums[mid] == nums[right], R--.",
        explanation: "Degrades to O(N)."
      }
    }
  ]
};
