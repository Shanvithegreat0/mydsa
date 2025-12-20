import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const nextGreaterElementLesson = {
  id: 'next-greater-element',
  chapterId: 7,
  title: "Next Greater Element",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Looking Ahead",
        paragraphs: [
          "Shanvi, for every number in an array, we want to find the first number to its RIGHT that is bigger.",
          "If none exists, return -1."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Array: [4, 5, 2, 25]. Next Greater for 4?",
        options: [
          { text: "5", feedback: "Correct! 5 > 4." },
          { text: "25", feedback: "25 is bigger, but 5 is closer." },
          { text: "2", feedback: "2 is smaller." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Nested Loops.",
        issues: [
          "For each i, loop j from i+1 to end.",
          "O(N^2).",
          "Can we do O(N)?"
        ],
        codeSnippet: `
for i... for j... if arr[j] > arr[i] break
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Monotonic Stack.",
        paragraphs: [
          "Process from RIGHT to LEFT.",
          "Maintain a Stack of numbers we've seen, sorted increasing from top to bottom.",
          "For current number X:",
          "1. Pop smaller elements from stack (they are useless to X and anyone to the left of X, because X blocks them).",
          "2. Top of stack is now the Next Greater.",
          "3. Push X."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Monotonic Stack Implementation.",
        explanations: [
          "Iterate backwards.",
          "While stack not empty and stack.peek() <= current, pop.",
          "If stack empty, result is -1.",
          "Else, result is stack.peek().",
          "Push current."
        ],
        codeLines: [
          "public int[] nextGreaterElements(int[] nums) {",
          "    int n = nums.length;",
          "    int[] res = new int[n];",
          "    Stack<Integer> stack = new Stack<>();",
          "    for (int i = n - 1; i >= 0; i--) {",
          "        while (!stack.isEmpty() && stack.peek() <= nums[i]) {",
          "            stack.pop();",
          "        }",
          "        res[i] = stack.isEmpty() ? -1 : stack.peek();",
          "        stack.push(nums[i]);",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Processing [2, 1, 5] backwards.",
        frames: [
          { array: [2, 1, 5], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "i=2 (5). Stack empty. Res: -1. Push 5. Stack: [5]." },
          { array: [2, 1, 5], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1 (1). 1 < 5. Res: 5. Push 1. Stack: [5, 1]." },
          { array: [2, 1, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0 (2). 2 > 1 (Pop 1). 2 < 5 (Keep 5). Res: 5. Push 2. Stack: [5, 2]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Clear the clutter.",
        takeaways: [
          "Monotonic Stack is a powerful tool for 'Next/Previous Greater/Smaller' problems.",
          "O(N) time because each element is pushed and popped at most once.",
          "Used in Histogram and Trap Rain Water."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Circular Array?",
        task: "What if the array wraps around?",
        solution: "Loop 2*N times or use modulo. The stack logic remains the same.",
        explanation: "Simulate concatenating the array to itself."
      }
    }
  ]
};
