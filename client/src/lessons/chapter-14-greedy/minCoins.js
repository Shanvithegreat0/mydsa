import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const minCoinsLesson = {
  id: 'min-coins',
  chapterId: 14,
  title: "Find Minimum Number of Coins",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Making Change",
        paragraphs: [
          "Shanvi, you need to make change for Value V.",
          "You have infinite supply of coins: {1, 2, 5, 10, 20, 50, 100, 500, 1000}.",
          "Use minimum number of coins."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Value 49. Coins?",
        options: [
          { text: "49 x 1", feedback: "Too many." },
          { text: "20+20+5+2+2", feedback: "5 coins. Correct." },
          { text: "10+10+10+10+5+2+2", feedback: "7 coins." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Try random?",
        issues: [
          "We instinctively pick the largest coin possible.",
          "For 49, we can't pick 50.",
          "Largest < 49 is 20.",
          "Remaining 29. Largest is 20.",
          "Remaining 9. Largest is 5.",
          "Remaining 4. Largest is 2.",
          "Remaining 2. Largest is 2."
        ],
        codeSnippet: `
// Greedy works for standard currency
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Greedy Strategy.",
        paragraphs: [
          "Sort coins descending.",
          "Iterate through coins.",
          "While value >= coin, subtract coin, add to result.",
          "This works because standard denominations are 'canonical' (each is a multiple or sum of smaller ones)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Coins array: {1, 2, 5, ... 1000}.",
          "Loop backwards (largest first).",
          "While V >= coins[i]: V -= coins[i], count++.",
          "Return list of coins."
        ],
        codeLines: [
          "public List<Integer> minCoins(int V) {",
          "    int[] coins = {1, 2, 5, 10, 20, 50, 100, 500, 1000};",
          "    List<Integer> ans = new ArrayList<>();",
          "    for (int i = coins.length - 1; i >= 0; i--) {",
          "        while (V >= coins[i]) {",
          "            V -= coins[i];",
          "            ans.add(coins[i]);",
          "        }",
          "    }",
          "    return ans;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Value: 49.",
        frames: [
          { array: [20], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pick 20. Rem: 29." },
          { array: [20, 20], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pick 20. Rem: 9." },
          { array: [20, 20, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pick 5. Rem: 4." },
          { array: [20, 20, 5, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pick 2. Rem: 2." },
          { array: [20, 20, 5, 2, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pick 2. Rem: 0. Done." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Big bills first.",
        takeaways: [
          "Greedy is O(V) in worst case (all 1s), or O(1) if V is small.",
          "Actually O(N) where N is number of denominations."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "When Greedy Fails?",
        task: "Coins: {1, 3, 4}. Target 6.",
        solution: "Greedy: 4 + 1 + 1 = 3 coins. Optimal: 3 + 3 = 2 coins.",
        explanation: "For arbitrary coin systems, use DP (Coin Change problem)."
      }
    }
  ]
};
