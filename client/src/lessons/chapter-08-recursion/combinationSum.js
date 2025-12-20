import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const combinationSumLesson = {
  id: 'combination-sum',
  chapterId: 8,
  title: "Combination Sum",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Unlimited Refills",
        paragraphs: [
          "Shanvi, you are at a soda fountain.",
          "You have cups of size [2, 3, 6, 7].",
          "You want to fill exactly 7 liters.",
          "You can use the same cup size as many times as you want."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Target 7. Cups [2, 3, 6, 7]. Combinations?",
        options: [
          { text: "[7]", feedback: "That's one." },
          { text: "[2, 2, 3] and [7]", feedback: "Correct! 2+2+3=7. 7=7." },
          { text: "[3, 3, 1]", feedback: "No cup of size 1." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Try everything.",
        issues: [
          "Since we can reuse elements, the tree can go infinitely deep if we aren't careful.",
          "We need a base case: if sum > target, stop.",
          "If sum == target, found one!"
        ],
        codeSnippet: `
// Infinite loop risk if 0 is in array
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Pick and Stay vs Not Pick and Move.",
        paragraphs: [
          "At index i:",
          "Option 1: Pick nums[i]. Subtract from target. STAY at index i (to possibly pick again).",
          "Option 2: Don't pick nums[i]. MOVE to index i+1.",
          "Base case: index == n. If target == 0, add to result."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Recursive Backtracking.",
        explanations: [
          "If index == length: check if target == 0.",
          "Pick: if nums[index] <= target, add to list, recurse(index, target - nums[index]), remove from list.",
          "Not Pick: recurse(index + 1, target)."
        ],
        codeLines: [
          "public void findCombinations(int ind, int[] arr, int target, List<List<Integer>> ans, List<Integer> ds) {",
          "    if (ind == arr.length) {",
          "        if (target == 0) ans.add(new ArrayList<>(ds));",
          "        return;",
          "    }",
          "    // Pick",
          "    if (arr[ind] <= target) {",
          "        ds.add(arr[ind]);",
          "        findCombinations(ind, arr, target - arr[ind], ans, ds);",
          "        ds.remove(ds.size() - 1);",
          "    }",
          "    // Not Pick",
          "    findCombinations(ind + 1, arr, target, ans, ds);",
          "}",
          "public List<List<Integer>> combinationSum(int[] candidates, int target) {",
          "    List<List<Integer>> ans = new ArrayList<>();",
          "    findCombinations(0, candidates, target, ans, new ArrayList<>());",
          "    return ans;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Target 7, [2, 3].",
        frames: [
          { array: [2], highlightIndex: 0, currentSum: 2, maxSum: 0, explanation: "Pick 2. Rem: 5. Stay at 0." },
          { array: [2, 2], highlightIndex: 0, currentSum: 4, maxSum: 0, explanation: "Pick 2. Rem: 3. Stay at 0." },
          { array: [2, 2, 2], highlightIndex: 0, currentSum: 6, maxSum: 0, explanation: "Pick 2. Rem: 1. Stay at 0." },
          { array: [2, 2, 2], highlightIndex: 0, currentSum: 6, maxSum: 0, explanation: "Pick 2. Rem: -1. Backtrack. Move to 1 (3). 1 < 3. Backtrack..." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Persistence pays off.",
        takeaways: [
          "The key difference is staying at the same index after picking.",
          "Time complexity is exponential but depends on Target/MinElement.",
          "Space is O(Target/MinElement) for stack."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Combination Sum III?",
        task: "Use digits 1-9, use k numbers, sum to n.",
        solution: "No reuse allowed. Fixed size k.",
        explanation: "Add condition: if ds.size() == k."
      }
    }
  ]
};
