import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const kthLargestLesson = {
  id: 'kth-largest',
  chapterId: 23,
  title: "Kth Largest Element",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Ranking",
        paragraphs: [
          "Shanvi, find the K-th largest element in an unsorted array.",
          "Example: [3, 2, 1, 5, 6, 4], K=2.",
          "Sorted: [1, 2, 3, 4, 5, 6]. 2nd largest is 5."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "[1, 2, 3], K=1. Result?",
        options: [
          { text: "1", feedback: "That's 3rd largest." },
          { text: "3", feedback: "Correct! Largest." },
          { text: "2", feedback: "2nd largest." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Sort it.",
        issues: [
          "Arrays.sort(nums).",
          "Return nums[N-K].",
          "O(N log N).",
          "Can we do better?"
        ],
        codeSnippet: `
sort(nums); return nums[n-k];
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Min Heap of Size K.",
        paragraphs: [
          "Keep a Min Heap of size K.",
          "Iterate through the array.",
          "Add element to heap.",
          "If heap size > K, remove the smallest (root).",
          "At the end, the heap contains the K largest elements.",
          "The root is the smallest of the K largest -> The K-th largest!"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "PriorityQueue<Integer> pq (Min Heap).",
          "Loop nums.",
          "pq.add(num).",
          "If size > k, pq.poll().",
          "Return pq.peek()."
        ],
        codeLines: [
          "public int findKthLargest(int[] nums, int k) {",
          "    PriorityQueue<Integer> pq = new PriorityQueue<>();",
          "    for (int num : nums) {",
          "        pq.add(num);",
          "        if (pq.size() > k) {",
          "            pq.poll();",
          "        }",
          "    }",
          "    return pq.peek();",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [3, 2, 1, 5, 6, 4], K=2.",
        frames: [
          { array: [3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 3. Size 1." },
          { array: [2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 2. Size 2." },
          { array: [1, 3, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 1. Size 3 > 2. Poll 1. Heap: [2, 3]." },
          { array: [2, 3, 5], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Add 5. Size 3 > 2. Poll 2. Heap: [3, 5]." },
          { array: [3, 5, 6], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Add 6. Size 3 > 2. Poll 3. Heap: [5, 6]." },
          { array: [4, 6, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 4. Size 3 > 2. Poll 4. Heap: [5, 6]. Result 5." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Top K.",
        takeaways: [
          "Time: O(N log K).",
          "Space: O(K).",
          "Better than sorting if K << N."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Quick Select?",
        task: "O(N) average time?",
        solution: "Use Quick Sort partitioning logic. Only recurse on the relevant half.",
        explanation: "Fastest on average."
      }
    }
  ]
};
