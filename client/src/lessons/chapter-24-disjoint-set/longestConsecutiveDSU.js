import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const longestConsecutiveDSULesson = {
  id: 'longest-consecutive-dsu',
  chapterId: 24,
  title: "Longest Consecutive Sequence (DSU)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Connecting Dots",
        paragraphs: [
          "Shanvi, remember finding the longest consecutive sequence? [100, 4, 200, 1, 3, 2] -> [1, 2, 3, 4] (Length 4).",
          "We used HashSet before.",
          "Now let's use DSU."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If we have 1, 2, 3. Add 4.",
        options: [
          { text: "New component {4}.", feedback: "But 3 exists." },
          { text: "Merge 4 with 3.", feedback: "Correct! {1,2,3} merges with {4}." },
          { text: "Ignore.", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "HashSet.",
        issues: [
          "O(N) time.",
          "Very efficient.",
          "DSU is actually overkill here, but good practice.",
          "DSU is O(N alpha N)."
        ],
        codeSnippet: `
// Set approach is standard
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Union Neighbors.",
        paragraphs: [
          "Put all numbers in a Map<Integer, Integer> (Value -> Index).",
          "Init DSU size N.",
          "For each num:",
          "  If num-1 exists, Union(index(num), index(num-1)).",
          "  If num+1 exists, Union(index(num), index(num+1)).",
          "Track size of each component.",
          "Max size is answer."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Map val -> index.",
          "DSU with size array.",
          "Loop nums.",
          "Check neighbors in map.",
          "Union and update max size."
        ],
        codeLines: [
          "public int longestConsecutive(int[] nums) {",
          "    if (nums.length == 0) return 0;",
          "    DSU dsu = new DSU(nums.length);",
          "    Map<Integer, Integer> map = new HashMap<>();",
          "    for (int i = 0; i < nums.length; i++) {",
          "        if (map.containsKey(nums[i])) continue;",
          "        map.put(nums[i], i);",
          "        if (map.containsKey(nums[i] - 1)) dsu.union(i, map.get(nums[i] - 1));",
          "        if (map.containsKey(nums[i] + 1)) dsu.union(i, map.get(nums[i] + 1));",
          "    }",
          "    return dsu.maxSize;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [1, 3, 2].",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add 1. Size 1." },
          { array: [1, 3], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Add 3. Neighbors? No. Size 1." },
          { array: [1, 3, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Add 2. Neighbor 1? Yes. Union(2,1). Neighbor 3? Yes. Union(2,3). Size 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Chaining up.",
        takeaways: [
          "DSU handles dynamic connectivity well.",
          "Maintaining component size is a common requirement.",
          "Time: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Online Stream?",
        task: "Numbers come one by one?",
        solution: "DSU is perfect for this. HashSet approach would need re-scanning.",
        explanation: "DSU supports dynamic updates."
      }
    }
  ]
};
