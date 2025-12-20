import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const firstNegativeKLesson = {
  id: 'first-negative-k',
  chapterId: 15,
  title: "First Negative Number in Window of Size K",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Spotting the Negative",
        paragraphs: [
          "Shanvi, for every window of size K, find the FIRST negative number.",
          "If no negative number exists in the window, output 0."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [12, -1, -7, 8, -15], K=3. Windows?",
        options: [
          { text: "-1, -1, -7", feedback: "Window 1: [12, -1, -7] -> -1. Window 2: [-1, -7, 8] -> -1. Window 3: [-7, 8, -15] -> -7." },
          { text: "-1, -7, -15", feedback: "Correct! First negative in each window." },
          { text: "12, 8, 8", feedback: "Those are positives." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Scan each window.",
        issues: [
          "For each window, loop from start to end.",
          "Break at first negative.",
          "O(N*K)."
        ],
        codeSnippet: `
for i: for j: if arr[j]<0 found
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Queue the Negatives.",
        paragraphs: [
          "Maintain a Queue (Deque) of indices of negative numbers.",
          "As we slide:",
          "1. Remove indices that are out of the current window (index < i-K+1).",
          "2. Add new element index if it's negative.",
          "3. The front of the Queue is the answer!"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Deque Implementation.",
        explanations: [
          "Deque stores indices.",
          "Process first K-1 elements.",
          "Loop rest.",
          "Remove old from front.",
          "Add new to rear.",
          "Record result."
        ],
        codeLines: [
          "public long[] printFirstNegativeInteger(long A[], int N, int K) {",
          "    long[] res = new long[N - K + 1];",
          "    Deque<Integer> dq = new LinkedList<>();",
          "    int idx = 0;",
          "    for (int i = 0; i < N; i++) {",
          "        if (!dq.isEmpty() && dq.peek() <= i - K) dq.poll();",
          "        if (A[i] < 0) dq.offer(i);",
          "        if (i >= K - 1) {",
          "            if (!dq.isEmpty()) res[idx++] = A[dq.peek()];",
          "            else res[idx++] = 0;",
          "        }",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [12, -1, -7, 8], K=3.",
        frames: [
          { array: [12, -1, -7], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0(12): skip. i=1(-1): push 1. i=2(-7): push 2. Window [0-2]. Front is 1 (-1). Res: [-1]." },
          { array: [-1, -7, 8], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=3(8): skip. Remove out of bounds? 1 is in [1-3]. Front is 1 (-1). Res: [-1, -1]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Keep track of the bad apples.",
        takeaways: [
          "Deque is perfect for sliding window problems involving indices.",
          "Time: O(N).",
          "Space: O(K) (worst case all negatives)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "First Non-Repeating?",
        task: "Stream of characters. First non-repeating?",
        solution: "Queue + Frequency Map.",
        explanation: "Similar concept."
      }
    }
  ]
};
