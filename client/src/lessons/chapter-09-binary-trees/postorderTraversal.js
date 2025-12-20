import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const postorderTraversalLesson = {
  id: 'postorder-traversal',
  chapterId: 9,
  title: "Postorder Traversal",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Save the Best for Last",
        paragraphs: [
          "Shanvi, Postorder means Root comes POST (after).",
          "Left -> Right -> Root.",
          "This is useful for deleting a tree (delete children first, then parent)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Tree: 1 (Root), 2 (Left), 3 (Right). Postorder?",
        options: [
          { text: "1, 2, 3", feedback: "Preorder." },
          { text: "2, 1, 3", feedback: "Inorder." },
          { text: "2, 3, 1", feedback: "Correct! Left(2) -> Right(3) -> Root(1)." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursive.",
        issues: [
          "Recurse Left.",
          "Recurse Right.",
          "Visit Root.",
          "Simple."
        ],
        codeSnippet: `
postorder(root.left);
postorder(root.right);
print(root.val);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Iterative Trick (Reverse Preorder).",
        paragraphs: [
          "Preorder is Root -> Left -> Right.",
          "If we tweak Preorder to be Root -> Right -> Left...",
          "And then REVERSE the result...",
          "We get Left -> Right -> Root (Postorder)!",
          "So, use a Stack, push Left then Right, and add to front of result list."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Iterative 2-Stack (or LinkedList addFirst).",
        explanations: [
          "Use Stack for traversal.",
          "Use LinkedList for result (addFirst gives O(1) prepend).",
          "Push Root.",
          "Loop: Pop, addFirst to result.",
          "Push Left, Push Right (so Right is popped next, effectively doing Root->Right->Left)."
        ],
        codeLines: [
          "public List<Integer> postorderTraversal(TreeNode root) {",
          "    LinkedList<Integer> res = new LinkedList<>();",
          "    if (root == null) return res;",
          "    Stack<TreeNode> stack = new Stack<>();",
          "    stack.push(root);",
          "    while (!stack.isEmpty()) {",
          "        TreeNode curr = stack.pop();",
          "        res.addFirst(curr.val);",
          "        if (curr.left != null) stack.push(curr.left);",
          "        if (curr.right != null) stack.push(curr.right);",
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
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 1. Res: [1]. Push 2, Push 3. Stack: [2, 3]." },
          { array: [2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 3. Res: [3, 1]. (3 no kids). Stack: [2]." },
          { array: [2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 2. Res: [2, 3, 1]. Done." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Reverse engineering.",
        takeaways: [
          "The 'Reverse Preorder' trick is clever and easy to implement.",
          "True iterative Postorder using 1 stack without reversing is complex.",
          "Postorder is used for calculating height of tree."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "One Stack Postorder?",
        task: "Can you do it without reversing and only 1 stack?",
        solution: "Yes, but you need to track the 'last visited' node to know if you returned from Right child.",
        explanation: "Complex logic involving peek() and prev pointer."
      }
    }
  ]
};
