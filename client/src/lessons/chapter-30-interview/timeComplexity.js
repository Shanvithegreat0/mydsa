import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const timeComplexityLesson = {
  id: 'time-complexity',
  chapterId: 30,
  title: "Time Complexity (Big O)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "How Fast?",
        paragraphs: [
          "Shanvi, Big O measures how execution time grows with input size N.",
          "O(1): Constant.",
          "O(log N): Divide and conquer (Binary Search).",
          "O(N): Linear loop.",
          "O(N log N): Sorting.",
          "O(N^2): Nested loops."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "for(i=0; i<N; i*=2). Complexity?",
        options: [
          { text: "O(N)", feedback: "It jumps 1, 2, 4, 8..." },
          { text: "O(log N)", feedback: "Correct! Doubling loop." },
          { text: "O(1)", feedback: "Depends on N." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Ignoring Constants.",
        issues: [
          "O(2N) is O(N).",
          "O(N + 1000) is O(N).",
          "We care about the dominant term as N -> Infinity.",
          "But in real life, constants matter!"
        ],
        codeSnippet: `
// O(1000000 * N) is still O(N)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Input Constraints.",
        paragraphs: [
          "N <= 10: O(N!) or O(2^N) is fine.",
          "N <= 1000: O(N^2) is acceptable.",
          "N <= 10^5: O(N) or O(N log N) is required.",
          "N <= 10^9: O(log N) or O(1).",
          "Use constraints to guess the required algorithm!"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Analyzing Code.",
        explanations: [
          "Identify loops.",
          "Identify recursion depth.",
          "Identify expensive API calls (e.g., sort).",
          "Sum them up."
        ],
        codeLines: [
          "void analyze(int n) {",
          "    // O(N)",
          "    for(int i=0; i<n; i++) { ... }",
          "    ",
          "    // O(N^2)",
          "    for(int i=0; i<n; i++)",
          "      for(int j=0; j<n; j++) { ... }",
          "      ",
          "    // Total: O(N + N^2) -> O(N^2)",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Growth Rates.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "N=10. N^2=100. 2^N=1024." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "N=20. N^2=400. 2^N=1,000,000 (Huge jump)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "N=100. N^2=10,000. 2^N=Universe heat death." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Scale matters.",
        takeaways: [
          "Always state time complexity after solving.",
          "Worst case vs Average case (QuickSort).",
          "Space complexity is just as important."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Amortized?",
        task: "ArrayList add() complexity?",
        solution: "O(1) amortized. Occasionally O(N) to resize, but rare.",
        explanation: "Average over time."
      }
    }
  ]
};
