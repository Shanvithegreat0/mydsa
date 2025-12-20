import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const bfsLesson = {
  id: 'bfs',
  chapterId: 11,
  title: "Breadth-First Search (BFS)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Ripples in a Pond",
        paragraphs: [
          "Shanvi, imagine dropping a stone in a calm pond.",
          "The ripples spread out in circles.",
          "First circle (distance 1), then second circle (distance 2), and so on.",
          "This is exactly how BFS works!"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Start at Node 1. Neighbors: 2, 3. Neighbors of 2: 4, 5. Order?",
        options: [
          { text: "1, 2, 4, 5, 3", feedback: "That's DFS (going deep)." },
          { text: "1, 2, 3, 4, 5", feedback: "Correct! Level 1 (1), Level 2 (2, 3), Level 3 (4, 5)." },
          { text: "1, 4, 5, 2, 3", feedback: "Jumping ahead." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursion?",
        issues: [
          "Recursion naturally goes deep (DFS).",
          "To go wide, we need to 'wait' before visiting children's children.",
          "We need a waiting line."
        ],
        codeSnippet: `
// Recursion is hard for BFS
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Use a Queue.",
        paragraphs: [
          "Queue is FIFO (First In, First Out).",
          "Put the starting node in the Queue.",
          "While Queue is not empty:",
          "  Take out the front node.",
          "  Visit it.",
          "  Put all its UNVISITED neighbors in the Queue.",
          "Mark visited nodes so we don't go in circles."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "BFS Implementation.",
        explanations: [
          "Adjacency List representation.",
          "Visited array to track nodes.",
          "Queue for processing.",
          "Loop until queue empty."
        ],
        codeLines: [
          "public ArrayList<Integer> bfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {",
          "    ArrayList<Integer> bfs = new ArrayList<>();",
          "    boolean[] vis = new boolean[V];",
          "    Queue<Integer> q = new LinkedList<>();",
          "    q.add(0);",
          "    vis[0] = true;",
          "    while (!q.isEmpty()) {",
          "        Integer node = q.poll();",
          "        bfs.add(node);",
          "        for (Integer it : adj.get(node)) {",
          "            if (vis[it] == false) {",
          "                vis[it] = true;",
          "                q.add(it);",
          "            }",
          "        }",
          "    }",
          "    return bfs;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Graph: 0 -> 1, 2. 1 -> 2. 2 -> 0, 3.",
        frames: [
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Q: [0]. Vis: {0}. Pop 0. Add 1, 2. Q: [1, 2]." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 1. Neighbors of 1 is 2. 2 is visited. Ignore. Q: [2]." },
          { array: [2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 2. Neighbors 0 (vis), 3 (not). Add 3. Q: [3]." },
          { array: [3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 3. Done. Result: 0, 1, 2, 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "One layer at a time.",
        takeaways: [
          "BFS finds the Shortest Path in an unweighted graph.",
          "Time: O(V + E).",
          "Space: O(V) for Queue and Visited array."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Disconnected Graph?",
        task: "What if the graph has multiple parts?",
        solution: "Run BFS loop for every node i from 0 to V. If !vis[i], start BFS(i).",
        explanation: "This covers all connected components."
      }
    }
  ]
};
