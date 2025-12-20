import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const lemonadeChangeLesson = {
  id: 'lemonade-change',
  chapterId: 14,
  title: "Lemonade Change",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Lemonade Stand",
        paragraphs: [
          "Shanvi, you sell lemonade for $5.",
          "Customers pay with $5, $10, or $20.",
          "You start with $0.",
          "Can you give correct change to everyone?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Queue: 5, 5, 10. Can you serve?",
        options: [
          { text: "No", feedback: "Wait. 5: Keep. 5: Keep. 10: Give 5 back. Yes." },
          { text: "Yes", feedback: "Correct! You have two $5s. Give one to the $10 guy." },
          { text: "Maybe", feedback: "Deterministic." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Simulation.",
        issues: [
          "Keep track of count of $5, $10, $20 bills.",
          "If customer gives $5: five++.",
          "If customer gives $10: ten++, five-- (need change).",
          "If customer gives $20: twenty++, need $15 change."
        ],
        codeSnippet: `
// Logic for $20 is tricky
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Greedy for $20.",
        paragraphs: [
          "To give $15 change, you can give:",
          "Option A: $10 + $5.",
          "Option B: $5 + $5 + $5.",
          "Which is better? Option A!",
          "Why? Because $5 bills are more versatile. Keep them as long as possible."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "five = 0, ten = 0.",
          "Loop bills.",
          "If 5: five++.",
          "If 10: if five>0 five--, ten++. Else return false.",
          "If 20: if ten>0 and five>0, ten--, five--. Else if five>=3, five-=3. Else return false."
        ],
        codeLines: [
          "public boolean lemonadeChange(int[] bills) {",
          "    int five = 0, ten = 0;",
          "    for (int bill : bills) {",
          "        if (bill == 5) {",
          "            five++;",
          "        } else if (bill == 10) {",
          "            if (five == 0) return false;",
          "            five--;",
          "            ten++;",
          "        } else {",
          "            if (ten > 0 && five > 0) {",
          "                ten--;",
          "                five--;",
          "            } else if (five >= 3) {",
          "                five -= 3;",
          "            } else {",
          "                return false;",
          "            }",
          "        }",
          "    }",
          "    return true;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Bills: [5, 5, 10, 10, 20].",
        frames: [
          { array: [5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Get 5. Wallet: {5:1}." },
          { array: [5, 5], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Get 5. Wallet: {5:2}." },
          { array: [5, 5, 10], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Get 10. Give 5. Wallet: {5:1, 10:1}." },
          { array: [5, 5, 10, 10], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Get 10. Give 5. Wallet: {5:0, 10:2}." },
          { array: [5, 5, 10, 10, 20], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "Get 20. Need 15. Have 10s but no 5s. Fail!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Save the small stuff.",
        takeaways: [
          "Greedy choice: Spend $10 before $5s.",
          "Time: O(N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "General Change?",
        task: "What if bills were random?",
        solution: "Then it becomes a subset sum / knapsack problem.",
        explanation: "Greedy only works for specific coin systems."
      }
    }
  ]
};
