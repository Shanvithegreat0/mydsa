import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const implementTrieLesson = {
  id: 'implement-trie',
  chapterId: 22,
  title: "Implement Trie (Prefix Tree)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Autocomplete Engine",
        paragraphs: [
          "Shanvi, how does Google know you are typing 'Shanvi' after just 'Sha'?",
          "It uses a Trie (Prefix Tree).",
          "A tree where each node represents a character.",
          "Paths from root to nodes form words."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Insert 'cat' and 'car'.",
        options: [
          { text: "Two separate branches.", feedback: "Waste of space." },
          { text: "Share 'c' and 'a'. Split at 't'/'r'.", feedback: "Correct! Common prefixes are shared." },
          { text: "Store 'cat' and 'car' in a list.", feedback: "That's not a tree." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "HashSet?",
        issues: [
          "HashSet<String> stores full strings.",
          "Good for exact match.",
          "Bad for 'startsWith' (prefix search).",
          "Trie is O(L) for both, where L is word length."
        ],
        codeSnippet: `
set.contains(word)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Node Structure.",
        paragraphs: [
          "Each TrieNode has:",
          "1. `children`: Array of 26 (for a-z) or HashMap.",
          "2. `isEnd`: Boolean flag to mark end of a word.",
          "Root is an empty node."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "TrieNode class.",
          "Insert: Loop chars, create child if null, move down. Mark end.",
          "Search: Loop chars, if child null return false. Return isEnd.",
          "StartsWith: Loop chars, if child null return false. Return true."
        ],
        codeLines: [
          "class TrieNode {",
          "    TrieNode[] children = new TrieNode[26];",
          "    boolean isEnd = false;",
          "}",
          "public class Trie {",
          "    TrieNode root = new TrieNode();",
          "    public void insert(String word) {",
          "        TrieNode node = root;",
          "        for (char c : word.toCharArray()) {",
          "            if (node.children[c - 'a'] == null)",
          "                node.children[c - 'a'] = new TrieNode();",
          "            node = node.children[c - 'a'];",
          "        }",
          "        node.isEnd = true;",
          "    }",
          "    public boolean search(String word) {",
          "        TrieNode node = root;",
          "        for (char c : word.toCharArray()) {",
          "            if (node.children[c - 'a'] == null) return false;",
          "            node = node.children[c - 'a'];",
          "        }",
          "        return node.isEnd;",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Insert 'apple'.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Root." },
          { array: ['a'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Create 'a'." },
          { array: ['a', 'p'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Create 'p'." },
          { array: ['a', 'p', 'p', 'l', 'e'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Create 'p', 'l', 'e'. Mark 'e' as End." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Tree of words.",
        takeaways: [
          "Time: O(L) for insert/search.",
          "Space: O(N*L) worst case, but saves space on common prefixes.",
          "Essential for dictionary problems."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Delete?",
        task: "Implement delete(word)?",
        solution: "Recursively delete nodes bottom-up if they have no other children.",
        explanation: "Memory management."
      }
    }
  ]
};
