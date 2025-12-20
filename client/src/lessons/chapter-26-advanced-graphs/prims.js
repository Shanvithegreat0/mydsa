import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const primsLesson = {
  id: 'prims-algorithm',
  chapterId: 26,
  title: "Prim's Algorithm (MST)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Growing the Tree",
        paragraphs: [
          "Shanvi, we saw Kruskal's (sort edges).",
          "Prim's grows the MST from a single starting node.",
          "Like Dijkstra, but minimizes edge weight to connect, not path distance."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Start at A. Neighbors: B(1), C(5). Pick?",
        options: [
          { text: "C", feedback: "Expensive." },
          { text: "B", feedback: "Correct! Cheapest edge." },
          { text: "Both", feedback: "One step at a time." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check all cuts?",
        issues: [
          "Find all edges connecting visited set to unvisited set.",
          "Pick min.",
          "Repeat.",
          "Without PQ, finding min edge is slow."
        ],
        codeSnippet: `
minEdge = infinity
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Priority Queue.",
        paragraphs: [
          "PQ stores {weight, node, parent}.",
          "Start with {0, 0, -1}.",
          "While PQ not empty:",
          "  Pop min (w, u).",
          "  If u visited, continue.",
          "  Mark u visited. Add to MST.",
          "  Push all unvisited neighbors to PQ."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "PriorityQueue {weight, node}.",
          "visited array.",
          "Sum = 0.",
          "While PQ not empty:",
          "  Pop.",
          "  If visited, skip.",
          "  Mark visited, add weight.",
          "  Push neighbors."
        ],
        codeLines: [
          "public int spanningTree(int V, ArrayList<ArrayList<ArrayList<Integer>>> adj) {",
          "    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);",
          "    boolean[] vis = new boolean[V];",
          "    pq.add(new int[]{0, 0});",
          "    int sum = 0;",
          "    while (!pq.isEmpty()) {",
          "        int[] curr = pq.poll();",
          "        int wt = curr[0];",
          "        int u = curr[1];",
          "        if (vis[u]) continue;",
          "        vis[u] = true;",
          "        sum += wt;",
          "        for (ArrayList<Integer> edge : adj.get(u)) {",
          "            int v = edge.get(0);",
          "            int w = edge.get(1);",
          "            if (!vis[v]) pq.add(new int[]{w, v});",
          "        }",
          "    }",
          "    return sum;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "A(0) - B(1), A - C(5).",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "PQ: [(0, A)]. Pop A. Sum=0. Push (1, B), (5, C)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "PQ: [(1, B), (5, C)]. Pop B. Sum=1. Push neighbors of B." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "..." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Organic growth.",
        takeaways: [
          "Time: O(E log E) or O(E log V).",
          "Better than Kruskal's for dense graphs.",
          "Similar structure to Dijkstra."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Fibonacci Heap?",
        task: "Optimize Prim's?",
        solution: "O(E + V log V) with Fib Heap.",
        explanation: "Theoretical optimization."
      }
    }
  ]
};
