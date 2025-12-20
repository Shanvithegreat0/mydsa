import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const gridUniquePathsLesson = {
  id: 'grid-unique-paths',
  chapterId: 13,
  title: "Grid Unique Paths",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Robot's Journey",
        paragraphs: [
          "Shanvi, a robot is at the top-left corner (0,0) of a grid.",
          "It wants to reach the bottom-right corner (m-1, n-1).",
          "It can only move DOWN or RIGHT.",
          "How many unique paths are there?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "2x2 Grid. Paths?",
        options: [
          { text: "1", feedback: "R-D, D-R. That's 2." },
          { text: "2", feedback: "Correct! Right-Down or Down-Right." },
          { text: "3", feedback: "Too many." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursion.",
        issues: [
          "f(i, j) = f(i+1, j) + f(i, j+1).",
          "Base case: reached target -> return 1.",
          "Out of bounds -> return 0.",
          "Overlapping subproblems! Many paths merge."
        ],
        codeSnippet: `
return f(i+1, j) + f(i, j+1);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "DP on Grid.",
        paragraphs: [
          "dp[i][j] = Number of ways to reach (i, j) from (0, 0).",
          "Or simpler: dp[i][j] = Number of ways to reach TARGET from (i, j).",
          "Let's stick to: Ways to reach (i, j) = Ways to reach (i-1, j) + Ways to reach (i, j-1)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Tabulation.",
        explanations: [
          "dp[m][n].",
          "dp[0][0] = 1.",
          "Loop i from 0 to m-1, j from 0 to n-1.",
          "If i>0, add dp[i-1][j].",
          "If j>0, add dp[i][j-1].",
          "Return dp[m-1][n-1]."
        ],
        codeLines: [
          "public int uniquePaths(int m, int n) {",
          "    int[][] dp = new int[m][n];",
          "    for (int i = 0; i < m; i++) {",
          "        for (int j = 0; j < n; j++) {",
          "            if (i == 0 && j == 0) dp[i][j] = 1;",
          "            else {",
          "                int up = 0, left = 0;",
          "                if (i > 0) up = dp[i - 1][j];",
          "                if (j > 0) left = dp[i][j - 1];",
          "                dp[i][j] = up + left;",
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
        description: "3x3 Grid.",
        frames: [
          { array: [1, 1, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0: All 1 (only 1 way: Right, Right...)." },
          { array: [1, 2, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Row 1: (1,0)=1. (1,1)=1+1=2. (1,2)=2+1=3." },
          { array: [1, 3, 6], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Row 2: (2,0)=1. (2,1)=1+2=3. (2,2)=3+3=6. Result: 6." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "All roads lead to Rome.",
        takeaways: [
          "Classic 2D DP.",
          "Time: O(M*N).",
          "Space: O(M*N) -> can optimize to O(N) (just previous row)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Combinatorics?",
        task: "Can you solve it in O(1) space?",
        solution: "Yes! (m+n-2) C (m-1).",
        explanation: "Total steps = m-1 down + n-1 right. Choose where to put downs."
      }
    }
  ]
};
