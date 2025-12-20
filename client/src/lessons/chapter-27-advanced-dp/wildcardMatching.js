import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const wildcardMatchingLesson = {
  id: 'wildcard-matching',
  chapterId: 27,
  title: "Wildcard Matching",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Star Power",
        paragraphs: [
          "Shanvi, match string S with pattern P.",
          "'?' matches any single char.",
          "'*' matches any sequence of chars (including empty)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "s='aa', p='*'?",
        options: [
          { text: "No", feedback: "* matches empty only?" },
          { text: "Yes", feedback: "Correct! * matches 'aa'." },
          { text: "Maybe", feedback: "Yes." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursion.",
        issues: [
          "If p[j] == '*', we can skip * (match empty) OR skip char in s (match 1+).",
          "Branching factor is high.",
          "Exponential time."
        ],
        codeSnippet: `
match(i, j+1) || match(i+1, j)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "DP Grid.",
        paragraphs: [
          "dp[i][j] = true if s[0..i] matches p[0..j].",
          "If p[j] == char or '?', look at dp[i-1][j-1].",
          "If p[j] == '*', look at dp[i][j-1] (ignore *) OR dp[i-1][j] (consume char).",
          "Base case: dp[0][0] = true. Handle leading * in p."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "dp[m+1][n+1].",
          "Init dp[0][0] = true.",
          "Fill first row (empty s) for * patterns.",
          "Nested loops.",
          "Return dp[m][n]."
        ],
        codeLines: [
          "public boolean isMatch(String s, String p) {",
          "    int m = s.length(), n = p.length();",
          "    boolean[][] dp = new boolean[m + 1][n + 1];",
          "    dp[0][0] = true;",
          "    for (int j = 1; j <= n; j++) {",
          "        if (p.charAt(j - 1) == '*') dp[0][j] = dp[0][j - 1];",
          "    }",
          "    for (int i = 1; i <= m; i++) {",
          "        for (int j = 1; j <= n; j++) {",
          "            if (p.charAt(j - 1) == '?' || p.charAt(j - 1) == s.charAt(i - 1)) {",
          "                dp[i][j] = dp[i - 1][j - 1];",
          "            } else if (p.charAt(j - 1) == '*') {",
          "                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];",
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
        description: "s='a', p='*'.",
        frames: [
          { array: [1, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0 (empty s): dp[0][0]=T. p='*': dp[0][1]=dp[0][0]=T." },
          { array: [0, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Row 1 ('a'): p='*'. dp[1][1] = dp[1][0] (F) || dp[0][1] (T) = T." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Wildcard.",
        takeaways: [
          "Similar to Edit Distance.",
          "Time: O(M*N).",
          "Space: O(M*N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Greedy?",
        task: "Can we do O(1) space?",
        solution: "Yes! For wildcard, we only need to backtrack to the last * position. Two pointers.",
        explanation: "Linear time solution exists."
      }
    }
  ]
};
