import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const ceilBSTLesson = {
  id: 'ceil-bst',
  chapterId: 10,
  title: "Ceil in BST",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Rounding Up",
        paragraphs: [
          "Shanvi, 'Ceil' of a number X is the smallest number in the tree that is >= X.",
          "It's like finding the next price point available for a product."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Tree: [2, 5, 9]. Ceil of 6?",
        options: [
          { text: "5", feedback: "5 < 6. We need >= 6." },
          { text: "9", feedback: "Correct! 9 is the smallest number >= 6." },
          { text: "None", feedback: "9 exists." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Inorder Traversal.",
        issues: [
          "Do Inorder (Sorted).",
          "Find first element >= X.",
          "O(N).",
          "We can do better using BST properties."
        ],
        codeSnippet: `
// Inorder gives 2, 5, 9. Loop and find 9.
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Navigate and Record.",
        paragraphs: [
          "Start at Root.",
          "If Root == Key: Result is Root. Done.",
          "If Root < Key: Root is too small. Go Right.",
          "If Root > Key: Root COULD be the Ceil. Record it, then go Left to see if there's a smaller one."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Iterative Search.",
        explanations: [
          "Initialize ceil = -1.",
          "Loop while root not null.",
          "If root.val == key: return key.",
          "If root.val < key: root = root.right.",
          "If root.val > key: ceil = root.val, root = root.left."
        ],
        codeLines: [
          "public int findCeil(TreeNode root, int key) {",
          "    int ceil = -1;",
          "    while (root != null) {",
          "        if (root.val == key) return key;",
          "        if (root.val > key) {",
          "            ceil = root.val;",
          "            root = root.left;",
          "        } else {",
          "            root = root.right;",
          "        }",
          "    }",
          "    return ceil;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tree: 10, 5, 13, 11, 14. Key: 12.",
        frames: [
          { array: [10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 10. 10 < 12. Go Right." },
          { array: [13], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 13. 13 > 12. Ceil = 13. Go Left." },
          { array: [11], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 11. 11 < 12. Go Right (null). End. Return 13." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Close enough is good enough.",
        takeaways: [
          "We only update 'ceil' when we go Left (finding a smaller candidate).",
          "Time: O(log N).",
          "Floor logic is symmetric (update 'floor' when going Right)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Floor in BST?",
        task: "Find largest number <= X.",
        solution: "If root > key, go Left. If root < key, record floor = root, go Right.",
        explanation: "Symmetric logic."
      }
    }
  ]
};
