import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const frogJumpLesson = {
  id: 'frog-jump',
  chapterId: 12,
  title: "Frog Jump",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Energy Conservation",
        paragraphs: [
          "Shanvi, a frog wants to jump from stone 0 to stone N-1.",
          "It can jump 1 stone or 2 stones.",
          "Cost = |Height[i] - Height[j]|.",
          "Minimize total energy used."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Heights: [10, 30, 20]. Jump 0->1->2 vs 0->2?",
        options: [
          { text: "0->1->2: |10-30| + |30-20| = 30.", feedback: "Correct calculation." },
          { text: "0->2: |10-20| = 10.", feedback: "Correct calculation. 10 < 30. So 0->2 is better." },
          { text: "Both equal", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Greedy?",
        issues: [
          "Always pick the smaller jump?",
          "Not necessarily. A small jump might land you on a very high stone, causing a huge cost later.",
          "We need to explore all paths (Recursion)."
        ],
        codeSnippet: `
// Greedy fails
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "DP Recurrence.",
        paragraphs: [
          "To reach stone i:",
          "Option 1: Came from i-1. Cost = dp[i-1] + |h[i] - h[i-1]|.",
          "Option 2: Came from i-2. Cost = dp[i-2] + |h[i] - h[i-2]|.",
          "dp[i] = min(Option 1, Option 2)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Tabulation.",
        explanations: [
          "dp[0] = 0.",
          "Loop i from 1 to N-1.",
          "Calculate jumpOne and jumpTwo.",
          "Store min in dp[i].",
          "Space optimization possible (prev, prev2)."
        ],
        codeLines: [
          "public int frogJump(int n, int[] heights) {",
          "    int prev = 0;",
          "    int prev2 = 0;",
          "    for (int i = 1; i < n; i++) {",
          "        int jumpTwo = Integer.MAX_VALUE;",
          "        int jumpOne = prev + Math.abs(heights[i] - heights[i - 1]);",
          "        if (i > 1) jumpTwo = prev2 + Math.abs(heights[i] - heights[i - 2]);",
          "        int curr = Math.min(jumpOne, jumpTwo);",
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
        description: "Heights: [10, 30, 40, 20].",
        frames: [
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0. Cost 0." },
          { array: [0, 20], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1. From 0: |30-10|=20. Min: 20." },
          { array: [0, 20, 30], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "i=2. From 1: 20+|40-30|=30. From 0: 0+|40-10|=30. Min: 30." },
          { array: [0, 20, 30, 20], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "i=3. From 2: 30+|20-40|=50. From 1: 20+|20-30|=30. Min: 30." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Look before you leap.",
        takeaways: [
          "This is a variation of Climbing Stairs with costs.",
          "Greedy doesn't work because decisions have future consequences.",
          "Time: O(N), Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "K Jumps?",
        task: "What if frog can jump up to K steps?",
        solution: "Loop j from 1 to K. dp[i] = min(dp[i-j] + cost).",
        explanation: "Generalizes the 2-step logic."
      }
    }
  ]
};
