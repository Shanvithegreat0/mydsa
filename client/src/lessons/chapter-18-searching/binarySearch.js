import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const binarySearchLesson = {
  id: 'binary-search',
  chapterId: 18,
  title: "Binary Search (Fundamentals)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Dictionary Game",
        paragraphs: [
          "Shanvi, imagine finding a word in a dictionary.",
          "You don't start at page 1.",
          "You open the middle. If the word is 'Apple' and you are at 'M', you go Left.",
          "This is Binary Search."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [1, 3, 5, 7, 9]. Find 7.",
        options: [
          { text: "Check 1, 3, 5, 7", feedback: "That's Linear Search." },
          { text: "Check 5. 7 > 5. Check 7.", feedback: "Correct! Middle is 5. Go Right." },
          { text: "Check 9. 7 < 9. Check 5.", feedback: "Backwards?" }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Linear Scan.",
        issues: [
          "Loop i from 0 to N-1.",
          "If arr[i] == target, return i.",
          "O(N).",
          "If N is 1 Billion, that's 1 Billion checks."
        ],
        codeSnippet: `
for i: if arr[i] == target return i
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Divide and Conquer.",
        paragraphs: [
          "If array is SORTED, we can eliminate HALF the elements in one step.",
          "L=0, R=N-1.",
          "Mid = L + (R-L)/2.",
          "If arr[Mid] == Target: Found!",
          "If arr[Mid] < Target: Target is in Right half (L = Mid + 1).",
          "If arr[Mid] > Target: Target is in Left half (R = Mid - 1)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Standard Implementation.",
        explanations: [
          "L=0, R=N-1.",
          "While L <= R:",
          "  Calc Mid.",
          "  Check match.",
          "  Adjust L or R.",
          "Return -1 if not found."
        ],
        codeLines: [
          "public int search(int[] nums, int target) {",
          "    int left = 0, right = nums.length - 1;",
          "    while (left <= right) {",
          "        int mid = left + (right - left) / 2;",
          "        if (nums[mid] == target) return mid;",
          "        else if (nums[mid] < target) left = mid + 1;",
          "        else right = mid - 1;",
          "    }",
          "    return -1;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [1, 3, 5, 7, 9, 11]. Target: 9.",
        frames: [
          { array: [1, 3, 5, 7, 9, 11], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "L=0, R=5. Mid=2 (Val 5). 5 < 9. Go Right. L=3." },
          { array: [1, 3, 5, 7, 9, 11], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "L=3, R=5. Mid=4 (Val 9). 9 == 9. Found!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Halve your problems.",
        takeaways: [
          "Only works on SORTED arrays.",
          "Time: O(log N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Overflow Bug?",
        task: "Why `mid = L + (R-L)/2`?",
        solution: "`mid = (L+R)/2` can overflow if L+R > MAX_INT.",
        explanation: "Always use the safe formula."
      }
    }
  ]
};
