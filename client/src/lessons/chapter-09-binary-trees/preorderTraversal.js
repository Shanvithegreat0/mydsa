import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const preorderTraversalLesson = {
  id: 'preorder-traversal',
  chapterId: 9,
  title: "Preorder Traversal",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Root First",
        paragraphs: [
          "Shanvi, Preorder means Root comes PRE (before).",
          "Root -> Left -> Right.",
          "This is useful for copying a tree."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Tree: 1 (Root), 2 (Left), 3 (Right). Preorder?",
        options: [
          { text: "2, 1, 3", feedback: "That's Inorder." },
          { text: "1, 2, 3", feedback: "Correct! Root(1) -> Left(2) -> Right(3)." },
          { text: "2, 3, 1", feedback: "That's Postorder." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursive.",
        issues: [
          "Simple 3 lines.",
          "Visit Root.",
          "Recurse Left.",
          "Recurse Right."
        ],
        codeSnippet: `
print(root.val);
preorder(root.left);
preorder(root.right);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Iterative with Stack.",
        paragraphs: [
          "Push Root.",
          "Loop while stack not empty:",
          "  Pop node, add to result.",
          "  Push Right Child (First in, Last out - so it comes after Left).",
          "  Push Left Child (So it is popped next)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Iterative Preorder.",
        explanations: [
          "Stack stores nodes to visit.",
          "Push Right BEFORE Left, so Left is on top.",
          "Pop top, visit it.",
          "Repeat."
        ],
        codeLines: [
          "public List<Integer> preorderTraversal(TreeNode root) {",
          "    List<Integer> res = new ArrayList<>();",
          "    if (root == null) return res;",
          "    Stack<TreeNode> stack = new Stack<>();",
          "    stack.push(root);",
          "    while (!stack.isEmpty()) {",
          "        TreeNode curr = stack.pop();",
          "        res.add(curr.val);",
          "        if (curr.right != null) stack.push(curr.right);",
          "        if (curr.left != null) stack.push(curr.left);",
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
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Stack: [1]. Pop 1. Add 1. Push 3. Push 2. Stack: [3, 2]." },
          { array: [3, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 2. Add 2. (2 has no kids). Stack: [3]." },
          { array: [3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 3. Add 3. Result: [1, 2, 3]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Leaders go first.",
        takeaways: [
          "Preorder is used to serialize trees (convert to string).",
          "Also used for prefix expression evaluation.",
          "Iterative version is slightly simpler than Inorder."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "N-ary Tree Preorder?",
        task: "What if a node has N children?",
        solution: "Push children from Right to Left (N-1 down to 0).",
        explanation: "Stack reverses the order, so 0 comes out first."
      }
    }
  ]
};
