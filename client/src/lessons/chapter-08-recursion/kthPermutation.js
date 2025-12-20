import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const kthPermutationLesson = {
  id: 'kth-permutation',
  chapterId: 8,
  title: "Kth Permutation Sequence",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Dictionary",
        paragraphs: [
          "Shanvi, if N=3, the permutations are:",
          "123, 132, 213, 231, 312, 321.",
          "We want the Kth one directly, without generating all of them."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "N=3, K=3. What is it?",
        options: [
          { text: "123", feedback: "That's 1st." },
          { text: "213", feedback: "Correct! 123, 132, 213." },
          { text: "321", feedback: "That's 6th (last)." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Generate and Sort.",
        issues: [
          "Generate all N! permutations.",
          "Sort them.",
          "Pick Kth.",
          "For N=9, 9! = 362,880. Okay.",
          "For N=100... impossible."
        ],
        codeSnippet: `
// Don't generate all!
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Math & Factorials.",
        paragraphs: [
          "N=3. Total 6. First digit changes every 2 (2 = (N-1)!).",
          "1xx (indices 0, 1)",
          "2xx (indices 2, 3)",
          "3xx (indices 4, 5)",
          "We can calculate exactly which block K falls into.",
          "Index = K / (N-1)!."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Mathematical Construction.",
        explanations: [
          "Create list of numbers [1, 2, ..., N].",
          "Calculate factorial of N-1.",
          "Reduce K by 1 (0-indexed).",
          "Loop N times:",
          "  Index = K / fact.",
          "  Add numbers[Index] to result.",
          "  Remove numbers[Index].",
          "  K = K % fact.",
          "  fact = fact / numbers.size()."
        ],
        codeLines: [
          "public String getPermutation(int n, int k) {",
          "    int fact = 1;",
          "    List<Integer> numbers = new ArrayList<>();",
          "    for (int i = 1; i < n; i++) {",
          "        fact = fact * i;",
          "        numbers.add(i);",
          "    }",
          "    numbers.add(n);",
          "    String ans = \"\";",
          "    k = k - 1;",
          "    while (true) {",
          "        ans = ans + numbers.get(k / fact);",
          "        numbers.remove(k / fact);",
          "        if (numbers.size() == 0) break;",
          "        k = k % fact;",
          "        fact = fact / numbers.size();",
          "    }",
          "    return ans;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "N=3, K=3 (Index 2). List=[1, 2, 3]. Fact=2.",
        frames: [
          { array: [1, 2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "K=2. Fact=2. Idx = 2/2 = 1. Pick 2. List=[1, 3]. K=0. Fact=1." },
          { array: [1, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "K=0. Fact=1. Idx = 0/1 = 0. Pick 1. List=[3]. K=0. Fact=1." },
          { array: [3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Last one is 3. Result: 213." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Math shortcuts the brute force.",
        takeaways: [
          "O(N^2) time (due to list removal).",
          "O(N) space.",
          "Much faster than O(N!)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Next Permutation vs Kth Permutation?",
        task: "When to use which?",
        solution: "Next Permutation is for iterating. Kth Permutation is for random access.",
        explanation: "Different tools for different needs."
      }
    }
  ]
};
