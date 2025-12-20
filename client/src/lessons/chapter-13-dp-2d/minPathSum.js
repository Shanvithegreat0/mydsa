import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const minPathSumLesson = {
  id: 'min-path-sum',
  chapterId: 13,
  title: "Minimum Path Sum",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Toll Roads",
        paragraphs: [
          "Shanvi, each cell has a cost.",
          "You want to go from Top-Left to Bottom-Right.",
          "Minimize the sum of costs along the path.",
          "Move only Down or Right."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Grid: [[1,3],[1,5]]. Path?",
        options: [
          { text: "1->3->5 = 9", feedback: "Can go Down first." },
          { text: "1->1->5 = 7", feedback: "Correct! 1(0,0) -> 1(1,0) -> 5(1,1)." },
          { text: "1->5 = 6", feedback: "Diagonal not allowed." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Greedy?",
        issues: [
          "At each step, pick smaller neighbor?",
          "No. A small neighbor might lead to a huge cost later.",
          "We must check all paths (DP)."
        ],
        codeSnippet: `
// Greedy fails
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Accumulate Costs.",
        paragraphs: [
          "dp[i][j] = min cost to reach (i, j).",
          "dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]).",
          "Either come from Top or Left."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Tabulation.",
        explanations: [
          "Initialize dp.",
          "Handle first row (only from left) and first col (only from top).",
          "For others: min(up, left) + current.",
          "Return dp[m-1][n-1]."
        ],
        codeLines: [
          "public int minPathSum(int[][] grid) {",
          "    int m = grid.length;",
          "    int n = grid[0].length;",
          "    int[][] dp = new int[m][n];",
          "    for (int i = 0; i < m; i++) {",
          "        for (int j = 0; j < n; j++) {",
          "            if (i == 0 && j == 0) dp[i][j] = grid[i][j];",
          "            else {",
          "                int up = Integer.MAX_VALUE, left = Integer.MAX_VALUE;",
          "                if (i > 0) up = dp[i - 1][j];",
          "                if (j > 0) left = dp[i][j - 1];",
          "                dp[i][j] = grid[i][j] + Math.min(up, left);",
          "            }",
          "        }",
          "    }",
          "    return dp[m - 1][n - 1];",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Grid: [[1, 3, 1], [1, 5, 1], [4, 2, 1]].",
        frames: [
          { array: [1, 4, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0: 1, 1+3=4, 4+1=5." },
          { array: [2, 7, 6], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Row 1: 1+1=2. 5+min(4,2)=7. 1+min(5,7)=6." },
          { array: [6, 8, 7], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Row 2: 4+2=6. 2+min(7,6)=8. 1+min(6,8)=7. Result: 7." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "The path of least resistance.",
        takeaways: [
          "Standard Min-Cost Path problem.",
          "Works for any DAG (Directed Acyclic Graph).",
          "Time: O(M*N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Max Path Sum?",
        task: "Maximize cost?",
        solution: "Just change min to max.",
        explanation: "Same logic."
      }
    }
  ]
};
