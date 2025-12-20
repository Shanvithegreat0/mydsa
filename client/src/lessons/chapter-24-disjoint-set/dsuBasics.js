import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const dsuBasicsLesson = {
  id: 'dsu-basics',
  chapterId: 24,
  title: "Disjoint Set Union (DSU) Basics",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Social Circles",
        paragraphs: [
          "Shanvi, imagine a party where people form groups.",
          "Initially, everyone is in their own group.",
          "If A is friend of B, their groups merge.",
          "We need to quickly check if two people are in the same group."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "A-B, B-C. Is A connected to C?",
        options: [
          { text: "No", feedback: "Friend of a friend." },
          { text: "Yes", feedback: "Correct! Transitive property." },
          { text: "Maybe", feedback: "Yes." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Adjacency Matrix/List?",
        issues: [
          "BFS/DFS to check connectivity.",
          "Adding an edge is fast, but checking connectivity is O(V+E).",
          "We want nearly O(1) for both."
        ],
        codeSnippet: `
dfs(start, end)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Parent Array.",
        paragraphs: [
          "Each element has a 'parent'.",
          "If parent[i] == i, then i is a representative (root) of a set.",
          "Find(x): Follow parents until root.",
          "Union(x, y): Find root of x, root of y. Make one parent of other."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Basic Implementation.",
        explanations: [
          "parent array.",
          "find(i): recursive or iterative.",
          "union(i, j): parent[find(i)] = find(j)."
        ],
        codeLines: [
          "public class DSU {",
          "    int[] parent;",
          "    public DSU(int n) {",
          "        parent = new int[n];",
          "        for (int i = 0; i < n; i++) parent[i] = i;",
          "    }",
          "    public int find(int i) {",
          "        if (parent[i] == i) return i;",
          "        return find(parent[i]);",
          "    }",
          "    public void union(int i, int j) {",
          "        int rootI = find(i);",
          "        int rootJ = find(j);",
          "        if (rootI != rootJ) parent[rootI] = rootJ;",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Union(1, 2), Union(2, 3).",
        frames: [
          { array: [0, 1, 2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Init: [0, 1, 2, 3]." },
          { array: [0, 2, 2, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Union(1, 2). Root(1)=1, Root(2)=2. Parent[1]=2." },
          { array: [0, 2, 3, 3], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Union(2, 3). Root(2)=2, Root(3)=3. Parent[2]=3. Now 1->2->3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Come together.",
        takeaways: [
          "This basic version can have O(N) chains (skewed tree).",
          "We need optimizations (Path Compression & Rank) to make it fast."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Cycle Detection?",
        task: "Detect cycle in undirected graph?",
        solution: "If find(u) == find(v) before union, there is a cycle.",
        explanation: "Classic application."
      }
    }
  ]
};
