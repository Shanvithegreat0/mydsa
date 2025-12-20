import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const gridUniquePaths2Lesson = {
  id: 'grid-unique-paths-2',
  chapterId: 13,
  title: "Unique Paths II (Obstacles)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Roadblock!",
        paragraphs: [
          "Shanvi, same robot, same grid.",
          "But now there are obstacles (stones) in some cells.",
          "The robot cannot step on an obstacle.",
          "How many paths now?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Start -> Obstacle -> End. Paths?",
        options: [
          { text: "1", feedback: "Can't go through obstacle." },
          { text: "0", feedback: "Correct! Path is blocked." },
          { text: "Infinite", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Modify DP.",
        issues: [
          "If grid[i][j] is obstacle, ways(i, j) = 0.",
          "Else, ways(i, j) = ways(i-1, j) + ways(i, j-1).",
          "Simple tweak."
        ],
        codeSnippet: `
if (grid[i][j] == 1) dp[i][j] = 0;
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Handle Base Cases Carefully.",
        paragraphs: [
          "If Start is obstacle, return 0.",
          "If End is obstacle, return 0.",
          "When filling DP, if cell is obstacle, set dp value to 0 and continue."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Tabulation with Check.",
        explanations: [
          "Loop i, j.",
          "If obstacleGrid[i][j] == 1 -> dp[i][j] = 0.",
          "Else if i==0, j==0 -> dp[i][j] = 1.",
          "Else -> dp[i][j] = up + left.",
          "Return dp[m-1][n-1]."
        ],
        codeLines: [
          "public int uniquePathsWithObstacles(int[][] obstacleGrid) {",
          "    int m = obstacleGrid.length;",
          "    int n = obstacleGrid[0].length;",
          "    int[][] dp = new int[m][n];",
          "    for (int i = 0; i < m; i++) {",
          "        for (int j = 0; j < n; j++) {",
          "            if (obstacleGrid[i][j] == 1) dp[i][j] = 0;",
          "            else if (i == 0 && j == 0) dp[i][j] = 1;",
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
        description: "3x3 Grid. Obstacle at (1,1).",
        frames: [
          { array: [1, 1, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0: 1, 1, 1." },
          { array: [1, 0, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Row 1: (1,0)=1. (1,1) is Obstacle -> 0. (1,2)=0+1=1." },
          { array: [1, 1, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Row 2: (2,0)=1. (2,1)=1+0=1. (2,2)=1+1=2. Result: 2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Navigate around the blocks.",
        takeaways: [
          "Obstacles act as 'sinks' (0 paths flow through them).",
          "Combinatorics formula doesn't work easily here.",
          "DP is robust."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Space Optimization?",
        task: "O(N) space?",
        solution: "Yes, use a single 1D array.",
        explanation: "dp[j] = dp[j] (from top) + dp[j-1] (from left)."
      }
    }
  ]
};
