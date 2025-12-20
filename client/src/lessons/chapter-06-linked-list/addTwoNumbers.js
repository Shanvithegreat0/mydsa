import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const addTwoNumbersLesson = {
  id: 'add-two-numbers',
  chapterId: 6,
  title: "Add Two Numbers (Linked List)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Reverse Math",
        paragraphs: [
          "Shanvi, usually we write numbers like 342.",
          "But here, they are stored in reverse: 2 -> 4 -> 3.",
          "This is actually easier for addition! We start adding from the ones digit (head)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "2->4->3 (342) + 5->6->4 (465). Sum?",
        options: [
          { text: "7->0->8 (807)", feedback: "Correct! 2+5=7, 4+6=10 (carry 1), 3+4+1=8." },
          { text: "8->0->7 (708)", feedback: "Remember it's reversed." },
          { text: "7->0->7", feedback: "Forgot the carry." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Convert to Integer.",
        issues: [
          "Traverse list, build number 342.",
          "Add 342 + 465 = 807.",
          "Convert 807 back to list.",
          "Problem: What if the number is bigger than Integer.MAX_VALUE? It will overflow."
        ],
        codeSnippet: `
int num1 = toInt(l1); // Overflow risk!
int num2 = toInt(l2);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Schoolbook Addition.",
        paragraphs: [
          "Add digit by digit, tracking the 'carry'.",
          "Sum = val1 + val2 + carry.",
          "New Digit = Sum % 10.",
          "New Carry = Sum / 10.",
          "Create new node with New Digit.",
          "Move to next nodes."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Digit-wise Addition.",
        explanations: [
          "Use Dummy head.",
          "Loop while l1 or l2 or carry is not zero.",
          "Get values (0 if node is null).",
          "Calculate sum and carry.",
          "Append new node.",
          "Advance pointers."
        ],
        codeLines: [
          "public ListNode addTwoNumbers(ListNode l1, ListNode l2) {",
          "    ListNode dummy = new ListNode(0);",
          "    ListNode curr = dummy;",
          "    int carry = 0;",
          "    while (l1 != null || l2 != null || carry != 0) {",
          "        int x = (l1 != null) ? l1.val : 0;",
          "        int y = (l2 != null) ? l2.val : 0;",
          "        int sum = carry + x + y;",
          "        carry = sum / 10;",
          "        curr.next = new ListNode(sum % 10);",
          "        curr = curr.next;",
          "        if (l1 != null) l1 = l1.next;",
          "        if (l2 != null) l2 = l2.next;",
          "    }",
          "    return dummy.next;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Adding 2->4->3 and 5->6->4.",
        frames: [
          { array: [2, 5], highlightIndex: 0, currentSum: 7, maxSum: 0, explanation: "2+5=7. Carry=0. Node: 7." },
          { array: [4, 6], highlightIndex: 0, currentSum: 10, maxSum: 0, explanation: "4+6=10. Carry=1. Node: 0." },
          { array: [3, 4], highlightIndex: 0, currentSum: 8, maxSum: 0, explanation: "3+4+1(carry)=8. Carry=0. Node: 8. Result: 7->0->8." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Big numbers are just small numbers in a row.",
        takeaways: [
          "Handles arbitrarily large numbers (unlike int/long).",
          "The '|| carry != 0' check handles the final carry (e.g., 5+5=10 -> 0->1).",
          "O(max(N, M)) time."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What if numbers are NOT reversed?",
        task: "Add 3->4->2 and 4->6->5.",
        solution: "Reverse them first, add, then reverse result. OR use Stacks.",
        explanation: "Stacks allow processing from the end (LIFO)."
      }
    }
  ]
};
