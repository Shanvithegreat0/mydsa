import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const reversePairsLesson = {
  id: 'reverse-pairs',
  chapterId: 4,
  title: "Reverse Pairs",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Big Brother",
        paragraphs: [
          "Shanvi, we are looking for pairs (i, j) where i < j.",
          "BUT, nums[i] must be more than TWICE as big as nums[j].",
          "nums[i] > 2 * nums[j]."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Array: [10, 2, 4]. Pairs?",
        options: [
          { text: "(10, 2) and (10, 4)", feedback: "10 > 2*2 (Yes). 10 > 2*4 (Yes). Correct!" },
          { text: "(10, 2) only", feedback: "Check 10 vs 4." },
          { text: "None", feedback: "10 is pretty big." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Nested Loops.",
        issues: [
          "Check every pair.",
          "O(N^2).",
          "Will Time Limit Exceed (TLE) for N=10^5."
        ],
        codeSnippet: `
for i... for j... 
    if nums[i] > 2*nums[j] count++;
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Merge Sort Modification.",
        paragraphs: [
          "Just like 'Count Inversions', we can count during Merge Sort.",
          "Before merging two sorted halves (Left, Right), we count valid pairs.",
          "For each element in Left, how many in Right satisfy the condition?",
          "Since both are sorted, we can do this efficiently."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Merge Sort with Counting.",
        explanations: [
          "Divide array into halves.",
          "Recursively solve for Left and Right.",
          "Count pairs: For each i in Left, find j in Right.",
          "Merge the two sorted halves.",
          "Return total count."
        ],
        codeLines: [
          "public int reversePairs(int[] nums) {",
          "    return mergeSort(nums, 0, nums.length - 1);",
          "}",
          "int mergeSort(int[] nums, int low, int high) {",
          "    if (low >= high) return 0;",
          "    int mid = (low + high) / 2;",
          "    int cnt = mergeSort(nums, low, mid) + mergeSort(nums, mid + 1, high);",
          "    cnt += countPairs(nums, low, mid, high);",
          "    merge(nums, low, mid, high);",
          "    return cnt;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Counting logic.",
        frames: [
          { array: [10, 20], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Left: [10, 20]. Right: [2, 3]." },
          { array: [10, 20], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Check 10: 10 > 2*2? Yes. 10 > 2*3? Yes. Count += 2." },
          { array: [10, 20], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Check 20: 20 > 2*2? Yes. 20 > 2*3? Yes. Count += 2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Sorting unlocks speed.",
        takeaways: [
          "Modified Merge Sort is a common pattern for 'pair problems'.",
          "O(N log N) time.",
          "Be careful with integer overflow (2 * nums[j] might exceed int)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Count Inversions?",
        task: "What is the difference?",
        solution: "Inversions: nums[i] > nums[j]. Reverse Pairs: nums[i] > 2*nums[j].",
        explanation: "Same logic, just different condition."
      }
    }
  ]
};
