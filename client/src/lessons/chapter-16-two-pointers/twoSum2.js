import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const twoSum2Lesson = {
  id: 'two-sum-2',
  chapterId: 16,
  title: "Two Sum II (Sorted Array)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Sorted Advantage",
        paragraphs: [
          "Shanvi, remember Two Sum? We used a Hash Map.",
          "But now the array is SORTED.",
          "Can we use this property to save space?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [2, 7, 11, 15], Target: 9.",
        options: [
          { text: "2 + 15 > 9", feedback: "Too big." },
          { text: "2 + 7 = 9", feedback: "Correct!" },
          { text: "7 + 11 > 9", feedback: "Too big." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Binary Search?",
        issues: [
          "For each element X, binary search for Target - X.",
          "O(N log N).",
          "Better than O(N^2), but we can do O(N)."
        ],
        codeSnippet: `
// Binary Search for complement
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Pointers.",
        paragraphs: [
          "Left at 0 (Smallest). Right at N-1 (Largest).",
          "Sum = Arr[Left] + Arr[Right].",
          "If Sum > Target: We need a smaller sum. Move Right down.",
          "If Sum < Target: We need a larger sum. Move Left up.",
          "If Sum == Target: Found!"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Initialize L=0, R=N-1.",
          "Loop while L < R.",
          "Check sum.",
          "Adjust pointers.",
          "Return indices (1-based usually)."
        ],
        codeLines: [
          "public int[] twoSum(int[] numbers, int target) {",
          "    int left = 0, right = numbers.length - 1;",
          "    while (left < right) {",
          "        int sum = numbers[left] + numbers[right];",
          "        if (sum == target) return new int[]{left + 1, right + 1};",
          "        else if (sum < target) left++;",
          "        else right--;",
          "    }",
          "    return new int[]{-1, -1};",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [2, 3, 4], Target: 6.",
        frames: [
          { array: [2, 3, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "L: 2, R: 4. Sum: 6. Match! Return [1, 3]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Squeeze from both ends.",
        takeaways: [
          "Sorting enables the Two Pointer technique.",
          "Time: O(N).",
          "Space: O(1) (No Hash Map needed)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Three Sum?",
        task: "Find 3 numbers that sum to 0.",
        solution: "Fix one number, then use Two Sum on the rest.",
        explanation: "This is the basis for 3Sum."
      }
    }
  ]
};
