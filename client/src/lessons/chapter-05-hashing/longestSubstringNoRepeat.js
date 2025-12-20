import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const longestSubstringNoRepeatLesson = {
  id: 'longest-substring-no-repeat',
  chapterId: 5,
  title: "Longest Substring Without Repeating Characters",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Unique Characters",
        paragraphs: [
          "Shanvi, we want to find the longest part of a string where no character appears twice.",
          "Example: 'abcabcbb'.",
          "'abc' is valid (len 3). 'abca' is invalid (a repeats)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "String: 'pwwkew'. Longest unique substring?",
        options: [
          { text: "'pww'", feedback: "w repeats." },
          { text: "'wke'", feedback: "Correct! Length 3." },
          { text: "'wkew'", feedback: "w repeats." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check all substrings.",
        issues: [
          "Generate every substring.",
          "Check if it has duplicates.",
          "O(N^3) or O(N^2).",
          "Too slow."
        ],
        codeSnippet: `
for i... for j... checkUnique(s.substring(i, j))
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Sliding Window + Map.",
        paragraphs: [
          "Use two pointers, Left and Right.",
          "Move Right to expand the window.",
          "If we see a duplicate character that is INSIDE our current window, jump Left forward.",
          "Jump Left to (Previous Index of Char + 1).",
          "Store {Char -> Last Index} in Map."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Optimized Sliding Window.",
        explanations: [
          "Map stores last seen index of char.",
          "Iterate Right from 0 to n.",
          "If char in map, update Left = max(Left, map.get(char) + 1).",
          "Update map with current index.",
          "MaxLen = max(MaxLen, Right - Left + 1)."
        ],
        codeLines: [
          "public int lengthOfLongestSubstring(String s) {",
          "    Map<Character, Integer> map = new HashMap<>();",
          "    int left = 0;",
          "    int maxLen = 0;",
          "    for (int right = 0; right < s.length(); right++) {",
          "        char c = s.charAt(right);",
          "        if (map.containsKey(c)) {",
          "            left = Math.max(left, map.get(c) + 1);",
          "        }",
          "        map.put(c, right);",
          "        maxLen = Math.max(maxLen, right - left + 1);",
          "    }",
          "    return maxLen;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tracing 'abcabcbb'.",
        frames: [
          { array: [0, 1, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "R=0(a), R=1(b), R=2(c). Map: {a:0, b:1, c:2}. Len: 3." },
          { array: [0, 1, 2, 3], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "R=3(a). 'a' seen at 0. Left jumps to 0+1=1. Window: 'bca'. Len: 3." },
          { array: [0, 1, 2, 3, 4], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "R=4(b). 'b' seen at 1. Left jumps to 1+1=2. Window: 'cab'. Len: 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Don't look back, unless you have to.",
        takeaways: [
          "Sliding window is efficient because Left never moves backward.",
          "O(N) time.",
          "Map stores the most recent position to allow O(1) jumps."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Longest Substring with K distinct chars?",
        task: "Different problem.",
        solution: "Use map size to track count of distinct chars. Shrink left if map size > K.",
        explanation: "This is a standard variable-size sliding window pattern."
      }
    }
  ]
};
