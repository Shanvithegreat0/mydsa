import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const majorityElementN2Lesson = {
  id: 'majority-element-n2',
  chapterId: 4,
  title: "Majority Element (>N/2)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The King of the Hill",
        paragraphs: [
          "Shanvi, imagine an election where one candidate gets MORE than half the votes.",
          "If you pair up every voter with a voter for a *different* candidate, the winner will still have votes left over.",
          "This is the intuition behind the algorithm."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Array: [2, 2, 1, 1, 1, 2, 2]. Size 7. Majority?",
        options: [
          { text: "1", feedback: "Count is 3. 3 is not > 3.5." },
          { text: "2", feedback: "Count is 4. 4 > 3.5. Correct!" },
          { text: "None", feedback: "There is one." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Count frequencies.",
        issues: [
          "Use a HashMap to count occurrences.",
          "Time O(N), Space O(N).",
          "Can we do it in O(1) space?"
        ],
        codeSnippet: `
Map<Integer, Integer> counts = new HashMap<>();
for (int x : nums) ...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Moore's Voting Algorithm.",
        paragraphs: [
          "Maintain a 'candidate' and a 'count'.",
          "If count is 0, pick new candidate.",
          "If current number == candidate, count++.",
          "If current number != candidate, count--.",
          "The survivor is the majority element."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Moore's Voting Implementation.",
        explanations: [
          "Initialize count = 0, candidate = 0.",
          "Loop through array.",
          "Update candidate/count logic.",
          "Note: This assumes a majority element ALWAYS exists. If not guaranteed, verify at the end."
        ],
        codeLines: [
          "public int majorityElement(int[] nums) {",
          "    int count = 0;",
          "    int candidate = 0;",
          "    for (int num : nums) {",
          "        if (count == 0) {",
          "            candidate = num;",
          "        }",
          "        if (num == candidate) {",
          "            count += 1;",
          "        } else {",
          "            count -= 1;",
          "        }",
          "    }",
          "    return candidate;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Voting process.",
        frames: [
          { array: [2, 2, 1, 1, 1, 2, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Cand: 2, Count: 1" },
          { array: [2, 2, 1, 1, 1, 2, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Cand: 2, Count: 2 (Match)" },
          { array: [2, 2, 1, 1, 1, 2, 2], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Cand: 2, Count: 1 (Mismatch)" },
          { array: [2, 2, 1, 1, 1, 2, 2], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Cand: 2, Count: 0 (Mismatch)" },
          { array: [2, 2, 1, 1, 1, 2, 2], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "Count 0. New Cand: 1. Count: 1" },
          { array: [2, 2, 1, 1, 1, 2, 2], highlightIndex: 5, currentSum: 0, maxSum: 0, explanation: "Cand: 1, Count: 0 (Mismatch)" },
          { array: [2, 2, 1, 1, 1, 2, 2], highlightIndex: 6, currentSum: 0, maxSum: 0, explanation: "Count 0. New Cand: 2. Count: 1. Final: 2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Cancellation reveals the dominant force.",
        takeaways: [
          "O(N) time, O(1) space.",
          "Only works for > N/2 majority.",
          "Conceptually, we are canceling out pairs of different elements."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What if majority is > N/3?",
        task: "Can there be more than 2 such elements?",
        solution: "No. 1/3 + 1/3 + 1/3 = 1. At most 2 elements can be > N/3.",
        explanation: "We need to track 2 candidates and 2 counts."
      }
    }
  ]
};
