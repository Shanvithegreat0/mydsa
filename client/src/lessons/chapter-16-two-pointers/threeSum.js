import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const threeSumLesson = {
  id: 'three-sum',
  chapterId: 16,
  title: "3Sum",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Triplets",
        paragraphs: [
          "Shanvi, find all unique triplets [a, b, c] such that a + b + c = 0.",
          "Example: [-1, 0, 1, 2, -1, -4].",
          "Solution: [-1, -1, 2] and [-1, 0, 1]."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [-1, 0, 1, 2, -1, -4]. Why sort first?",
        options: [
          { text: "To look pretty", feedback: "No." },
          { text: "To use Two Pointers", feedback: "Correct! Sorting allows us to use the Two Sum logic." },
          { text: "To remove duplicates", feedback: "Sorting helps skip duplicates too." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Three Loops.",
        issues: [
          "For i, For j, For k.",
          "Check sum.",
          "Use a Set to handle duplicates.",
          "O(N^3). Too slow."
        ],
        codeSnippet: `
for i: for j: for k: if sum==0 add
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Sort + Fix One + Two Sum.",
        paragraphs: [
          "1. Sort the array.",
          "2. Loop i from 0 to N-2 (Fix the first element 'a').",
          "3. Use Two Pointers (Left, Right) to find b + c = -a.",
          "4. Skip duplicates to ensure unique triplets."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Sort array.",
          "Loop i. If i>0 and nums[i]==nums[i-1], continue (skip duplicate 'a').",
          "L = i+1, R = N-1.",
          "While L < R:",
          "  Sum = nums[i] + nums[L] + nums[R].",
          "  If 0: Add to result. Skip duplicate L and R. L++, R--.",
          "  If < 0: L++.",
          "  If > 0: R--."
        ],
        codeLines: [
          "public List<List<Integer>> threeSum(int[] nums) {",
          "    Arrays.sort(nums);",
          "    List<List<Integer>> res = new ArrayList<>();",
          "    for (int i = 0; i < nums.length - 2; i++) {",
          "        if (i > 0 && nums[i] == nums[i - 1]) continue;",
          "        int left = i + 1, right = nums.length - 1;",
          "        while (left < right) {",
          "            int sum = nums[i] + nums[left] + nums[right];",
          "            if (sum == 0) {",
          "                res.add(Arrays.asList(nums[i], nums[left], nums[right]));",
          "                while (left < right && nums[left] == nums[left + 1]) left++;",
          "                while (left < right && nums[right] == nums[right - 1]) right--;",
          "                left++; right--;",
          "            } else if (sum < 0) left++;",
          "            else right--;",
          "        }",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Sorted: [-4, -1, -1, 0, 1, 2].",
        frames: [
          { array: [-4, -1, -1, 0, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0 (-4). Target 4. L(-1) + R(2) = 1 < 4. L++." },
          { array: [-4, -1, -1, 0, 1, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1 (-1). Target 1. L(-1) + R(2) = 1. Match! Add [-1, -1, 2]. Skip dups." },
          { array: [-4, -1, -1, 0, 1, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1 (-1). L(0) + R(1) = 1. Match! Add [-1, 0, 1]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Third time's the charm.",
        takeaways: [
          "Handling duplicates is the trickiest part.",
          "Time: O(N^2).",
          "Space: O(1) (ignoring output)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "4Sum?",
        task: "Find 4 numbers summing to Target.",
        solution: "Sort. Two nested loops (i, j). Two pointers (L, R).",
        explanation: "O(N^3)."
      }
    }
  ]
};
