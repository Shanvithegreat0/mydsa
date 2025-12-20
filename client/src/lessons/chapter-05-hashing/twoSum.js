import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const twoSumLesson = {
  id: 'two-sum',
  chapterId: 5,
  title: "Two Sum",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Perfect Match",
        paragraphs: [
          "Shanvi, imagine you have a target number, say 10.",
          "You have a list of numbers: [3, 5, 2, 8, 1].",
          "You need to find two numbers that add up to 10.",
          "It's like finding a puzzle piece that fits perfectly."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Target: 9. Array: [2, 7, 11, 15]. Which indices?",
        options: [
          { text: "0 and 1", feedback: "2 + 7 = 9. Correct!" },
          { text: "1 and 2", feedback: "7 + 11 = 18." },
          { text: "0 and 3", feedback: "2 + 15 = 17." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check every pair.",
        issues: [
          "For every number 'x', look for 'target - x' in the rest of the array.",
          "This requires nested loops.",
          "Time complexity: O(N^2)."
        ],
        codeSnippet: `
for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
        if (nums[i] + nums[j] == target) return new int[]{i, j};
    }
}
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Use a HashMap to remember what you've seen.",
        paragraphs: [
          "As we walk through the array, we ask: 'Have I seen the partner (target - current) before?'",
          "If yes, we found the pair!",
          "If no, we add the current number to the map and move on.",
          "Map stores: {Value -> Index}."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "One-pass Hash Map.",
        explanations: [
          "Initialize empty map.",
          "Iterate i from 0 to n.",
          "Calculate diff = target - nums[i].",
          "Check if map contains diff.",
          "If yes, return {map.get(diff), i}.",
          "Else, map.put(nums[i], i)."
        ],
        codeLines: [
          "public int[] twoSum(int[] nums, int target) {",
          "    Map<Integer, Integer> map = new HashMap<>();",
          "    for (int i = 0; i < nums.length; i++) {",
          "        int complement = target - nums[i];",
          "        if (map.containsKey(complement)) {",
          "            return new int[] { map.get(complement), i };",
          "        }",
          "        map.put(nums[i], i);",
          "    }",
          "    return new int[] {};",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Walking through [3, 2, 4], Target 6.",
        frames: [
          { array: [3, 2, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0, Val=3. Need 3. Map empty. Put {3:0}." },
          { array: [3, 2, 4], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1, Val=2. Need 4. Map has {3}. Not found. Put {2:1}." },
          { array: [3, 2, 4], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "i=2, Val=4. Need 2. Map has {3, 2}. Found 2 at index 1! Return [1, 2]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Memory buys speed.",
        takeaways: [
          "We traded space (O(N) map) for time (O(N) speed).",
          "This is a classic space-time tradeoff.",
          "HashMaps give O(1) lookups on average."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What if the array is sorted?",
        task: "Can you do it without a map?",
        solution: "Yes! Use Two Pointers (Left, Right).",
        explanation: "If sum < target, move Left++. If sum > target, move Right--. O(N) time, O(1) space."
      }
    }
  ]
};
