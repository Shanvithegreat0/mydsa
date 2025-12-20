import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const repeatMissingLesson = {
  id: 'repeat-missing',
  chapterId: 2,
  title: "Find Repeat & Missing Number",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Lost Badge",
        paragraphs: [
          "Shanvi, imagine a team of N employees with badges numbered 1 to N.",
          "One person lost their badge, and another person accidentally took two badges.",
          "So you have a list where one number is missing, and one is repeated. Find them!"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If the list is [3, 1, 2, 5, 3], what is missing and what is repeated?",
        options: [
          { text: "Missing: 4, Repeated: 3", feedback: "Correct! 1, 2, 3, 3, 5. 4 is gone." },
          { text: "Missing: 5, Repeated: 1", feedback: "Check again." },
          { text: "Missing: 4, Repeated: 5", feedback: "5 is there." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Use a frequency array (hash map).",
        issues: [
          "Create an array of size N+1 to count occurrences.",
          "Iterate and count.",
          "Check which index has count 2 (repeated) and count 0 (missing).",
          "This uses O(N) space. Can we do it with O(1) space?"
        ],
        codeSnippet: `
int[] count = new int[n+1];
for (int x : arr) count[x]++;
// Check count array...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Math is your friend. Sum of N numbers and Sum of Squares.",
        paragraphs: [
          "S = Sum of array elements.",
          "SN = Sum of 1 to N = N*(N+1)/2.",
          "S - SN = X - Y (where X is repeated, Y is missing).",
          "We have one equation with two variables. We need another.",
          "Use Sum of Squares (S2 and S2N) to get X^2 - Y^2."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Using Math equations to solve for X and Y.",
        explanations: [
          "Calculate S (sum of array) and S2 (sum of squares).",
          "Calculate expected SN and S2N.",
          "val1 = S - SN = X - Y.",
          "val2 = S2 - S2N = X^2 - Y^2 = (X-Y)(X+Y).",
          "X + Y = val2 / val1.",
          "Now we have (X-Y) and (X+Y). Add them to find X."
        ],
        codeLines: [
          "public int[] findTwoElement(int arr[], int n) {",
          "    long S = 0, S2 = 0;",
          "    long SN = (long)n * (n + 1) / 2;",
          "    long S2N = (long)n * (n + 1) * (2 * n + 1) / 6;",
          "    for (int x : arr) {",
          "        S += x;",
          "        S2 += (long)x * x;",
          "    }",
          "    long val1 = S - SN; // X - Y",
          "    long val2 = S2 - S2N; // X^2 - Y^2",
          "    val2 = val2 / val1; // X + Y",
          "    long x = (val1 + val2) / 2;",
          "    long y = x - val1;",
          "    return new int[]{(int)x, (int)y};",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Visualizing the math.",
        frames: [
          { array: [3, 1, 2, 5, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "N=5. Expected Sum=15. Actual Sum=14. Diff = -1 (X-Y)." },
          { array: [3, 1, 2, 5, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Expected SqSum=55. Actual SqSum=48. Diff = -7 (X^2-Y^2)." },
          { array: [3, 1, 2, 5, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "X+Y = -7 / -1 = 7. X-Y = -1. So 2X = 6 -> X=3. Y=4." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Mathematics is the language of the universe.",
        takeaways: [
          "We solved it in O(N) time and O(1) space.",
          "Be careful with integer overflow! Use 'long'.",
          "XOR is another way to solve this."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Can you solve it using XOR?",
        task: "Try to implement the XOR method.",
        solution: "XOR all elements with 1 to N. The result is X^Y. Then find the rightmost set bit to separate them.",
        explanation: "This is a bit more complex but safer against overflow."
      }
    }
  ]
};
