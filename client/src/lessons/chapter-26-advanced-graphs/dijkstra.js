import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const dijkstraLesson = {
  id: 'dijkstra',
  chapterId: 26,
  title: "Dijkstra's Algorithm",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "GPS Navigation",
        paragraphs: [
          "Shanvi, find the shortest path from a starting city to all other cities.",
          "Roads have different lengths (weights).",
          "Weights are non-negative."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "A->B (5), A->C (2), C->B (1). Shortest A to B?",
        options: [
          { text: "5", feedback: "Direct path is expensive." },
          { text: "3", feedback: "Correct! A->C->B is 2+1=3." },
          { text: "2", feedback: "That's just to C." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "BFS?",
        issues: [
          "BFS finds shortest path in UNWEIGHTED graphs.",
          "It treats all edges as weight 1.",
          "Here, edges have weights.",
          "BFS fails."
        ],
        codeSnippet: `
queue.add(neighbor)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Greedy + Priority Queue.",
        paragraphs: [
          "Maintain `dist[]` array, initialized to Infinity.",
          "Start node dist is 0.",
          "Use a Min-Priority Queue to always pick the closest unvisited node.",
          "Relax edges: If `dist[u] + weight < dist[v]`, update `dist[v]` and push to PQ."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "PriorityQueue stores {node, distance}.",
          "dist array filled with MAX_VALUE.",
          "While PQ not empty:",
          "  Pop min node (u).",
          "  For each neighbor (v, w):",
          "    If dist[u] + w < dist[v]:",
          "      dist[v] = dist[u] + w.",
          "      PQ.add({v, dist[v]})."
        ],
        codeLines: [
          "public int[] dijkstra(int V, ArrayList<ArrayList<ArrayList<Integer>>> adj, int S) {",
          "    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);",
          "    int[] dist = new int[V];",
          "    Arrays.fill(dist, Integer.MAX_VALUE);",
          "    dist[S] = 0;",
          "    pq.add(new int[]{S, 0});",
          "    while (!pq.isEmpty()) {",
          "        int[] curr = pq.poll();",
          "        int u = curr[0];",
          "        int d = curr[1];",
          "        if (d > dist[u]) continue;",
          "        for (ArrayList<Integer> edge : adj.get(u)) {",
          "            int v = edge.get(0);",
          "            int w = edge.get(1);",
          "            if (dist[u] + w < dist[v]) {",
          "                dist[v] = dist[u] + w;",
          "                pq.add(new int[]{v, dist[v]});",
          "            }",
          "        }",
          "    }",
          "    return dist;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "A(0) -> B(5), C(2). C->B(1).",
        frames: [
          { array: [0, 99, 99], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Start A. Dist: [0, inf, inf]. PQ: [(A,0)]." },
          { array: [0, 5, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop A. Relax B (5), C (2). PQ: [(C,2), (B,5)]." },
          { array: [0, 3, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Pop C. Relax B (2+1=3 < 5). Update B. PQ: [(B,3), (B,5)]." },
          { array: [0, 3, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Pop B (3). Neighbors? None. Pop B (5) - ignore." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Path of least resistance.",
        takeaways: [
          "Does NOT work with negative weights.",
          "Time: O(E log V).",
          "Space: O(V)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Negative Weights?",
        task: "What if weights are negative?",
        solution: "Use Bellman-Ford.",
        explanation: "Dijkstra assumes adding an edge never decreases total distance."
      }
    }
  ]
};
