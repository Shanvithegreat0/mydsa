import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const distinctSubstringsLesson = {
  id: 'distinct-substrings',
  chapterId: 22,
  title: "Distinct Substrings",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Unique Slices",
        paragraphs: [
          "Shanvi, count the number of distinct substrings of a string.",
          "Example: 'abab'.",
          "Substrings: a, b, a, b, ab, ba, ab, aba, bab, abab.",
          "Distinct: a, b, ab, ba, aba, bab, abab (7)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "'aaa'. Distinct?",
        options: [
          { text: "3", feedback: "Correct! a, aa, aaa." },
          { text: "6", feedback: "Total substrings, but duplicates exist." },
          { text: "1", feedback: "No." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Generate All.",
        issues: [
          "Nested loop i, j.",
          "Add s.substring(i, j) to HashSet.",
          "Return set.size().",
          "O(N^3) or O(N^2) depending on hashing.",
          "Memory limit exceeded for large N."
        ],
        codeSnippet: `
set.add(substring)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Trie Compression.",
        paragraphs: [
          "Insert ALL suffixes of the string into a Trie?",
          "Actually, just insert all substrings directly into Trie.",
          "Every node in the Trie represents a unique prefix of some inserted string.",
          "Wait, simpler: Iterate all substrings starting at i.",
          "Insert into Trie. If new node created, count++.",
          "Total nodes in Trie = Distinct Substrings."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Root node.",
          "Count = 0.",
          "Loop i from 0 to N-1.",
          "  Node = root.",
          "  Loop j from i to N-1.",
          "    If child[s[j]] is null:",
          "      Create child, count++.",
          "    Node = child.",
          "Return count."
        ],
        codeLines: [
          "public int countDistinct(String s) {",
          "    TrieNode root = new TrieNode();",
          "    int count = 0;",
          "    for (int i = 0; i < s.length(); i++) {",
          "        TrieNode node = root;",
          "        for (int j = i; j < s.length(); j++) {",
          "            char c = s.charAt(j);",
          "            if (node.children[c - 'a'] == null) {",
          "                node.children[c - 'a'] = new TrieNode();",
          "                count++;",
          "            }",
          "            node = node.children[c - 'a'];",
          "        }",
          "    }",
          "    return count;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Str: 'ab'.",
        frames: [
          { array: ['a', 'b'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0. 'a' (new, count=1). 'ab' (new, count=2)." },
          { array: ['a', 'b'], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1. 'b' (new, count=3)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Total 3: a, ab, b." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Every node counts.",
        takeaways: [
          "Trie nodes naturally de-duplicate prefixes.",
          "Time: O(N^2).",
          "Space: O(N^2) worst case, but better than Set<String>."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Suffix Automaton?",
        task: "O(N) time?",
        solution: "Suffix Automaton or Suffix Array + LCP.",
        explanation: "Advanced string structures."
      }
    }
  ]
};
