import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const insertionSortLesson = {
  id: 'insertion-sort',
  chapterId: 19,
  title: "Insertion Sort",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Card Game",
        paragraphs: [
          "Shanvi, this is how most people sort cards.",
          "Pick one card, slide it into the correct position among the already sorted cards.",
          "Repeat."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Sorted: [2, 5]. Insert 3.",
        options: [
          { text: "[2, 5, 3]", feedback: "Not sorted." },
          { text: "[2, 3, 5]", feedback: "Correct! 3 goes between 2 and 5." },
          { text: "[3, 2, 5]", feedback: "Wrong order." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Shift and Insert.",
        issues: [
          "Loop i from 1 to N-1.",
          "Key = arr[i].",
          "Compare Key with elements before it (i-1 down to 0).",
          "Shift larger elements right.",
          "Place Key."
        ],
        codeSnippet: `
while j>=0 && arr[j]>key: arr[j+1]=arr[j]
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Adaptive.",
        paragraphs: [
          "If the array is nearly sorted, Insertion Sort is very fast (O(N)).",
          "It only shifts what's necessary.",
          "Used in hybrid algorithms (like Timsort) for small chunks."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Loop i from 1.",
          "Key = arr[i].",
          "j = i-1.",
          "While j>=0 and arr[j] > key: shift right.",
          "arr[j+1] = key."
        ],
        codeLines: [
          "public void insertionSort(int[] arr) {",
          "    int n = arr.length;",
          "    for (int i = 1; i < n; i++) {",
          "        int key = arr[i];",
          "        int j = i - 1;",
          "        while (j >= 0 && arr[j] > key) {",
          "            arr[j + 1] = arr[j];",
          "            j = j - 1;",
          "        }",
          "        arr[j + 1] = key;",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [12, 11, 13, 5, 6].",
        frames: [
          { array: [11, 12, 13, 5, 6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Insert 11. 11 < 12. Shift 12. Place 11." },
          { array: [11, 12, 13, 5, 6], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Insert 13. 13 > 12. No shift." },
          { array: [5, 11, 12, 13, 6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Insert 5. Shift 13, 12, 11. Place 5." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Make space.",
        takeaways: [
          "Stable sort.",
          "Time: O(N^2) worst case, O(N) best case.",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Binary Insertion?",
        task: "Use Binary Search to find position?",
        solution: "Reduces comparisons to O(N log N), but shifts are still O(N^2).",
        explanation: "Slight optimization."
      }
    }
  ]
};
