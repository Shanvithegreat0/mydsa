import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const findDuplicateLesson = {
  id: 'find-duplicate',
  chapterId: 2,
  title: "Find the Duplicate Number",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Pigeonhole Principle",
        paragraphs: [
          "Shanvi, if you have 5 holes and 6 pigeons, at least one hole must have more than one pigeon.",
          "Here, we have an array of size N+1, containing numbers from 1 to N.",
          "This guarantees at least one duplicate exists."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Array: [1, 3, 4, 2, 2]. Size 5. Numbers 1-4. Duplicate?",
        options: [
          { text: "2", feedback: "Correct!" },
          { text: "3", feedback: "Appears only once." },
          { text: "4", feedback: "Appears only once." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Sort or Hash Set.",
        issues: [
          "Sorting takes O(N log N) and modifies the array (not allowed usually).",
          "Hash Set takes O(N) space.",
          "We need O(N) time and O(1) space, without modifying the array."
        ],
        codeSnippet: `
// Sorting
Arrays.sort(nums);
for (int i = 1; i < n; i++) {
    if (nums[i] == nums[i-1]) return nums[i];
}
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Treat the array as a Linked List with a cycle.",
        paragraphs: [
          "This is the 'Tortoise and Hare' algorithm (Floyd's Cycle Detection).",
          "Value at index i is the 'next' pointer.",
          "Since there is a duplicate, two indices point to the same value, creating a cycle.",
          "We need to find the entry point of the cycle."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Fast and Slow Pointers.",
        explanations: [
          "Start slow and fast at nums[0].",
          "Move slow 1 step, fast 2 steps until they collide.",
          "Reset fast to start.",
          "Move both 1 step at a time.",
          "Where they meet again is the duplicate."
        ],
        codeLines: [
          "public int findDuplicate(int[] nums) {",
          "    int slow = nums[0];",
          "    int fast = nums[0];",
          "    do {",
          "        slow = nums[slow];",
          "        fast = nums[nums[fast]];",
          "    } while (slow != fast);",
          "    ",
          "    fast = nums[0];",
          "    while (slow != fast) {",
          "        slow = nums[slow];",
          "        fast = nums[fast];",
          "    }",
          "    return slow;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Cycle detection.",
        frames: [
          { array: [1, 3, 4, 2, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Index 0 -> 1 -> 3 -> 2 -> 4 -> 2 (Cycle!)" },
          { array: [1, 3, 4, 2, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Slow/Fast meet inside the cycle." },
          { array: [1, 3, 4, 2, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Reset Fast. Move both 1 step. They meet at 2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Seeing structure where others see chaos.",
        takeaways: [
          "Array values can be treated as pointers.",
          "Floyd's Cycle Detection is a powerful tool.",
          "Solved in O(N) time, O(1) space, no modification."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Why does the second phase work?",
        task: "Prove why resetting 'fast' to head finds the cycle entry.",
        solution: "Math proof: Distance from start to cycle entry = Distance from meeting point to cycle entry.",
        explanation: "It involves modular arithmetic and the distance covered by fast vs slow."
      }
    }
  ]
};
