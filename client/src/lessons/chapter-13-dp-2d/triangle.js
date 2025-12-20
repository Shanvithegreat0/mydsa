import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const triangleLesson = {
  id: 'triangle',
  chapterId: 13,
  title: "Triangle",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Pyramid Scheme",
        paragraphs: [
          "Shanvi, you have a triangle of numbers.",
          "Start at top.",
          "Move to adjacent numbers on the row below.",
          "Minimize path sum."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "   2\n  3 4\n 6 5 7\nPath?",
        options: [
          { text: "2->3->6 = 11", feedback: "Valid." },
          { text: "2->3->5 = 10", feedback: "Valid. 10 < 11." },
          { text: "2->4->5 = 11", feedback: "Valid." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Top-Down vs Bottom-Up.",
        issues: [
          "Top-Down: dp[i][j] = val + min(dp[i-1][j-1], dp[i-1][j]).",
          "Base case is top.",
          "Answer is min of last row.",
          "Bottom-Up: Start from base.",
          "dp[i][j] = val + min(dp[i+1][j], dp[i+1][j+1]).",
          "Answer is dp[0][0]. No loop needed at end!"
        ],
        codeSnippet: `
// Bottom-Up is cleaner
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Go Bottom-Up.",
        paragraphs: [
          "Start from the second to last row.",
          "For each cell, look at the two children below it.",
          "Add the smaller child to current cell.",
          "Move up.",
          "The top cell will hold the min path sum."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Bottom-Up Tabulation.",
        explanations: [
          "Initialize dp with last row of triangle.",
          "Loop i from N-2 down to 0.",
          "Loop j from 0 to i.",
          "dp[j] = triangle[i][j] + min(dp[j], dp[j+1]).",
          "Return dp[0]."
        ],
        codeLines: [
          "public int minimumTotal(List<List<Integer>> triangle) {",
          "    int n = triangle.size();",
          "    int[] dp = new int[n];",
          "    for (int j = 0; j < n; j++) {",
          "        dp[j] = triangle.get(n - 1).get(j);",
          "    }",
          "    for (int i = n - 2; i >= 0; i--) {",
          "        for (int j = 0; j <= i; j++) {",
          "            dp[j] = triangle.get(i).get(j) + Math.min(dp[j], dp[j + 1]);",
          "        }",
          "    }",
          "    return dp[0];",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Triangle: [[2], [3,4], [6,5,7]].",
        frames: [
          { array: [6, 5, 7], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Init DP with last row: [6, 5, 7]." },
          { array: [11, 10, 7], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 1: 3+min(6,5)=8? Wait. 3+5=8. 4+min(5,7)=9. DP: [8, 9, 7]." },
          { array: [11, 10, 7], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0: 2+min(8,9)=10. Result 10." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Build on a solid foundation.",
        takeaways: [
          "Bottom-Up avoids boundary checks for 'j-1' or 'j+1'.",
          "Space optimized to O(N) (1D array).",
          "Time: O(N^2)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Fixed Starting Point?",
        task: "What if you must start at a specific index in last row?",
        solution: "Then Top-Down is better, or modify Bottom-Up to set other base values to Infinity.",
        explanation: "Direction matters based on constraints."
      }
    }
  ]
};
