import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const mergeSortedListsLesson = {
  id: 'merge-sorted-lists',
  chapterId: 6,
  title: "Merge Two Sorted Lists",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Zippering Chains",
        paragraphs: [
          "Shanvi, this is just like merging sorted arrays.",
          "But instead of copying values, we are just rewiring the links.",
          "We stitch the two lists together into one."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "L1: 1->3, L2: 2->4. Smallest?",
        options: [
          { text: "1", feedback: "Correct. 1 < 2." },
          { text: "2", feedback: "1 is smaller." },
          { text: "3", feedback: "Start at heads." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Create new nodes.",
        issues: [
          "Read values, create new ListNodes.",
          "Uses O(N+M) extra space.",
          "We should do it in-place by just changing pointers."
        ],
        codeSnippet: `
ListNode newNode = new ListNode(val);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Dummy Head + Pointer Manipulation.",
        paragraphs: [
          "Use a 'Dummy' node as the start anchor.",
          "Use a 'Tail' pointer to track the end of our merged list.",
          "Compare heads of L1 and L2.",
          "Attach smaller node to Tail.next.",
          "Move Tail and the chosen list's head.",
          "Repeat."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Iterative Merge.",
        explanations: [
          "Create dummy node.",
          "While l1 and l2 are not null:",
          "If l1.val < l2.val, tail.next = l1, l1 = l1.next.",
          "Else, tail.next = l2, l2 = l2.next.",
          "Attach remaining list (if any).",
          "Return dummy.next."
        ],
        codeLines: [
          "public ListNode mergeTwoLists(ListNode list1, ListNode list2) {",
          "    ListNode dummy = new ListNode(0);",
          "    ListNode tail = dummy;",
          "    while (list1 != null && list2 != null) {",
          "        if (list1.val < list2.val) {",
          "            tail.next = list1;",
          "            list1 = list1.next;",
          "        } else {",
          "            tail.next = list2;",
          "            list2 = list2.next;",
          "        }",
          "        tail = tail.next;",
          "    }",
          "    if (list1 != null) tail.next = list1;",
          "    if (list2 != null) tail.next = list2;",
          "    return dummy.next;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Stitching 1->3 and 2->4.",
        frames: [
          { array: [1, 3, 2, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Compare 1 and 2. Pick 1. Tail->1." },
          { array: [1, 3, 2, 4], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Compare 3 and 2. Pick 2. Tail->1->2." },
          { array: [1, 3, 2, 4], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Compare 3 and 4. Pick 3. Tail->1->2->3." },
          { array: [1, 3, 2, 4], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "L1 empty. Attach 4. Result: 1->2->3->4." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "A dummy is smart.",
        takeaways: [
          "Dummy nodes simplify edge cases (like empty lists or inserting at head).",
          "O(N+M) time, O(1) space.",
          "Used in Merge Sort for Linked Lists."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Merge K Sorted Lists?",
        task: "How to merge K lists efficiently?",
        solution: "Use a Min-Heap (Priority Queue).",
        explanation: "Put all K heads in heap. Extract min, add next from that list. O(N log K)."
      }
    }
  ]
};
