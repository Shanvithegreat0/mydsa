import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const houseRobber2Lesson = {
  id: 'house-robber-2',
  chapterId: 12,
  title: "House Robber II (Circular)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Circular Neighborhood",
        paragraphs: [
          "Shanvi, the houses are now arranged in a circle.",
          "This means House 1 and House N are neighbors.",
          "If you rob House 1, you CANNOT rob House N.",
          "If you rob House N, you CANNOT rob House 1."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Houses: [2, 3, 2]. Max loot?",
        options: [
          { text: "4", feedback: "2 + 2? No, first and last are connected." },
          { text: "3", feedback: "Correct! Either pick 3 (middle), or one of the 2s." },
          { text: "7", feedback: "Impossible." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Break the circle.",
        issues: [
          "The circle constraint just means we can't have BOTH index 0 and index N-1.",
          "So, we have two scenarios:",
          "1. Exclude Last: Rob from 0 to N-2.",
          "2. Exclude First: Rob from 1 to N-1.",
          "Take the maximum of these two cases."
        ],
        codeSnippet: `
max(rob(0, n-2), rob(1, n-1))
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Reuse Logic.",
        paragraphs: [
          "We already solved the linear version (House Robber I).",
          "Just call that function twice with different subarrays.",
          "Edge case: If only 1 house, rob it."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Two Passes.",
        explanations: [
          "Helper function solveLinear(arr).",
          "Case 1: arr without last element.",
          "Case 2: arr without first element.",
          "Return max."
        ],
        codeLines: [
          "public int rob(int[] nums) {",
          "    if (nums.length == 1) return nums[0];",
          "    return Math.max(solve(nums, 0, nums.length - 2),",
          "                    solve(nums, 1, nums.length - 1));",
          "}",
          "private int solve(int[] nums, int start, int end) {",
          "    int prev = 0, prev2 = 0;",
          "    for (int i = start; i <= end; i++) {",
          "        int pick = nums[i] + prev2;",
          "        int notPick = prev;",
          "        int curr = Math.max(pick, notPick);",
          "        prev2 = prev;",
          "        prev = curr;",
          "    }",
          "    return prev;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Houses: [2, 3, 2].",
        frames: [
          { array: [2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Case 1: [2, 3]. Max is 3." },
          { array: [3, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Case 2: [3, 2]. Max is 3." },
          { array: [2, 3, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Result: Max(3, 3) = 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Circles are just lines that meet.",
        takeaways: [
          "Breaking a circular problem into linear subproblems is a common technique.",
          "Time: O(N) + O(N) = O(N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Paint House?",
        task: "3 colors. Adjacent houses can't have same color.",
        solution: "DP with state [index][color].",
        explanation: "dp[i][0] = cost[i][0] + min(dp[i-1][1], dp[i-1][2])."
      }
    }
  ]
};
