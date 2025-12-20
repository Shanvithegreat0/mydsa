import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const inorderTraversalLesson = {
  id: 'inorder-traversal',
  chapterId: 9,
  title: "Inorder Traversal",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Left, Root, Right",
        paragraphs: [
          "Shanvi, a Binary Tree is like a family tree.",
          "Inorder Traversal means visiting the Left child, then the Parent (Root), then the Right child.",
          "L -> Root -> R."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Tree: 1 (Root), 2 (Left), 3 (Right). Inorder?",
        options: [
          { text: "1, 2, 3", feedback: "That's Preorder (Root, Left, Right)." },
          { text: "2, 1, 3", feedback: "Correct! Left(2) -> Root(1) -> Right(3)." },
          { text: "2, 3, 1", feedback: "That's Postorder (Left, Right, Root)." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursive Definition.",
        issues: [
          "Recursion is natural for trees.",
          "Function(node):",
          "  If node is null, return.",
          "  Function(node.left).",
          "  Print node.val.",
          "  Function(node.right)."
        ],
        codeSnippet: `
void inorder(Node root) {
    if (root == null) return;
    inorder(root.left);
    print(root.val);
    inorder(root.right);
}
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Iterative Approach (Using Stack).",
        paragraphs: [
          "Recursion uses the system stack.",
          "We can simulate this with our own Stack.",
          "Push nodes as we go Left.",
          "When we hit null, Pop (visit Root), then go Right."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Iterative Inorder.",
        explanations: [
          "Initialize Stack.",
          "While stack not empty or curr not null:",
          "  Push curr and go left (curr = curr.left).",
          "  If curr is null, Pop stack (this is the parent).",
          "  Add parent to result.",
          "  Go right (curr = parent.right)."
        ],
        codeLines: [
          "public List<Integer> inorderTraversal(TreeNode root) {",
          "    List<Integer> res = new ArrayList<>();",
          "    Stack<TreeNode> stack = new Stack<>();",
          "    TreeNode curr = root;",
          "    while (curr != null || !stack.isEmpty()) {",
          "        while (curr != null) {",
          "            stack.push(curr);",
          "            curr = curr.left;",
          "        }",
          "        curr = stack.pop();",
          "        res.add(curr.val);",
          "        curr = curr.right;",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tree: 1 -> Left:2, Right:3.",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 1. Push 1. Go Left." },
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 2. Push 2. Go Left (null)." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr null. Pop 2. Add 2. Go Right (null)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr null. Pop 1. Add 1. Go Right (3)." },
          { array: [3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 3. Push 3. Go Left (null). Pop 3. Add 3. Result: [2, 1, 3]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Order matters.",
        takeaways: [
          "Inorder on a Binary Search Tree (BST) gives SORTED values.",
          "Iterative solution is good to know to avoid StackOverflow on deep trees.",
          "Time: O(N), Space: O(H) (Height of tree)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Morris Traversal?",
        task: "Can you do it in O(1) space?",
        solution: "Yes! Threaded Binary Tree.",
        explanation: "Create temporary links from predecessor to current node."
      }
    }
  ]
};
