import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const leftViewLesson = {
  id: 'left-view',
  chapterId: 9,
  title: "Left View of Binary Tree",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Side Profile",
        paragraphs: [
          "Shanvi, imagine looking at the tree from the LEFT side.",
          "You only see the first node at each level.",
          "Nodes behind them are hidden."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Tree: 1 -> L:2, R:3. Left View?",
        options: [
          { text: "1, 2, 3", feedback: "3 is hidden behind 2." },
          { text: "1, 2", feedback: "Correct! Level 0: 1. Level 1: 2." },
          { text: "1, 3", feedback: "That's Right View." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Level Order Traversal?",
        issues: [
          "Do a BFS (Level Order).",
          "For each level, pick the first element.",
          "Works, but requires a Queue and extra space for the queue.",
          "Can we do it with DFS (Recursion)?"
        ]
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "DFS + Level Tracking.",
        paragraphs: [
          "Traverse the tree (Preorder: Root-Left-Right).",
          "Keep track of the 'level' (depth).",
          "If we visit a level for the FIRST time, add the node to the result.",
          "Since we go Left first, the first node we see at any level IS the Left View node."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Recursive DFS.",
        explanations: [
          "Pass 'level' to function.",
          "If res.size() == level, it means we haven't visited this level yet. Add node.",
          "Recurse Left (level + 1).",
          "Recurse Right (level + 1).",
          "Right child will only be added if Left child didn't exist for that level."
        ],
        codeLines: [
          "public void solve(TreeNode root, List<Integer> res, int level) {",
          "    if (root == null) return;",
          "    if (level == res.size()) {",
          "        res.add(root.val);",
          "    }",
          "    solve(root.left, res, level + 1);",
          "    solve(root.right, res, level + 1);",
          "}",
          "public List<Integer> leftSideView(TreeNode root) {",
          "    List<Integer> res = new ArrayList<>();",
          "    solve(root, res, 0);",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tree: 1 -> L:2, R:3 -> L:4.",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Lvl 0. Res size 0. Add 1. Res: [1]. Go Left(2)." },
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Lvl 1. Res size 1. Add 2. Res: [1, 2]. Go Left(null)." },
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Backtrack. Go Right(3). Lvl 1. Res size 2. Don't add 3. Go Left(4)." },
          { array: [1, 2, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Lvl 2. Res size 2. Add 4. Res: [1, 2, 4]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "First impressions matter.",
        takeaways: [
          "DFS is elegant here.",
          "For Right View, just visit Right before Left!",
          "Time: O(N), Space: O(H)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Right View?",
        task: "Modify code for Right View.",
        solution: "Swap recursive calls: solve(right), then solve(left).",
        explanation: "First node seen at each level will be the rightmost one."
      }
    }
  ]
};
