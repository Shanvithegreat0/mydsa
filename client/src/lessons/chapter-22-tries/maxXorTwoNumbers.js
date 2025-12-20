import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const maxXorTwoNumbersLesson = {
  id: 'max-xor-two-numbers',
  chapterId: 22,
  title: "Maximum XOR of Two Numbers",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Opposites Attract",
        paragraphs: [
          "Shanvi, find two numbers in an array such that their XOR is maximum.",
          "To maximize XOR, we want bits to be DIFFERENT (1^0=1).",
          "We want 1s in the most significant positions."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [3, 10, 5, 25, 2, 8]. Max XOR?",
        options: [
          { text: "25 ^ 10 = 19", feedback: "Maybe higher?" },
          { text: "5 ^ 25 = 28", feedback: "Correct! 00101 ^ 11001 = 11100 (28)." },
          { text: "25 ^ 8 = 17", feedback: "Low." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Double Loop.",
        issues: [
          "For i, for j.",
          "Max = max(arr[i] ^ arr[j]).",
          "O(N^2).",
          "Too slow for N=10^5."
        ],
        codeSnippet: `
max = Math.max(max, arr[i]^arr[j])
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Binary Trie.",
        paragraphs: [
          "Insert all numbers into a Trie as 32-bit binary strings.",
          "For each number X, try to find Y in the Trie that maximizes X^Y.",
          "Greedy Strategy: If X has bit 'b' at position k, we WANT Y to have bit '!b'.",
          "If '!b' exists in Trie, go there (add 1<<k to result).",
          "Else, forced to go to 'b' (add 0)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Insert all nums into Trie.",
          "For each num, query max XOR.",
          "Query: Start root. Loop bit 31 down to 0.",
          "Target bit = 1 - currentBit.",
          "If child[target] exists, go there, result += (1<<i).",
          "Else go child[currentBit]."
        ],
        codeLines: [
          "public int findMaximumXOR(int[] nums) {",
          "    TrieNode root = new TrieNode();",
          "    for (int num : nums) insert(root, num);",
          "    int max = 0;",
          "    for (int num : nums) max = Math.max(max, getMax(root, num));",
          "    return max;",
          "}",
          "void insert(TrieNode root, int num) {",
          "    TrieNode node = root;",
          "    for (int i = 31; i >= 0; i--) {",
          "        int bit = (num >> i) & 1;",
          "        if (node.children[bit] == null) node.children[bit] = new TrieNode();",
          "        node = node.children[bit];",
          "    }",
          "}",
          "int getMax(TrieNode root, int num) {",
          "    TrieNode node = root;",
          "    int maxNum = 0;",
          "    for (int i = 31; i >= 0; i--) {",
          "        int bit = (num >> i) & 1;",
          "        if (node.children[1 - bit] != null) {",
          "            maxNum |= (1 << i);",
          "            node = node.children[1 - bit];",
          "        } else {",
          "            node = node.children[bit];",
          "        }",
          "    }",
          "    return maxNum;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Num: 3 (011). Trie has 5 (101).",
        frames: [
          { array: [0, 1, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Bit 2 (0). Want 1. Trie has 1 (from 5). Go 1. Res += 4." },
          { array: [0, 1, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Bit 1 (1). Want 0. Trie has 0 (from 5). Go 0. Res += 2." },
          { array: [0, 1, 1], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Bit 0 (1). Want 0. Trie has 1 (from 5). Forced 1. Res += 0." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Total 6. (3^5 = 6)." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Greedy bits.",
        takeaways: [
          "Bitwise Trie is powerful for XOR problems.",
          "Time: O(N * 32).",
          "Space: O(N * 32)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Max XOR Subarray?",
        task: "Find subarray with max XOR sum?",
        solution: "Use Prefix XORs. Find two prefix XORs with max XOR.",
        explanation: "Reduces to this problem."
      }
    }
  ]
};
