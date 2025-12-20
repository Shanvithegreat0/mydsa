import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const longestConsecutiveLesson = {
  id: 'longest-consecutive-sequence',
  chapterId: 5,
  title: "Longest Consecutive Sequence",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Connecting the Dots",
        paragraphs: [
          "Shanvi, you have a bag of numbered tiles: 100, 4, 200, 1, 3, 2.",
          "If you arrange them, you can form chains.",
          "Chain 1: 1-2-3-4 (Length 4).",
          "Chain 2: 100 (Length 1).",
          "Chain 3: 200 (Length 1).",
          "We want the longest chain."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If we sort the array [100, 4, 200, 1, 3, 2], it becomes [1, 2, 3, 4, 100, 200]. Easy?",
        options: [
          { text: "Yes, but sorting takes O(N log N).", feedback: "Correct. We want O(N)." },
          { text: "No, sorting is impossible.", feedback: "Sorting is possible." },
          { text: "Sorting takes O(N).", feedback: "Only Radix sort, but usually O(N log N)." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Sort and Scan.",
        issues: [
          "Sort: O(N log N).",
          "Scan: O(N).",
          "Total: O(N log N).",
          "Can we do it without sorting?"
        ],
        codeSnippet: `
Arrays.sort(nums);
// check adjacent diff == 1
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "HashSet + Intelligent Starts.",
        paragraphs: [
          "Put all numbers in a HashSet for O(1) lookup.",
          "Iterate through the set.",
          "For each number 'x', check if 'x-1' exists.",
          "If 'x-1' exists, then 'x' is NOT the start of a sequence. Skip it.",
          "If 'x-1' does NOT exist, 'x' IS the start. Start counting: x, x+1, x+2..."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "O(N) Approach.",
        explanations: [
          "Add all to Set.",
          "Loop through Set.",
          "If (!set.contains(num-1)): Start counting.",
          "While (set.contains(currentNum + 1)): count++, currentNum++.",
          "Update max length."
        ],
        codeLines: [
          "public int longestConsecutive(int[] nums) {",
          "    Set<Integer> set = new HashSet<>();",
          "    for (int num : nums) set.add(num);",
          "    int longest = 0;",
          "    for (int num : set) {",
          "        if (!set.contains(num - 1)) {",
          "            int currentNum = num;",
          "            int currentStreak = 1;",
          "            while (set.contains(currentNum + 1)) {",
          "                currentNum += 1;",
          "                currentStreak += 1;",
          "            }",
          "            longest = Math.max(longest, currentStreak);",
          "        }",
          "    }",
          "    return longest;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Processing [100, 4, 200, 1, 3, 2].",
        frames: [
          { array: [100, 4, 200, 1, 3, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Check 100. 99 exists? No. Start chain. 101 exists? No. Len: 1." },
          { array: [100, 4, 200, 1, 3, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Check 4. 3 exists? Yes. Skip 4 (it's part of 3's chain)." },
          { array: [100, 4, 200, 1, 3, 2], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Check 1. 0 exists? No. Start chain. 2? Yes. 3? Yes. 4? Yes. 5? No. Len: 4." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Start at the beginning.",
        takeaways: [
          "By only processing the 'start' of chains, we visit each number at most twice.",
          "Once to check if it's a start.",
          "Once as part of the while loop.",
          "Total time O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Union Find?",
        task: "Can you solve this using Disjoint Set Union (DSU)?",
        solution: "Yes. Union(x, x+1) if both exist.",
        explanation: "The size of the largest component is the answer."
      }
    }
  ]
};
