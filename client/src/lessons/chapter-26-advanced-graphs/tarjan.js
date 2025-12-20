import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const tarjanLesson = {
  id: 'tarjan-bridges',
  chapterId: 26,
  title: "Tarjan's (Bridges)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Critical Connections",
        paragraphs: [
          "Shanvi, a Bridge is an edge that, if removed, increases the number of connected components.",
          "It's a critical vulnerability in a network.",
          "Find all bridges."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "1-2-3. Bridge?",
        options: [
          { text: "None", feedback: "Removing 1-2 disconnects 1." },
          { text: "1-2 and 2-3", feedback: "Correct! Both are bridges." },
          { text: "Only 2-3", feedback: "1-2 is also one." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Remove and Check.",
        issues: [
          "For every edge:",
          "  Remove it.",
          "  Run BFS/DFS to count components.",
          "  Add it back.",
          "O(E * (V+E)). Too slow."
        ],
        codeSnippet: `
remove(edge); count(); add(edge);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Discovery and Low Time.",
        paragraphs: [
          "DFS traversal.",
          "tin[u]: Time of insertion (discovery).",
          "low[u]: Lowest tin reachable from u (including back-edges).",
          "If low[v] > tin[u], then u-v is a bridge.",
          "Meaning: v cannot reach u or u's ancestors without this edge."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "dfs(u, parent).",
          "vis[u] = true, tin[u] = low[u] = timer++.",
          "Loop neighbors v:",
          "  If v == parent, continue.",
          "  If !vis[v]:",
          "    dfs(v, u).",
          "    low[u] = min(low[u], low[v]).",
          "    If low[v] > tin[u]: Bridge found!",
          "  Else: low[u] = min(low[u], tin[v])."
        ],
        codeLines: [
          "public void dfs(int node, int parent, int[] vis, int[] tin, int[] low, ArrayList<ArrayList<Integer>> adj) {",
          "    vis[node] = 1;",
          "    tin[node] = low[node] = timer++;",
          "    for(Integer it : adj.get(node)) {",
          "        if(it == parent) continue;",
          "        if(vis[it] == 0) {",
          "            dfs(it, node, vis, tin, low, adj);",
          "            low[node] = Math.min(low[node], low[it]);",
          "            if(low[it] > tin[node]) {",
          "                System.out.println(node + \"-\" + it);",
          "            }",
          "        } else {",
          "            low[node] = Math.min(low[node], tin[it]);",
          "        }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "1-2-3 (Cycle 1-3). 3-4.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "DFS 1. tin[1]=1. DFS 2. tin[2]=2. DFS 3. tin[3]=3." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "3 sees 1 (visited). low[3] = min(3, tin[1]) = 1." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "3 sees 4. DFS 4. tin[4]=4. low[4]=4. low[4] > tin[3]. Bridge 3-4." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Back to 2. low[2] = min(2, low[3]) = 1. No bridge." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Weakest link.",
        takeaways: [
          "Finds all bridges in O(V+E).",
          "Crucial for network reliability.",
          "Similar logic for Articulation Points."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Articulation Points?",
        task: "Find nodes that disconnect graph?",
        solution: "Similar condition: low[v] >= tin[u] (and root check).",
        explanation: "Vertex cut vs Edge cut."
      }
    }
  ]
};
