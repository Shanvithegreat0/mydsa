import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const connectedComponentsLesson = {
  id: 'connected-components',
  chapterId: 24,
  title: "Number of Connected Components",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Islands",
        paragraphs: [
          "Shanvi, given N nodes and a list of edges.",
          "Count how many separate connected groups exist.",
          "Example: 1-2, 3-4. Components: {1,2}, {3,4}. Count = 2."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Nodes: 0, 1, 2. Edges: 0-1. Count?",
        options: [
          { text: "1", feedback: "2 is isolated." },
          { text: "2", feedback: "Correct! {0,1} and {2}." },
          { text: "3", feedback: "0 and 1 connected." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "DFS/BFS.",
        issues: [
          "Visit array.",
          "Loop 0 to N-1.",
          "If !visited, start DFS, count++.",
          "O(V+E).",
          "Good, but DSU is often cleaner for dynamic edges."
        ],
        codeSnippet: `
if !vis[i]: dfs(i); count++
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "DSU Count.",
        paragraphs: [
          "Start with N components.",
          "For each edge (u, v):",
          "  If find(u) != find(v):",
          "    Union(u, v).",
          "    Decrement component count.",
          "Final count is the answer."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Init DSU with count = n.",
          "Loop edges.",
          "Union decrements count if roots differ.",
          "Return count."
        ],
        codeLines: [
          "public int countComponents(int n, int[][] edges) {",
          "    int[] parent = new int[n];",
          "    for (int i = 0; i < n; i++) parent[i] = i;",
          "    int count = n;",
          "    for (int[] edge : edges) {",
          "        int root1 = find(parent, edge[0]);",
          "        int root2 = find(parent, edge[1]);",
          "        if (root1 != root2) {",
          "            parent[root1] = root2;",
          "            count--;",
          "        }",
          "    }",
          "    return count;",
          "}",
          "int find(int[] parent, int i) {",
          "    if (parent[i] == i) return i;",
          "    return parent[i] = find(parent, parent[i]);",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "N=3. Edge 0-1.",
        frames: [
          { array: [0, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Count=3." },
          { array: [1, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Union(0, 1). Root0!=Root1. Count=2." },
          { array: [1, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "End. Result 2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "United we stand.",
        takeaways: [
          "DSU is perfect for counting components dynamically.",
          "Time: O(E * alpha(N)).",
          "Space: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Graph Valid Tree?",
        task: "Check if graph is a valid tree?",
        solution: "Must have 1 component AND no cycles (N-1 edges).",
        explanation: "Use DSU to check both."
      }
    }
  ]
};
