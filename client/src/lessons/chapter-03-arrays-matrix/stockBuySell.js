import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const stockBuySellLesson = {
  id: 'stock-buy-sell',
  chapterId: 3,
  title: "Best Time to Buy and Sell Stock",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Buy Low, Sell High",
        paragraphs: [
          "Shanvi, you have a time machine. You know the stock prices for the next few days.",
          "You can buy ONCE and sell ONCE.",
          "Maximize your profit."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Prices: [7, 1, 5, 3, 6, 4]. When to buy/sell?",
        options: [
          { text: "Buy at 7, Sell at 1", feedback: "That's a loss!" },
          { text: "Buy at 1, Sell at 6", feedback: "Correct! Profit = 5." },
          { text: "Buy at 1, Sell at 5", feedback: "Profit = 4. We can do better." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check every pair.",
        issues: [
          "For every day i, check every future day j.",
          "Calculate profit[j] - profit[i].",
          "O(N^2). Too slow for stock markets!"
        ],
        codeSnippet: `
for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
        maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
    }
}
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Track the Minimum Price so far.",
        paragraphs: [
          "As you walk through the days, keep track of the lowest price you've seen.",
          "For today's price, calculate: Profit = Today's Price - Min Price So Far.",
          "If this profit is better than our record, update the record."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Single Pass O(N).",
        explanations: [
          "Initialize minPrice to Infinity.",
          "Initialize maxProfit to 0.",
          "Loop through prices.",
          "Update minPrice if current is lower.",
          "Else, update maxProfit if (current - minPrice) is higher."
        ],
        codeLines: [
          "public int maxProfit(int[] prices) {",
          "    int minPrice = Integer.MAX_VALUE;",
          "    int maxProfit = 0;",
          "    for (int price : prices) {",
          "        if (price < minPrice) {",
          "            minPrice = price;",
          "        } else if (price - minPrice > maxProfit) {",
          "            maxProfit = price - minPrice;",
          "        }",
          "    }",
          "    return maxProfit;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tracking the valley.",
        frames: [
          { array: [7, 1, 5, 3, 6, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "7. Min: 7. Profit: 0." },
          { array: [7, 1, 5, 3, 6, 4], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "1. Min: 1. Profit: 0." },
          { array: [7, 1, 5, 3, 6, 4], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "5. Min: 1. Profit: 5-1=4." },
          { array: [7, 1, 5, 3, 6, 4], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "6. Min: 1. Profit: 6-1=5. New Max!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "History helps predict the future profit.",
        takeaways: [
          "We only need to know the minimum in the *past*.",
          "This is a greedy approach.",
          "O(N) time, O(1) space."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What if you can buy/sell multiple times?",
        task: "Try Stock Buy & Sell II.",
        solution: "Just add up every positive slope (price[i] > price[i-1]).",
        explanation: "If prices go 1 -> 5 -> 10, buying at 1 selling at 10 is same as (5-1) + (10-5)."
      }
    }
  ]
};
