import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const maxXorElementLesson = {
  id: 'max-xor-element',
  chapterId: 22,
  title: "Max XOR With Element",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Conditional XOR",
        paragraphs: [
          "Shanvi, given an array and queries [Xi, Mi].",
          "For each query, find a number Y in array such that Y <= Mi and (Xi ^ Y) is maximized.",
          "Return -1 if no such Y exists."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [0, 1, 2, 3, 4]. Query: X=3, M=1.",
        options: [
          { text: "3 ^ 4 = 7", feedback: "4 > M(1). Invalid." },
          { text: "3 ^ 1 = 2", feedback: "Correct! 1 <= 1." },
          { text: "3 ^ 0 = 3", feedback: "3 > 2. Better." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Filter and XOR.",
        issues: [
          "For each query, loop array.",
          "If arr[j] <= M, update max.",
          "O(Q * N).",
          "Too slow."
        ],
        codeSnippet: `
if arr[j] <= m: max = ...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Offline Queries + Trie.",
        paragraphs: [
          "Sort the array.",
          "Sort queries by M.",
          "Process queries with increasing M.",
          "Insert elements into Trie as long as element <= current M.",
          "Then query Trie for Max XOR with X."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Sort nums.",
          "Sort queries (keep original indices).",
          "Pointer idx for nums.",
          "Loop queries.",
          "While nums[idx] <= query.m: insert nums[idx], idx++.",
          "If idx == 0: ans = -1.",
          "Else: ans = getMax(query.x)."
        ],
        codeLines: [
          "public int[] maximizeXor(int[] nums, int[][] queries) {",
          "    Arrays.sort(nums);",
          "    int[][] q = new int[queries.length][3];",
          "    for (int i = 0; i < queries.length; i++) {",
          "        q[i][0] = queries[i][0];",
          "        q[i][1] = queries[i][1];",
          "        q[i][2] = i;",
          "    }",
          "    Arrays.sort(q, (a, b) -> a[1] - b[1]);",
          "    int[] ans = new int[queries.length];",
          "    TrieNode root = new TrieNode();",
          "    int idx = 0;",
          "    for (int i = 0; i < q.length; i++) {",
          "        while (idx < nums.length && nums[idx] <= q[i][1]) {",
          "            insert(root, nums[idx++]);",
          "        }",
          "        if (idx == 0) ans[q[i][2]] = -1;",
          "        else ans[q[i][2]] = getMax(root, q[i][0]);",
          "    }",
          "    return ans;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Sorted Arr: [1, 2, 4]. Queries sorted by M.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Q1: M=1. Insert 1. Query Trie." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Q2: M=3. Insert 2. Query Trie (has 1, 2)." },
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Q3: M=5. Insert 4. Query Trie (has 1, 2, 4)." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Just in time.",
        takeaways: [
          "Offline processing allows us to handle the '<= M' constraint efficiently.",
          "Time: O(N log N + Q log Q + (N+Q)*32).",
          "Space: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Online Queries?",
        task: "What if queries must be answered immediately?",
        solution: "Persistent Trie. Versioning the Trie.",
        explanation: "Advanced data structure."
      }
    }
  ]
};
