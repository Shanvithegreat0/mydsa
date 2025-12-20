import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const minHeapLesson = {
  id: 'min-heap',
  chapterId: 23,
  title: "Min Heap Implementation",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Priority Queue",
        paragraphs: [
          "Shanvi, a Min Heap is a binary tree where every parent is SMALLER than its children.",
          "The root is always the MINIMUM element.",
          "It's usually implemented as an array."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [2, 5, 10]. Parent 2. Children?",
        options: [
          { text: "5 and 10", feedback: "Correct! Left=2*i+1, Right=2*i+2." },
          { text: "10 and 5", feedback: "Order doesn't strictly matter between siblings, but usually left first." },
          { text: "None", feedback: "It has children." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Sorted Array?",
        issues: [
          "Keep array sorted.",
          "Insert: O(N).",
          "Extract Min: O(1).",
          "Heap gives O(log N) for both.",
          "Much better for dynamic data."
        ],
        codeSnippet: `
Collections.sort(list)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Heap Properties.",
        paragraphs: [
          "Complete Binary Tree: Filled from left to right.",
          "Heap Property: Parent <= Children.",
          "Operations:",
          "1. Push: Add to end, 'bubble up'.",
          "2. Pop: Swap root with end, remove end, 'bubble down' (heapify)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Array storage.",
          "parent(i) = (i-1)/2.",
          "left(i) = 2*i + 1.",
          "right(i) = 2*i + 2.",
          "Bubble Up: Swap with parent if smaller.",
          "Heapify: Swap with smallest child."
        ],
        codeLines: [
          "public class MinHeap {",
          "    int[] heap; int size; int capacity;",
          "    public MinHeap(int capacity) {",
          "        this.capacity = capacity; size = 0;",
          "        heap = new int[capacity];",
          "    }",
          "    public void insert(int val) {",
          "        if (size == capacity) return;",
          "        int i = size++; heap[i] = val;",
          "        while (i != 0 && heap[(i-1)/2] > heap[i]) {",
          "            swap((i-1)/2, i); i = (i-1)/2;",
          "        }",
          "    }",
          "    public int extractMin() {",
          "        if (size <= 0) return Integer.MAX_VALUE;",
          "        if (size == 1) return heap[--size];",
          "        int root = heap[0]; heap[0] = heap[--size];",
          "        heapify(0); return root;",
          "    }",
          "    void heapify(int i) {",
          "        int l = 2*i+1, r = 2*i+2, smallest = i;",
          "        if (l < size && heap[l] < heap[smallest]) smallest = l;",
          "        if (r < size && heap[r] < heap[smallest]) smallest = r;",
          "        if (smallest != i) { swap(i, smallest); heapify(smallest); }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Insert 3, 1, 6, 5, 2, 4.",
        frames: [
          { array: [3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Insert 3." },
          { array: [1, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Insert 1. 1 < 3. Swap. Root 1." },
          { array: [1, 3, 6], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Insert 6. 6 > 1. OK." },
          { array: [1, 3, 6, 5], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Insert 5. 5 > 3. OK." },
          { array: [1, 2, 6, 5, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Insert 2. 2 < 3. Swap. 2 > 1. OK." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Smallest at the top.",
        takeaways: [
          "Java's PriorityQueue is a Min Heap by default.",
          "Time: O(log N) insert/extract.",
          "Space: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Heap Sort?",
        task: "Can we use this to sort?",
        solution: "Yes. Insert all, then extract all. O(N log N).",
        explanation: "That's Heap Sort."
      }
    }
  ]
};
