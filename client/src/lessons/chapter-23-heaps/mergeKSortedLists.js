import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const mergeKSortedListsLesson = {
  id: 'merge-k-sorted-lists',
  chapterId: 23,
  title: "Merge K Sorted Lists",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Mega Merge",
        paragraphs: [
          "Shanvi, you have K sorted linked lists.",
          "Merge them into one sorted linked list.",
          "Example: [1->4, 1->3, 2->6] -> 1->1->2->3->4->6."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "How to find the next smallest?",
        options: [
          { text: "Check the head of all K lists.", feedback: "Correct!" },
          { text: "Check the tail.", feedback: "Lists are sorted ascending." },
          { text: "Randomly pick.", feedback: "No." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Compare All Heads.",
        issues: [
          "Loop through K lists.",
          "Find min head.",
          "Move that head forward.",
          "Repeat N times (total nodes).",
          "O(N * K)."
        ],
        codeSnippet: `
min = lists[0]; for i=1 to k: if lists[i] < min...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Min Heap Optimization.",
        paragraphs: [
          "Instead of iterating K lists to find min, put the HEAD of each list into a Min Heap.",
          "Extract Min (O(log K)).",
          "Add the next node from that list to the Heap.",
          "Total time: O(N log K)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "PriorityQueue of ListNode.",
          "Add all heads.",
          "Dummy head for result.",
          "While pq not empty:",
          "  Poll min.",
          "  Append to result.",
          "  If min.next != null, add min.next to pq."
        ],
        codeLines: [
          "public ListNode mergeKLists(ListNode[] lists) {",
          "    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);",
          "    for (ListNode node : lists) {",
          "        if (node != null) pq.add(node);",
          "    }",
          "    ListNode dummy = new ListNode(0);",
          "    ListNode tail = dummy;",
          "    while (!pq.isEmpty()) {",
          "        ListNode min = pq.poll();",
          "        tail.next = min;",
          "        tail = tail.next;",
          "        if (min.next != null) pq.add(min.next);",
          "    }",
          "    return dummy.next;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Lists: [1->4, 1->3, 2->6].",
        frames: [
          { array: [1, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Heap has heads: 1, 1, 2." },
          { array: [1, 2, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Poll 1 (from L1). Add 4. Heap: 1, 2, 4." },
          { array: [2, 3, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Poll 1 (from L2). Add 3. Heap: 2, 3, 4." },
          { array: [3, 4, 6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Poll 2 (from L3). Add 6. Heap: 3, 4, 6." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Many streams, one river.",
        takeaways: [
          "Classic use of Min Heap.",
          "Time: O(N log K).",
          "Space: O(K) for heap."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Divide and Conquer?",
        task: "Merge pairs of lists?",
        solution: "Merge L1+L2, L3+L4... then merge results. Also O(N log K).",
        explanation: "Similar to Merge Sort."
      }
    }
  ]
};
