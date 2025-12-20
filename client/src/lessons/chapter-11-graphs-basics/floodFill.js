import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const floodFillLesson = {
  id: 'flood-fill',
  chapterId: 11,
  title: "Flood Fill",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Paint Bucket",
        paragraphs: [
          "Shanvi, have you used the 'Paint Bucket' tool in Paint?",
          "You click a pixel, and it colors that pixel and all connected pixels of the same color.",
          "This is Flood Fill."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Grid: 1 1 0. Click (0,0) with Color 2. Result?",
        options: [
          { text: "2 1 0", feedback: "It should spread." },
          { text: "2 2 0", feedback: "Correct! The two 1s are connected." },
          { text: "2 2 2", feedback: "0 is a different color (boundary)." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "BFS or DFS?",
        issues: [
          "Both work!",
          "DFS is easier to write recursively.",
          "We need to change the color of the current pixel, then call for neighbors."
        ],
        codeSnippet: `
dfs(r, c, newColor)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Recursive DFS.",
        paragraphs: [
          "Save the `initialColor` of the starting pixel.",
          "If `newColor` == `initialColor`, return (nothing to do).",
          "Function dfs(r, c):",
          "  If out of bounds or color != initialColor, return.",
          "  Change color to `newColor`.",
          "  Call dfs for Up, Down, Left, Right."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Check base cases first.",
          "Update color.",
          "Recurse 4 directions.",
          "Don't forget to check if newColor is same as oldColor to avoid infinite loop."
        ],
        codeLines: [
          "public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {",
          "    int color = image[sr][sc];",
          "    if (color != newColor) dfs(image, sr, sc, color, newColor);",
          "    return image;",
          "}",
          "public void dfs(int[][] image, int r, int c, int color, int newColor) {",
          "    if (image[r][c] == color) {",
          "        image[r][c] = newColor;",
          "        if (r >= 1) dfs(image, r - 1, c, color, newColor);",
          "        if (c >= 1) dfs(image, r, c - 1, color, newColor);",
          "        if (r + 1 < image.length) dfs(image, r + 1, c, color, newColor);",
          "        if (c + 1 < image[0].length) dfs(image, r, c + 1, color, newColor);",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Filling 1s with 2.",
        frames: [
          { array: [1, 1, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Start (0,0). Color 1. Change to 2. Recurse Right." },
          { array: [2, 1, 0], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "At (0,1). Color 1. Change to 2. Recurse Right." },
          { array: [2, 2, 0], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "At (0,2). Color 0. Stop." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Coloring the world.",
        takeaways: [
          "Simple DFS application.",
          "Time: O(N*M).",
          "Space: O(N*M) recursion stack in worst case."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Boundary Fill?",
        task: "Fill only if enclosed by a boundary color.",
        solution: "Similar logic, but check boundary conditions.",
        explanation: "Used in graphics applications."
      }
    }
  ]
};
