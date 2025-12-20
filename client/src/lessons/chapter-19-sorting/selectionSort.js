import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const selectionSortLesson = {
  id: 'selection-sort',
  chapterId: 19,
  title: "Selection Sort",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Pick the Best",
        paragraphs: [
          "Shanvi, imagine sorting a hand of cards.",
          "You look through the whole hand, find the smallest card, and put it at the front.",
          "Then find the next smallest...",
          "This is Selection Sort."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [2, 3, 1]. Pass 1?",
        options: [
          { text: "[1, 3, 2]", feedback: "Correct! 1 is min. Swap with 2." },
          { text: "[2, 1, 3]", feedback: "That's swap adjacent." },
          { text: "[2, 3, 1]", feedback: "No change?" }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Find Min.",
        issues: [
          "Loop i from 0 to N-1.",
          "  Find min index in [i, N-1].",
          "  Swap arr[i] with arr[min].",
          "O(N^2) always."
        ],
        codeSnippet: `
min_idx = i; for j: if arr[j] < arr[min] min = j
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Minimal Swaps.",
        paragraphs: [
          "Unlike Bubble Sort which swaps constantly, Selection Sort makes at most N swaps.",
          "Good if writing to memory is expensive.",
          "But still O(N^2) comparisons."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Outer loop i.",
          "Inner loop j starts at i+1.",
          "Track min_idx.",
          "Swap at end of inner loop."
        ],
        codeLines: [
          "public void selectionSort(int[] arr) {",
          "    int n = arr.length;",
          "    for (int i = 0; i < n - 1; i++) {",
          "        int min_idx = i;",
          "        for (int j = i + 1; j < n; j++) {",
          "            if (arr[j] < arr[min_idx]) min_idx = j;",
          "        }",
          "        int temp = arr[min_idx];",
          "        arr[min_idx] = arr[i];",
          "        arr[i] = temp;",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [64, 25, 12, 22, 11].",
        frames: [
          { array: [11, 25, 12, 22, 64], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Min is 11. Swap 11, 64." },
          { array: [11, 12, 25, 22, 64], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Min in [25..] is 12. Swap 12, 25." },
          { array: [11, 12, 22, 25, 64], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Min in [25..] is 22. Swap 22, 25." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Selective memory.",
        takeaways: [
          "Unstable sort (usually).",
          "Time: O(N^2).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Stable Selection?",
        task: "Can you make it stable?",
        solution: "Instead of swapping, shift elements to insert min.",
        explanation: "Makes it O(N^2) shifts though."
      }
    }
  ]
};
