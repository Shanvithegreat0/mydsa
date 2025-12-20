import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const burstBalloonsLesson = {
  id: 'burst-balloons',
  chapterId: 27,
  title: "Burst Balloons",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Pop Strategy",
        paragraphs: [
          "Shanvi, you have balloons with numbers.",
          "Bursting balloon i gives nums[i-1] * nums[i] * nums[i+1] coins.",
          "After bursting, i-1 and i+1 become adjacent.",
          "Maximize coins."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "[3, 1, 5]. Burst 1 first?",
        options: [
          { text: "Coins: 3*1*5 = 15. Left: [3, 5].", feedback: "Correct! Then burst 3 (1*3*5=15) then 5 (1*5*1=5). Total 35." },
          { text: "Coins: 1. Left: [3, 5].", feedback: "Formula is left*curr*right." },
          { text: "Bad idea.", feedback: "Maybe." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Top-Down Choice?",
        issues: [
          "If we pick the FIRST balloon to burst, the subproblems [left] and [right] become dependent (they become adjacent).",
          "This breaks DP independence.",
          "We need a different perspective."
        ],
        codeSnippet: `
// Dependencies are messy
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Reverse Thinking.",
        paragraphs: [
          "Instead of picking the FIRST to burst, pick the LAST to burst.",
          "If k is the LAST balloon in range [i, j] to burst:",
          "It will be multiplied by nums[i-1] and nums[j+1] (the boundaries).",
          "Subproblems [i, k-1] and [k+1, j] are now independent!",
          "Cost = dp[i][k-1] + dp[k+1][j] + nums[i-1]*nums[k]*nums[j+1]."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Pad array with 1 at start and end.",
          "dp[n][n].",
          "Loop length len from 1 to N.",
          "Loop i (start). j = i + len - 1.",
          "Loop k from i to j (last balloon).",
          "Calculate cost."
        ],
        codeLines: [
          "public int maxCoins(int[] nums) {",
          "    int n = nums.length;",
          "    int[] arr = new int[n + 2];",
          "    arr[0] = arr[n + 1] = 1;",
          "    for(int i=0; i<n; i++) arr[i+1] = nums[i];",
          "    int[][] dp = new int[n + 2][n + 2];",
          "    for (int len = 1; len <= n; len++) {",
          "        for (int i = 1; i <= n - len + 1; i++) {",
          "            int j = i + len - 1;",
          "            for (int k = i; k <= j; k++) {",
          "                dp[i][j] = Math.max(dp[i][j], ",
          "                    dp[i][k - 1] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j + 1]);",
          "            }",
          "        }",
          "    }",
          "    return dp[1][n];",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [3, 1, 5]. Padded: [1, 3, 1, 5, 1].",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Len 1. dp[1][1] (3) = 1*3*1 = 3? No, boundaries are 1 and 1. Wait. Boundaries are arr[i-1] and arr[j+1]." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "dp[1][1] (burst 3 last in range [1,1]): 1*3*1 = 3. dp[2][2] (1): 3*1*5=15. dp[3][3] (5): 1*5*1=5." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Full range [1, 3]. Try k=1 (3 last): dp[2][3] + 1*3*1. Try k=2 (1 last): dp[1][1] + dp[3][3] + 1*1*1. Try k=3 (5 last)..." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Last one standing.",
        takeaways: [
          "Choosing the last element simplifies boundaries.",
          "Time: O(N^3).",
          "Space: O(N^2)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Minimum Cost?",
        task: "Min cost to merge stones?",
        solution: "Similar interval DP. dp[i][j] = min(dp[i][k] + dp[k+1][j]) + sum(i..j).",
        explanation: "Merge Stones problem."
      }
    }
  ]
};
