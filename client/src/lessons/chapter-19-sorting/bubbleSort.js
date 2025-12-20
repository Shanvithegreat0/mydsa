import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const bubbleSortLesson = {
  id: 'bubble-sort',
  chapterId: 19,
  title: "Bubble Sort",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Bubbling Up",
        paragraphs: [
          "Shanvi, imagine bubbles in water.",
          "Large bubbles rise to the top.",
          "In Bubble Sort, we repeatedly swap adjacent elements if they are in the wrong order.",
          "The largest element 'bubbles' to the end in each pass."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [3, 1, 2]. Pass 1?",
        options: [
          { text: "[1, 2, 3]", feedback: "Correct! 3 swaps with 1, then 3 swaps with 2." },
          { text: "[3, 1, 2]", feedback: "No change?" },
          { text: "[1, 3, 2]", feedback: "Incomplete." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Standard Loop.",
        issues: [
          "Loop i from 0 to N-1.",
          "Loop j from 0 to N-1-i.",
          "If arr[j] > arr[j+1], swap.",
          "O(N^2)."
        ],
        codeSnippet: `
for i: for j: swap if needed
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Optimization.",
        paragraphs: [
          "What if the array is already sorted?",
          "We can add a flag `swapped`.",
          "If no swaps occur in a pass, break early.",
          "Best case becomes O(N)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Outer loop i.",
          "Inner loop j.",
          "Swap logic.",
          "Check flag."
        ],
        codeLines: [
          "public void bubbleSort(int[] arr) {",
          "    int n = arr.length;",
          "    for (int i = 0; i < n - 1; i++) {",
          "        boolean swapped = false;",
          "        for (int j = 0; j < n - i - 1; j++) {",
          "            if (arr[j] > arr[j + 1]) {",
          "                int temp = arr[j];",
          "                arr[j] = arr[j + 1];",
          "                arr[j + 1] = temp;",
          "                swapped = true;",
          "            }",
          "        }",
          "        if (!swapped) break;",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [5, 3, 8, 4, 2].",
        frames: [
          { array: [3, 5, 8, 4, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Swap 5,3." },
          { array: [3, 5, 4, 8, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Swap 8,4." },
          { array: [3, 5, 4, 2, 8], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Swap 8,2. 8 is sorted." },
          { array: [3, 4, 5, 2, 8], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Pass 2. Swap 5,4." },
          { array: [3, 4, 2, 5, 8], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Swap 5,2. 5 is sorted." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Simple but slow.",
        takeaways: [
          "Good for teaching.",
          "Stable sort.",
          "Time: O(N^2)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Cocktail Shaker?",
        task: "Bidirectional Bubble Sort?",
        solution: "Go left-to-right, then right-to-left.",
        explanation: "Handles 'turtles' (small elements at end) better."
      }
    }
  ]
};
