import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const combinationSum2Lesson = {
  id: 'combination-sum-2',
  chapterId: 8,
  title: "Combination Sum II",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Limited Supply",
        paragraphs: [
          "Shanvi, now you can only use each number ONCE.",
          "And the array might have duplicates.",
          "We want unique combinations that sum to target."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Candidates: [10, 1, 2, 7, 6, 1, 5], Target: 8.",
        options: [
          { text: "[1, 7], [1, 2, 5], [2, 6], [1, 1, 6]", feedback: "Correct! Note [1, 7] uses the first 1, [1, 1, 6] uses both." },
          { text: "[1, 7], [1, 7]", feedback: "Duplicates not allowed in result set." },
          { text: "[8]", feedback: "8 is not in the array." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Set of Lists.",
        issues: [
          "Generate all subsequences.",
          "Filter by sum == target.",
          "Store in Set to remove duplicates.",
          "Too slow (TLE)."
        ]
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Sort + Skip (Like Subset Sum II).",
        paragraphs: [
          "1. Sort the array.",
          "2. Loop from 'ind' to n.",
          "3. If i > ind and arr[i] == arr[i-1], SKIP.",
          "4. If arr[i] > target, BREAK (since array is sorted, larger elements won't work).",
          "5. Pick arr[i], Recurse(i+1, target - arr[i])."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Optimized Backtracking.",
        explanations: [
          "Sort candidates.",
          "Loop i from ind to n.",
          "Skip duplicates.",
          "Break if too big.",
          "Pick and recurse with new target."
        ],
        codeLines: [
          "public void findCombinations(int ind, int[] arr, int target, List<List<Integer>> ans, List<Integer> ds) {",
          "    if (target == 0) {",
          "        ans.add(new ArrayList<>(ds));",
          "        return;",
          "    }",
          "    for (int i = ind; i < arr.length; i++) {",
          "        if (i > ind && arr[i] == arr[i - 1]) continue;",
          "        if (arr[i] > target) break;",
          "        ds.add(arr[i]);",
          "        findCombinations(i + 1, arr, target - arr[i], ans, ds);",
          "        ds.remove(ds.size() - 1);",
          "    }",
          "}",
          "public List<List<Integer>> combinationSum2(int[] candidates, int target) {",
          "    List<List<Integer>> ans = new ArrayList<>();",
          "    Arrays.sort(candidates);",
          "    findCombinations(0, candidates, target, ans, new ArrayList<>());",
          "    return ans;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Sorted: [1, 1, 2, 5, 6, 7, 10]. Target 8.",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 1, maxSum: 0, explanation: "Pick 1 (idx 0). Rem: 7." },
          { array: [1, 1], highlightIndex: 1, currentSum: 2, maxSum: 0, explanation: "Pick 1 (idx 1). Rem: 6." },
          { array: [1, 1, 6], highlightIndex: 4, currentSum: 8, maxSum: 0, explanation: "Pick 6. Rem: 0. Found [1, 1, 6]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Constraints breed creativity.",
        takeaways: [
          "Sorting helps us break early (optimization).",
          "Sorting helps us skip duplicates (correctness).",
          "This pattern (Loop + Recursion + Backtrack) is very common."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Subset Sum vs Combination Sum?",
        task: "What is the core difference in code?",
        solution: "Subset Sum usually has 2 calls (Pick/NotPick). Combination Sum uses a Loop.",
        explanation: "Loop allows picking any of the remaining elements as the 'next' element."
      }
    }
  ]
};
