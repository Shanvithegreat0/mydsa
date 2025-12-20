import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const trappingRainWaterLesson = {
  id: 'trapping-rain-water',
  chapterId: 16,
  title: "Trapping Rain Water",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Puddles",
        paragraphs: [
          "Shanvi, imagine an elevation map (bar chart).",
          "When it rains, water gets trapped in the valleys.",
          "Water level at index i is determined by min(MaxLeft, MaxRight) - Height[i]."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "H: [3, 0, 2]. Water?",
        options: [
          { text: "0", feedback: "There is a valley." },
          { text: "2", feedback: "Correct! Left wall 3, Right wall 2. Min is 2. Water = 2 - 0 = 2." },
          { text: "3", feedback: "Spills over right." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Precompute Maxes.",
        issues: [
          "Create array leftMax[].",
          "Create array rightMax[].",
          "Loop i: water += min(leftMax[i], rightMax[i]) - height[i].",
          "O(N) time, O(N) space.",
          "Can we do O(1) space?"
        ],
        codeSnippet: `
min(L[i], R[i]) - h[i]
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Pointers.",
        paragraphs: [
          "Maintain leftMax and rightMax variables.",
          "L=0, R=N-1.",
          "If height[L] <= height[R]:",
          "  If height[L] >= leftMax: update leftMax.",
          "  Else: water += leftMax - height[L].",
          "  L++.",
          "Else (height[R] < height[L]):",
          "  If height[R] >= rightMax: update rightMax.",
          "  Else: water += rightMax - height[R].",
          "  R--."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "While L <= R.",
          "We process the smaller side because the water level is limited by the shorter wall.",
          "If L is smaller, we know there is a R somewhere that is taller (or equal), so L's water depends only on leftMax.",
        ],
        codeLines: [
          "public int trap(int[] height) {",
          "    int left = 0, right = height.length - 1;",
          "    int leftMax = 0, rightMax = 0;",
          "    int res = 0;",
          "    while (left <= right) {",
          "        if (height[left] <= height[right]) {",
          "            if (height[left] >= leftMax) leftMax = height[left];",
          "            else res += leftMax - height[left];",
          "            left++;",
          "        } else {",
          "            if (height[right] >= rightMax) rightMax = height[right];",
          "            else res += rightMax - height[right];",
          "            right--;",
          "        }",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "H: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].",
        frames: [
          { array: [0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "L=0, R=11. H[L] < H[R]. leftMax=0. L++." },
          { array: [1, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "L=1. H[L]=1. leftMax=1. L++." },
          { array: [0, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "L=2. H[L]=0. leftMax=1. Water += 1-0 = 1. L++." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Water finds its level.",
        takeaways: [
          "Two pointers saves O(N) space.",
          "Key insight: We only need the min of the two maxes.",
          "Time: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "3D Trapping?",
        task: "Trapping Rain Water II (Grid).",
        solution: "Use a Min-Heap (Priority Queue) to process the boundary inwards.",
        explanation: "Like Dijkstra's algorithm."
      }
    }
  ]
};
