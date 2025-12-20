import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const sort012Lesson = {
  id: 'sort-012',
  chapterId: 2,
  title: "Sort Colors (0s, 1s, 2s)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Dutch National Flag",
        paragraphs: [
          "Shanvi, imagine you have a pile of balls that are Red (0), White (1), and Blue (2).",
          "You want to arrange them in order: all Reds first, then Whites, then Blues.",
          "This is a famous problem called the 'Dutch National Flag' problem."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If you just sort the array using a standard sort function, what is the time complexity?",
        options: [
          { text: "O(N)", feedback: "Standard sorts are usually O(N log N)." },
          { text: "O(N log N)", feedback: "Correct! But we can do better because we only have 3 distinct values." },
          { text: "O(1)", feedback: "Sorting always takes some time!" }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "We could just count them.",
        issues: [
          "Count all 0s, 1s, and 2s.",
          "Then overwrite the array with that many 0s, then 1s, then 2s.",
          "This works in O(2N) (two passes), which is O(N).",
          "But can we do it in ONE pass?"
        ],
        codeSnippet: `
// Two Pass Solution
int count0 = 0, count1 = 0, count2 = 0;
for (int x : arr) { ...count... }
for (int i = 0; i < count0; i++) arr[i] = 0;
// ... and so on
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Use 3 pointers: Low, Mid, High.",
        paragraphs: [
          "Low: Boundary of 0s.",
          "High: Boundary of 2s.",
          "Mid: Current element we are inspecting.",
          "If we see a 0, swap with Low and move both forward.",
          "If we see a 1, just move Mid forward.",
          "If we see a 2, swap with High and move High backward."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "The 3-Pointer Approach.",
        explanations: [
          "Initialize low=0, mid=0, high=n-1.",
          "Loop while mid <= high.",
          "Case 0: Swap(arr[low], arr[mid]), low++, mid++.",
          "Case 1: mid++.",
          "Case 2: Swap(arr[mid], arr[high]), high--."
        ],
        codeLines: [
          "public void sortColors(int[] nums) {",
          "    int low = 0, mid = 0, high = nums.length - 1;",
          "    while (mid <= high) {",
          "        if (nums[mid] == 0) {",
          "            swap(nums, low, mid);",
          "            low++; mid++;",
          "        } else if (nums[mid] == 1) {",
          "            mid++;",
          "        } else {",
          "            swap(nums, mid, high);",
          "            high--;",
          "        }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Watch the pointers move.",
        frames: [
          { array: [2, 0, 2, 1, 1, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Mid is 2. Swap with High." },
          { array: [0, 0, 2, 1, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Mid is 0. Swap with Low." },
          { array: [0, 0, 2, 1, 1, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Mid is 2. Swap with High." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Order from chaos, in a single pass.",
        takeaways: [
          "This is an in-place, one-pass O(N) algorithm.",
          "It uses constant O(1) extra space.",
          "The 'partitioning' idea is used in QuickSort too."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What if you had 4 colors?",
        task: "How would you adapt this for 0, 1, 2, 3?",
        solution: "It gets complicated. You'd need 4 pointers or just use counting sort.",
        explanation: "The 3-pointer trick is specific to 3 partitions (Left, Middle, Right)."
      }
    }
  ]
};
