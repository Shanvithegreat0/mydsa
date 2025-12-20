import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const floydWarshallLesson = {
  id: 'floyd-warshall',
  chapterId: 26,
  title: "Floyd-Warshall Algorithm",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "All-Pairs Shortest Path",
        paragraphs: [
          "Shanvi, find shortest paths between EVERY pair of nodes.",
          "Not just from one source.",
          "Works with negative weights (but no negative cycles)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Can we run Dijkstra V times?",
        options: [
          { text: "Yes", feedback: "Valid for non-negative weights. O(V * E log V)." },
          { text: "No", feedback: "It works." },
          { text: "Only if V is small", feedback: "Yes." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Run Bellman-Ford V times?",
        issues: [
          "O(V * V * E) = O(V^4) for dense graphs.",
          "Too slow.",
          "Floyd-Warshall is O(V^3)."
        ],
        codeSnippet: `
for s in nodes: bellmanFord(s)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Dynamic Programming.",
        paragraphs: [
          "dist[i][j] = shortest distance from i to j.",
          "Try every intermediate node 'k'.",
          "If going through k is shorter, update dist[i][j].",
          "dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Init matrix with edge weights.",
          "dist[i][i] = 0.",
          "Three nested loops: k, i, j.",
          "Order matters! k must be outer loop."
        ],
        codeLines: [
          "public void shortest_distance(int[][] matrix) {",
          "    int n = matrix.length;",
          "    for (int i = 0; i < n; i++) {",
          "        for (int j = 0; j < n; j++) {",
          "            if (matrix[i][j] == -1) matrix[i][j] = (int)1e9;",
          "            if (i == j) matrix[i][j] = 0;",
          "        }",
          "    }",
          "    for (int k = 0; k < n; k++) {",
          "        for (int i = 0; i < n; i++) {",
          "            for (int j = 0; j < n; j++) {",
          "                matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);",
          "            }",
          "        }",
          "    }",
          "    // Convert back 1e9 to -1 if needed",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Matrix update.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "k=0. Try using Node 0 as intermediate." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "k=1. Try using Node 1 as intermediate." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "k=2. Try using Node 2 as intermediate." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Triangular logic.",
        takeaways: [
          "Very simple to implement (4 lines of logic).",
          "Time: O(V^3).",
          "Space: O(V^2).",
          "Good for dense graphs with small V (<= 500)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Transitive Closure?",
        task: "Check reachability only?",
        solution: "Use boolean OR instead of min/sum. Warshall's Algorithm.",
        explanation: "Same structure."
      }
    }
  ]
};
