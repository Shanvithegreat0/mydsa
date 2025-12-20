import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const removeNthNodeLesson = {
  id: 'remove-nth-node',
  chapterId: 6,
  title: "Remove Nth Node From End",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Counting Backwards",
        paragraphs: [
          "Shanvi, removing the 2nd node from the START is easy.",
          "But removing the 2nd node from the END is tricky because we don't know where the end is!",
          "We are blind to the length."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "List: 1->2->3->4->5. Remove 2nd from end (Node 4).",
        options: [
          { text: "Go to end, come back 2 steps.", feedback: "Singly linked lists can't go back!" },
          { text: "Calculate length 5. 5-2 = 3. Go to 3rd node.", feedback: "Correct! That works." },
          { text: "Guess.", feedback: "No guessing." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Two Passes.",
        issues: [
          "Pass 1: Count length L.",
          "Pass 2: Move L-N steps to find the node before the target.",
          "Works, but can we do it in one pass?"
        ],
        codeSnippet: `
int len = 0;
while(curr) len++;
// traverse len-n times
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Pointers with a Gap.",
        paragraphs: [
          "Start Fast pointer.",
          "Move Fast pointer N steps ahead.",
          "Now start Slow pointer at head.",
          "Move both one step at a time.",
          "When Fast reaches null (end), Slow will be at (L-N)!",
          "Actually, we want to stop one step before, so we can adjust slightly."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "One Pass Algorithm.",
        explanations: [
          "Use Dummy node (handles removing head).",
          "Fast moves n+1 steps.",
          "Slow moves until Fast hits null.",
          "Slow is now BEFORE the target.",
          "slow.next = slow.next.next."
        ],
        codeLines: [
          "public ListNode removeNthFromEnd(ListNode head, int n) {",
          "    ListNode dummy = new ListNode(0);",
          "    dummy.next = head;",
          "    ListNode slow = dummy;",
          "    ListNode fast = dummy;",
          "    // Move fast n+1 steps",
          "    for (int i = 1; i <= n + 1; i++) {",
          "        fast = fast.next;",
          "    }",
          "    // Move both",
          "    while (fast != null) {",
          "        slow = slow.next;",
          "        fast = fast.next;",
          "    }",
          "    // Skip target",
          "    slow.next = slow.next.next;",
          "    return dummy.next;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Removing 2nd from end (4) in 1->2->3->4->5.",
        frames: [
          { array: [0, 1, 2, 3, 4, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Dummy(0). Fast moves 3 steps to 2." },
          { array: [0, 1, 2, 3, 4, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Move both. Slow->0, Fast->2... Slow->3, Fast->5(end)." },
          { array: [0, 1, 2, 3, 4, 5], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Slow is at 3. Target is 4. Link 3->5. 4 is gone." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Maintain the gap.",
        takeaways: [
          "The gap of N ensures that when one hits the end, the other is N steps behind.",
          "Dummy node is crucial if we need to remove the first node.",
          "O(N) time, O(1) space."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What if N > Length?",
        task: "How to handle invalid N?",
        solution: "The loop for Fast will throw NullPointer. Add a check.",
        explanation: "Always validate input constraints."
      }
    }
  ]
};
