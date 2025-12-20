import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const topViewLesson = {
  id: 'top-view',
  chapterId: 9,
  title: "Top View of Binary Tree",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Bird's Eye View",
        paragraphs: [
          "Shanvi, now look from the TOP.",
          "You see the first node at every horizontal distance.",
          "Lower nodes are hidden by the top ones."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Tree: 1 -> L:2, R:3. Top View?",
        options: [
          { text: "1", feedback: "You see 2 and 3 too." },
          { text: "2, 1, 3", feedback: "Correct! 2(-1), 1(0), 3(1)." },
          { text: "2, 3", feedback: "1 is visible in the middle." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Same as Bottom View?",
        issues: [
          "Almost.",
          "In Bottom View, we wanted the LAST node.",
          "In Top View, we want the FIRST node we encounter for each distance."
        ],
        codeSnippet: `
if (!map.containsKey(hd)) map.put(hd, val);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "BFS + Map (First Come First Serve).",
        paragraphs: [
          "Use Queue for Level Order.",
          "Use Map for Distance -> Value.",
          "If Map does NOT contain distance, add it.",
          "If Map DOES contain distance, skip (it's blocked by a higher node)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "BFS with Check.",
        explanations: [
          "Queue Pair(Node, HD).",
          "TreeMap for sorted output.",
          "Only put if key absent.",
          "Standard BFS logic."
        ],
        codeLines: [
          "public ArrayList<Integer> topView(Node root) {",
          "    ArrayList<Integer> ans = new ArrayList<>();",
          "    if (root == null) return ans;",
          "    Map<Integer, Integer> map = new TreeMap<>();",
          "    Queue<Pair> q = new LinkedList<>();",
          "    q.add(new Pair(root, 0));",
          "    while (!q.isEmpty()) {",
          "        Pair it = q.remove();",
          "        int hd = it.hd;",
          "        Node temp = it.node;",
          "        if (map.get(hd) == null) map.put(hd, temp.data);",
          "        if (temp.left != null) q.add(new Pair(temp.left, hd - 1));",
          "        if (temp.right != null) q.add(new Pair(temp.right, hd + 1));",
          "    }",
          "    for (Map.Entry<Integer, Integer> entry : map.entrySet()) {",
          "        ans.add(entry.getValue());",
          "    }",
          "    return ans;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tree: 1 -> L:2, R:3. 2->R:4 (dist 0).",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Q: [(1,0)]. Map: {0:1}." },
          { array: [2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 1. Add (2,-1), (3,1). Map: {0:1, -1:2, 1:3}." },
          { array: [4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 2. Add (4, 0). Map has 0? Yes(1). Ignore 4." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Final: 2, 1, 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Stay on top.",
        takeaways: [
          "Top View and Bottom View are symmetric logic.",
          "Horizontal Distance is the key coordinate system for trees.",
          "TreeMap sorts the columns left to right automatically."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Vertical Order Traversal?",
        task: "List ALL nodes at each distance, sorted by level.",
        solution: "Map<Distance, TreeMap<Level, PriorityQueue>>.",
        explanation: "Most complex traversal. Handles overlapping nodes by sorting them."
      }
    }
  ]
};
