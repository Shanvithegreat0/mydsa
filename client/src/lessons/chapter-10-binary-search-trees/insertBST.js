import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const insertBSTLesson = {
  id: 'insert-bst',
  chapterId: 10,
  title: "Insert into BST",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Finding a Spot",
        paragraphs: [
          "Shanvi, inserting into a BST is like filing a document.",
          "You follow the path (Left/Right) until you hit a dead end (null).",
          "That's where the new node goes."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Tree: 4, 2, 7. Insert 5.",
        options: [
          { text: "Left of 2", feedback: "5 > 2." },
          { text: "Right of 2", feedback: "5 > 2, but 5 > 4 too. Should be right of 4." },
          { text: "Left of 7", feedback: "Correct! 5 > 4 (Right), 5 < 7 (Left)." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Rebuild Tree?",
        issues: [
          "Add to list, sort, rebuild.",
          "O(N).",
          "We want O(log N)."
        ],
        codeSnippet: `
// Don't rebuild!
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Traverse and Attach.",
        paragraphs: [
          "If root is null, return new Node.",
          "If val < root.val, go Left.",
          "If val > root.val, go Right.",
          "When you find a null spot, attach the new node."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Recursive Insertion.",
        explanations: [
          "Base case: if root is null, return new TreeNode(val).",
          "If val < root.val, root.left = insert(root.left, val).",
          "If val > root.val, root.right = insert(root.right, val).",
          "Return root."
        ],
        codeLines: [
          "public TreeNode insertIntoBST(TreeNode root, int val) {",
          "    if (root == null) return new TreeNode(val);",
          "    if (val < root.val) {",
          "        root.left = insertIntoBST(root.left, val);",
          "    } else {",
          "        root.right = insertIntoBST(root.right, val);",
          "    }",
          "    return root;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Inserting 5 into 4 -> 2, 7.",
        frames: [
          { array: [4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 4. 5 > 4. Go Right." },
          { array: [7], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: 7. 5 < 7. Go Left." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Curr: Null. Create 5. Attach to 7.left." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "A place for everything.",
        takeaways: [
          "Insertion always happens at a leaf (or null link).",
          "Structure depends on insertion order.",
          "Sorted input -> Skewed Tree (Bad). Random input -> Balanced Tree (Good)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Self-Balancing?",
        task: "How to avoid skewed trees?",
        solution: "AVL Trees or Red-Black Trees.",
        explanation: "They rotate nodes to maintain O(log N) height."
      }
    }
  ]
};
