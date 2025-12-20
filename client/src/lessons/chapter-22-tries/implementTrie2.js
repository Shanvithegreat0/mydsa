import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const implementTrie2Lesson = {
  id: 'implement-trie-2',
  chapterId: 22,
  title: "Implement Trie II (Counts)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Counting Copies",
        paragraphs: [
          "Shanvi, standard Trie just checks existence.",
          "What if we want to know HOW MANY times a word was inserted?",
          "Or how many words start with a prefix?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Insert 'apple' twice. Count('apple')?",
        options: [
          { text: "1", feedback: "We inserted twice." },
          { text: "2", feedback: "Correct! We need a counter." },
          { text: "True", feedback: "We want a number." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "List in Node?",
        issues: [
          "Store a list of words at each node?",
          "Too much memory.",
          "Just add integer counters."
        ],
        codeSnippet: `
int countEnd = 0;
int countPrefix = 0;
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Counters.",
        paragraphs: [
          "1. `countEndWith`: Incremented at the last node of a word.",
          "2. `countPrefix`: Incremented at EVERY node along the path during insertion.",
          "Delete decrements these counters."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Enhanced Node.",
        explanations: [
          "Insert: traverse, increment prefix count, at end increment end count.",
          "CountWords: traverse, return end count.",
          "CountStartsWith: traverse, return prefix count.",
          "Erase: traverse, decrement counts."
        ],
        codeLines: [
          "class TrieNode {",
          "    TrieNode[] children = new TrieNode[26];",
          "    int countEnd = 0;",
          "    int countPrefix = 0;",
          "}",
          "public void insert(String word) {",
          "    TrieNode node = root;",
          "    for (char c : word.toCharArray()) {",
          "        if (node.children[c-'a'] == null)",
          "            node.children[c-'a'] = new TrieNode();",
          "        node = node.children[c-'a'];",
          "        node.countPrefix++;",
          "    }",
          "    node.countEnd++;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Insert 'app', 'apple'.",
        frames: [
          { array: ['a'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "'a' prefix=1." },
          { array: ['a', 'p'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "'p' prefix=1." },
          { array: ['a', 'p', 'p'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "'p' prefix=1. End 'app'. countEnd=1." },
          { array: ['a', 'p', 'p', 'l', 'e'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Insert 'apple'. 'a' prefix=2, 'p' prefix=2..." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Safety in numbers.",
        takeaways: [
          "Prefix counts allow O(L) prefix frequency queries.",
          "Useful for autocomplete ranking.",
          "Erase operation becomes simple subtraction."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Memory Limit?",
        task: "Too many nodes?",
        solution: "Ternary Search Tree or Radix Tree (Compressed Trie).",
        explanation: "Compress chains of single children."
      }
    }
  ]
};
