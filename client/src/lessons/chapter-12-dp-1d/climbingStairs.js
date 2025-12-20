import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const climbingStairsLesson = {
  id: 'climbing-stairs',
  chapterId: 12,
  title: "Climbing Stairs",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "One Step or Two?",
        paragraphs: [
          "Shanvi, you are at the bottom of a staircase with N steps.",
          "You can climb 1 step or 2 steps at a time.",
          "How many distinct ways can you reach the top?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "N=3. Ways?",
        options: [
          { text: "2", feedback: "1+1+1, 1+2. Missed 2+1." },
          { text: "3", feedback: "Correct! 1+1+1, 1+2, 2+1." },
          { text: "4", feedback: "Too many." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursion.",
        issues: [
          "f(n) = f(n-1) + f(n-2).",
          "Looks like Fibonacci.",
          "But plain recursion recalculates the same values many times.",
          "O(2^N). Too slow for N=50."
        ],
        codeSnippet: `
return climb(n-1) + climb(n-2);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Remember the Past (Memoization).",
        paragraphs: [
          "If we already know how many ways to reach step K, let's write it down.",
          "Next time we need it, just look it up.",
          "This turns O(2^N) into O(N)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Iterative DP (Space Optimized).",
        explanations: [
          "prev2 = ways to reach i-2.",
          "prev = ways to reach i-1.",
          "curr = prev + prev2.",
          "Shift variables: prev2 = prev, prev = curr."
        ],
        codeLines: [
          "public int climbStairs(int n) {",
          "    if (n <= 1) return 1;",
          "    int prev2 = 1;",
          "    int prev = 1;",
          "    for (int i = 2; i <= n; i++) {",
          "        int curr = prev + prev2;",
          "        prev2 = prev;",
          "        prev = curr;",
          "    }",
          "    return prev;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "N=4.",
        frames: [
          { array: [1, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Step 0: 1 way. Step 1: 1 way. Prev2=1, Prev=1." },
          { array: [1, 1, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Step 2: 1+1=2 ways. Prev2=1, Prev=2." },
          { array: [1, 2, 3], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Step 3: 1+2=3 ways. Prev2=2, Prev=3." },
          { array: [2, 3, 5], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Step 4: 2+3=5 ways. Result 5." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Don't repeat yourself.",
        takeaways: [
          "This is the Hello World of Dynamic Programming.",
          "Overlapping Subproblems + Optimal Substructure = DP.",
          "Space O(1) is possible because we only need the last 2 values."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Min Cost Climbing Stairs?",
        task: "Each step has a cost. Minimize total cost.",
        solution: "dp[i] = cost[i] + min(dp[i-1], dp[i-2]).",
        explanation: "Same structure, different recurrence relation."
      }
    }
  ]
};
