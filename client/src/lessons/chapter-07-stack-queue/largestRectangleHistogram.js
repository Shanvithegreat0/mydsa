import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const largestRectangleHistogramLesson = {
  id: 'largest-rectangle-histogram',
  chapterId: 7,
  title: "Largest Rectangle in Histogram",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Skyline",
        paragraphs: [
          "Shanvi, imagine a city skyline made of buildings of different heights.",
          "We want to find the largest rectangular billboard we can paint on these buildings.",
          "It can span multiple buildings, but height is limited by the shortest building in the span."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Heights: [2, 1, 5, 6, 2, 3]. Largest Rectangle?",
        options: [
          { text: "6", feedback: "Height 6, width 1. Area 6." },
          { text: "10", feedback: "Height 5 and 6. Min is 5. Width 2. Area 10. Correct!" },
          { text: "12", feedback: "No rectangle of area 12 fits." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Expand from every bar.",
        issues: [
          "For each bar 'i', expand left and right until you hit a smaller bar.",
          "Calculate width * height[i].",
          "O(N^2).",
          "Too slow."
        ],
        codeSnippet: `
for i... expand left... expand right...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Next Smaller Element (NSE).",
        paragraphs: [
          "For a bar 'i' to be the height of the rectangle, the rectangle can extend left until the 'Previous Smaller Element'.",
          "And right until the 'Next Smaller Element'.",
          "Width = (RightIndex - LeftIndex - 1).",
          "We can find NSE and PSE for all elements in O(N) using Monotonic Stack."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Single Pass Stack.",
        explanations: [
          "Use a stack to keep indices of increasing heights.",
          "When we see a smaller bar, we know the 'Right Boundary' for the top of the stack.",
          "Pop the top. Its 'Left Boundary' is the new top.",
          "Calculate area for the popped bar."
        ],
        codeLines: [
          "public int largestRectangleArea(int[] heights) {",
          "    Stack<Integer> stack = new Stack<>();",
          "    int maxArea = 0;",
          "    int n = heights.length;",
          "    for (int i = 0; i <= n; i++) {",
          "        int h = (i == n) ? 0 : heights[i];",
          "        while (!stack.isEmpty() && h < heights[stack.peek()]) {",
          "            int height = heights[stack.pop()];",
          "            int width = stack.isEmpty() ? i : i - stack.peek() - 1;",
          "            maxArea = Math.max(maxArea, height * width);",
          "        }",
          "        stack.push(i);",
          "    }",
          "    return maxArea;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Processing [2, 1, 5, 6, 2].",
        frames: [
          { array: [2, 1, 5, 6, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1(1). 1 < 2. Pop 2. Height 2. Width 1. Area 2. Push 1." },
          { array: [2, 1, 5, 6, 2], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Push 5, Push 6. Stack: [1, 5, 6]." },
          { array: [2, 1, 5, 6, 2], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "i=4(2). 2 < 6. Pop 6. Area 6*1=6. 2 < 5. Pop 5. Area 5*2=10. Max 10." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Boundaries define potential.",
        takeaways: [
          "Finding boundaries (NSE/PSE) is the key.",
          "One pass O(N) is possible by processing when we find a 'drop'.",
          "Hard problem, but standard pattern."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Maximal Rectangle in Binary Matrix?",
        task: "Given a matrix of 0s and 1s, find largest rectangle of 1s.",
        solution: "Treat each row as a histogram base. Update heights and solve Histogram problem for each row.",
        explanation: "Reduces 2D problem to 1D problem."
      }
    }
  ]
};
