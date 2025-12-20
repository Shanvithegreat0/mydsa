import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const kosarajuLesson = {
  id: 'kosaraju-scc',
  chapterId: 26,
  title: "Kosaraju's Algorithm (SCC)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Strongly Connected",
        paragraphs: [
          "Shanvi, in a directed graph, a Strongly Connected Component (SCC) is a set of nodes where every node is reachable from every other node in the set.",
          "Find all SCCs."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "1->2, 2->1. SCC?",
        options: [
          { text: "{1}, {2}", feedback: "They are connected both ways." },
          { text: "{1, 2}", feedback: "Correct!" },
          { text: "None", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check Pairs.",
        issues: [
          "For every pair (u, v), check if u->v and v->u.",
          "Group them.",
          "O(V^3) or worse.",
          "Too slow."
        ],
        codeSnippet: `
bfs(u, v) && bfs(v, u)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Pass DFS.",
        paragraphs: [
          "1. Sort nodes by finishing time (DFS + Stack).",
          "2. Transpose the graph (reverse all edges).",
          "3. DFS on transposed graph in order of stack.",
          "Each DFS traversal in step 3 reveals one SCC."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Step 1: Fill stack with DFS finish order.",
          "Step 2: Build adjT (reversed edges).",
          "Step 3: Pop stack. If unvisited, DFS on adjT to find SCC."
        ],
        codeLines: [
          "public void kosaraju(int V, ArrayList<ArrayList<Integer>> adj) {",
          "    Stack<Integer> st = new Stack<>();",
          "    boolean[] vis = new boolean[V];",
          "    for(int i=0; i<V; i++) if(!vis[i]) dfs1(i, vis, adj, st);",
          "    ",
          "    ArrayList<ArrayList<Integer>> adjT = new ArrayList<>();",
          "    for(int i=0; i<V; i++) adjT.add(new ArrayList<>());",
          "    for(int i=0; i<V; i++) {",
          "        for(int it : adj.get(i)) adjT.get(it).add(i);",
          "    }",
          "    ",
          "    Arrays.fill(vis, false);",
          "    while(!st.isEmpty()) {",
          "        int node = st.pop();",
          "        if(!vis[node]) {",
          "            dfs2(node, vis, adjT); // Prints SCC",
          "            System.out.println();",
          "        }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "1->2->3->1 (Cycle), 3->4.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "DFS 1: Finish order 4, 3, 2, 1. Stack: [4, 3, 2, 1]." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Reverse Edges: 1<-2<-3<-1, 4<-3." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 1. DFS on Rev. Reach 3, 2. SCC: {1, 3, 2}." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 2, 3 (visited). Pop 4. DFS on Rev. SCC: {4}." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Round trip.",
        takeaways: [
          "Reversing edges isolates SCCs.",
          "Time: O(V + E).",
          "Space: O(V + E)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Tarjan's?",
        task: "One pass?",
        solution: "Tarjan's Algorithm finds SCCs in one DFS pass using discovery times.",
        explanation: "More complex but faster constant factor."
      }
    }
  ]
};
