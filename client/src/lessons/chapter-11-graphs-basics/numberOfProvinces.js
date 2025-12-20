import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const numberOfProvincesLesson = {
  id: 'number-of-provinces',
  chapterId: 11,
  title: "Number of Provinces",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Islands of Cities",
        paragraphs: [
          "Shanvi, imagine cities connected by roads.",
          "A 'Province' is a group of cities that are directly or indirectly connected.",
          "If City A connects to B, and B to C, they are all in one province.",
          "City D, isolated, is another province."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "1-2, 3-4. How many provinces?",
        options: [
          { text: "1", feedback: "1 and 3 are not connected." },
          { text: "2", feedback: "Correct! {1,2} and {3,4}." },
          { text: "4", feedback: "Cities are grouped." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Count edges?",
        issues: [
          "Edges don't tell us about groups.",
          "We need to traverse.",
          "Every time we start a NEW traversal from an unvisited node, that's a NEW province."
        ],
        codeSnippet: `
// Loop all nodes, start BFS/DFS
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Component Counting.",
        paragraphs: [
          "Initialize visited array to false.",
          "Counter = 0.",
          "Loop i from 1 to V:",
          "  If !visited[i]:",
          "    Counter++.",
          "    DFS(i) (Mark all connected nodes as visited).",
          "Return Counter."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "DFS Component Count.",
        explanations: [
          "Convert Adjacency Matrix to List (optional, but good practice).",
          "Loop 0 to V-1.",
          "If not visited, increment count and call DFS.",
          "DFS marks the entire connected component."
        ],
        codeLines: [
          "public int findCircleNum(int[][] isConnected) {",
          "    int V = isConnected.length;",
          "    boolean[] vis = new boolean[V];",
          "    int count = 0;",
          "    for (int i = 0; i < V; i++) {",
          "        if (!vis[i]) {",
          "            count++;",
          "            dfs(i, isConnected, vis);",
          "        }",
          "    }",
          "    return count;",
          "}",
          "void dfs(int node, int[][] M, boolean[] vis) {",
          "    vis[node] = true;",
          "    for (int i = 0; i < M.length; i++) {",
          "        if (M[node][i] == 1 && !vis[i]) {",
          "            dfs(i, M, vis);",
          "        }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Cities: 0-1. 2 isolated.",
        frames: [
          { array: [0, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0. Not visited. Count=1. DFS(0) visits 0, 1. Vis: {T, T, F}." },
          { array: [0, 1, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1. Visited. Skip." },
          { array: [0, 1, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "i=2. Not visited. Count=2. DFS(2) visits 2. Vis: {T, T, T}." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "United we stand, divided we count.",
        takeaways: [
          "This is the standard algorithm for finding Connected Components.",
          "Works with BFS too.",
          "Time: O(V^2) for Matrix, O(V+E) for List."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Union Find?",
        task: "Can you solve this with DSU?",
        solution: "Yes. Initialize V sets. Union connected cities. Count = Number of unique parents.",
        explanation: "DSU is very efficient for dynamic connectivity."
      }
    }
  ]
};
