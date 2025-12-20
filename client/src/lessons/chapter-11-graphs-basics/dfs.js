import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const dfsLesson = {
  id: 'dfs',
  chapterId: 11,
  title: "Depth-First Search (DFS)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Maze Runner",
        paragraphs: [
          "Shanvi, imagine you are in a maze.",
          "You keep walking down a path until you hit a wall.",
          "Then you backtrack to the last junction and try a different path.",
          "This is DFS: Go as deep as possible, then backtrack."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Start 1. Neighbors 2, 3. Neighbor of 2 is 4.",
        options: [
          { text: "1, 2, 3, 4", feedback: "That's BFS-ish." },
          { text: "1, 2, 4, 3", feedback: "Correct! 1->2->4 (Deep). Backtrack to 1. Then 3." },
          { text: "1, 3, 2, 4", feedback: "Also valid DFS if we pick 3 first." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Stack?",
        issues: [
          "We can use an explicit Stack.",
          "Push start.",
          "While stack not empty, pop, push unvisited neighbors.",
          "But Recursion is cleaner."
        ],
        codeSnippet: `
Stack<Integer> st = new Stack<>();
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Recursion is the key.",
        paragraphs: [
          "Function dfs(node):",
          "  Mark node as visited.",
          "  Print node.",
          "  For each neighbor:",
          "    If neighbor is NOT visited:",
          "      dfs(neighbor)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Recursive DFS.",
        explanations: [
          "Helper function takes node, adj, visited, result.",
          "Mark true immediately.",
          "Loop neighbors.",
          "Recurse if not visited."
        ],
        codeLines: [
          "public void dfs(int node, boolean[] vis, ArrayList<ArrayList<Integer>> adj, ArrayList<Integer> ls) {",
          "    vis[node] = true;",
          "    ls.add(node);",
          "    for (Integer it : adj.get(node)) {",
          "        if (vis[it] == false) {",
          "            dfs(it, vis, adj, ls);",
          "        }",
          "    }",
          "}",
          "public ArrayList<Integer> dfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {",
          "    boolean[] vis = new boolean[V];",
          "    ArrayList<Integer> ls = new ArrayList<>();",
          "    dfs(0, vis, adj, ls);",
          "    return ls;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Graph: 0-1, 0-2, 1-2. 2-0, 2-3.",
        frames: [
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Visit 0. Neighbors 1, 2. Go 1." },
          { array: [0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Visit 1. Neighbors 2. Go 2." },
          { array: [0, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Visit 2. Neighbors 0, 3. 0 visited. Go 3." },
          { array: [0, 1, 2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Visit 3. No neighbors. Backtrack... Done." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "To the depths and back.",
        takeaways: [
          "DFS is used for Cycle Detection, Topological Sort, and Path Finding.",
          "Time: O(V + E).",
          "Space: O(V) (Recursion Stack)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Iterative DFS?",
        task: "Implement using Stack.",
        solution: "Push start. While stack !empty: pop, mark, push neighbors.",
        explanation: "Careful: Stack reverses order of neighbors compared to recursion."
      }
    }
  ]
};
