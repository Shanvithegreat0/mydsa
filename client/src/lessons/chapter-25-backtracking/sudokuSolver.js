import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const sudokuSolverLesson = {
  id: 'sudoku-solver',
  chapterId: 25,
  title: "Sudoku Solver",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Number Place",
        paragraphs: [
          "Shanvi, fill a 9x9 grid with digits 1-9.",
          "Each row, column, and 3x3 subgrid must contain 1-9 exactly once.",
          "Some cells are pre-filled."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Can we put '5' in a cell if '5' is already in the row?",
        options: [
          { text: "Yes", feedback: "No duplicates allowed." },
          { text: "No", feedback: "Correct!" },
          { text: "Only if column allows", feedback: "Row constraint blocks it." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Random Guessing?",
        issues: [
          "Try random numbers.",
          "Check if valid.",
          "If not, retry.",
          "Will take forever."
        ],
        codeSnippet: `
while(!solved) tryRandom()
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Backtracking.",
        paragraphs: [
          "Find an empty cell.",
          "Try digits 1-9.",
          "If a digit is valid (check row, col, 3x3 box):",
          "  Place it.",
          "  Recurse to solve the rest.",
          "  If recursion returns true, we are done.",
          "  If not, reset cell to empty (Backtrack) and try next digit."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "solve(board).",
          "Loop i, j to find empty ('.').",
          "Loop c from '1' to '9'.",
          "isValid(board, i, j, c)?",
          "  board[i][j] = c.",
          "  if solve(board) return true.",
          "  board[i][j] = '.' (Backtrack).",
          "Return false if no digit works."
        ],
        codeLines: [
          "public boolean solveSudoku(char[][] board) {",
          "    for(int i=0; i<9; i++){",
          "        for(int j=0; j<9; j++){",
          "            if(board[i][j] == '.'){",
          "                for(char c='1'; c<='9'; c++){",
          "                    if(isValid(board, i, j, c)){",
          "                        board[i][j] = c;",
          "                        if(solveSudoku(board)) return true;",
          "                        board[i][j] = '.';",
          "                    }",
          "                }",
          "                return false;",
          "            }",
          "        }",
          "    }",
          "    return true;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Solving...",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Empty cell (0, 2). Try 1. Invalid (in row)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Try 2. Valid. Place 2. Recurse." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Next empty. Try 1... If stuck later, backtrack to (0, 2) and try 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Logic prevails.",
        takeaways: [
          "NP-Complete problem.",
          "Backtracking is the standard solution.",
          "Optimizations: Constraint Propagation (Dancing Links)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Valid Sudoku?",
        task: "Just check if a board is valid?",
        solution: "One pass. Use Sets for rows, cols, boxes.",
        explanation: "Simpler than solving."
      }
    }
  ]
};
