import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const queueArrayLesson = {
  id: 'queue-array',
  chapterId: 7,
  title: "Implement Queue using Arrays",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Ticket Line",
        paragraphs: [
          "Shanvi, imagine a line at a movie theater.",
          "People join at the BACK (Enqueue).",
          "People leave from the FRONT (Dequeue).",
          "This is FIFO: First In, First Out."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Enqueue(1), Enqueue(2), Dequeue(), Enqueue(3). Who is at front?",
        options: [
          { text: "1", feedback: "1 left already." },
          { text: "2", feedback: "Correct! 1 left, so 2 is next." },
          { text: "3", feedback: "3 is at the back." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Simple Array?",
        issues: [
          "If we just increment 'front' and 'rear', we waste space at the beginning.",
          "Example: [x, x, x, 4, 5]. Indices 0,1,2 are empty but unusable.",
          "We need a Circular Queue."
        ]
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Circular Buffer.",
        paragraphs: [
          "When 'rear' reaches the end, wrap it around to 0.",
          "Use modulo operator: (index + 1) % capacity.",
          "Keep track of 'size' to distinguish Full vs Empty."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Circular Queue Implementation.",
        explanations: [
          "Front points to first element.",
          "Rear points to last element.",
          "Enqueue: rear = (rear + 1) % cap.",
          "Dequeue: front = (front + 1) % cap.",
          "Size tracks count."
        ],
        codeLines: [
          "class MyQueue {",
          "    int[] arr;",
          "    int front, rear, size, capacity;",
          "    public MyQueue(int cap) {",
          "        capacity = cap;",
          "        arr = new int[cap];",
          "        front = 0;",
          "        rear = -1;",
          "        size = 0;",
          "    }",
          "    public boolean enqueue(int x) {",
          "        if (size == capacity) return false;",
          "        rear = (rear + 1) % capacity;",
          "        arr[rear] = x;",
          "        size++;",
          "        return true;",
          "    }",
          "    public int dequeue() {",
          "        if (size == 0) return -1;",
          "        int val = arr[front];",
          "        front = (front + 1) % capacity;",
          "        size--;",
          "        return val;",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Circular wrapping.",
        frames: [
          { array: [1, 2, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Q: [1, 2]. Front: 0. Rear: 1." },
          { array: [1, 2, 3], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Enqueue(3). Rear wraps to 2. Q: [1, 2, 3]. Full." },
          { array: [1, 2, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Dequeue(). Front moves to 1. Q: [2, 3]. Index 0 is free." },
          { array: [4, 2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Enqueue(4). Rear wraps to 0. Q: [2, 3, 4]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "What goes around comes around.",
        takeaways: [
          "Queues are used in BFS, Printer jobs, and CPU scheduling.",
          "Circular implementation prevents memory waste.",
          "O(1) operations."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Queue using Stacks?",
        task: "Implement Queue using 2 Stacks.",
        solution: "Push to S1. To pop, move all S1 to S2, then pop S2.",
        explanation: "Amortized O(1) time."
      }
    }
  ]
};
