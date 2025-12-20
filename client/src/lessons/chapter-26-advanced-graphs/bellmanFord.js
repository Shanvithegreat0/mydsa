import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const bellmanFordLesson = {
  id: 'bellman-ford',
  chapterId: 26,
  title: "Bellman-Ford Algorithm",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Negative Edges",
        paragraphs: [
          "Shanvi, Dijkstra fails with negative weights.",
          "Bellman-Ford can handle them.",
          "It can also detect negative weight cycles."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "A->B (1), B->C (-5), C->A (2). Cycle sum?",
        options: [
          { text: "-2", feedback: "Correct! 1 - 5 + 2 = -2." },
          { text: "8", feedback: "Sum, not absolute." },
          { text: "0", feedback: "No." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Relax Once?",
        issues: [
          "Just iterating edges once isn't enough.",
          "Changes propagate.",
          "In a path of length V, changes might need V-1 iterations to reach the end."
        ],
        codeSnippet: `
for edge in edges: relax(edge)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Relax V-1 Times.",
        paragraphs: [
          "Relax ALL edges V-1 times.",
          "This guarantees shortest paths for all nodes (if no negative cycle).",
          "Run one more time. If any distance decreases, there is a Negative Cycle."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "dist array initialized to MAX.",
          "Loop i from 0 to V-1.",
          "  Loop all edges (u, v, w).",
          "  If dist[u] != MAX && dist[u] + w < dist[v]: dist[v] = dist[u] + w.",
          "Check cycle loop."
        ],
        codeLines: [
          "public int[] bellmanFord(int V, ArrayList<ArrayList<Integer>> edges, int S) {",
          "    int[] dist = new int[V];",
          "    Arrays.fill(dist, (int)1e8);",
          "    dist[S] = 0;",
          "    for (int i = 0; i < V - 1; i++) {",
          "        for (ArrayList<Integer> edge : edges) {",
          "            int u = edge.get(0);",
          "            int v = edge.get(1);",
          "            int w = edge.get(2);",
          "            if (dist[u] != 1e8 && dist[u] + w < dist[v]) {",
          "                dist[v] = dist[u] + w;",
          "            }",
          "        }",
          "    }",
          "    // Check for negative cycle",
          "    for (ArrayList<Integer> edge : edges) {",
          "        if (dist[edge.get(0)] + edge.get(2) < dist[edge.get(1)]) return new int[]{-1};",
          "    }",
          "    return dist;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "A->B(1), B->C(2). V=3.",
        frames: [
          { array: [0, 99, 99], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Iter 1. Relax A->B. Dist: [0, 1, 99]. Relax B->C. Dist: [0, 1, 3]." },
          { array: [0, 1, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Iter 2. No changes." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Slow but steady.",
        takeaways: [
          "Handles negative weights.",
          "Detects negative cycles.",
          "Time: O(V * E). Slower than Dijkstra."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "SPFA?",
        task: "Optimize Bellman-Ford?",
        solution: "Shortest Path Faster Algorithm (Queue based). Average O(E), worst O(VE).",
        explanation: "Like BFS but allows re-adding nodes."
      }
    }
  ]
};
