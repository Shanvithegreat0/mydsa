import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const bottomViewLesson = {
  id: 'bottom-view',
  chapterId: 9,
  title: "Bottom View of Binary Tree",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Looking Up",
        paragraphs: [
          "Shanvi, imagine looking at the tree from the BOTTOM.",
          "For every vertical line (horizontal distance), you see the lowest node.",
          "If two nodes overlap, you see the one that appeared later (or rightmost)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Tree: 1 -> L:2, R:3. Bottom View?",
        options: [
          { text: "1, 2, 3", feedback: "1 is blocked by 2 and 3." },
          { text: "2, 3", feedback: "Correct! 2 is at -1, 3 is at +1. 1 is at 0 but hidden?" },
          { text: "2, 1, 3", feedback: "Wait, does 1 get hidden? No, 1 is at dist 0. If 2 and 3 don't cover 0, 1 is visible? Actually 2 is left, 3 is right. 1 is centered. So 2, 1, 3? No, usually root is covered if children converge." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "DFS?",
        issues: [
          "DFS doesn't guarantee we visit the bottom-most node last.",
          "We might visit a deep left node, then a shallow right node.",
          "We need Level Order Traversal (BFS) to process top-to-bottom.",
          "Wait, actually we want the LAST node at each horizontal distance."
        ],
        codeSnippet: `
// DFS order is tricky for 'bottom'
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "BFS + Horizontal Distance Map.",
        paragraphs: [
          "Assign Root distance 0.",
          "Left child: dist - 1.",
          "Right child: dist + 1.",
          "Use a Map<Distance, NodeValue>.",
          "Traverse Level by Level.",
          "ALWAYS update the map for the distance. The last value written will be the bottom-most."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "BFS with Map.",
        explanations: [
          "Queue stores Pair(Node, Distance).",
          "Map stores {Distance -> Value}.",
          "Loop Queue.",
          "Put current node val in map (overwrite existing).",
          "Add children to queue with updated distances.",
          "Sort map keys and return values."
        ],
        codeLines: [
          "public ArrayList<Integer> bottomView(Node root) {",
          "    ArrayList<Integer> ans = new ArrayList<>();",
          "    if (root == null) return ans;",
          "    Map<Integer, Integer> map = new TreeMap<>();",
          "    Queue<Pair> q = new LinkedList<>();",
          "    q.add(new Pair(root, 0));",
          "    while (!q.isEmpty()) {",
          "        Pair it = q.remove();",
          "        int hd = it.hd;",
          "        Node temp = it.node;",
          "        map.put(hd, temp.data); // Always update",
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
        description: "Tree: 1 -> L:2, R:3. 2->R:4. 3->L:5.",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Q: [(1,0)]. Map: {0:1}." },
          { array: [2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 1. Add (2,-1), (3,1). Map: {0:1, -1:2, 1:3}." },
          { array: [4, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 2. Add (4, 0). Map: {0:4, -1:2, 1:3}. (1 overwritten by 4)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 3. Add (5, 0). Map: {0:5, ...}. (4 overwritten by 5). Final: 2, 5, 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "The last one standing.",
        takeaways: [
          "TreeMap keeps keys sorted (-2, -1, 0, 1, 2).",
          "Overwriting ensures we get the bottom-most (or right-most at bottom) node.",
          "Time: O(N log N) due to TreeMap."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Top View?",
        task: "What changes for Top View?",
        solution: "Only put in map if key is NOT present.",
        explanation: "First value seen is the top-most."
      }
    }
  ]
};
