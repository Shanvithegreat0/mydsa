import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const editDistanceLesson = {
  id: 'edit-distance',
  chapterId: 27,
  title: "Edit Distance",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Spell Checker",
        paragraphs: [
          "Shanvi, convert word1 to word2 using minimum operations.",
          "Ops: Insert, Delete, Replace.",
          "Example: 'horse' -> 'ros'.",
          "h->r (replace), remove r, remove e? No. h->r, remove o? No."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "'abc' -> 'abd'. Ops?",
        options: [
          { text: "1", feedback: "Correct! Replace c with d." },
          { text: "2", feedback: "Delete c, insert d. That's 2." },
          { text: "3", feedback: "Too many." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursive.",
        issues: [
          "f(i, j): min ops for s1[0..i] and s2[0..j].",
          "If s1[i] == s2[j], f(i-1, j-1).",
          "Else 1 + min(insert, delete, replace).",
          "Exponential without memoization."
        ],
        codeSnippet: `
min(f(i-1,j), f(i,j-1), f(i-1,j-1))
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "DP Table.",
        paragraphs: [
          "dp[i][j] = min ops for word1[0..i] and word2[0..j].",
          "If chars match: dp[i][j] = dp[i-1][j-1].",
          "If mismatch: 1 + min(",
          "  dp[i][j-1] (Insert),",
          "  dp[i-1][j] (Delete),",
          "  dp[i-1][j-1] (Replace)",
          ")."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "dp[m+1][n+1].",
          "Base cases: dp[i][0] = i (delete all), dp[0][j] = j (insert all).",
          "Nested loops.",
          "Return dp[m][n]."
        ],
        codeLines: [
          "public int minDistance(String word1, String word2) {",
          "    int m = word1.length(), n = word2.length();",
          "    int[][] dp = new int[m + 1][n + 1];",
          "    for (int i = 0; i <= m; i++) dp[i][0] = i;",
          "    for (int j = 0; j <= n; j++) dp[0][j] = j;",
          "    for (int i = 1; i <= m; i++) {",
          "        for (int j = 1; j <= n; j++) {",
          "            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {",
          "                dp[i][j] = dp[i - 1][j - 1];",
          "            } else {",
          "                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], // Replace",
          "                           Math.min(dp[i - 1][j],    // Delete",
          "                                    dp[i][j - 1]));  // Insert",
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
        description: "w1='a', w2='b'.",
        frames: [
          { array: [0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0: [0, 1]. (Empty->Empty=0, Empty->b=1)." },
          { array: [1, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Row 1: 'a'->Empty=1. 'a'->'b': mismatch. 1+min(0,1,1)=1 (Replace)." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Levenshtein Distance.",
        takeaways: [
          "Fundamental for fuzzy search, DNA sequencing.",
          "Time: O(M*N).",
          "Space: O(M*N) (can be O(min(M,N)))."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Space Optimization?",
        task: "Use O(N) space?",
        solution: "We only need previous row. Use two 1D arrays.",
        explanation: "Standard DP optimization."
      }
    }
  ]
};
