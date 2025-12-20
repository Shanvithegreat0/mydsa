import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const maxSumNonAdjacentLesson = {
  id: 'max-sum-non-adjacent',
  chapterId: 12,
  title: "Maximum Sum of Non-Adjacent Elements",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Social Distancing",
        paragraphs: [
          "Shanvi, you want to pick numbers from an array to maximize their sum.",
          "Rule: You cannot pick two numbers that are next to each other.",
          "Example: [2, 1, 4, 9]. Pick 2 and 9? Yes. Pick 1 and 4? Yes. Pick 2 and 1? No."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Array: [2, 1, 4, 9]. Max Sum?",
        options: [
          { text: "10", feedback: "1 + 9 = 10." },
          { text: "11", feedback: "2 + 9 = 11. Correct!" },
          { text: "6", feedback: "2 + 4 = 6." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Pick or Not Pick.",
        issues: [
          "At index i:",
          "Pick i: Add arr[i], then move to i-2 (skip i-1).",
          "Not Pick i: Move to i-1.",
          "Recursion: f(i) = max(arr[i] + f(i-2), f(i-1))."
        ],
        codeSnippet: `
return max(arr[i] + f(i-2), f(i-1));
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "House Robber Logic.",
        paragraphs: [
          "This is exactly the 'House Robber' problem.",
          "We can optimize space.",
          "We only need the previous two maximums to decide the current one."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Space Optimized DP.",
        explanations: [
          "prev = max sum ending at i-1.",
          "prev2 = max sum ending at i-2.",
          "pick = arr[i] + prev2.",
          "notPick = prev.",
          "curr = max(pick, notPick)."
        ],
        codeLines: [
          "public int rob(int[] nums) {",
          "    int n = nums.length;",
          "    if (n == 0) return 0;",
          "    int prev = nums[0];",
          "    int prev2 = 0;",
          "    for (int i = 1; i < n; i++) {",
          "        int pick = nums[i];",
          "        if (i > 1) pick += prev2;",
          "        int notPick = prev;",
          "        int curr = Math.max(pick, notPick);",
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
        description: "Array: [2, 1, 4, 9].",
        frames: [
          { array: [2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0. Max: 2. Prev=2, Prev2=0." },
          { array: [2, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1. Pick: 1+0=1. NotPick: 2. Max: 2. Prev=2, Prev2=2." },
          { array: [2, 1, 4], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "i=2. Pick: 4+2=6. NotPick: 2. Max: 6. Prev=6, Prev2=2." },
          { array: [2, 1, 4, 9], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "i=3. Pick: 9+2=11. NotPick: 6. Max: 11." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Respect personal space.",
        takeaways: [
          "The constraint (i vs i-1) forces us to look back at i-2.",
          "Time: O(N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Circular Array?",
        task: "What if first and last are neighbors?",
        solution: "Run twice: Once 0 to N-2, Once 1 to N-1. Take max.",
        explanation: "You can't pick both first and last."
      }
    }
  ]
};
