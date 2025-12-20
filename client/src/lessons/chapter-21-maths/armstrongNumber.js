import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const armstrongNumberLesson = {
  id: 'armstrong-number',
  chapterId: 21,
  title: "Armstrong Number",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Narcissistic Numbers",
        paragraphs: [
          "Shanvi, an Armstrong number (of order K) is a number that is equal to the sum of its digits each raised to the power of K.",
          "For 3-digit numbers, K=3.",
          "153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "370?",
        options: [
          { text: "No", feedback: "Check math." },
          { text: "Yes", feedback: "Correct! 27 + 343 + 0 = 370." },
          { text: "Maybe", feedback: "It is." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Extract and Sum.",
        issues: [
          "Count digits (K).",
          "Extract each digit.",
          "Raise to power K.",
          "Sum them up.",
          "Compare with original."
        ],
        codeSnippet: `
sum += Math.pow(digit, k)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "No Tricks.",
        paragraphs: [
          "This is a straightforward simulation.",
          "Just be careful with the original number (store it in a temp variable).",
          "Math.pow returns double, cast to int."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Count digits.",
          "Temp = n.",
          "Loop while temp > 0.",
          "Sum += pow(digit, digits).",
          "Return sum == n."
        ],
        codeLines: [
          "public boolean isArmstrong(int n) {",
          "    int original = n;",
          "    int digits = String.valueOf(n).length();",
          "    int sum = 0;",
          "    while (n > 0) {",
          "        int digit = n % 10;",
          "        sum += Math.pow(digit, digits);",
          "        n /= 10;",
          "    }",
          "    return sum == original;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "N=153.",
        frames: [
          { array: [153], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Digits=3. Sum=0." },
          { array: [15], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 3. 3^3=27. Sum=27." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 5. 5^3=125. Sum=27+125=152." },
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 1. 1^3=1. Sum=152+1=153. Match!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Self love.",
        takeaways: [
          "Simple digit extraction practice.",
          "Time: O(log N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Precompute Powers?",
        task: "Optimize for many checks?",
        solution: "Precompute 0^K to 9^K.",
        explanation: "Avoids Math.pow overhead."
      }
    }
  ]
};
