import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const searchMatrixLesson = {
  id: 'search-2d-matrix',
  chapterId: 4,
  title: "Search in a 2D Matrix",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Sorted Grid",
        paragraphs: [
          "Shanvi, imagine a library where bookshelves are rows.",
          "Each shelf is sorted left to right.",
          "AND the first book of a shelf is always 'larger' than the last book of the previous shelf.",
          "This means the entire library is effectively one long sorted line, just folded into rows."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Matrix 3x4. Target 5. How to find it?",
        options: [
          { text: "Check row by row.", feedback: "That's O(M*N). Too slow." },
          { text: "Binary Search on the whole grid.", feedback: "Correct! Treat it as a 1D array of size M*N." },
          { text: "Random guessing.", feedback: "Not an algorithm!" }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Linear Scan.",
        issues: [
          "Iterate through every cell.",
          "O(M*N) time.",
          "We are not using the 'sorted' property at all."
        ],
        codeSnippet: `
for(int i=0; i<m; i++)
    for(int j=0; j<n; j++)
        if(matrix[i][j] == target) return true;
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Flatten the matrix virtually.",
        paragraphs: [
          "Think of the matrix as an array of size M*N.",
          "Index 'mid' maps to matrix[mid / cols][mid % cols].",
          "Now we can just run standard Binary Search!"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Binary Search on 2D Matrix.",
        explanations: [
          "Low = 0, High = (m*n) - 1.",
          "Mid = (Low + High) / 2.",
          "Row = Mid / n, Col = Mid % n.",
          "Compare matrix[Row][Col] with target."
        ],
        codeLines: [
          "public boolean searchMatrix(int[][] matrix, int target) {",
          "    if (matrix.length == 0) return false;",
          "    int m = matrix.length;",
          "    int n = matrix[0].length;",
          "    int low = 0;",
          "    int high = (m * n) - 1;",
          "    ",
          "    while (low <= high) {",
          "        int mid = (low + high) / 2;",
          "        int row = mid / n;",
          "        int col = mid % n;",
          "        if (matrix[row][col] == target) return true;",
          "        else if (matrix[row][col] < target) low = mid + 1;",
          "        else high = mid - 1;",
          "    }",
          "    return false;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Virtual flattening.",
        frames: [
          { array: [1, 3, 5, 7], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0: [1, 3, 5, 7]" },
          { array: [10, 11, 16, 20], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 1: [10, 11, 16, 20]" },
          { array: [23, 30, 34, 60], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 2: [23, 30, 34, 60]. Total 12 elements." },
          { array: [1, 3, 5, 7, 10, 11, 16, 20, 23, 30, 34, 60], highlightIndex: 5, currentSum: 0, maxSum: 0, explanation: "Virtual Array. Mid index 5 is value 11." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Perspective changes everything.",
        takeaways: [
          "Coordinate mapping (mid -> row, col) is powerful.",
          "Time complexity: O(log(M*N)).",
          "Space complexity: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What if rows are sorted, but NOT strictly increasing from row to row?",
        task: "Search in Matrix II (LeetCode 240).",
        solution: "Start from Top-Right corner. If too big, go Left. If too small, go Down.",
        explanation: "This is a staircase search, O(M+N)."
      }
    }
  ]
};
