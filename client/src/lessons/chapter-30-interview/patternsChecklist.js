import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const patternsChecklistLesson = {
  id: 'patterns-checklist',
  chapterId: 30,
  title: "Patterns Checklist",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Toolbox",
        paragraphs: [
          "Shanvi, when you see a problem, match it to a pattern.",
          "Don't reinvent the wheel.",
          "Here is your cheat sheet."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Sorted Array? Finding pair?",
        options: [
          { text: "DP", feedback: "Overkill." },
          { text: "Two Pointers", feedback: "Correct! Left and Right." },
          { text: "Graph", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Random Guessing.",
        issues: [
          "Trying every algo you know.",
          "Wasting time.",
          "Recognize the signals."
        ],
        codeSnippet: `
// Is it a graph? Is it a tree?
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Signal -> Pattern.",
        paragraphs: [
          "Sorted Array -> Binary Search, Two Pointers.",
          "Subarray/Substring -> Sliding Window, Prefix Sum.",
          "Tree/Graph Shortest Path -> BFS.",
          "Tree/Graph All Paths/Backtracking -> DFS.",
          "Top K Elements -> Heap.",
          "Max/Min Subarray/Subset -> DP, Greedy.",
          "Connected Components -> Union Find, DFS."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Mental Map.",
        explanations: [
          "1. Check Constraints.",
          "2. Check Data Structure (Array, String, Tree).",
          "3. Check Keywords (Max, Min, Unique, Sort).",
          "4. Select Pattern."
        ],
        codeLines: [
          "// The Algorithm Selection Flowchart",
          "if (N <= 20) -> Recursion/Backtracking",
          "if (Sorted) -> Binary Search",
          "if (Shortest Path unweighted) -> BFS",
          "if (Shortest Path weighted) -> Dijkstra"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Matching.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Problem: 'Longest substring with k distinct chars'." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Keyword: 'Substring'. Pattern: Sliding Window." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Problem: 'Kth largest element'." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Keyword: 'Kth', 'Largest'. Pattern: Heap or QuickSelect." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Pattern recognition.",
        takeaways: [
          "Practice identifying patterns, not just coding.",
          "Read the problem twice.",
          "Edge cases often break patterns."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Hybrid?",
        task: "What if multiple patterns apply?",
        solution: "Often happens. e.g., Binary Search on Answer + Greedy check.",
        explanation: "Advanced problems combine them."
      }
    }
  ]
};
