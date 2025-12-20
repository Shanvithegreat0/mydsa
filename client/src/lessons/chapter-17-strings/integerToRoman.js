import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const integerToRomanLesson = {
  id: 'integer-to-roman',
  chapterId: 17,
  title: "Integer to Roman",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Building History",
        paragraphs: [
          "Shanvi, now convert Integer to Roman.",
          "Example: 1994 -> MCMXCIV.",
          "We need to handle subtractions like IV, IX, XL, XC, CD, CM."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "58 -> ?",
        options: [
          { text: "LIIIIIIII", feedback: "No more than 3 Is." },
          { text: "LVIII", feedback: "Correct! 50 + 5 + 3." },
          { text: "LIX", feedback: "That's 59." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Modulo Arithmetic?",
        issues: [
          "Extract digits.",
          "Convert each digit based on place value.",
          "Complex logic for 4 and 9.",
          "Doable but verbose."
        ],
        codeSnippet: `
if digit == 4 return "IV"
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Greedy Subtraction.",
        paragraphs: [
          "Store values and symbols in descending order.",
          "Values: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1].",
          "Symbols: [M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, I].",
          "Loop through values.",
          "While num >= value: Append symbol, num -= value."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Arrays for val and sym.",
          "StringBuilder.",
          "Loop i from 0 to 12.",
          "While num >= val[i]: append sym[i], subtract val[i].",
          "Return string."
        ],
        codeLines: [
          "public String intToRoman(int num) {",
          "    int[] val = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};",
          "    String[] sym = {\"M\", \"CM\", \"D\", \"CD\", \"C\", \"XC\", \"L\", \"XL\", \"X\", \"IX\", \"V\", \"IV\", \"I\"};",
          "    StringBuilder sb = new StringBuilder();",
          "    for (int i = 0; i < val.length; i++) {",
          "        while (num >= val[i]) {",
          "            num -= val[i];",
          "            sb.append(sym[i]);",
          "        }",
          "    }",
          "    return sb.toString();",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Num: 1994.",
        frames: [
          { array: [1994], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: ">= 1000? Yes. Append M. Num=994." },
          { array: [994], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: ">= 900? Yes. Append CM. Num=94." },
          { array: [94], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: ">= 90? Yes. Append XC. Num=4." },
          { array: [4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: ">= 4? Yes. Append IV. Num=0." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Greedy works again.",
        takeaways: [
          "Hardcoding the special subtraction cases (CM, CD, etc.) simplifies logic.",
          "Time: O(1) (Bounded by max int size).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Excel Sheet Column?",
        task: "1 -> A, 28 -> AB.",
        solution: "Base 26 conversion.",
        explanation: "Similar mapping logic."
      }
    }
  ]
};
