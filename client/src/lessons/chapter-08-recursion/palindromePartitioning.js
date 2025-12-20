import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const palindromePartitioningLesson = {
  id: 'palindrome-partitioning',
  chapterId: 8,
  title: "Palindrome Partitioning",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Cutting Strings",
        paragraphs: [
          "Shanvi, you have a string like 'aab'.",
          "You want to cut it into pieces such that EVERY piece is a palindrome.",
          "Example: 'a', 'a', 'b' works. 'aa', 'b' works."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "String 'aba'. Partitions?",
        options: [
          { text: "['a', 'b', 'a']", feedback: "Valid." },
          { text: "['aba']", feedback: "Valid." },
          { text: "Both", feedback: "Correct! We need all possible ways." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Try every cut.",
        issues: [
          "Cut after 1st char, check if left is palindrome.",
          "If yes, recurse on right.",
          "Cut after 2nd char...",
          "This is exactly the right approach!"
        ],
        codeSnippet: `
for i from index to end:
    if isPalindrome(s, index, i):
        recurse(i+1)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Partitioning Pattern.",
        paragraphs: [
          "Loop 'i' from 'index' to end.",
          "Substring is s[index...i].",
          "If isPalindrome(substring):",
          "   Add to list.",
          "   Recurse(i + 1).",
          "   Backtrack (remove from list)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Backtracking Implementation.",
        explanations: [
          "Helper function isPalindrome.",
          "Loop i from index to length.",
          "Check palindrome.",
          "Recurse.",
          "Backtrack."
        ],
        codeLines: [
          "public void func(int index, String s, List<String> path, List<List<String>> res) {",
          "    if (index == s.length()) {",
          "        res.add(new ArrayList<>(path));",
          "        return;",
          "    }",
          "    for (int i = index; i < s.length(); i++) {",
          "        if (isPalindrome(s, index, i)) {",
          "            path.add(s.substring(index, i + 1));",
          "            func(i + 1, s, path, res);",
          "            path.remove(path.size() - 1);",
          "        }",
          "    }",
          "}",
          "boolean isPalindrome(String s, int start, int end) {",
          "    while (start <= end) {",
          "        if (s.charAt(start++) != s.charAt(end--)) return false;",
          "    }",
          "    return true;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tracing 'aab'.",
        frames: [
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0. 'a'. Palindrome? Yes. Recurse on 'ab'." },
          { array: [0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=1. 'a'. Palindrome? Yes. Recurse on 'b'." },
          { array: [0, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=2. 'b'. Palindrome? Yes. Done. Add ['a', 'a', 'b']." },
          { array: [0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Backtrack. Try 'aa'. Palindrome? Yes. Recurse on 'b'." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Divide and Conquer.",
        takeaways: [
          "The structure is identical to Combination Sum.",
          "Instead of summing numbers, we validate substrings.",
          "Time complexity is high O(N * 2^N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Min Cuts for Palindrome Partitioning?",
        task: "Find minimum cuts needed.",
        solution: "This is a DP problem (Palindrome Partitioning II).",
        explanation: "Backtracking finds ALL ways. DP finds the BEST way."
      }
    }
  ]
};
