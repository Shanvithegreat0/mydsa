import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const mColoringLesson = {
  id: 'm-coloring',
  chapterId: 25,
  title: "M-Coloring Problem",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Map Coloring",
        paragraphs: [
          "Shanvi, given a graph and M colors.",
          "Color the nodes such that no two adjacent nodes share the same color.",
          "Can we do it?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Triangle graph (3 nodes connected to each other). M=2?",
        options: [
          { text: "Yes", feedback: "Impossible. Need 3 colors." },
          { text: "No", feedback: "Correct! A-B diff, B-C diff, C-A diff." },
          { text: "Maybe", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Try All Colors.",
        issues: [
          "For each node, try colors 1 to M.",
          "Check all edges.",
          "O(M^V).",
          "Backtracking prunes invalid paths early."
        ],
        codeSnippet: `
// Try every color combination
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Assign One by One.",
        paragraphs: [
          "Assign color to Node 0.",
          "Move to Node 1.",
          "Try a color. Check if safe (neighbors don't have it).",
          "If safe, recurse.",
          "If no color works, backtrack to previous node."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "solve(node).",
          "If node == N, return true.",
          "Loop color c from 1 to M.",
          "isSafe(node, c)?",
          "  colors[node] = c.",
          "  if solve(node + 1) return true.",
          "  colors[node] = 0 (Backtrack).",
          "Return false."
        ],
        codeLines: [
          "public boolean graphColoring(boolean[][] graph, int m, int n) {",
          "    int[] colors = new int[n];",
          "    return solve(0, graph, colors, m, n);",
          "}",
          "boolean solve(int node, boolean[][] graph, int[] colors, int m, int n) {",
          "    if (node == n) return true;",
          "    for (int i = 1; i <= m; i++) {",
          "        if (isSafe(node, graph, colors, i, n)) {",
          "            colors[node] = i;",
          "            if (solve(node + 1, graph, colors, m, n)) return true;",
          "            colors[node] = 0;",
          "        }",
          "    }",
          "    return false;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Nodes 0-1-2. M=2.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Node 0: Color 1." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Node 1: Color 1 (Conflict 0). Color 2 (OK)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Node 2: Color 1 (Conflict 0). Color 2 (Conflict 1). Backtrack." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Colorful world.",
        takeaways: [
          "Used in scheduling, register allocation.",
          "Time: O(M^V).",
          "Space: O(V)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Bipartite?",
        task: "Is graph 2-colorable?",
        solution: "Yes, that's Bipartite check (BFS/DFS).",
        explanation: "Special case M=2."
      }
    }
  ]
};
