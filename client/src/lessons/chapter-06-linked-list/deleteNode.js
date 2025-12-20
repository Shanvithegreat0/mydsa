import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const deleteNodeLesson = {
  id: 'delete-node',
  chapterId: 6,
  title: "Delete Node in a Linked List",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Imposter",
        paragraphs: [
          "Shanvi, usually to delete a node, we need access to the node BEFORE it.",
          "Prev.next = Current.next.",
          "But what if you are only given the node to delete, and NO access to the head or previous node?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "You are Node B in A->B->C. You want to disappear. What do you do?",
        options: [
          { text: "Ask A to skip me.", feedback: "You can't talk to A. No access." },
          { text: "Copy C's identity and delete C.", feedback: "Sneaky! Become C, then delete the real C. Correct!" },
          { text: "Just vanish.", feedback: "Memory leak!" }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Impossible standard deletion.",
        issues: [
          "Without 'prev', we cannot change 'prev.next'.",
          "We are stuck.",
          "Unless we change the VALUES."
        ],
        codeSnippet: `
// No prev pointer...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Copy Value, Delete Next.",
        paragraphs: [
          "1. Copy the value of the NEXT node into the CURRENT node.",
          "2. Now Current looks like Next.",
          "3. Delete the NEXT node (Current.next = Current.next.next).",
          "Effectively, the original Current is gone (overwritten), and the original Next is skipped."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "The 2-line trick.",
        explanations: [
          "node.val = node.next.val (Copy).",
          "node.next = node.next.next (Skip).",
          "Note: This doesn't work if the node to delete is the TAIL (last node)."
        ],
        codeLines: [
          "public void deleteNode(ListNode node) {",
          "    node.val = node.next.val;",
          "    node.next = node.next.next;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Deleting 2 in 1->2->3.",
        frames: [
          { array: [1, 2, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Node is 2. Next is 3." },
          { array: [1, 3, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Copy 3 to Node. List: 1->3->3." },
          { array: [1, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Skip Next. List: 1->3. Original 2 is effectively gone." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Identity theft is not a joke, Jim! (Unless it's a Linked List).",
        takeaways: [
          "O(1) time.",
          "Only works if node is not the tail.",
          "We didn't actually remove the memory object of 'node', we just changed its content."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What if it IS the tail?",
        task: "How to delete tail without head?",
        solution: "Impossible in a singly linked list.",
        explanation: "You simply cannot update the null pointer of the previous node."
      }
    }
  ]
};
