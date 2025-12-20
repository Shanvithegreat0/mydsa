import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const rotateMatrixLesson = {
  id: 'rotate-matrix',
  chapterId: 3,
  title: "Rotate Matrix (Image)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Turning the Table",
        paragraphs: [
          "Shanvi, imagine you have a square photo.",
          "You want to rotate it 90 degrees clockwise.",
          "Top row becomes Right column."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If you have [[1,2],[3,4]], what is it after 90 deg rotation?",
        options: [
          { text: "[[1,3],[2,4]]", feedback: "That's a transpose (flip over diagonal)." },
          { text: "[[3,1],[4,2]]", feedback: "Correct! 3 went up, 1 went right." },
          { text: "[[4,3],[2,1]]", feedback: "That's 180 degrees." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Use a new matrix.",
        issues: [
          "Create a new N*N matrix.",
          "Map old[i][j] to new[j][n-1-i].",
          "Easy, but uses O(N^2) extra space.",
          "Can we do it in-place?"
        ],
        codeSnippet: `
int[][] res = new int[n][n];
res[j][n-1-i] = matrix[i][j];
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Transpose then Reverse.",
        paragraphs: [
          "1. Transpose the matrix (swap rows and columns).",
          "2. Reverse each row.",
          "This magic combination results in a 90-degree clockwise rotation!"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Two-step in-place rotation.",
        explanations: [
          "Step 1: Transpose. Swap(i, j) with (j, i). Only iterate j > i to avoid double swapping.",
          "Step 2: Reverse each row. Swap start and end of row."
        ],
        codeLines: [
          "public void rotate(int[][] matrix) {",
          "    int n = matrix.length;",
          "    // Transpose",
          "    for (int i = 0; i < n; i++) {",
          "        for (int j = i; j < n; j++) {",
          "            int temp = matrix[i][j];",
          "            matrix[i][j] = matrix[j][i];",
          "            matrix[j][i] = temp;",
          "        }",
          "    }",
          "    // Reverse Rows",
          "    for (int i = 0; i < n; i++) {",
          "        for (int j = 0; j < n / 2; j++) {",
          "            int temp = matrix[i][j];",
          "            matrix[i][j] = matrix[i][n - 1 - j];",
          "            matrix[i][n - 1 - j] = temp;",
          "        }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Visualizing the transform.",
        frames: [
          { array: [1, 2, 3, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Original: [[1,2],[3,4]]" },
          { array: [1, 3, 2, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Transpose: [[1,3],[2,4]] (Swap 2 and 3)" },
          { array: [3, 1, 4, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Reverse Rows: [1,3]->[3,1], [2,4]->[4,2]. Result: [[3,1],[4,2]]" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Geometry is elegant.",
        takeaways: [
          "Matrix operations often decompose into simpler steps.",
          "Transpose + Reverse Row = Rotate 90 CW.",
          "Transpose + Reverse Col = Rotate 90 CCW."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Rotate Ring by Ring?",
        task: "Can you implement it by moving elements in cycles (4-way swap)?",
        solution: "Yes, swap(top, right, bottom, left) in a loop.",
        explanation: "This is also O(1) space but the code is harder to write correctly."
      }
    }
  ]
};
