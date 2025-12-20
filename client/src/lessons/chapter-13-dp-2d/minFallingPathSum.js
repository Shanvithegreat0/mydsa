import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const minFallingPathSumLesson = {
  id: 'min-falling-path-sum',
  chapterId: 13,
  title: "Minimum Falling Path Sum",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Falling Down",
        paragraphs: [
          "Shanvi, you have an NxN grid.",
          "Start at ANY cell in the first row.",
          "Fall down to the last row.",
          "From (row, col), you can go to (row+1, col-1), (row+1, col), or (row+1, col+1).",
          "Minimize sum."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Grid: [[2,1,3],[6,5,4],[7,8,9]]. Best start?",
        options: [
          { text: "2", feedback: "Path 2->5->8 = 15." },
          { text: "1", feedback: "Path 1->5->8 = 14. Or 1->4->8 = 13. Or 1->5->7 = 13." },
          { text: "3", feedback: "3->4->8 = 15." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Try all starts.",
        issues: [
          "For each cell in row 0, run recursion.",
          "Take global minimum.",
          "Recursion: f(i, j) = val + min(f(i+1, j-1), f(i+1, j), f(i+1, j+1)).",
          "Memoize it."
        ],
        codeSnippet: `
min(f(0,0), f(0,1), ... f(0,n-1))
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "DP Table.",
        paragraphs: [
          "dp[i][j] = min path sum to reach (i, j).",
          "To reach (i, j), we must have come from (i-1, j-1), (i-1, j), or (i-1, j+1).",
          "Take min of those 3, add current val.",
          "Handle boundary checks (first/last column)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Tabulation.",
        explanations: [
          "Copy first row to dp.",
          "Loop i from 1 to N-1.",
          "Loop j from 0 to N-1.",
          "up = dp[i-1][j].",
          "leftDiag = dp[i-1][j-1] (if j>0).",
          "rightDiag = dp[i-1][j+1] (if j<N-1).",
          "dp[i][j] = matrix[i][j] + min(up, leftDiag, rightDiag).",
          "Result: min in last row of dp."
        ],
        codeLines: [
          "public int minFallingPathSum(int[][] matrix) {",
          "    int n = matrix.length;",
          "    int[][] dp = new int[n][n];",
          "    for (int j = 0; j < n; j++) dp[0][j] = matrix[0][j];",
          "    for (int i = 1; i < n; i++) {",
          "        for (int j = 0; j < n; j++) {",
          "            int up = dp[i - 1][j];",
          "            int left = (j > 0) ? dp[i - 1][j - 1] : Integer.MAX_VALUE;",
          "            int right = (j < n - 1) ? dp[i - 1][j + 1] : Integer.MAX_VALUE;",
          "            dp[i][j] = matrix[i][j] + Math.min(up, Math.min(left, right));",
          "        }",
          "    }",
          "    int min = Integer.MAX_VALUE;",
          "    for (int x : dp[n - 1]) min = Math.min(min, x);",
          "    return min;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Grid: [[2,1,3], [6,5,4]].",
        frames: [
          { array: [2, 1, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0: [2, 1, 3]." },
          { array: [7, 6, 5], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Row 1: 6+min(2,1)=7. 5+min(2,1,3)=6. 4+min(1,3)=5." },
          { array: [5], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Min in last row: 5." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Gravity pulls you down.",
        takeaways: [
          "Similar to Triangle, but rectangular.",
          "Variable start and end points (any column).",
          "Time: O(N^2)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Space Optimization?",
        task: "O(N) space?",
        solution: "Yes, only need previous row.",
        explanation: "Standard DP optimization."
      }
    }
  ]
};
