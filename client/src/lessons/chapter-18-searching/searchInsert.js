import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const searchInsertLesson = {
  id: 'search-insert',
  chapterId: 18,
  title: "Search Insert Position",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Fitting In",
        paragraphs: [
          "Shanvi, given a sorted array and a target.",
          "If target is found, return index.",
          "If not, return the index where it WOULD be if inserted in order."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [1, 3, 5, 6]. Target 2.",
        options: [
          { text: "0", feedback: "Before 1?" },
          { text: "1", feedback: "Correct! Between 1 and 3." },
          { text: "2", feedback: "After 3?" }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Linear Scan.",
        issues: [
          "Loop i.",
          "If arr[i] >= target, return i.",
          "If end of loop, return N.",
          "O(N)."
        ],
        codeSnippet: `
for i: if arr[i] >= target return i
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Binary Search Lower Bound.",
        paragraphs: [
          "Standard Binary Search.",
          "If arr[mid] == target, return mid.",
          "If arr[mid] < target, L = mid + 1.",
          "If arr[mid] > target, R = mid - 1.",
          "At the end, if not found, 'L' will be at the correct insert position."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "L=0, R=N-1.",
          "While L <= R.",
          "If found, return mid.",
          "If loop finishes, return L.",
          "Why L? Because L ends up being the first index > target (or N)."
        ],
        codeLines: [
          "public int searchInsert(int[] nums, int target) {",
          "    int left = 0, right = nums.length - 1;",
          "    while (left <= right) {",
          "        int mid = left + (right - left) / 2;",
          "        if (nums[mid] == target) return mid;",
          "        else if (nums[mid] < target) left = mid + 1;",
          "        else right = mid - 1;",
          "    }",
          "    return left;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [1, 3, 5, 6]. Target: 2.",
        frames: [
          { array: [1, 3, 5, 6], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "L=0, R=3. Mid=1 (Val 3). 3 > 2. Go Left. R=0." },
          { array: [1, 3, 5, 6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "L=0, R=0. Mid=0 (Val 1). 1 < 2. Go Right. L=1." },
          { array: [1, 3, 5, 6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "L=1, R=0. Loop ends. Return L=1." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "A place for everything.",
        takeaways: [
          "This is equivalent to `std::lower_bound` in C++.",
          "Useful for maintaining sorted order.",
          "Time: O(log N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Upper Bound?",
        task: "Find first element strictly GREATER than target?",
        solution: "Similar logic, but if arr[mid] == target, move Right (L = mid + 1).",
        explanation: "Useful for range counts."
      }
    }
  ]
};
