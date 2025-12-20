import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const nQueensLesson = {
  id: 'n-queens',
  chapterId: 25,
  title: "N-Queens",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Royal Puzzle",
        paragraphs: [
          "Shanvi, place N queens on an NxN chessboard.",
          "No two queens can attack each other.",
          "They attack horizontally, vertically, and diagonally."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "4x4 Board. Can we place 4 queens?",
        options: [
          { text: "No", feedback: "It is possible." },
          { text: "Yes", feedback: "Correct! 2 solutions exist." },
          { text: "Only 1", feedback: "There are 2." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Brute Force.",
        issues: [
          "Place queens in all N^2 positions.",
          "Check validity.",
          "Combinations (N^2 choose N).",
          "Way too slow."
        ],
        codeSnippet: `
// Try every cell
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Row by Row.",
        paragraphs: [
          "We know each row must have exactly one queen.",
          "Place a queen in Row 0, Col 0.",
          "Move to Row 1. Find a safe column.",
          "If stuck, BACKTRACK to Row 0 and move that queen.",
          "Use arrays to track occupied columns and diagonals."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "solve(row).",
          "Loop col from 0 to N.",
          "isValid(row, col)?",
          "  Place queen.",
          "  solve(row + 1).",
          "  Remove queen (Backtrack).",
          "isValid checks vertical and two diagonals."
        ],
        codeLines: [
          "public List<List<String>> solveNQueens(int n) {",
          "    char[][] board = new char[n][n];",
          "    for(char[] row : board) Arrays.fill(row, '.');",
          "    List<List<String>> res = new ArrayList<>();",
          "    dfs(0, board, res);",
          "    return res;",
          "}",
          "void dfs(int col, char[][] board, List<List<String>> res) {",
          "    if(col == board.length) {",
          "        res.add(construct(board)); return;",
          "    }",
          "    for(int row = 0; row < board.length; row++) {",
          "        if(validate(board, row, col)) {",
          "            board[row][col] = 'Q';",
          "            dfs(col + 1, board, res);",
          "            board[row][col] = '.';",
          "        }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "4x4 Board.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Q at (0,0)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 1: (1,0) attacked, (1,1) attacked. Place (1,2)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 2: All attacked? Backtrack." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Move Q at (0,0) to (0,1)..." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Long live the Queen.",
        takeaways: [
          "Classic backtracking example.",
          "Time: O(N!).",
          "Space: O(N^2) for board."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Bitmasking?",
        task: "Optimize space?",
        solution: "Use 3 integers (cols, diag1, diag2) bits to track occupancy.",
        explanation: "Very fast bitwise operations."
      }
    }
  ]
};
