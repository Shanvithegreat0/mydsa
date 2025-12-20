import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const heapSortLesson = {
  id: 'heap-sort',
  chapterId: 19,
  title: "Heap Sort",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Pile it up",
        paragraphs: [
          "Shanvi, a Max-Heap is a binary tree where Parent >= Children.",
          "The root is always the MAXIMUM element.",
          "Heap Sort uses this to repeatedly extract the max."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Max Heap: [10, 5, 3]. Extract Max?",
        options: [
          { text: "10", feedback: "Correct! Root is 10." },
          { text: "5", feedback: "Child." },
          { text: "3", feedback: "Child." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Priority Queue?",
        issues: [
          "Insert all into PQ.",
          "Poll all.",
          "O(N log N).",
          "Uses O(N) extra space."
        ],
        codeSnippet: `
PriorityQueue pq = new PriorityQueue();
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "In-Place Heap.",
        paragraphs: [
          "1. Build Max Heap from array (heapify).",
          "2. Swap Root (Max) with Last element.",
          "3. Reduce heap size by 1.",
          "4. Heapify Root.",
          "Repeat until size 1."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Build heap: Loop i from N/2-1 down to 0.",
          "Sort: Loop i from N-1 down to 0.",
          "Swap 0 and i.",
          "Heapify(0, i)."
        ],
        codeLines: [
          "public void sort(int arr[]) {",
          "    int n = arr.length;",
          "    for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);",
          "    for (int i = n - 1; i > 0; i--) {",
          "        int temp = arr[0];",
          "        arr[0] = arr[i];",
          "        arr[i] = temp;",
          "        heapify(arr, i, 0);",
          "    }",
          "}",
          "void heapify(int arr[], int n, int i) {",
          "    int largest = i;",
          "    int l = 2 * i + 1, r = 2 * i + 2;",
          "    if (l < n && arr[l] > arr[largest]) largest = l;",
          "    if (r < n && arr[r] > arr[largest]) largest = r;",
          "    if (largest != i) {",
          "        int swap = arr[i];",
          "        arr[i] = arr[largest];",
          "        arr[largest] = swap;",
          "        heapify(arr, n, largest);",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [4, 10, 3, 5, 1].",
        frames: [
          { array: [10, 5, 3, 4, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Built Max Heap." },
          { array: [1, 5, 3, 4, 10], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "Swap 10 with 1. 10 is sorted." },
          { array: [5, 4, 3, 1, 10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Heapify 1 -> 5 becomes root." },
          { array: [1, 4, 3, 5, 10], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Swap 5 with 1. 5 is sorted." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "King of the hill.",
        takeaways: [
          "Unstable sort.",
          "Time: O(N log N) guaranteed.",
          "Space: O(1).",
          "Slower than QuickSort in practice due to cache locality."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Kth Largest?",
        task: "Find Kth largest element?",
        solution: "Use a Min Heap of size K.",
        explanation: "Keep top K elements."
      }
    }
  ]
};
