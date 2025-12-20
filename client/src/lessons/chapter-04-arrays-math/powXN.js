import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const powXNLesson = {
  id: 'pow-x-n',
  chapterId: 4,
  title: "Power Function (x^n)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Exponential Growth",
        paragraphs: [
          "Shanvi, calculating 2^10 is easy: 2*2*2... ten times.",
          "But what if you need 2^1000000000?",
          "Multiplying one by one will take forever."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "To calculate 2^8, do you need 7 multiplications?",
        options: [
          { text: "Yes, 2*2*2*2*2*2*2*2.", feedback: "That's the slow way." },
          { text: "No, calculate 2^4 and square it.", feedback: "Exactly! (2^4)^2 = 2^8. Much faster." },
          { text: "Just guess.", feedback: "Math is precise!" }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Loop N times.",
        issues: [
          "O(N) time complexity.",
          "If N is 2 billion, it takes 2 billion steps.",
          "We need O(log N)."
        ],
        codeSnippet: `
double ans = 1.0;
for(int i=0; i<n; i++) ans *= x;
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Binary Exponentiation.",
        paragraphs: [
          "If n is even: x^n = (x^2)^(n/2).",
          "If n is odd: x^n = x * x^(n-1).",
          "We cut n in half at every step.",
          "This is logarithmic time complexity."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Iterative Binary Exponentiation.",
        explanations: [
          "Handle negative n by taking reciprocal.",
          "Loop while n > 0.",
          "If n is odd, multiply ans by x.",
          "Then square x (x = x * x) and halve n (n = n / 2).",
          "Use 'long' for n to avoid overflow when n = Integer.MIN_VALUE."
        ],
        codeLines: [
          "public double myPow(double x, int n) {",
          "    long nn = n;",
          "    if (nn < 0) nn = -nn;",
          "    double ans = 1.0;",
          "    while (nn > 0) {",
          "        if (nn % 2 == 1) {",
          "            ans = ans * x;",
          "            nn = nn - 1;",
          "        } else {",
          "            x = x * x;",
          "            nn = nn / 2;",
          "        }",
          "    }",
          "    if (n < 0) return 1.0 / ans;",
          "    return ans;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Calculating 2^10.",
        frames: [
          { array: [10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "n=10 (even). x=2. ans=1. Square x->4. n->5." },
          { array: [5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "n=5 (odd). ans=1*4=4. n->4." },
          { array: [4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "n=4 (even). x=4*4=16. n->2." },
          { array: [2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "n=2 (even). x=16*16=256. n->1." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "n=1 (odd). ans=4*256=1024. n->0. Done!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Work smarter, not harder.",
        takeaways: [
          "We reduced 10 steps to 5 steps. For 1 billion, we reduce to ~30 steps!",
          "This is the power of O(log N).",
          "Always handle edge cases like n < 0."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Modular Exponentiation?",
        task: "Calculate (x^n) % m.",
        solution: "Apply % m at every multiplication step.",
        explanation: "This prevents overflow for very large numbers, common in cryptography."
      }
    }
  ]
};
