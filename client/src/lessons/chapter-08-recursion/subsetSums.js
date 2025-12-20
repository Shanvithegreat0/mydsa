import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const subsetSumsLesson = {
  id: 'subset-sums',
  chapterId: 8,
  title: "Subset Sums",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Power of Choice",
        paragraphs: [
          "Shanvi, imagine you have a set of coins: [1, 2, 3].",
          "For each coin, you have two choices: Pick it OR Don't pick it.",
          "We want to find the sum of every possible combination."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Set: [1, 2]. Possible sums?",
        options: [
          { text: "1, 2, 3", feedback: "Missing the empty set (0)." },
          { text: "0, 1, 2, 3", feedback: "Correct! {}, {1}, {2}, {1,2}." },
          { text: "3", feedback: "That's just the total sum." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Bit Manipulation?",
        issues: [
          "We can use binary numbers from 0 to 2^N - 1.",
          "If bit j is set, include arr[j].",
          "Works well, but Recursion is more intuitive for complex constraints."
        ],
        codeSnippet: `
for i from 0 to (1<<n):
    sum = 0
    for j from 0 to n:
        if (i & (1<<j)) sum += arr[j]
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Pick or Not Pick.",
        paragraphs: [
          "Recursive function f(index, currentSum).",
          "Base Case: If index == n, add currentSum to result list.",
          "Recursive Step:",
          "1. Pick arr[index]: f(index + 1, currentSum + arr[index]).",
          "2. Don't pick arr[index]: f(index + 1, currentSum)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Recursive Solution.",
        explanations: [
          "Helper function takes index, sum, array, and result list.",
          "Base case adds sum to list.",
          "Two recursive calls for each element.",
          "Sort result at the end if needed."
        ],
        codeLines: [
          "public void func(int ind, int sum, ArrayList<Integer> arr, int N, ArrayList<Integer> sumSubset) {",
          "    if (ind == N) {",
          "        sumSubset.add(sum);",
          "        return;",
          "    }",
          "    // Pick",
          "    func(ind + 1, sum + arr.get(ind), arr, N, sumSubset);",
          "    // Not Pick",
          "    func(ind + 1, sum, arr, N, sumSubset);",
          "}",
          "public ArrayList<Integer> subsetSums(ArrayList<Integer> arr, int N) {",
          "    ArrayList<Integer> sumSubset = new ArrayList<>();",
          "    func(0, 0, arr, N, sumSubset);",
          "    Collections.sort(sumSubset);",
          "    return sumSubset;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tree for [1, 2].",
        frames: [
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Root: Sum 0. Index 0." },
          { array: [1, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Left (Pick 1): Sum 1. Right (No 1): Sum 0." },
          { array: [3, 1, 2, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "From Sum 1: Pick 2 -> 3. No 2 -> 1. From Sum 0: Pick 2 -> 2. No 2 -> 0." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Every choice creates a new universe.",
        takeaways: [
          "Time Complexity: O(2^N).",
          "Space Complexity: O(N) (Recursion Stack).",
          "This is the foundation of Backtracking."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Subset Sum equals K?",
        task: "Check if ANY subset sums to K.",
        solution: "Same logic, but return true if sum == K. Use DP to optimize.",
        explanation: "This is the classic Subset Sum Problem (NP-Complete)."
      }
    }
  ]
};
