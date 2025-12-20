import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const palindromePartitioning2Lesson = {
  id: 'palindrome-partitioning-2',
  chapterId: 27,
  title: "Palindrome Partitioning II",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Minimum Cuts",
        paragraphs: [
          "Shanvi, cut string 'aab' into palindromes.",
          "Possible: 'aa', 'b' (1 cut). 'a', 'a', 'b' (2 cuts).",
          "Find MINIMUM cuts."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "'abacaba'?",
        options: [
          { text: "0", feedback: "Correct! It's already a palindrome." },
          { text: "6", feedback: "Too many." },
          { text: "2", feedback: "No." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursion.",
        issues: [
          "f(i): min cuts for s[i..n].",
          "Try every j > i where s[i..j] is palindrome.",
          "Cost = 1 + f(j+1).",
          "Checking palindrome is O(N). Total O(N^3)."
        ],
        codeSnippet: `
min = min(1 + solve(j+1))
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Precompute Palindromes.",
        paragraphs: [
          "Use a boolean table `isPal[i][j]` to check palindrome in O(1).",
          "Fill `isPal` in O(N^2).",
          "Then `dp[i]` = min cuts for prefix s[0..i].",
          "If `isPal[j][i]` is true, `dp[i] = min(dp[i], dp[j-1] + 1)`.",
          "Base case: if `isPal[0][i]`, `dp[i] = 0`."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "isPal[n][n] table.",
          "dp[n] array.",
          "Loop i from 0 to n-1.",
          "  Loop j from 0 to i.",
          "    If s[j]==s[i] and (i-j<2 or isPal[j+1][i-1]):",
          "      isPal[j][i] = true.",
          "      If j==0: dp[i] = 0.",
          "      Else: dp[i] = min(dp[i], dp[j-1] + 1).",
          "Return dp[n-1]."
        ],
        codeLines: [
          "public int minCut(String s) {",
          "    int n = s.length();",
          "    boolean[][] isPal = new boolean[n][n];",
          "    int[] dp = new int[n];",
          "    for (int i = 0; i < n; i++) {",
          "        int min = i;",
          "        for (int j = 0; j <= i; j++) {",
          "            if (s.charAt(i) == s.charAt(j) && (i - j < 2 || isPal[j + 1][i - 1])) {",
          "                isPal[j][i] = true;",
          "                min = j == 0 ? 0 : Math.min(min, dp[j - 1] + 1);",
          "            }",
          "        }",
          "        dp[i] = min;",
          "    }",
          "    return dp[n - 1];",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Str: 'aab'.",
        frames: [
          { array: [0, 0, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0 ('a'). Pal 'a'. dp[0]=0." },
          { array: [0, 0, 0], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1 ('a'). Pal 'aa' (j=0). dp[1]=0. Pal 'a' (j=1). dp[1]=min(0, dp[0]+1)=0." },
          { array: [0, 0, 1], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "i=2 ('b'). Pal 'b' (j=2). dp[2]=dp[1]+1=1. 'aab' not pal. 'ab' not pal." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Cut it out.",
        takeaways: [
          "Combining two DP tables (isPal and minCut).",
          "Time: O(N^2).",
          "Space: O(N^2)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Manacher's?",
        task: "O(N) palindrome check?",
        solution: "Manacher's algorithm finds longest palindromic substring in O(N).",
        explanation: "Advanced string algo."
      }
    }
  ]
};
