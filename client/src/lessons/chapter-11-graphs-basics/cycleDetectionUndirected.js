import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const cycleDetectionUndirectedLesson = {
  id: 'cycle-detection-undirected',
  chapterId: 11,
  title: "Cycle Detection (Undirected Graph)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Going in Circles",
        paragraphs: [
          "Shanvi, a cycle means you can start at a node and return to it without retracing your steps.",
          "A -> B -> C -> A.",
          "In an undirected graph, A-B is the same as B-A, but we don't count immediate backtracking (A->B->A) as a cycle."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "1-2, 2-3, 3-1. Cycle?",
        options: [
          { text: "No", feedback: "Trace it: 1->2->3->1." },
          { text: "Yes", feedback: "Correct! It's a triangle." },
          { text: "Maybe", feedback: "It's definite." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "DFS and Visited?",
        issues: [
          "If we see a visited node, is it a cycle?",
          "Not necessarily. If we go 1->2, 2 is visited. But 2 is just the parent.",
          "We must ensure the visited node is NOT the parent."
        ]
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Parent Tracking.",
        paragraphs: [
          "Use BFS or DFS.",
          "Pass 'parent' along with the current node.",
          "If we encounter a neighbor that is:",
          "1. NOT visited: Visit it.",
          "2. VISITED and NOT parent: CYCLE FOUND!",
          "3. VISITED and IS parent: Ignore (just the edge we came from)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "BFS Approach.",
        explanations: [
          "Queue stores (Node, Parent).",
          "Start BFS from unvisited nodes.",
          "If neighbor visited and neighbor != parent, return true.",
          "Else continue."
        ],
        codeLines: [
          "public boolean checkForCycle(int src, int V, ArrayList<ArrayList<Integer>> adj, boolean[] vis) {",
          "    vis[src] = true;",
          "    Queue<Node> q = new LinkedList<>();",
          "    q.add(new Node(src, -1));",
          "    while (!q.isEmpty()) {",
          "        int node = q.peek().first;",
          "        int par = q.peek().second;",
          "        q.remove();",
          "        for (Integer it : adj.get(node)) {",
          "            if (vis[it] == false) {",
          "                vis[it] = true;",
          "                q.add(new Node(it, node));",
          "            } else if (par != it) {",
          "                return true;",
          "            }",
          "        }",
          "    }",
          "    return false;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Graph: 1-2, 2-3, 3-1.",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Start 1. Parent -1. Q: [(1, -1)]." },
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 1. Neighbors 2, 3. Add (2, 1), (3, 1). Visited {1, 2, 3}." },
          { array: [1, 2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 2. Neighbors 1, 3. 1 is parent (ignore). 3 is visited and != parent (1). CYCLE!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "History repeats itself.",
        takeaways: [
          "The 'Parent' check is crucial for undirected graphs.",
          "For Directed graphs, we need recursion stack tracking (different logic).",
          "Time: O(V + E)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Directed Cycle?",
        task: "Does this work for Directed graphs?",
        solution: "No. A->B, A->C, B->C is not a cycle but would be flagged here.",
        explanation: "Directed graphs need 'Path Visited' array."
      }
    }
  ]
};
