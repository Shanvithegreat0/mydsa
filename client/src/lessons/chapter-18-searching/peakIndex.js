import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const peakIndexLesson = {
  id: 'peak-index',
  chapterId: 18,
  title: "Peak Index in a Mountain Array",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "King of the Hill",
        paragraphs: [
          "Shanvi, a mountain array increases then decreases.",
          "Example: [0, 1, 5, 2]. Peak is 5 (Index 2).",
          "Find the index of the peak."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [0, 2, 1, 0]. Peak?",
        options: [
          { text: "0", feedback: "Start." },
          { text: "2", feedback: "Correct! Value 2 at index 1." },
          { text: "1", feedback: "Value 1." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Linear Scan.",
        issues: [
          "Loop i from 0 to N-2.",
          "If arr[i] > arr[i+1], then i is peak.",
          "O(N).",
          "Can we do O(log N)?"
        ],
        codeSnippet: `
if arr[i] > arr[i+1] return i
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Climbing the Mountain.",
        paragraphs: [
          "Binary Search.",
          "If arr[mid] < arr[mid+1]: We are on the rising slope. Peak is to the RIGHT.",
          "If arr[mid] > arr[mid+1]: We are on the falling slope (or at peak). Peak is to the LEFT (or is mid).",
          "So, if rising: L = mid + 1.",
          "Else: R = mid."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "L=0, R=N-1.",
          "While L < R (not <= because we compare mid and mid+1).",
          "Mid = ...",
          "If arr[mid] < arr[mid+1]: L = mid + 1.",
          "Else: R = mid.",
          "Return L."
        ],
        codeLines: [
          "public int peakIndexInMountainArray(int[] arr) {",
          "    int left = 0, right = arr.length - 1;",
          "    while (left < right) {",
          "        int mid = left + (right - left) / 2;",
          "        if (arr[mid] < arr[mid + 1]) left = mid + 1;",
          "        else right = mid;",
          "    }",
          "    return left;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [0, 1, 5, 2].",
        frames: [
          { array: [0, 1, 5, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "L=0, R=3. Mid=1 (1). 1 < 5. Rising. L=2." },
          { array: [0, 1, 5, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "L=2, R=3. Mid=2 (5). 5 > 2. Falling. R=2." },
          { array: [0, 1, 5, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "L=2, R=2. Loop ends. Return 2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "The view from the top.",
        takeaways: [
          "Binary search works on 'bitonic' properties, not just sorted arrays.",
          "Time: O(log N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Find in Mountain?",
        task: "Find Target in Mountain Array?",
        solution: "Find Peak. Then Binary Search Left (asc) and Right (desc).",
        explanation: "Three binary searches."
      }
    }
  ]
};
