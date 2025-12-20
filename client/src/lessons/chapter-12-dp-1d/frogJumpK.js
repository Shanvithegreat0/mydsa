import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const frogJumpKLesson = {
  id: 'frog-jump-k',
  chapterId: 12,
  title: "Frog Jump with K Distance",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Super Frog",
        paragraphs: [
          "Shanvi, now the frog is stronger.",
          "It can jump 1, 2, 3, ..., up to K steps at once.",
          "We still want to minimize the total energy cost."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If K=N, what is the best strategy?",
        options: [
          { text: "Jump 1 by 1", feedback: "Maybe, but direct jump might be better." },
          { text: "Direct jump 0 to N-1", feedback: "Maybe, but intermediate stops might be better." },
          { text: "Check all", feedback: "Correct. We need to check all reachable previous stones." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursion loop.",
        issues: [
          "f(i) = min( f(i-j) + cost(i, i-j) ) for j in 1..K.",
          "Still O(K^N) without memoization.",
          "With memoization, it becomes O(N*K)."
        ],
        codeSnippet: `
for j=1 to K:
    minStep = min(minStep, f(i-j) + cost)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Tabulation with Loop.",
        paragraphs: [
          "dp[i] stores min cost to reach stone i.",
          "To calculate dp[i], look back at i-1, i-2, ..., i-K.",
          "Pick the minimum among them.",
          "We cannot easily optimize space to O(1) because we need the last K values. Space O(N) or O(K)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "O(N*K) Solution.",
        explanations: [
          "dp array of size N.",
          "dp[0] = 0.",
          "Loop i from 1 to N-1.",
          "Inner loop j from 1 to K (check bounds).",
          "Update minSteps."
        ],
        codeLines: [
          "public int solve(int n, int[] height, int k) {",
          "    int[] dp = new int[n];",
          "    dp[0] = 0;",
          "    for (int i = 1; i < n; i++) {",
          "        int minSteps = Integer.MAX_VALUE;",
          "        for (int j = 1; j <= k; j++) {",
          "            if (i - j >= 0) {",
          "                int jump = dp[i - j] + Math.abs(height[i] - height[i - j]);",
          "                minSteps = Math.min(minSteps, jump);",
          "            }",
          "        }",
          "        dp[i] = minSteps;",
          "    }",
          "    return dp[n - 1];",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Heights: [10, 30, 40, 50, 20], K=3.",
        frames: [
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0. dp[0]=0." },
          { array: [0, 20], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1. From 0: 20. dp[1]=20." },
          { array: [0, 20, 30], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "i=2. From 1: 20+10=30. From 0: 0+30=30. dp[2]=30." },
          { array: [0, 20, 30, 40], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "i=3. From 2: 30+10=40. From 1: 20+20=40. From 0: 0+40=40. dp[3]=40." },
          { array: [0, 20, 30, 40, 30], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "i=4. From 3: 40+30=70. From 2: 30+20=50. From 1: 20+10=30. dp[4]=30." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "More power, more choices.",
        takeaways: [
          "Complexity increases linearly with K.",
          "If K is small, it's fast.",
          "If K is N, it's O(N^2)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Sliding Window Min?",
        task: "Can we optimize the inner loop?",
        solution: "If cost function was simpler (e.g., just dp[i-j]), we could use a Deque (Sliding Window Minimum).",
        explanation: "But here cost depends on height difference, so standard Deque doesn't apply directly."
      }
    }
  ]
};
