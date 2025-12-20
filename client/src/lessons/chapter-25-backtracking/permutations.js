import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const permutationsLesson = {
  id: 'permutations',
  chapterId: 25,
  title: "Permutations",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "All Possibilities",
        paragraphs: [
          "Shanvi, generate all possible orderings of an array.",
          "Example: [1, 2, 3].",
          "Result: [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "How many permutations for N items?",
        options: [
          { text: "N^2", feedback: "Too small." },
          { text: "N!", feedback: "Correct! Factorial time." },
          { text: "2^N", feedback: "That's subsets." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Nested Loops?",
        issues: [
          "For N=3, we need 3 loops.",
          "For N=10, we need 10 loops.",
          "We can't write dynamic nested loops.",
          "We need Recursion."
        ],
        codeSnippet: `
for i... for j... for k...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Backtracking Pattern.",
        paragraphs: [
          "1. Choice: Pick an unused number.",
          "2. Explore: Recurse to pick the next number.",
          "3. Backtrack: Undo the choice (mark number as unused) so it can be picked in a different branch."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "List<List<Integer>> result.",
          "Backtrack function(tempList).",
          "If tempList.size == nums.length, add copy to result.",
          "Loop i from 0 to N.",
          "If nums[i] in tempList (or use boolean array), continue.",
          "Add nums[i], recurse, remove nums[i]."
        ],
        codeLines: [
          "public List<List<Integer>> permute(int[] nums) {",
          "    List<List<Integer>> list = new ArrayList<>();",
          "    backtrack(list, new ArrayList<>(), nums);",
          "    return list;",
          "}",
          "private void backtrack(List<List<Integer>> list, List<Integer> tempList, int[] nums) {",
          "    if (tempList.size() == nums.length) {",
          "        list.add(new ArrayList<>(tempList));",
          "    } else {",
          "        for (int i = 0; i < nums.length; i++) {",
          "            if (tempList.contains(nums[i])) continue; // O(N) check",
          "            tempList.add(nums[i]);",
          "            backtrack(list, tempList, nums);",
          "            tempList.remove(tempList.size() - 1);",
          "        }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Nums: [1, 2].",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Start. Pick 1." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Recurse. Pick 2." },
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Full. Add [1,2]. Backtrack. Remove 2." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Backtrack. Remove 1. Pick 2." },
          { array: [2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Recurse. Pick 1." },
          { array: [2, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Full. Add [2,1]. Backtrack." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Try everything.",
        takeaways: [
          "Backtracking explores the state space tree.",
          "Time: O(N * N!).",
          "Space: O(N) recursion depth."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Duplicates?",
        task: "Input has duplicates [1, 1, 2]?",
        solution: "Sort first. Skip if nums[i] == nums[i-1] and !used[i-1].",
        explanation: "Avoid duplicate permutations."
      }
    }
  ]
};
