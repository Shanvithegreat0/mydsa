import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const longestSubstringKUniqueLesson = {
  id: 'longest-substring-k-unique',
  chapterId: 15,
  title: "Longest Substring with K Unique Characters",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Variety Pack",
        paragraphs: [
          "Shanvi, find the longest substring that contains EXACTLY K unique characters.",
          "Example: 'aabbcc', K=2. 'aabb' (len 4) or 'bbcc' (len 4)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Str: 'araaci', K=2. Longest?",
        options: [
          { text: "'araa'", feedback: "Unique chars: 'a', 'r'. Count=2. Len=4. Correct!" },
          { text: "'araaci'", feedback: "Unique: a, r, c, i. Count=4." },
          { text: "'aaci'", feedback: "Unique: a, c, i. Count=3." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Generate all substrings.",
        issues: [
          "O(N^2) or O(N^3).",
          "Check unique count for each.",
          "Too slow."
        ],
        codeSnippet: `
for i: for j: checkUnique(sub)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Variable Sliding Window.",
        paragraphs: [
          "Expand window (Right pointer) adding characters to a Map.",
          "If Map size < K: Continue expanding.",
          "If Map size == K: Update max length.",
          "If Map size > K: Shrink window (Left pointer) until Map size == K."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Map + Two Pointers.",
        explanations: [
          "Map<Char, Count>.",
          "Loop right from 0 to N.",
          "Add char to map.",
          "While map.size() > K:",
          "  Decrement left char count.",
          "  If count becomes 0, remove from map.",
          "  left++.",
          "If map.size() == K, update maxLen."
        ],
        codeLines: [
          "public int longestkSubstr(String s, int k) {",
          "    Map<Character, Integer> map = new HashMap<>();",
          "    int left = 0, maxLen = -1;",
          "    for (int right = 0; right < s.length(); right++) {",
          "        char c = s.charAt(right);",
          "        map.put(c, map.getOrDefault(c, 0) + 1);",
          "        while (map.size() > k) {",
          "            char l = s.charAt(left);",
          "            map.put(l, map.get(l) - 1);",
          "            if (map.get(l) == 0) map.remove(l);",
          "            left++;",
          "        }",
          "        if (map.size() == k) maxLen = Math.max(maxLen, right - left + 1);",
          "    }",
          "    return maxLen;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Str: 'aabacbebebe', K=3.",
        frames: [
          { array: ['a', 'a', 'b'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Map: {a:2, b:1}. Size 2. Max: -1." },
          { array: ['a', 'a', 'b', 'a', 'c'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 'c'. Map: {a:3, b:1, c:1}. Size 3. Max: 5 ('aabac')." },
          { array: ['a', 'a', 'b', 'a', 'c', 'b'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 'b'. Map: {a:3, b:2, c:1}. Size 3. Max: 6 ('aabacb')." },
          { array: ['a', 'a', 'b', 'a', 'c', 'b', 'e'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 'e'. Size 4. Shrink left... remove 'a's until size 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Expand, then contract.",
        takeaways: [
          "Standard pattern for 'Longest Subarray with Condition'.",
          "Time: O(N) (each char added and removed at most once).",
          "Space: O(K)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "At Most K?",
        task: "Longest substring with AT MOST K unique chars?",
        solution: "Same logic, just update maxLen even if size < K.",
        explanation: "Actually simpler condition."
      }
    }
  ]
};
