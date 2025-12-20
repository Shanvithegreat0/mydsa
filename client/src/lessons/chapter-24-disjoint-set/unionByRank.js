import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const unionByRankLesson = {
  id: 'union-by-rank',
  chapterId: 24,
  title: "Union by Rank & Path Compression",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Flattening the Hierarchy",
        paragraphs: [
          "Shanvi, the basic DSU can become a long line (1->2->3->...->N).",
          "Find(1) would take O(N).",
          "We can fix this with two tricks."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If 1->2->3, and we call Find(1), can we make 1 point to 3 directly?",
        options: [
          { text: "No, structure is fixed.", feedback: "It's flexible." },
          { text: "Yes, save time next time.", feedback: "Correct! This is Path Compression." },
          { text: "Only if 2 allows.", feedback: "No permission needed." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Just Union.",
        issues: [
          "Always attaching tree A to tree B might make B very deep.",
          "We should attach the SHORTER tree to the TALLER tree.",
          "This keeps height minimal."
        ],
        codeSnippet: `
parent[rootA] = rootB
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Rank and Compress.",
        paragraphs: [
          "1. Path Compression: During Find(x), make x point directly to root.",
          "2. Union by Rank: Attach smaller rank tree to larger rank tree. Rank increases only if equal ranks merge."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Optimized DSU.",
        explanations: [
          "Find: parent[i] = find(parent[i]).",
          "Union: check rank. If rank[i] < rank[j], parent[i] = j.",
          "Else parent[j] = i. If equal, rank[i]++."
        ],
        codeLines: [
          "public int find(int i) {",
          "    if (parent[i] != i)",
          "        parent[i] = find(parent[i]); // Path Compression",
          "    return parent[i];",
          "}",
          "public void union(int i, int j) {",
          "    int rootI = find(i);",
          "    int rootJ = find(j);",
          "    if (rootI != rootJ) {",
          "        if (rank[rootI] < rank[rootJ]) parent[rootI] = rootJ;",
          "        else if (rank[rootI] > rank[rootJ]) parent[rootJ] = rootI;",
          "        else {",
          "            parent[rootJ] = rootI;",
          "            rank[rootI]++;",
          "        }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Path Compression.",
        frames: [
          { array: [1, 2, 3, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "1->2->3. Find(1)." },
          { array: [1, 2, 3, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Recurse to 2. Find(2)." },
          { array: [1, 2, 3, 3], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Recurse to 3. Root is 3." },
          { array: [1, 3, 3, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Back to 2. Parent[2]=3. Return 3." },
          { array: [3, 3, 3, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Back to 1. Parent[1]=3. Now 1->3 and 2->3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Almost constant.",
        takeaways: [
          "Time complexity: O(alpha(N)) which is nearly O(1).",
          "Ackermann function inverse.",
          "Standard for all DSU problems."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Union by Size?",
        task: "Use size instead of rank?",
        solution: "Also valid. Often simpler. Just add sizes.",
        explanation: "Similar complexity guarantees."
      }
    }
  ]
};
