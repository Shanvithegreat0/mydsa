import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const cherryPickup2Lesson = {
  id: 'cherry-pickup-2',
  chapterId: 13,
  title: "Cherry Pickup II (3D DP)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Double Trouble",
        paragraphs: [
          "Shanvi, TWO robots start at the top row.",
          "Robot 1 at (0, 0). Robot 2 at (0, n-1).",
          "They both move down to the last row.",
          "They collect cherries (values) from cells.",
          "If they land on the same cell, they collect cherries ONLY ONCE.",
          "Maximize total cherries."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Why 3D DP?",
        options: [
          { text: "Because grid is 2D.", feedback: "Grid is 2D, but state is more complex." },
          { text: "We need (row1, col1, row2, col2).", feedback: "Since they move together, row1 == row2." },
          { text: "State is (row, col1, col2).", feedback: "Correct! Row is same for both." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Greedy?",
        issues: [
          "Move R1 to max neighbor, Move R2 to max neighbor?",
          "No. They might compete or miss a better global path.",
          "We must move them simultaneously."
        ],
        codeSnippet: `
// Simultaneous movement
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "State Transition.",
        paragraphs: [
          "f(i, j1, j2) = Max cherries from row i to bottom.",
          "Current cherries: grid[i][j1] + grid[i][j2].",
          "If j1 == j2, add only once.",
          "Transition: Try all 9 combinations of moves (R1: -1,0,1) x (R2: -1,0,1).",
          "Take max of next state."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Memoization (Top-Down).",
        explanations: [
          "dp[r][c][c].",
          "Base case: last row.",
          "Recursive step: Loop -1 to 1 for d1, Loop -1 to 1 for d2.",
          "Check bounds.",
          "Memoize."
        ],
        codeLines: [
          "public int solve(int i, int j1, int j2, int r, int c, int[][] grid, int[][][] dp) {",
          "    if (j1 < 0 || j1 >= c || j2 < 0 || j2 >= c) return -1e8;",
          "    if (i == r - 1) {",
          "        if (j1 == j2) return grid[i][j1];",
          "        else return grid[i][j1] + grid[i][j2];",
          "    }",
          "    if (dp[i][j1][j2] != -1) return dp[i][j1][j2];",
          "    int maxi = -1e8;",
          "    for (int di = -1; di <= 1; di++) {",
          "        for (int dj = -1; dj <= 1; dj++) {",
          "            int ans;",
          "            if (j1 == j2) ans = grid[i][j1];",
          "            else ans = grid[i][j1] + grid[i][j2];",
          "            ans += solve(i + 1, j1 + di, j2 + dj, r, c, grid, dp);",
          "            maxi = Math.max(maxi, ans);",
          "        }",
          "    }",
          "    return dp[i][j1][j2] = maxi;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "2 Robots moving.",
        frames: [
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0: R1 at 0, R2 at N-1. Collect both." },
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 1: Try 9 moves. E.g., R1 down-right, R2 down-left." },
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "If they meet, count once. Else count both." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Teamwork makes the dream work.",
        takeaways: [
          "3D DP is just 2D DP with an extra dimension.",
          "Synchronized movement simplifies state (row is shared).",
          "Time: O(N * M * M * 9)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Space Optimization?",
        task: "O(M*M) space?",
        solution: "Yes, only need previous 2D plane (j1, j2) to compute current.",
        explanation: "dp[j1][j2] depends on prev[j1'][j2']."
      }
    }
  ]
};
