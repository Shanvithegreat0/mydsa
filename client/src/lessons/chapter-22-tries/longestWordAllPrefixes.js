import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const longestWordAllPrefixesLesson = {
  id: 'longest-word-all-prefixes',
  chapterId: 22,
  title: "Longest Word With All Prefixes",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Building Blocks",
        paragraphs: [
          "Shanvi, given an array of words, find the longest word such that every prefix of it is also in the array.",
          "Example: ['a', 'ap', 'app', 'appl', 'apple', 'banana'].",
          "Result: 'apple' (because 'a', 'ap', 'app', 'appl' exist).",
          "'banana' is invalid because 'b', 'ba', etc. are missing."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "['w', 'wo', 'wor', 'world']. Valid?",
        options: [
          { text: "No", feedback: "Check prefixes." },
          { text: "Yes", feedback: "Correct! w, wo, wor, world all exist." },
          { text: "Only 'w'", feedback: "We want longest." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "HashSet Check.",
        issues: [
          "Put all words in Set.",
          "Sort words by length desc.",
          "For each word, check all prefixes.",
          "O(N * L^2)."
        ],
        codeSnippet: `
for word: for i=1 to len: if !set.contains(sub) break
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Trie Traversal.",
        paragraphs: [
          "Insert all words into Trie.",
          "Mark `isEnd` for each.",
          "We want a path from root where EVERY node has `isEnd == true`.",
          "DFS from root. Only traverse children where `isEnd` is true.",
          "Keep track of max depth."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Insert all.",
          "DFS(node, currentString).",
          "For each child: if child.isEnd:",
          "  DFS(child, currentString + char).",
          "Update maxString if current is longer/lexicographically smaller."
        ],
        codeLines: [
          "public String longestWord(String[] words) {",
          "    Trie trie = new Trie();",
          "    for (String w : words) trie.insert(w);",
          "    return dfs(trie.root, \"\");",
          "}",
          "String dfs(TrieNode node, String path) {",
          "    String res = path;",
          "    for (int i = 0; i < 26; i++) {",
          "        if (node.children[i] != null && node.children[i].isEnd) {",
          "            String sub = dfs(node.children[i], path + (char)('a' + i));",
          "            if (sub.length() > res.length() || (sub.length() == res.length() && sub.compareTo(res) < 0)) {",
          "                res = sub;",
          "            }",
          "        }",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Words: ['a', 'ap', 'b'].",
        frames: [
          { array: ['a'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Root -> 'a' (isEnd). Path 'a'. Valid." },
          { array: ['a', 'p'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "'a' -> 'p' (isEnd). Path 'ap'. Valid. Longer than 'a'." },
          { array: ['b'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Root -> 'b' (isEnd). Path 'b'. Valid. Shorter than 'ap'." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Step by step.",
        takeaways: [
          "Trie structure naturally represents prefixes.",
          "DFS explores all valid chains.",
          "Time: O(Sum of all lengths)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Lexicographical Order?",
        task: "Why loop i from 0 to 25?",
        solution: "To ensure we find lexicographically smaller words first if lengths match? Actually, logic needs check.",
        explanation: "Comparison logic handles it."
      }
    }
  ]
};
