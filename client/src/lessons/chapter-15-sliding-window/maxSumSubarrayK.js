import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const maxSumSubarrayKLesson = {
  id: 'max-sum-subarray-k',
  chapterId: 15,
  title: "Max Sum Subarray of Size K",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Moving Frame",
        paragraphs: [
          "Shanvi, imagine looking at a long train through a small window.",
          "You can only see K wagons at a time.",
          "As the train moves, one wagon leaves your view and a new one enters.",
          "This is the Sliding Window technique."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [1, 2, 3, 4, 5], K=2. Max Sum?",
        options: [
          { text: "3 (1+2)", feedback: "Smallest sum." },
          { text: "9 (4+5)", feedback: "Correct! The last window." },
          { text: "15 (sum all)", feedback: "Window size is 2." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Nested Loops.",
        issues: [
          "For every index i from 0 to N-K:",
          "  Sum elements from i to i+K-1.",
          "  Update max.",
          "O(N*K). If K is large (N/2), this is O(N^2)."
        ],
        codeSnippet: `
for i: sum = 0; for j: sum += arr[i+j]
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Slide it.",
        paragraphs: [
          "Calculate sum of first K elements.",
          "To get next window sum:",
          "  Subtract the element leaving (arr[i-1]).",
          "  Add the element entering (arr[i+K-1]).",
          "This is O(1) per step!"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Fixed Window Implementation.",
        explanations: [
          "Compute initial sum for 0 to K-1.",
          "Loop from K to N-1.",
          "currSum += arr[i] - arr[i-K].",
          "Update maxSum."
        ],
        codeLines: [
          "public long maximumSumSubarray(int K, ArrayList<Integer> Arr, int N) {",
          "    long currSum = 0;",
          "    for (int i = 0; i < K; i++) currSum += Arr.get(i);",
          "    long maxSum = currSum;",
          "    for (int i = K; i < N; i++) {",
          "        currSum += Arr.get(i) - Arr.get(i - K);",
          "        maxSum = Math.max(maxSum, currSum);",
          "    }",
          "    return maxSum;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [100, 200, 300, 400], K=2.",
        frames: [
          { array: [100, 200], highlightIndex: 0, currentSum: 300, maxSum: 300, explanation: "Init: 100+200=300. Max: 300." },
          { array: [200, 300], highlightIndex: 1, currentSum: 500, maxSum: 500, explanation: "Slide: 300 - 100 + 300 = 500. Max: 500." },
          { array: [300, 400], highlightIndex: 2, currentSum: 700, maxSum: 700, explanation: "Slide: 500 - 200 + 400 = 700. Max: 700." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Reuse your work.",
        takeaways: [
          "Don't re-calculate the whole sum.",
          "Just adjust for the delta.",
          "Time: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Variable Size?",
        task: "Find smallest subarray with sum >= S.",
        solution: "Expand right until sum >= S, then shrink left.",
        explanation: "This is 'Variable Sliding Window'."
      }
    }
  ]
};
