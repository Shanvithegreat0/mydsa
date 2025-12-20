import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const slidingWindowMaximumLesson = {
  id: 'sliding-window-maximum',
  chapterId: 15,
  title: "Sliding Window Maximum",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "King of the Hill",
        paragraphs: [
          "Shanvi, for every window of size K, find the MAXIMUM element.",
          "Arr: [1, 3, -1, -3, 5, 3, 6, 7], K=3.",
          "Window [1, 3, -1] -> Max 3.",
          "Window [3, -1, -3] -> Max 3."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "[4, 3, 1], K=2. Maxes?",
        options: [
          { text: "4, 3", feedback: "Correct! [4,3]->4. [3,1]->3." },
          { text: "4, 1", feedback: "3 > 1." },
          { text: "4", feedback: "Need 2 maxes." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Scan Max.",
        issues: [
          "For each window, scan K elements to find max.",
          "O(N*K).",
          "If K is large, slow."
        ],
        codeSnippet: `
max = -inf; for j: max = max(arr[j])
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Monotonic Deque.",
        paragraphs: [
          "We need a data structure that gives us max in O(1).",
          "Use a Deque (Double Ended Queue).",
          "Store INDICES.",
          "Maintain DECREASING order of values in Deque.",
          "If current val > back of Deque, pop back (they are useless now).",
          "Front of Deque is always the Max."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Deque Logic.",
        explanations: [
          "Loop i from 0 to N.",
          "Remove out of bounds (front <= i-K).",
          "While back < current val, pop back.",
          "Push current index.",
          "If i >= K-1, record result (front)."
        ],
        codeLines: [
          "public int[] maxSlidingWindow(int[] nums, int k) {",
          "    int n = nums.length;",
          "    int[] res = new int[n - k + 1];",
          "    Deque<Integer> dq = new ArrayDeque<>();",
          "    int ri = 0;",
          "    for (int i = 0; i < n; i++) {",
          "        if (!dq.isEmpty() && dq.peek() == i - k) dq.poll();",
          "        while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) dq.pollLast();",
          "        dq.offer(i);",
          "        if (i >= k - 1) res[ri++] = nums[dq.peek()];",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [1, 3, -1, -3, 5], K=3.",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0(1). DQ: [0]." },
          { array: [1, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1(3). 3>1, pop 0. DQ: [1]. (Index 1 is val 3)." },
          { array: [1, 3, -1], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "i=2(-1). -1<3. DQ: [1, 2]. Max: nums[1]=3." },
          { array: [3, -1, -3], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "i=3(-3). DQ: [1, 2, 3]. Max: nums[1]=3." },
          { array: [-1, -3, 5], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "i=4(5). 5>-3 pop. 5>-1 pop. 5>3 pop. DQ: [4]. Max: 5." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Survival of the fittest.",
        takeaways: [
          "Smaller elements before a larger element are useless.",
          "Deque stores potential max candidates.",
          "Time: O(N) (each element added/removed once)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Min Window?",
        task: "Sliding Window Minimum?",
        solution: "Maintain INCREASING order in Deque.",
        explanation: "Symmetric logic."
      }
    }
  ]
};
