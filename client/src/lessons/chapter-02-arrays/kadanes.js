import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const kadanesLesson = {
  id: 'kadanes-algorithm',
  chapterId: 2,
  title: "Maximum Subarray Sum (Kadane's Algorithm)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "A Story of Ups and Downs",
        paragraphs: [
          "Hi Shanvi. Imagine you are a stock trader. You have a list of price changes for a stock over several days. Some days the price goes up (positive numbers), and some days it goes down (negative numbers).",
          "Your goal is to find the *best possible period* to have held the stock. That means finding a contiguous sequence of days where the sum of changes is the highest possible.",
          "This is exactly what the Maximum Subarray Sum problem is about. It sounds simple, but there's a beautiful trick to solving it efficiently."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If you have the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], what do you think is the maximum sum of a contiguous subarray?",
        options: [
          { text: "4 (Just the number 4)", feedback: "Close, but we can combine it with neighbors to get more." },
          { text: "6 (From index 3 to 6: [4, -1, 2, 1])", feedback: "Exactly! 4 + (-1) + 2 + 1 = 6." },
          { text: "7 (Sum of all positive numbers)", feedback: "Remember, the subarray must be contiguous (connected)." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "The most obvious way is to check every possible subarray. We start at index 0 and check all subarrays starting there. Then index 1, and so on.",
        issues: [
          "We are doing a lot of repeated work.",
          "For an array of size N, we check N*N subarrays.",
          "This gives us O(N^2) time complexity. For 10,000 items, that's 100,000,000 operations!"
        ],
        codeSnippet: `
for (int i = 0; i < n; i++) {
    int currentSum = 0;
    for (int j = i; j < n; j++) {
        currentSum += arr[j];
        maxSum = Math.max(maxSum, currentSum);
    }
}
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "If your current running sum becomes negative, it's better to reset it to 0 and start fresh.",
        paragraphs: [
          "Think about it, Shanvi. If you have a 'bag' of numbers that sums up to -5, adding that bag to the next number will only *decrease* the total.",
          "So, whenever our current sum drops below zero, we throw it away and start a new subarray from the next number.",
          "This simple decision allows us to solve the problem in a single pass!"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Let's implement this logic in Java. We need two variables: one for the current sum, and one for the maximum sum found so far.",
        explanations: [
          "Initialize maxSoFar to the smallest integer, so any sum will be larger.",
          "Initialize currentSum to 0.",
          "Loop through each number in the array.",
          "Add the number to our currentSum.",
          "Update maxSoFar if currentSum is bigger.",
          "The Magic Step: If currentSum is negative, reset it to 0."
        ],
        codeLines: [
          "int maxSubArray(int[] nums) {",
          "    int maxSoFar = Integer.MIN_VALUE;",
          "    int currentSum = 0;",
          "    for (int num : nums) {",
          "        currentSum += num;",
          "        maxSoFar = Math.max(maxSoFar, currentSum);",
          "        if (currentSum < 0) {",
          "            currentSum = 0;",
          "        }",
          "    }",
          "    return maxSoFar;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Watch how the currentSum grows and resets. Notice what happens when we hit the negative numbers.",
        frames: [
          { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], highlightIndex: 0, currentSum: -2, maxSum: -2, explanation: "Add -2. Sum is -2. Update max. Reset sum to 0 because it's negative." },
          { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], highlightIndex: 1, currentSum: 1, maxSum: 1, explanation: "Add 1. Sum is 1. Update max to 1." },
          { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], highlightIndex: 2, currentSum: -2, maxSum: 1, explanation: "Add -3. Sum is -2. Don't update max. Reset sum to 0." },
          { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], highlightIndex: 3, currentSum: 4, maxSum: 4, explanation: "Add 4. Sum is 4. Update max to 4. This is the start of our best run." },
          { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], highlightIndex: 4, currentSum: 3, maxSum: 4, explanation: "Add -1. Sum drops to 3. Still positive, so we keep it." },
          { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], highlightIndex: 5, currentSum: 5, maxSum: 5, explanation: "Add 2. Sum becomes 5. New max!" },
          { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], highlightIndex: 6, currentSum: 6, maxSum: 6, explanation: "Add 1. Sum becomes 6. New max! This is our peak." },
          { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], highlightIndex: 7, currentSum: 1, maxSum: 6, explanation: "Add -5. Sum drops to 1. We keep going just in case." },
          { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], highlightIndex: 8, currentSum: 5, maxSum: 6, explanation: "Add 4. Sum is 5. Max remains 6." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Sometimes, letting go of negative baggage allows you to reach new highs.",
        takeaways: [
          "Kadane's Algorithm runs in O(N) time.",
          "The key is to reset the running sum when it becomes negative.",
          "It only works if we need a contiguous subarray."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What if you wanted to return the *start and end indices* of the subarray, not just the sum?",
        task: "Modify the algorithm to track 'start', 'end', and a temporary 's' index.",
        solution: `
int maxSoFar = Integer.MIN_VALUE, currentSum = 0;
int start = 0, end = 0, s = 0;

for (int i = 0; i < n; i++) {
    currentSum += nums[i];
    if (currentSum > maxSoFar) {
        maxSoFar = currentSum;
        start = s;
        end = i;
    }
    if (currentSum < 0) {
        currentSum = 0;
        s = i + 1;
    }
}
        `,
        explanation: "We keep a temporary start pointer 's'. When we reset currentSum, we move 's' to the next index. When we find a new max, we update the true 'start' and 'end'."
      }
    }
  ]
};
