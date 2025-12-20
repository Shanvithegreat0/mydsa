import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const minWindowSubstringLesson = {
  id: 'min-window-substring',
  chapterId: 15,
  title: "Minimum Window Substring",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Finding the Needle",
        paragraphs: [
          "Shanvi, given string S and string T.",
          "Find the smallest substring in S that contains ALL characters of T.",
          "Example: S='ADOBECODEBANC', T='ABC'. Answer: 'BANC'."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "S='AA', T='AA'. Min Window?",
        options: [
          { text: "'A'", feedback: "Need two As." },
          { text: "'AA'", feedback: "Correct! Contains two As." },
          { text: "None", feedback: "It exists." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check all substrings.",
        issues: [
          "Generate all substrings.",
          "Check if it contains T.",
          "Keep min length.",
          "O(N^3)."
        ],
        codeSnippet: `
// Brute force
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Expand and Shrink.",
        paragraphs: [
          "1. Expand Right until we have all chars of T.",
          "2. Once valid, try to Shrink Left to make it smaller.",
          "3. If it becomes invalid, stop shrinking and expand Right again.",
          "Use a 'required' counter to track validity."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Hard Implementation.",
        explanations: [
          "Map/Array for T's frequencies.",
          "count = T.length().",
          "Loop right.",
          "If char in map > 0, count--.",
          "Decrement map value.",
          "While count == 0 (Valid):",
          "  Update minLen.",
          "  Increment map value of left char.",
          "  If map value > 0, count++.",
          "  left++."
        ],
        codeLines: [
          "public String minWindow(String s, String t) {",
          "    int[] map = new int[128];",
          "    for (char c : t.toCharArray()) map[c]++;",
          "    int count = t.length(), begin = 0, head = 0, d = Integer.MAX_VALUE;",
          "    for (int end = 0; end < s.length(); end++) {",
          "        if (map[s.charAt(end)]-- > 0) count--;",
          "        while (count == 0) {",
          "            if (end - begin + 1 < d) d = (end - (head = begin) + 1);",
          "            if (map[s.charAt(begin++)]++ == 0) count++;",
          "        }",
          "    }",
          "    return d == Integer.MAX_VALUE ? \"\" : s.substring(head, head + d);",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "S='ADOBECODEBANC', T='ABC'.",
        frames: [
          { array: ['A', 'D', 'O', 'B', 'E', 'C'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Expand to 'ADOBEC'. Contains A, B, C. Valid. Len 6." },
          { array: ['D', 'O', 'B', 'E', 'C'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Shrink A. Invalid. Expand..." },
          { array: ['B', 'A', 'N', 'C'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Eventually reach 'BANC'. Contains A, B, C. Len 4. Min." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Minimalism.",
        takeaways: [
          "One of the hardest sliding window problems.",
          "The logic of map[char]++ and map[char]-- is tricky but elegant.",
          "Time: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Permutation?",
        task: "Find ALL anagrams of T in S?",
        solution: "Fixed size window K=T.length().",
        explanation: "Min Window is variable size, Anagrams is fixed size."
      }
    }
  ]
};
