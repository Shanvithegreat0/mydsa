import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const wordSearchLesson = {
  id: 'word-search',
  chapterId: 25,
  title: "Word Search",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Grid Hunt",
        paragraphs: [
          "Shanvi, find if a word exists in a 2D grid of characters.",
          "Word can be constructed from letters of sequentially adjacent cells (horizontally or vertically).",
          "Same letter cell may not be used more than once."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Grid: [['A','B'],['C','D']]. Word: 'ABDC'?",
        options: [
          { text: "No", feedback: "Path exists." },
          { text: "Yes", feedback: "Correct! A->B->D->C." },
          { text: "Maybe", feedback: "Yes." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Search Everywhere.",
        issues: [
          "Start DFS from every cell.",
          "If cell matches first char, continue.",
          "Need to mark visited.",
          "This IS the standard approach."
        ],
        codeSnippet: `
for i, j: if dfs(i, j, 0) return true
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "In-place Visited.",
        paragraphs: [
          "Instead of a separate visited array, we can temporarily change the board character.",
          "Change board[i][j] to '#' or '*'.",
          "Recurse.",
          "Restore board[i][j] (Backtrack)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "exist(board, word).",
          "Loop i, j. If board[i][j] == word[0] && dfs(...), return true.",
          "DFS: Check bounds and char match.",
          "Mark temp.",
          "Recurse 4 directions.",
          "Unmark.",
          "Return result."
        ],
        codeLines: [
          "public boolean exist(char[][] board, String word) {",
          "    for(int i=0; i<board.length; i++)",
          "        for(int j=0; j<board[0].length; j++)",
          "            if(dfs(board, i, j, word, 0)) return true;",
          "    return false;",
          "}",
          "boolean dfs(char[][] board, int i, int j, String word, int idx) {",
          "    if(idx == word.length()) return true;",
          "    if(i<0 || i>=board.length || j<0 || j>=board[0].length || board[i][j] != word.charAt(idx)) return false;",
          "    char temp = board[i][j];",
          "    board[i][j] = '*';",
          "    boolean found = dfs(board, i+1, j, word, idx+1) || dfs(board, i-1, j, word, idx+1) ...;",
          "    board[i][j] = temp;",
          "    return found;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Word: 'AB'.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Start at 'A'. Match. Mark '*'." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Try neighbors. 'B' matches. Recurse." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Word end. Return true." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Seek and find.",
        takeaways: [
          "Modifying the board saves O(N*M) space.",
          "Time: O(N*M * 4^L), L = word length.",
          "Pruning happens on character mismatch."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Word Search II?",
        task: "Find MANY words?",
        solution: "Use a Trie to store all words. DFS once.",
        explanation: "Optimized for multiple words."
      }
    }
  ]
};
