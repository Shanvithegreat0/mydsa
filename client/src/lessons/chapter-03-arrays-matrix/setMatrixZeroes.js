import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const setMatrixZeroesLesson = {
  id: 'set-matrix-zeroes',
  chapterId: 3,
  title: "Set Matrix Zeroes",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Infection",
        paragraphs: [
          "Shanvi, imagine a grid of healthy people (1) and infected people (0).",
          "If a person is infected (0), they infect their entire row and entire column.",
          "We need to simulate this spread."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If we iterate and change 1s to 0s immediately, what goes wrong?",
        options: [
          { text: "Nothing, it works fine.", feedback: "Think about the next cell you visit." },
          { text: "The new 0s will cause *their* rows/cols to become 0 too.", feedback: "Exactly! The infection would spread everywhere, not just from the original 0s." },
          { text: "It takes too much memory.", feedback: "The issue is logic, not memory." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Use a temporary copy or extra arrays.",
        issues: [
          "Copying the whole matrix takes O(M*N) space.",
          "Using row/col arrays takes O(M+N) space.",
          "Can we do it in O(1) space (in-place)?"
        ],
        codeSnippet: `
boolean[] row = new boolean[m];
boolean[] col = new boolean[n];
// Mark rows and cols
// Update matrix based on row/col arrays
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Use the first row and first column as markers.",
        paragraphs: [
          "Instead of extra arrays, use matrix[i][0] and matrix[0][j] to store the status.",
          "If matrix[i][j] is 0, mark matrix[i][0] = 0 and matrix[0][j] = 0.",
          "Be careful! The first row and first column overlap at [0][0]. Handle that separately."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "In-place solution.",
        explanations: [
          "Check if first row/col has any zeros initially (flags).",
          "Iterate rest of matrix. If 0 found, mark corresponding first row/col.",
          "Iterate rest of matrix again. If marker is 0, set cell to 0.",
          "Finally, update first row/col if flags were set."
        ],
        codeLines: [
          "public void setZeroes(int[][] matrix) {",
          "    boolean fr = false, fc = false;",
          "    int m = matrix.length, n = matrix[0].length;",
          "    for(int i = 0; i < m; i++) if(matrix[i][0] == 0) fc = true;",
          "    for(int j = 0; j < n; j++) if(matrix[0][j] == 0) fr = true;",
          "    for(int i = 1; i < m; i++) {",
          "        for(int j = 1; j < n; j++) {",
          "            if(matrix[i][j] == 0) {",
          "                matrix[i][0] = 0;",
          "                matrix[0][j] = 0;",
          "            }",
          "        }",
          "    }",
          "    for(int i = 1; i < m; i++) {",
          "        for(int j = 1; j < n; j++) {",
          "            if(matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;",
          "        }",
          "    }",
          "    if(fc) for(int i = 0; i < m; i++) matrix[i][0] = 0;",
          "    if(fr) for(int j = 0; j < n; j++) matrix[0][j] = 0;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Using borders as storage.",
        frames: [
          { array: [1, 1, 1, 1, 0, 1, 1, 1, 1], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "Found 0 at center. Mark Top (0,1) and Left (1,0) as 0." },
          { array: [1, 0, 1, 0, 0, 1, 1, 1, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Markers set." },
          { array: [1, 0, 1, 0, 0, 0, 1, 0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Second pass: Fill rows/cols based on markers." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Resourcefulness is using what you already have.",
        takeaways: [
          "We saved space by reusing the input matrix.",
          "Corner cases (first row/col) are tricky.",
          "O(M*N) time, O(1) space."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Game of Life",
        task: "Look up Conway's Game of Life.",
        solution: "It also requires in-place updates based on neighbors.",
        explanation: "You can use bit manipulation or extra states (like 2 = was live, now dead) to solve it in-place."
      }
    }
  ]
};
