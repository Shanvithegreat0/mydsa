import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const spaceComplexityLesson = {
  id: 'space-complexity',
  chapterId: 30,
  title: "Space Complexity",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Memory Usage",
        paragraphs: [
          "Shanvi, Space Complexity is how much EXTRA memory your algorithm needs.",
          "Input storage doesn't count (usually).",
          "Variables, Arrays, Maps, Recursion Stack count."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Recursive DFS depth N. Space?",
        options: [
          { text: "O(1)", feedback: "Stack frames take space." },
          { text: "O(N)", feedback: "Correct! Stack depth." },
          { text: "O(N^2)", feedback: "Unlikely." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Ignoring Stack.",
        issues: [
          "Thinking recursion is 'free'.",
          "It can cause StackOverflowError.",
          "Iterative solutions often save stack space (moved to Heap)."
        ],
        codeSnippet: `
// Implicit stack usage
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Auxiliary Space.",
        paragraphs: [
          "O(1): Pointers, counters.",
          "O(N): Array copy, HashMap, Recursion.",
          "O(N^2): 2D DP table, Adjacency Matrix.",
          "In-place algorithms aim for O(1) extra space."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Examples.",
        explanations: [
          "Merge Sort: O(N) aux space for merging.",
          "Quick Sort: O(log N) stack space.",
          "DP: O(N^2) -> O(N) optimization."
        ],
        codeLines: [
          "// O(N) Space",
          "int[] copy = new int[n];",
          "",
          "// O(1) Space",
          "for(int i=0; i<n/2; i++) swap(arr, i, n-1-i);"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Recursion Stack.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Call f(5). Stack: [5]." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Call f(4). Stack: [5, 4]." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Call f(3). Stack: [5, 4, 3]..." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Space is money.",
        takeaways: [
          "Trade-off: Time vs Space.",
          "HashMaps trade Space (O(N)) for Time (O(1)).",
          "Bit manipulation saves space."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Tail Recursion?",
        task: "Does Java optimize tail recursion?",
        solution: "No. Java compilers do not eliminate tail calls. Still O(N) stack.",
        explanation: "Language specific."
      }
    }
  ]
};
