import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const subsetSum2Lesson = {
  id: 'subset-sum-2',
  chapterId: 8,
  title: "Subset Sum II (Unique Subsets)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Deja Vu",
        paragraphs: [
          "Shanvi, what if our set has duplicates? [1, 2, 2].",
          "If we treat the two 2s as different, we get {1, 2(first)} and {1, 2(second)}.",
          "But these are the same subset: {1, 2}.",
          "We want UNIQUE subsets only."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Array: [1, 2, 2]. Unique subsets?",
        options: [
          { text: "8 subsets", feedback: "Too many duplicates." },
          { text: "6 subsets", feedback: "{}, {1}, {2}, {1,2}, {2,2}, {1,2,2}. Correct!" },
          { text: "5 subsets", feedback: "Missed one." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Use a Set.",
        issues: [
          "Generate all subsets.",
          "Store them in a HashSet to remove duplicates.",
          "Convert back to List.",
          "O(2^N * N) time. Extra space for Set.",
          "Can we avoid generating duplicates in the first place?"
        ],
        codeSnippet: `
Set<List<Integer>> set = new HashSet<>();
// generate and add...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Sort and Skip.",
        paragraphs: [
          "1. Sort the array first. [1, 2, 2].",
          "2. In the recursion, loop through elements starting from 'ind'.",
          "3. If i > ind AND arr[i] == arr[i-1], SKIP it.",
          "This ensures we only pick the 'first' instance of a duplicate number for a specific position."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Optimized Recursion.",
        explanations: [
          "Sort array.",
          "Loop i from ind to n.",
          "Skip duplicates: if (i > ind && nums[i] == nums[i-1]) continue.",
          "Add nums[i] to current list.",
          "Recurse (i + 1).",
          "Backtrack (remove last element)."
        ],
        codeLines: [
          "public void findSubsets(int ind, int[] nums, List<Integer> ds, List<List<Integer>> ansList) {",
          "    ansList.add(new ArrayList<>(ds));",
          "    for (int i = ind; i < nums.length; i++) {",
          "        if (i > ind && nums[i] == nums[i - 1]) continue;",
          "        ds.add(nums[i]);",
          "        findSubsets(i + 1, nums, ds, ansList);",
          "        ds.remove(ds.size() - 1);",
          "    }",
          "}",
          "public List<List<Integer>> subsetsWithDup(int[] nums) {",
          "    Arrays.sort(nums);",
          "    List<List<Integer>> ansList = new ArrayList<>();",
          "    findSubsets(0, nums, new ArrayList<>(), ansList);",
          "    return ansList;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Skipping the second 2.",
        frames: [
          { array: [1, 2, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Level 0: Pick 1. Recurse." },
          { array: [1, 2, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Level 1: Pick 2(first). Recurse." },
          { array: [1, 2, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Backtrack. Next loop i=2. nums[2]==nums[1]. SKIP." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Uniqueness requires order.",
        takeaways: [
          "Sorting clusters duplicates together.",
          "The condition (i > ind && nums[i] == nums[i-1]) is the magic spell.",
          "Backtracking is essential here."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Permutations with Duplicates?",
        task: "Same logic for permutations?",
        solution: "Similar, but we need a boolean[] used array to track usage.",
        explanation: "If (nums[i] == nums[i-1] && !used[i-1]) continue."
      }
    }
  ]
};
