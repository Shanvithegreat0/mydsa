import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const searchRotatedLesson = {
  id: 'search-rotated',
  chapterId: 18,
  title: "Search in Rotated Sorted Array",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Spin the Wheel",
        paragraphs: [
          "Shanvi, a sorted array was rotated at some pivot.",
          "[0, 1, 2, 4, 5, 6, 7] -> [4, 5, 6, 7, 0, 1, 2].",
          "Find a target value in O(log N)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [4, 5, 6, 7, 0, 1, 2]. Target 0.",
        options: [
          { text: "Index 4", feedback: "Correct!" },
          { text: "Index 0", feedback: "That's 4." },
          { text: "Not found", feedback: "It is there." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Linear Search.",
        issues: [
          "Just loop.",
          "O(N).",
          "But we want O(log N)."
        ],
        codeSnippet: `
// O(N)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "One Half is Sorted.",
        paragraphs: [
          "At any Mid, either the LEFT half is sorted OR the RIGHT half is sorted.",
          "Check which half is sorted.",
          "If Left is sorted: Check if target is in range [L, Mid]. If yes, go Left. Else go Right.",
          "If Right is sorted: Check if target is in range [Mid, R]. If yes, go Right. Else go Left."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Modified Binary Search.",
        explanations: [
          "L=0, R=N-1.",
          "While L <= R:",
          "  Mid = ...",
          "  If match, return.",
          "  If nums[L] <= nums[Mid] (Left Sorted):",
          "    If target >= nums[L] && target < nums[Mid]: R = Mid - 1.",
          "    Else: L = Mid + 1.",
          "  Else (Right Sorted):",
          "    If target > nums[Mid] && target <= nums[R]: L = Mid + 1.",
          "    Else: R = Mid - 1."
        ],
        codeLines: [
          "public int search(int[] nums, int target) {",
          "    int left = 0, right = nums.length - 1;",
          "    while (left <= right) {",
          "        int mid = left + (right - left) / 2;",
          "        if (nums[mid] == target) return mid;",
          "        if (nums[left] <= nums[mid]) {",
          "            if (target >= nums[left] && target < nums[mid]) right = mid - 1;",
          "            else left = mid + 1;",
          "        } else {",
          "            if (target > nums[mid] && target <= nums[right]) left = mid + 1;",
          "            else right = mid - 1;",
          "        }",
          "    }",
          "    return -1;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [4, 5, 6, 7, 0, 1, 2]. Target: 0.",
        frames: [
          { array: [4, 5, 6, 7, 0, 1, 2], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Mid=3 (7). L(4) <= Mid(7). Left Sorted. Target 0 not in [4, 7]. Go Right. L=4." },
          { array: [4, 5, 6, 7, 0, 1, 2], highlightIndex: 5, currentSum: 0, maxSum: 0, explanation: "L=4, R=6. Mid=5 (1). L(0) <= Mid(1). Left Sorted. Target 0 in [0, 1]. Go Left. R=4." },
          { array: [4, 5, 6, 7, 0, 1, 2], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "L=4, R=4. Mid=4 (0). Match!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Order in chaos.",
        takeaways: [
          "Even if rotated, local order exists.",
          "Identifying the sorted half is the trick.",
          "Time: O(log N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Duplicates?",
        task: "What if [1, 0, 1, 1, 1]?",
        solution: "If nums[L] == nums[Mid] == nums[R], we can't decide. L++, R--.",
        explanation: "Worst case becomes O(N)."
      }
    }
  ]
};
