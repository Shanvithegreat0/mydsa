import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const matrixChainMultiplicationLesson = {
  id: 'matrix-chain-multiplication',
  chapterId: 27,
  title: "Matrix Chain Multiplication",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Order Matters",
        paragraphs: [
          "Shanvi, multiplying matrices (A*B)*C might be cheaper than A*(B*C).",
          "Matrix A: 10x30, B: 30x5, C: 5x60.",
          "(AB)C: 10*30*5 + 10*5*60 = 1500 + 3000 = 4500 ops.",
          "A(BC): 30*5*60 + 10*30*60 = 9000 + 18000 = 27000 ops.",
          "Huge difference!"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Why does order change cost?",
        options: [
          { text: "It doesn't.", feedback: "It does." },
          { text: "Inner dimensions cancel out differently.", feedback: "Correct! The cost is row*common*col." },
          { text: "Matrix multiplication is not associative.", feedback: "It IS associative, but cost varies." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Try All Parentheses.",
        issues: [
          "Catalan number of ways.",
          "Exponential time.",
          "Overlapping subproblems: optimal cost for A..C is needed for A..D.",
          "Perfect for DP."
        ],
        codeSnippet: `
solve(i, k) + solve(k+1, j) + cost
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Partition DP.",
        paragraphs: [
          "dp[i][j] = min cost to multiply matrices from i to j.",
          "Try every split point k between i and j.",
          "Cost = dp[i][k] + dp[k+1][j] + (dims[i-1] * dims[k] * dims[j]).",
          "Base case: dp[i][i] = 0 (one matrix)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Input dims array (size N+1 for N matrices).",
          "dp[N][N].",
          "Loop length L from 2 to N.",
          "Loop i from 1 to N-L+1.",
          "j = i + L - 1.",
          "Loop k from i to j-1.",
          "Update min."
        ],
        codeLines: [
          "public int matrixChainOrder(int[] p) {",
          "    int n = p.length - 1;",
          "    int[][] dp = new int[n + 1][n + 1];",
          "    for (int len = 2; len <= n; len++) {",
          "        for (int i = 1; i <= n - len + 1; i++) {",
          "            int j = i + len - 1;",
          "            dp[i][j] = Integer.MAX_VALUE;",
          "            for (int k = i; k < j; k++) {",
          "                int cost = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j];",
          "                if (cost < dp[i][j]) dp[i][j] = cost;",
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
        description: "3 Matrices. Dims: [10, 30, 5, 60].",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Len 2. dp[1][2] (A*B) = 10*30*5 = 1500. dp[2][3] (B*C) = 30*5*60 = 9000." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Len 3. dp[1][3] (A*B*C). Split at k=1: dp[1][1]+dp[2][3]+10*30*60 = 0+9000+18000=27000." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Split at k=2: dp[1][2]+dp[3][3]+10*5*60 = 1500+0+3000=4500. Min is 4500." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Divide and conquer.",
        takeaways: [
          "Classic Interval DP pattern.",
          "Time: O(N^3).",
          "Space: O(N^2)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Print Order?",
        task: "Output ((A(BC))D)?",
        solution: "Store the optimal k in a separate table `split[i][j]`.",
        explanation: "Reconstruct solution."
      }
    }
  ]
};
