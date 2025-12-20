import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const fractionalKnapsackLesson = {
  id: 'fractional-knapsack',
  chapterId: 14,
  title: "Fractional Knapsack",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Powdered Gold",
        paragraphs: [
          "Shanvi, you are a thief with a bag of capacity W.",
          "There are items with Value and Weight.",
          "Unlike the 0/1 Knapsack (DP), here you can take FRACTIONS of items.",
          "Like gold dust or flour."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Item A: 10kg, $60. Item B: 20kg, $100. Bag: 10kg. Pick?",
        options: [
          { text: "B ($100)", feedback: "B is 20kg. Can only take half ($50)." },
          { text: "A ($60)", feedback: "Correct! A fits completely. $60 > $50." },
          { text: "Half of A, Half of B", feedback: "That's $30 + $50 = $80? Wait. 5kg A ($30) + 5kg B ($25) = $55. Still worse." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Max Value?",
        issues: [
          "Pick item with highest absolute value?",
          "No. A heavy item might have low value per kg.",
          "We want the most 'bang for the buck'."
        ],
        codeSnippet: `
// Sort by Value/Weight ratio
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Value Per Unit Weight.",
        paragraphs: [
          "Calculate Ratio = Value / Weight for each item.",
          "Sort items by Ratio (Descending).",
          "Take as much as possible of the best item.",
          "If bag full, stop.",
          "If item too big, take fraction to fill bag."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Greedy Implementation.",
        explanations: [
          "Sort by ratio.",
          "Loop items.",
          "If current weight + item.weight <= W: Take full. Add value.",
          "Else: Take (W - current) * ratio. Add value. Break."
        ],
        codeLines: [
          "class Item { int value, weight; }",
          "public double fractionalKnapsack(int W, Item arr[], int n) {",
          "    Arrays.sort(arr, (a, b) -> Double.compare((double)b.value/b.weight, (double)a.value/a.weight));",
          "    double totalValue = 0.0;",
          "    int curWeight = 0;",
          "    for (int i = 0; i < n; i++) {",
          "        if (curWeight + arr[i].weight <= W) {",
          "            curWeight += arr[i].weight;",
          "            totalValue += arr[i].value;",
          "        } else {",
          "            int remain = W - curWeight;",
          "            totalValue += ((double)arr[i].value / arr[i].weight) * remain;",
          "            break;",
          "        }",
          "    }",
          "    return totalValue;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "W=50. Items: A(10, 60), B(20, 100), C(30, 120).",
        frames: [
          { array: [6, 5, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Ratios: A=6, B=5, C=4. Sorted: A, B, C." },
          { array: [60], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Take A (10kg). Bag: 10/50. Val: 60." },
          { array: [60, 100], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Take B (20kg). Bag: 30/50. Val: 160." },
          { array: [60, 100, 80], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Take C (30kg). Only 20kg space left. Take 2/3 of C. Val: 160 + (4*20) = 240." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Every gram counts.",
        takeaways: [
          "Fractional -> Greedy works.",
          "0/1 (Whole items only) -> Greedy fails (Need DP).",
          "Time: O(N log N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "0/1 Knapsack?",
        task: "Why does greedy fail there?",
        solution: "Because taking the 'best ratio' item might waste space that could be better filled by a combination of other items.",
        explanation: "Example: Bag 50. A(10, 60), B(20, 100), C(30, 120). Greedy takes A, B (Val 160, Wt 30). Leaves 20 empty. Better: B, C (Val 220, Wt 50)."
      }
    }
  ]
};
