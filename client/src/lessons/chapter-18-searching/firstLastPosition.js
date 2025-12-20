import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const firstLastPositionLesson = {
  id: 'first-last-position',
  chapterId: 18,
  title: "Find First and Last Position",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Bookends",
        paragraphs: [
          "Shanvi, finding a target is easy.",
          "But what if there are duplicates?",
          "Find the START and END index of a given target value.",
          "Example: [5, 7, 7, 8, 8, 10], Target 8 -> [3, 4]."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [1, 1, 1]. Target 1.",
        options: [
          { text: "[0, 0]", feedback: "Missed others." },
          { text: "[0, 2]", feedback: "Correct! Start at 0, End at 2." },
          { text: "[1, 1]", feedback: "Middle only." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Linear Scan.",
        issues: [
          "Find first occurrence.",
          "Keep going until value changes.",
          "O(N).",
          "Requirement is O(log N)."
        ],
        codeSnippet: `
// O(N) is too slow
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Double Binary Search.",
        paragraphs: [
          "Run Binary Search to find the FIRST occurrence (Lower Bound).",
          "Run Binary Search again to find the LAST occurrence (Upper Bound).",
          "For First: If arr[mid] == target, record mid and go LEFT (try to find earlier).",
          "For Last: If arr[mid] == target, record mid and go RIGHT (try to find later)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Two Passes.",
        explanations: [
          "Helper function `findBound(isFirst)`.",
          "If isFirst: if match, res=mid, R=mid-1.",
          "If !isFirst: if match, res=mid, L=mid+1.",
          "Combine results."
        ],
        codeLines: [
          "public int[] searchRange(int[] nums, int target) {",
          "    int first = findBound(nums, target, true);",
          "    if (first == -1) return new int[]{-1, -1};",
          "    int last = findBound(nums, target, false);",
          "    return new int[]{first, last};",
          "}",
          "private int findBound(int[] nums, int target, boolean isFirst) {",
          "    int l = 0, r = nums.length - 1, res = -1;",
          "    while (l <= r) {",
          "        int mid = l + (r - l) / 2;",
          "        if (nums[mid] == target) {",
          "            res = mid;",
          "            if (isFirst) r = mid - 1;",
          "            else l = mid + 1;",
          "        } else if (nums[mid] < target) l = mid + 1;",
          "        else r = mid - 1;",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [5, 7, 7, 8, 8, 10]. Target 8.",
        frames: [
          { array: [5, 7, 7, 8, 8, 10], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "First Pass: Mid=2 (7). 7 < 8. Go Right." },
          { array: [5, 7, 7, 8, 8, 10], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "Mid=4 (8). Match! Record 4. Go Left (find first)." },
          { array: [5, 7, 7, 8, 8, 10], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Mid=3 (8). Match! Record 3. Go Left." },
          { array: [5, 7, 7, 8, 8, 10], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Found First: 3. Now run Second Pass for Last..." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Cover all bases.",
        takeaways: [
          "Binary Search is versatile.",
          "Adjusting the search space after a match is key.",
          "Time: O(log N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Count Occurrences?",
        task: "How many times does Target appear?",
        solution: "Last Index - First Index + 1.",
        explanation: "O(log N) count."
      }
    }
  ]
};
