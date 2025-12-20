import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const regularExpressionMatchingLesson = {
  id: 'regular-expression-matching',
  chapterId: 27,
  title: "Regular Expression Matching",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Regex Engine",
        paragraphs: [
          "Shanvi, match string S with pattern P.",
          "'.' matches any single char.",
          "'*' matches ZERO or more of the PRECEDING element.",
          "Example: 'a*' matches '', 'a', 'aa'..."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "s='aa', p='a*'?",
        options: [
          { text: "No", feedback: "a* means 'a' repeated." },
          { text: "Yes", feedback: "Correct! 'a' repeated twice." },
          { text: "Maybe", feedback: "Yes." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Confusing *.",
        issues: [
          "Wildcard * matches anything.",
          "Regex * depends on previous char.",
          "Need to handle 'c*' as a unit.",
          "Complex recursion."
        ],
        codeSnippet: `
// Hard to parse
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "DP Logic.",
        paragraphs: [
          "If p[j] == char or '.', match s[i] and check dp[i-1][j-1].",
          "If p[j] == '*':",
          "  1. Zero occurrences: ignore 'x*', check dp[i][j-2].",
          "  2. One+ occurrences: if s[i] matches x, check dp[i-1][j]."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "dp[m+1][n+1].",
          "Handle empty s with patterns like 'a*b*'.",
          "Nested loops.",
          "Careful with 1-based indexing vs string 0-based."
        ],
        codeLines: [
          "public boolean isMatch(String s, String p) {",
          "    int m = s.length(), n = p.length();",
          "    boolean[][] dp = new boolean[m + 1][n + 1];",
          "    dp[0][0] = true;",
          "    for (int j = 2; j <= n; j+=2) {",
          "        if (p.charAt(j - 1) == '*') dp[0][j] = dp[0][j - 2];",
          "    }",
          "    for (int i = 1; i <= m; i++) {",
          "        for (int j = 1; j <= n; j++) {",
          "            if (p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i - 1)) {",
          "                dp[i][j] = dp[i - 1][j - 1];",
          "            } else if (p.charAt(j - 1) == '*') {",
          "                dp[i][j] = dp[i][j - 2]; // Zero copies",
          "                if (p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)) {",
          "                    dp[i][j] = dp[i][j] || dp[i - 1][j]; // One+ copies",
          "                }",
          "            }",
          "        }",
          "    }",
          "    return dp[m][n];",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "s='a', p='a*'.",
        frames: [
          { array: [1, 0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0: dp[0][0]=T. p='a': F. p='*': dp[0][2]=dp[0][0]=T (empty matches a*)." },
          { array: [0, 1, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Row 1 ('a'): p='a': T. p='*': Zero copies (dp[1][0]=F) OR One copy (match 'a', dp[0][2]=T) -> T." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Pattern master.",
        takeaways: [
          "Hardest standard DP problem.",
          "Time: O(M*N).",
          "Space: O(M*N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "NFA?",
        task: "Build a state machine?",
        solution: "Regex compilation builds an NFA/DFA. This DP simulates the NFA.",
        explanation: "Compiler theory."
      }
    }
  ]
};
