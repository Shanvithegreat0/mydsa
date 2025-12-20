import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const reverseLinkedListLesson = {
  id: 'reverse-linked-list',
  chapterId: 6,
  title: "Reverse Linked List",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Turning the Train",
        paragraphs: [
          "Shanvi, imagine a train where each car hooks to the next one.",
          "Car A -> Car B -> Car C.",
          "We want to reverse the direction so it becomes Car A <- Car B <- Car C.",
          "We need to flip the hooks one by one."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If you are at Car B, what do you need to do?",
        options: [
          { text: "Just point B to A.", feedback: "But then you lose the connection to C! You need to save C first." },
          { text: "Save C, then point B to A, then move to C.", feedback: "Correct! Save Next, Flip Link, Move Forward." },
          { text: "Point A to B.", feedback: "That's the original direction." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Use a Stack.",
        issues: [
          "Traverse list, push nodes to stack.",
          "Pop nodes and link them.",
          "O(N) time, but O(N) space.",
          "We want O(1) space (Iterative)."
        ],
        codeSnippet: `
Stack<ListNode> stack = new Stack<>();
while(curr != null) stack.push(curr);
// pop and link...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Three Pointers: Prev, Curr, Next.",
        paragraphs: [
          "Prev: The node behind us (initially null).",
          "Curr: The node we are flipping.",
          "Next: The node ahead (we need to save this before breaking the link).",
          "Loop: Save Next -> Flip Curr.next to Prev -> Move Prev to Curr -> Move Curr to Next."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Iterative Reversal.",
        explanations: [
          "Initialize prev = null, curr = head.",
          "Loop while curr != null.",
          "Store nextTemp = curr.next.",
          "Reverse link: curr.next = prev.",
          "Advance: prev = curr, curr = nextTemp.",
          "Return prev (new head)."
        ],
        codeLines: [
          "public ListNode reverseList(ListNode head) {",
          "    ListNode prev = null;",
          "    ListNode curr = head;",
          "    while (curr != null) {",
          "        ListNode nextTemp = curr.next;",
          "        curr.next = prev;",
          "        prev = curr;",
          "        curr = nextTemp;",
          "    }",
          "    return prev;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Reversing 1 -> 2 -> 3.",
        frames: [
          { array: [1, 2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 1. Next: 2. 1->null. Prev: 1. Curr: 2." },
          { array: [1, 2, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Curr: 2. Next: 3. 2->1. Prev: 2. Curr: 3." },
          { array: [1, 2, 3], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Curr: 3. Next: null. 3->2. Prev: 3. Curr: null. Done. Head is 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "One step at a time.",
        takeaways: [
          "Always save the 'next' node before breaking the link.",
          "Iterative is O(1) space.",
          "Recursive is O(N) space (stack)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Reverse in Groups of K?",
        task: "Reverse every k nodes.",
        solution: "Use the same logic but count k nodes first, reverse them, and recursively call for the rest.",
        explanation: "This is a hard problem that builds on simple reversal."
      }
    }
  ]
};
