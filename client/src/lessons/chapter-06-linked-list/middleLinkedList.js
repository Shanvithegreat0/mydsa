import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const middleLinkedListLesson = {
  id: 'middle-linked-list',
  chapterId: 6,
  title: "Middle of Linked List",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Race",
        paragraphs: [
          "Shanvi, imagine two runners on a track.",
          "Runner A runs at 1x speed.",
          "Runner B runs at 2x speed.",
          "When Runner B reaches the finish line, where is Runner A?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Track length 100m. B finishes. A is at?",
        options: [
          { text: "100m", feedback: "A is slower." },
          { text: "50m", feedback: "Correct! Exactly halfway." },
          { text: "25m", feedback: "Too slow." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Count and Traverse.",
        issues: [
          "Pass 1: Count total nodes (N).",
          "Pass 2: Go to node N/2.",
          "Takes 1.5 passes (O(N) + O(N/2)).",
          "Can we do it in 1 pass?"
        ],
        codeSnippet: `
int len = 0;
while(curr) { len++; curr=curr.next; }
// reset curr, move len/2 times
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Tortoise and Hare.",
        paragraphs: [
          "Slow pointer moves 1 step.",
          "Fast pointer moves 2 steps.",
          "When Fast reaches the end (null), Slow is at the middle.",
          "This is a single pass algorithm."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Fast and Slow Pointers.",
        explanations: [
          "Initialize slow = head, fast = head.",
          "Loop while fast != null AND fast.next != null.",
          "slow = slow.next.",
          "fast = fast.next.next.",
          "Return slow."
        ],
        codeLines: [
          "public ListNode middleNode(ListNode head) {",
          "    ListNode slow = head;",
          "    ListNode fast = head;",
          "    while (fast != null && fast.next != null) {",
          "        slow = slow.next;",
          "        fast = fast.next.next;",
          "    }",
          "    return slow;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "List: 1 -> 2 -> 3 -> 4 -> 5.",
        frames: [
          { array: [1, 2, 3, 4, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Start: Slow(1), Fast(1)." },
          { array: [1, 2, 3, 4, 5], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Step 1: Slow(2), Fast(3)." },
          { array: [1, 2, 3, 4, 5], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Step 2: Slow(3), Fast(5). Fast at end. Middle is 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Speed is relative.",
        takeaways: [
          "Tortoise and Hare is useful for Cycle Detection too.",
          "Handles both odd and even length lists correctly.",
          "Even length: returns the second middle node (usually)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Delete Middle Node?",
        task: "Can you delete the middle node in one pass?",
        solution: "Keep a 'prev' pointer behind slow, then prev.next = slow.next.",
        explanation: "You need access to the node *before* the middle to delete it."
      }
    }
  ]
};
