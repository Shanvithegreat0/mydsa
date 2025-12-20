import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const maxHeapLesson = {
  id: 'max-heap',
  chapterId: 23,
  title: "Max Heap Implementation",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "King of the Hill",
        paragraphs: [
          "Shanvi, a Max Heap is the opposite of a Min Heap.",
          "Parent is LARGER than children.",
          "Root is the MAXIMUM element."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [10, 5, 20]. Valid Max Heap?",
        options: [
          { text: "Yes", feedback: "10 < 20. Root must be max." },
          { text: "No", feedback: "Correct! 20 should be root." },
          { text: "Maybe", feedback: "Check definition." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Reverse Min Heap?",
        issues: [
          "Multiply all numbers by -1.",
          "Use Min Heap.",
          "Multiply result by -1.",
          "Works, but let's implement it natively."
        ],
        codeSnippet: `
pq.add(-val)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Flip Logic.",
        paragraphs: [
          "Bubble Up: Swap if parent is SMALLER.",
          "Heapify: Swap with LARGEST child.",
          "Everything else is identical."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Same structure.",
          "Comparison logic flipped.",
          "Java: PriorityQueue(Collections.reverseOrder())."
        ],
        codeLines: [
          "public class MaxHeap {",
          "    // ... same fields ...",
          "    public void insert(int val) {",
          "        // ...",
          "        while (i != 0 && heap[(i-1)/2] < heap[i]) { // Changed > to <",
          "            swap((i-1)/2, i); i = (i-1)/2;",
          "        }",
          "    }",
          "    void heapify(int i) {",
          "        int l = 2*i+1, r = 2*i+2, largest = i;",
          "        if (l < size && heap[l] > heap[largest]) largest = l; // Changed < to >",
          "        if (r < size && heap[r] > heap[largest]) largest = r; // Changed < to >",
          "        if (largest != i) { swap(i, largest); heapify(largest); }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Insert 10, 20, 5.",
        frames: [
          { array: [10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Insert 10." },
          { array: [20, 10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Insert 20. 20 > 10. Swap. Root 20." },
          { array: [20, 10, 5], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Insert 5. 5 < 20. OK." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Living large.",
        takeaways: [
          "Used for finding Kth smallest (by keeping a Max Heap of size K).",
          "Time: O(log N).",
          "Space: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Convert?",
        task: "Convert Min Heap to Max Heap?",
        solution: "Just run buildMaxHeap (heapify all non-leaf nodes). O(N).",
        explanation: "Linear time build."
      }
    }
  ]
};
