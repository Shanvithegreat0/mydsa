import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const searchBSTLesson = {
  id: 'search-bst',
  chapterId: 10,
  title: "Search in a Binary Search Tree",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Organized Library",
        paragraphs: [
          "Shanvi, a Binary Search Tree (BST) is like a sorted library.",
          "Everything smaller than the Root is on the Left.",
          "Everything larger than the Root is on the Right.",
          "This makes finding things super fast!"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Root: 10. Left: 5. Right: 15. Search for 7. Where to go?",
        options: [
          { text: "Right", feedback: "7 is smaller than 10." },
          { text: "Left", feedback: "Correct! 7 < 10, so it must be in the Left subtree." },
          { text: "Stay", feedback: "10 is not 7." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check every node?",
        issues: [
          "If we treat it like a normal tree, we search O(N).",
          "But we know the property: Left < Root < Right.",
          "We can eliminate half the tree at every step."
        ],
        codeSnippet: `
// Standard DFS is O(N)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Binary Search Logic.",
        paragraphs: [
          "Start at Root.",
          "If val == target, Found!",
          "If val > target, go Left.",
          "If val < target, go Right.",
          "If null, Not Found."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Recursive Search.",
        explanations: [
          "Base case: root is null or root.val is target.",
          "If val > target, return search(root.left).",
          "Else, return search(root.right)."
        ],
        codeLines: [
          "public TreeNode searchBST(TreeNode root, int val) {",
          "    if (root == null || root.val == val) return root;",
          "    if (root.val > val) return searchBST(root.left, val);",
          "    return searchBST(root.right, val);",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Searching for 7 in [10, 5, 15, 2, 7].",
        frames: [
          { array: [10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 10. 10 > 7. Go Left." },
          { array: [5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 5. 5 < 7. Go Right." },
          { array: [7], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 7. Found!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Divide and conquer.",
        takeaways: [
          "Time Complexity: O(H) (Height of tree).",
          "In a balanced tree, H = log N.",
          "In a skewed tree, H = N (worst case)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Iterative Search?",
        task: "Can you do it without recursion?",
        solution: "Yes, use a while loop. Space O(1).",
        explanation: "while(root != null && root.val != val) root = val < root.val ? root.left : root.right;"
      }
    }
  ]
};
