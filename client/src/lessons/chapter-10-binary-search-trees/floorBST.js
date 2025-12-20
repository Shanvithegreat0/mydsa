import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const floorBSTLesson = {
  id: 'floor-bst',
  chapterId: 10,
  title: "Floor in BST",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Rounding Down",
        paragraphs: [
          "Shanvi, 'Floor' of a number X is the largest number in the tree that is <= X.",
          "It's like finding the highest bid that is within your budget."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Tree: [2, 5, 9]. Floor of 6?",
        options: [
          { text: "2", feedback: "2 <= 6, but 5 is larger and also <= 6." },
          { text: "5", feedback: "Correct! 5 is the largest number <= 6." },
          { text: "9", feedback: "9 > 6." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Inorder Traversal.",
        issues: [
          "O(N).",
          "We can do O(log N)."
        ],
        codeSnippet: `
// Inorder...
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
          "If Root > Key: Root is too big. Go Left.",
          "If Root < Key: Root COULD be the Floor. Record it, then go Right to see if there's a larger one."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Iterative Search.",
        explanations: [
          "Initialize floor = -1.",
          "Loop while root not null.",
          "If root.val == key: return key.",
          "If root.val > key: root = root.left.",
          "If root.val < key: floor = root.val, root = root.right."
        ],
        codeLines: [
          "public int findFloor(TreeNode root, int key) {",
          "    int floor = -1;",
          "    while (root != null) {",
          "        if (root.val == key) return key;",
          "        if (root.val > key) {",
          "            root = root.left;",
          "        } else {",
          "            floor = root.val;",
          "            root = root.right;",
          "        }",
          "    }",
          "    return floor;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tree: 10, 5, 13, 2, 7. Key: 6.",
        frames: [
          { array: [10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 10. 10 > 6. Go Left." },
          { array: [5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 5. 5 < 6. Floor = 5. Go Right." },
          { array: [7], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 7. 7 > 6. Go Left (null). End. Return 5." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Don't settle for less... unless you have to.",
        takeaways: [
          "We only update 'floor' when we go Right (finding a larger candidate).",
          "Time: O(log N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Ceil in BST?",
        task: "Just to review.",
        solution: "If root > key, record ceil = root, go Left.",
        explanation: "Symmetric logic."
      }
    }
  ]
};
