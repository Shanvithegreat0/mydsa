import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const deleteBSTLesson = {
  id: 'delete-bst',
  chapterId: 10,
  title: "Delete Node in BST",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Removing a Link",
        paragraphs: [
          "Shanvi, deleting is harder than inserting.",
          "If the node is a leaf, just remove it.",
          "If it has one child, bypass it.",
          "If it has TWO children... who takes its place?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Root: 10. Left: 5. Right: 15. Delete 10.",
        options: [
          { text: "Make 5 the root", feedback: "What about 15? 15 > 5, so it works." },
          { text: "Make 15 the root", feedback: "What about 5? 5 < 15, so it works." },
          { text: "Both work", feedback: "Correct! Usually we pick the Inorder Successor (smallest in Right) or Predecessor (largest in Left)." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Just delete?",
        issues: [
          "If we just delete 10, we have two orphaned subtrees (5 and 15).",
          "We can't have two roots.",
          "We must merge them."
        ],
        codeSnippet: `
// Need to reconnect
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Three Cases.",
        paragraphs: [
          "1. Leaf: Return null.",
          "2. One Child: Return that child.",
          "3. Two Children: Find the Inorder Successor (min value in Right Subtree). Replace value. Delete Successor."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Recursive Deletion.",
        explanations: [
          "Search for node.",
          "If found:",
          "  If no left child, return right.",
          "  If no right child, return left.",
          "  If both: Find min in right subtree. Copy value. Delete min in right subtree."
        ],
        codeLines: [
          "public TreeNode deleteNode(TreeNode root, int key) {",
          "    if (root == null) return null;",
          "    if (key < root.val) root.left = deleteNode(root.left, key);",
          "    else if (key > root.val) root.right = deleteNode(root.right, key);",
          "    else {",
          "        if (root.left == null) return root.right;",
          "        if (root.right == null) return root.left;",
          "        TreeNode minNode = findMin(root.right);",
          "        root.val = minNode.val;",
          "        root.right = deleteNode(root.right, root.val);",
          "    }",
          "    return root;",
          "}",
          "private TreeNode findMin(TreeNode node) {",
          "    while (node.left != null) node = node.left;",
          "    return node;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Deleting 5 from [5, 3, 6, 2, 4, 7].",
        frames: [
          { array: [5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Found 5. Two children (3, 6)." },
          { array: [6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Min in Right (6) is 6. Copy 6 to Root. Tree: [6, 3, 6...]." },
          { array: [6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Call delete(right, 6). 6 is a leaf (or has right child 7). Remove it." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Succession planning.",
        takeaways: [
          "Replacing with Inorder Successor preserves the BST property.",
          "Successor is always in the Right Subtree, all the way to the Left.",
          "Time: O(H)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Hibbard Deletion?",
        task: "Is this efficient?",
        solution: "Repeated deletions can unbalance the tree (sqrt(N) height).",
        explanation: "Randomly choosing Successor or Predecessor helps."
      }
    }
  ]
};
