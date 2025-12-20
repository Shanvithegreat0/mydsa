import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const kruskalsLesson = {
  id: 'kruskals-algorithm',
  chapterId: 24,
  title: "Kruskal's Algorithm (MST)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Cheapest Network",
        paragraphs: [
          "Shanvi, connect all cities with minimum total cable length.",
          "This is the Minimum Spanning Tree (MST) problem.",
          "Kruskal's algorithm uses DSU."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Edges: (A-B, 1), (B-C, 2), (A-C, 10). MST?",
        options: [
          { text: "A-B, B-C", feedback: "Correct! Cost 1+2=3." },
          { text: "A-C", feedback: "Doesn't connect B." },
          { text: "All edges", feedback: "Cycle A-B-C. Redundant." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Prim's Algorithm?",
        issues: [
          "Prim's grows from a node.",
          "Kruskal's sorts edges.",
          "Both valid, but Kruskal's is easier to implement with DSU."
        ],
        codeSnippet: `
// Prim uses PriorityQueue
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Greedy Edges.",
        paragraphs: [
          "1. Sort all edges by weight (ascending).",
          "2. Iterate through sorted edges.",
          "3. If picking an edge doesn't form a cycle (check with DSU), pick it.",
          "4. Else, discard it.",
          "Stop when we have N-1 edges."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Sort edges by weight.",
          "Init DSU.",
          "Loop edges.",
          "If find(u) != find(v): union(u, v), cost += w.",
          "Return cost."
        ],
        codeLines: [
          "public int minSpanningTree(int n, int[][] edges) {",
          "    Arrays.sort(edges, (a, b) -> a[2] - b[2]);",
          "    DSU dsu = new DSU(n);",
          "    int cost = 0;",
          "    int edgesCount = 0;",
          "    for (int[] edge : edges) {",
          "        if (dsu.find(edge[0]) != dsu.find(edge[1])) {",
          "            dsu.union(edge[0], edge[1]);",
          "            cost += edge[2];",
          "            edgesCount++;",
          "        }",
          "    }",
          "    return edgesCount == n - 1 ? cost : -1;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Edges: (0-1, 10), (1-2, 5), (0-2, 2).",
        frames: [
          { array: [2, 5, 10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Sorted: (0-2, 2), (1-2, 5), (0-1, 10)." },
          { array: [2, 5, 10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pick (0-2). Union 0,2. Cost=2." },
          { array: [2, 5, 10], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Pick (1-2). Union 1,2. Cost=2+5=7." },
          { array: [2, 5, 10], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Pick (0-1). 0 and 1 already connected via 2. Skip." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Span the world.",
        takeaways: [
          "Sorting dominates time complexity: O(E log E).",
          "DSU operations are nearly constant.",
          "Works for disconnected graphs (Minimum Spanning Forest)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Max Spanning Tree?",
        task: "Find Maximum Spanning Tree?",
        solution: "Sort edges descending.",
        explanation: "Same logic."
      }
    }
  ]
};
