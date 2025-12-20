import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const strStrLesson = {
  id: 'str-str',
  chapterId: 17,
  title: "Implement strStr()",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Needle in a Haystack",
        paragraphs: [
          "Shanvi, find the first occurrence of string 'needle' in string 'haystack'.",
          "Return the index, or -1 if not found.",
          "Example: 'hello', 'll' -> 2."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "'aaaaa', 'bba'. Found?",
        options: [
          { text: "0", feedback: "No 'b' in haystack." },
          { text: "-1", feedback: "Correct!" },
          { text: "1", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Nested Loop.",
        issues: [
          "For i in haystack:",
          "  Check if substring starting at i matches needle.",
          "O(N*M).",
          "Slow if many partial matches (e.g., 'aaaaab' in 'aaaaaaa...')."
        ],
        codeSnippet: `
haystack.substring(i, i+len).equals(needle)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "KMP Algorithm (Overview).",
        paragraphs: [
          "Knuth-Morris-Pratt algorithm avoids re-scanning characters.",
          "It uses a 'LPS' (Longest Prefix Suffix) array.",
          "If mismatch, jump ahead intelligently.",
          "However, for interviews, standard sliding window or built-in indexOf is often accepted unless KMP is asked."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Simple Sliding Window.",
        explanations: [
          "Loop i from 0 to N-M.",
          "Check chars one by one.",
          "If full match, return i.",
          "Return -1."
        ],
        codeLines: [
          "public int strStr(String haystack, String needle) {",
          "    if (needle.isEmpty()) return 0;",
          "    int n = haystack.length(), m = needle.length();",
          "    for (int i = 0; i <= n - m; i++) {",
          "        int j = 0;",
          "        while (j < m && haystack.charAt(i + j) == needle.charAt(j)) j++;",
          "        if (j == m) return i;",
          "    }",
          "    return -1;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Hay: 'hello', Need: 'll'.",
        frames: [
          { array: ['h', 'e', 'l', 'l', 'o'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0 ('h'). Match 'l'? No." },
          { array: ['h', 'e', 'l', 'l', 'o'], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1 ('e'). Match 'l'? No." },
          { array: ['h', 'e', 'l', 'l', 'o'], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "i=2 ('l'). Match 'l'? Yes. Next 'l'? Yes. Found!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Seek and ye shall find.",
        takeaways: [
          "Naive is O(NM).",
          "KMP is O(N+M).",
          "Java's indexOf() uses sophisticated optimizations."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Rabin-Karp?",
        task: "Rolling Hash?",
        solution: "Use hash of window to compare in O(1).",
        explanation: "Good for multiple pattern search."
      }
    }
  ]
};
