import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const ratInMazeLesson = {
  id: 'rat-in-maze',
  chapterId: 25,
  title: "Rat in a Maze",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Find the Cheese",
        paragraphs: [
          "Shanvi, a rat starts at (0, 0) and wants to go to (N-1, N-1).",
          "Grid has 0 (blocked) and 1 (open).",
          "Rat can move U, D, L, R.",
          "Find all paths."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Can we visit the same cell twice in a path?",
        options: [
          { text: "Yes", feedback: "Infinite loop!" },
          { text: "No", feedback: "Correct! Mark visited." },
          { text: "Only if stuck", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Random Walk.",
        issues: [
          "Just move randomly.",
          "Might never reach destination.",
          "Might cycle forever.",
          "We need systematic search."
        ],
        codeSnippet: `
move(random)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "DFS with Backtracking.",
        paragraphs: [
          "Start at (0,0).",
          "Mark current cell as visited.",
          "Try moving D, L, R, U.",
          "If valid move, recurse.",
          "After returning from recursion, unmark current cell (Backtrack) to allow other paths to use it."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "solve(i, j, path).",
          "Base case: reached (N-1, N-1). Add path.",
          "Mark visited[i][j] = 1.",
          "Try 4 directions.",
          "Recurse.",
          "Mark visited[i][j] = 0 (Backtrack)."
        ],
        codeLines: [
          "public void solve(int i, int j, int[][] m, int n, String path, ArrayList<String> res, int[][] vis) {",
          "    if (i == n - 1 && j == n - 1) {",
          "        res.add(path); return;",
          "    }",
          "    vis[i][j] = 1;",
          "    // Down",
          "    if (isValid(i + 1, j, m, n, vis)) solve(i + 1, j, m, n, path + 'D', res, vis);",
          "    // Left, Right, Up...",
          "    vis[i][j] = 0;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "2x2 Maze.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "At (0,0). Try D." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "At (1,0). Try R." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "At (1,1). Reached! Path 'DR'." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Backtrack to (0,0). Try R..." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Maze runner.",
        takeaways: [
          "String concatenation tracks the path.",
          "Visited array prevents cycles.",
          "Time: O(4^(N^2))."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Shortest Path?",
        task: "Find shortest path?",
        solution: "Use BFS instead of DFS.",
        explanation: "BFS guarantees shortest path in unweighted graph."
      }
    }
  ]
};
