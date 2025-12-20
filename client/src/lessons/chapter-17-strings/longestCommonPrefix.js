import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const longestCommonPrefixLesson = {
  id: 'longest-common-prefix',
  chapterId: 17,
  title: "Longest Common Prefix",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Shared Beginnings",
        paragraphs: [
          "Shanvi, find the longest string that is a prefix of ALL strings in an array.",
          "Example: ['flower', 'flow', 'flight'] -> 'fl'."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "['dog', 'racecar', 'car']. Prefix?",
        options: [
          { text: "'car'", feedback: "Not at start." },
          { text: "'' (Empty)", feedback: "Correct! No common start." },
          { text: "'o'", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Vertical Scanning.",
        issues: [
          "Look at 1st char of all strings. Match?",
          "Look at 2nd char of all strings. Match?",
          "Stop at mismatch.",
          "O(S) where S is total characters."
        ],
        codeSnippet: `
for i: for str: if str[i] != c break
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Sort First.",
        paragraphs: [
          "If we sort the array of strings alphabetically...",
          "The common prefix must be shared by the FIRST and the LAST string.",
          "Why? Because sorting groups similar prefixes.",
          "So just compare First and Last!"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Sort and Compare.",
        explanations: [
          "Sort array.",
          "Take s1 = arr[0], s2 = arr[n-1].",
          "Loop while chars match.",
          "Return substring."
        ],
        codeLines: [
          "public String longestCommonPrefix(String[] strs) {",
          "    Arrays.sort(strs);",
          "    String s1 = strs[0];",
          "    String s2 = strs[strs.length - 1];",
          "    int idx = 0;",
          "    while (idx < s1.length() && idx < s2.length()) {",
          "        if (s1.charAt(idx) == s2.charAt(idx)) idx++;",
          "        else break;",
          "    }",
          "    return s1.substring(0, idx);",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: ['flower', 'flow', 'flight'].",
        frames: [
          { array: ['flight', 'flow', 'flower'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Sorted: 'flight', 'flow', 'flower'." },
          { array: ['f', 'l', 'i', 'g', 'h', 't'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Compare 'flight' and 'flower'." },
          { array: ['f', 'l'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "f==f, l==l, i!=o. Stop. Result 'fl'." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Alpha and Omega.",
        takeaways: [
          "Sorting simplifies the problem drastically.",
          "Time: O(N log N * M) for sort.",
          "Space: O(1) (ignoring result)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Trie?",
        task: "Use a Trie data structure?",
        solution: "Insert all strings. Find path where node has only 1 child and is not end.",
        explanation: "Good for dynamic sets."
      }
    }
  ]
};
