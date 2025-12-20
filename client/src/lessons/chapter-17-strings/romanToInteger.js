import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const romanToIntegerLesson = {
  id: 'roman-to-integer',
  chapterId: 17,
  title: "Roman to Integer",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Ancient Math",
        paragraphs: [
          "Shanvi, convert Roman numerals to Integer.",
          "I=1, V=5, X=10, L=50, C=100, D=500, M=1000.",
          "IV = 4 (5-1), VI = 6 (5+1)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "MCMXCIV = ?",
        options: [
          { text: "1994", feedback: "Correct! M(1000) CM(900) XC(90) IV(4)." },
          { text: "1894", feedback: "CM is 900." },
          { text: "2104", feedback: "Too high." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Parse pairs?",
        issues: [
          "Look ahead for special pairs (IV, IX, etc).",
          "Lots of if-else checks.",
          "Messy."
        ],
        codeSnippet: `
if (s[i]=='I' && s[i+1]=='V') ...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Backwards Scan.",
        paragraphs: [
          "Iterate from Right to Left.",
          "Keep track of previous value.",
          "If current value < previous value: Subtract it.",
          "Else: Add it.",
          "Example IV: V(5). I(1) < 5 -> Subtract 1. Total 4."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Map + Loop.",
        explanations: [
          "Map chars to values.",
          "Loop i from N-1 to 0.",
          "Val = map[s[i]].",
          "If val < prev: res -= val.",
          "Else: res += val.",
          "Update prev = val."
        ],
        codeLines: [
          "public int romanToInt(String s) {",
          "    Map<Character, Integer> m = new HashMap<>();",
          "    m.put('I', 1); m.put('V', 5); m.put('X', 10);",
          "    m.put('L', 50); m.put('C', 100); m.put('D', 500); m.put('M', 1000);",
          "    int res = 0, prev = 0;",
          "    for (int i = s.length() - 1; i >= 0; i--) {",
          "        int curr = m.get(s.charAt(i));",
          "        if (curr < prev) res -= curr;",
          "        else res += curr;",
          "        prev = curr;",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Str: 'MCMXCIV'.",
        frames: [
          { array: [4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "V(5). Res=5. Prev=5." },
          { array: [4, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "I(1) < 5. Res=5-1=4. Prev=1." },
          { array: [4, 1, 100], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "C(100) > 1. Res=4+100=104. Prev=100." },
          { array: [4, 1, 100, 10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "X(10) < 100. Res=104-10=94. Prev=10." },
          { array: [94, 1000], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "M(1000) > 10. Res=94+1000=1094. Prev=1000." },
          { array: [1094, 100], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "C(100) < 1000. Res=1094-100=994. Prev=100." },
          { array: [994, 1000], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "M(1000) > 100. Res=994+1000=1994." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "When in Rome...",
        takeaways: [
          "Right-to-left processing simplifies context dependency.",
          "Time: O(N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Int to Roman?",
        task: "Reverse it?",
        solution: "Greedy approach using values array.",
        explanation: "Next lesson!"
      }
    }
  ]
};
