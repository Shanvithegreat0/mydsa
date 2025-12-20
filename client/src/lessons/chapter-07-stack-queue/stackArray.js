import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const stackArrayLesson = {
  id: 'stack-array',
  chapterId: 7,
  title: "Implement Stack using Arrays",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Stack of Plates",
        paragraphs: [
          "Shanvi, imagine a stack of plates in a cafeteria.",
          "You can only add a plate to the TOP (Push).",
          "You can only remove a plate from the TOP (Pop).",
          "This is LIFO: Last In, First Out."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Push(1), Push(2), Pop(), Push(3). What is on top?",
        options: [
          { text: "1", feedback: "1 is at the bottom." },
          { text: "2", feedback: "2 was popped." },
          { text: "3", feedback: "Correct! Stack: [1, 3]." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Using a List?",
        issues: [
          "We could use ArrayList, but let's build it from scratch using a raw array.",
          "We need to track the 'top' index.",
          "We need to handle 'Overflow' (Stack Full) and 'Underflow' (Stack Empty)."
        ],
        codeSnippet: `
int[] arr = new int[100];
int top = -1;
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Top Pointer.",
        paragraphs: [
          "Initialize top = -1.",
          "Push: Increment top, then insert.",
          "Pop: Return value at top, then decrement top.",
          "Peek: Return value at top."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Array Implementation.",
        explanations: [
          "Constructor sets size.",
          "Push checks capacity.",
          "Pop checks if empty.",
          "Simple pointer arithmetic."
        ],
        codeLines: [
          "class MyStack {",
          "    int[] arr;",
          "    int top;",
          "    int capacity;",
          "    public MyStack(int size) {",
          "        arr = new int[size];",
          "        capacity = size;",
          "        top = -1;",
          "    }",
          "    public void push(int x) {",
          "        if (top == capacity - 1) return; // Full",
          "        arr[++top] = x;",
          "    }",
          "    public int pop() {",
          "        if (top == -1) return -1; // Empty",
          "        return arr[top--];",
          "    }",
          "    public int peek() {",
          "        if (top == -1) return -1;",
          "        return arr[top];",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Stack Operations.",
        frames: [
          { array: [0, 0, 0], highlightIndex: -1, currentSum: 0, maxSum: 0, explanation: "Empty. Top = -1." },
          { array: [5, 0, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Push(5). Top = 0." },
          { array: [5, 10, 0], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Push(10). Top = 1." },
          { array: [5, 10, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop() returns 10. Top = 0." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Last shall be first.",
        takeaways: [
          "Stacks are used in function calls (Recursion), Undo buttons, and Browser history.",
          "O(1) for all operations.",
          "Fixed size is a limitation of array implementation."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Dynamic Stack?",
        task: "How to handle full stack?",
        solution: "Create a new array of double size and copy elements.",
        explanation: "This is how ArrayList works internally."
      }
    }
  ]
};
