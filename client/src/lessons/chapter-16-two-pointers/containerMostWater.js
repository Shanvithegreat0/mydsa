import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const containerMostWaterLesson = {
  id: 'container-most-water',
  chapterId: 16,
  title: "Container With Most Water",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Fill it up",
        paragraphs: [
          "Shanvi, you have vertical lines of different heights.",
          "Find two lines that, together with the x-axis, form a container.",
          "Maximize the area of water it can hold.",
          "Area = min(height1, height2) * width."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Lines: [1, 8, 6, 2, 5, 4, 8, 3, 7]. Max Area?",
        options: [
          { text: "49", feedback: "8 (index 1) and 7 (index 8). Width 7. Min(8,7)=7. 7*7=49." },
          { text: "40", feedback: "8 and 8. Width 5. 8*5=40." },
          { text: "56", feedback: "Too high." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check all pairs.",
        issues: [
          "For i, For j.",
          "Calculate Area.",
          "O(N^2).",
          "Too slow."
        ],
        codeSnippet: `
max(min(h[i], h[j]) * (j-i))
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Pointers Greedy.",
        paragraphs: [
          "Start with widest container: L=0, R=N-1.",
          "Area = min(H[L], H[R]) * (R-L).",
          "To get a bigger area, we need a taller line.",
          "The shorter line is the bottleneck.",
          "Move the pointer of the SHORTER line inwards to hope for a taller one."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "L=0, R=N-1.",
          "Loop while L < R.",
          "Calc area, update max.",
          "If H[L] < H[R]: L++.",
          "Else: R--."
        ],
        codeLines: [
          "public int maxArea(int[] height) {",
          "    int left = 0, right = height.length - 1;",
          "    int maxArea = 0;",
          "    while (left < right) {",
          "        int h = Math.min(height[left], height[right]);",
          "        int w = right - left;",
          "        maxArea = Math.max(maxArea, h * w);",
          "        if (height[left] < height[right]) left++;",
          "        else right--;",
          "    }",
          "    return maxArea;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "H: [1, 8, 6, 2, 5, 4, 8, 3, 7].",
        frames: [
          { array: [1, 7], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "L: 1, R: 7. W: 8. Area: 1*8=8. 1 < 7, L++." },
          { array: [8, 7], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "L: 8, R: 7. W: 7. Area: 7*7=49. 8 > 7, R--." },
          { array: [8, 3], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "L: 8, R: 3. W: 6. Area: 3*6=18. 8 > 3, R--." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Don't be the bottleneck.",
        takeaways: [
          "Greedy strategy works because keeping the shorter line can never give a better area as width decreases.",
          "Time: O(N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Trapping Rain Water?",
        task: "Similar but different.",
        solution: "Trapping is about local dips. Container is about global width.",
        explanation: "Next lesson!"
      }
    }
  ]
};
