import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const findMedianLesson = {
  id: 'find-median',
  chapterId: 23,
  title: "Find Median from Data Stream",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Middle Ground",
        paragraphs: [
          "Shanvi, numbers are arriving one by one.",
          "At any point, find the MEDIAN.",
          "Median: Middle element (or average of two middle elements)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Stream: [2, 3, 4]. Median?",
        options: [
          { text: "2.5", feedback: "That's mean." },
          { text: "3", feedback: "Correct! Middle element." },
          { text: "4", feedback: "Max." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Sort every time.",
        issues: [
          "Store in list.",
          "Add: O(1).",
          "Find Median: Sort O(N log N).",
          "Too slow for frequent queries."
        ],
        codeSnippet: `
Collections.sort(list); return list.get(n/2);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Heaps.",
        paragraphs: [
          "Maintain two halves of the data.",
          "Left Half: Max Heap (stores smaller numbers).",
          "Right Half: Min Heap (stores larger numbers).",
          "Balance them so size difference is at most 1.",
          "Median is top of Max Heap (or average of tops)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "MaxHeap left, MinHeap right.",
          "Add num: push to left, pop left max, push to right.",
          "Balance: if right > left, pop right min, push to left.",
          "Find: if left > right return left.peek(). Else avg."
        ],
        codeLines: [
          "class MedianFinder {",
          "    PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());",
          "    PriorityQueue<Integer> right = new PriorityQueue<>();",
          "    public void addNum(int num) {",
          "        left.add(num);",
          "        right.add(left.poll());",
          "        if (left.size() < right.size()) {",
          "            left.add(right.poll());",
          "        }",
          "    }",
          "    public double findMedian() {",
          "        if (left.size() > right.size()) return left.peek();",
          "        return (left.peek() + right.peek()) / 2.0;",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Add 1, 2, 3.",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 1. Left:[1], Right:[]." },
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 2. Left:[1], Right:[2]. Balanced. Median 1.5." },
          { array: [1, 2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 3. Left:[2, 1], Right:[3]. Median 2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Perfectly balanced.",
        takeaways: [
          "Two heaps allow O(log N) insert and O(1) median.",
          "Standard interview problem.",
          "Space: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Remove?",
        task: "Remove number?",
        solution: "Lazy removal (mark as deleted). Or use TreeSet (O(log N)).",
        explanation: "Heaps don't support random removal efficiently."
      }
    }
  ]
};
