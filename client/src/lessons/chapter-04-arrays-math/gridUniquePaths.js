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
  chapterId: 4,
  title: "Grid Unique Paths",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Robot's Journey",
        paragraphs: [
          "Shanvi, a robot is at the top-left (0,0) of a grid.",
          "It wants to reach the bottom-right.",
          "It can ONLY move Right or Down.",
          "How many unique ways can it reach the destination?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "2x2 Grid. Start (0,0) to (1,1). Paths?",
        options: [
          { text: "1", feedback: "Right, Down. Is that it?" },
          { text: "2", feedback: "Right->Down OR Down->Right. Correct!" },
          { text: "3", feedback: "No diagonal moves allowed." }
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
          "This explores every path.",
          "Exponential time complexity O(2^N).",
          "Many overlapping subproblems."
        ],
        codeSnippet: `
return count(i+1, j) + count(i, j+1);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Combinatorics (Math) or DP.",
        paragraphs: [
          "Let's use Math. It's faster.",
          "To reach (m-1, n-1) from (0,0), we MUST take exactly m-1 Down steps and n-1 Right steps.",
          "Total steps = (m-1) + (n-1).",
          "We just need to choose WHICH steps are Down.",
          "Result = (m+n-2) C (m-1)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Calculating nCr efficiently.",
        explanations: [
          "Total steps N = m + n - 2.",
          "R = m - 1 (or n - 1).",
          "Calculate N C R = N * (N-1) * ... / (1 * 2 * ...).",
          "Use double or long to prevent overflow during calculation."
        ],
        codeLines: [
          "public int uniquePaths(int m, int n) {",
          "    int N = n + m - 2;",
          "    int r = m - 1;",
          "    double res = 1;",
          "    for (int i = 1; i <= r; i++) {",
          "        res = res * (N - r + i) / i;",
          "    }",
          "    return (int)res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "3x2 Grid. 2 Down, 1 Right needed? No. 2 Rows, 3 Cols.",
        frames: [
          { array: [0, 0, 0, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "m=2, n=3. Total steps = 1 Down + 2 Right = 3 steps." },
          { array: [0, 0, 0, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Paths: D-R-R, R-D-R, R-R-D. Total 3." },
          { array: [0, 0, 0, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Formula: 3 C 1 = 3! / (1! 2!) = 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Every path leads to the same destination, but the count matters.",
        takeaways: [
          "Recursion is intuitive but slow.",
          "DP is better (O(M*N)).",
          "Combinatorics is best (O(M) or O(N))."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What if there are obstacles?",
        task: "Unique Paths II.",
        solution: "Math fails here. You MUST use Dynamic Programming.",
        explanation: "If a cell is blocked, ways(i,j) = 0. Otherwise sum of top and left."
      }
    }
  ]
};
