import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const kthSmallestBSTLesson = {
  id: 'kth-smallest-bst',
  chapterId: 10,
  title: "Kth Smallest Element in BST",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Ranking",
        paragraphs: [
          "Shanvi, in a BST, Inorder Traversal gives sorted values.",
          "So the Kth element in the Inorder sequence IS the Kth smallest element."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Tree: 3, 1, 4, 2. K=1 (1st smallest).",
        options: [
          { text: "3", feedback: "3 is root." },
          { text: "1", feedback: "Correct! 1 is the smallest." },
          { text: "2", feedback: "2 is 2nd smallest." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Store Inorder.",
        issues: [
          "Do full Inorder traversal.",
          "Store in List.",
          "Return list.get(k-1).",
          "O(N) space.",
          "Can we stop early?"
        ],
        codeSnippet: `
List<Integer> list = new ArrayList<>();
inorder(root, list);
return list.get(k-1);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Count as you go.",
        paragraphs: [
          "Maintain a counter.",
          "Do Inorder (Left, Root, Right).",
          "When visiting Root, increment counter.",
          "If counter == K, that's our answer!",
          "Stop traversing."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Iterative Inorder with Count.",
        explanations: [
          "Use Stack for Inorder.",
          "Push all left.",
          "Pop: count++.",
          "If count == k, return val.",
          "Go right."
        ],
        codeLines: [
          "public int kthSmallest(TreeNode root, int k) {",
          "    Stack<TreeNode> stack = new Stack<>();",
          "    int count = 0;",
          "    while (root != null || !stack.isEmpty()) {",
          "        while (root != null) {",
          "            stack.push(root);",
          "            root = root.left;",
          "        }",
          "        root = stack.pop();",
          "        count++;",
          "        if (count == k) return root.val;",
          "        root = root.right;",
          "    }",
          "    return -1;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tree: 5, 3, 6, 2, 4. K=3.",
        frames: [
          { array: [5, 3, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Push 5, 3, 2. Stack: [5, 3, 2]." },
          { array: [2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 2. Count=1. Go Right (null)." },
          { array: [3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 3. Count=2. Go Right (4)." },
          { array: [4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Push 4. Pop 4. Count=3. Found! Return 4." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Order is intrinsic.",
        takeaways: [
          "BSTs are naturally sorted.",
          "Time: O(H + K).",
          "Space: O(H)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "O(1) Space?",
        task: "Can you do it without stack?",
        solution: "Morris Traversal.",
        explanation: "Modifies tree temporarily to thread pointers."
      }
    }
  ]
};
