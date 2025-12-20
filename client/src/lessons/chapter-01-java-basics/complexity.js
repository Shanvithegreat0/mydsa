import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const complexityLesson = {
  id: 'time-space-complexity',
  chapterId: 1,
  title: "Time & Space Complexity",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "How Fast is Your Code?",
        paragraphs: [
          "Shanvi, imagine you are looking for a book in a library.",
          "Scenario A: The books are sorted alphabetically. You can find it quickly.",
          "Scenario B: The books are thrown in a random pile. You have to check every single one.",
          "In coding, 'Time Complexity' measures how the work grows as the task gets bigger."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If checking 1 book takes 1 second, how long to check N books in a random pile?",
        options: [
          { text: "1 second always.", feedback: "Only if you are extremely lucky!" },
          { text: "N seconds.", feedback: "Correct. If there are 100 books, it takes 100 seconds. This is O(N)." },
          { text: "N*N seconds.", feedback: "That would be if you checked the whole pile for *every* book you owned." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Ignoring efficiency leads to slow apps.",
        issues: [
          "An algorithm that works for 10 items might freeze for 10,000 items.",
          "We use Big O notation to describe this growth.",
          "O(1) is instant. O(N) is linear. O(N^2) is slow (quadratic)."
        ],
        codeSnippet: `
// O(N) - Linear
for (int i = 0; i < n; i++) { ... }

// O(N^2) - Quadratic (Nested loops)
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) { ... }
}
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "We care about the 'Worst Case' scenario.",
        paragraphs: [
          "We assume the input is as bad as possible (e.g., the book is the last one in the pile).",
          "We drop constants. O(2N) is just O(N). We care about the *trend*.",
          "Space Complexity is similar: how much extra memory (RAM) do we need?"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Comparing O(1) vs O(N).",
        explanations: [
          "getFirst: Always takes 1 step, no matter how big the array is. O(1).",
          "sumAll: Has to touch every element once. O(N).",
          "If array size grows 10x, getFirst takes same time, sumAll takes 10x time."
        ],
        codeLines: [
          "public class Main {",
          "    // O(1) - Constant Time",
          "    public static int getFirst(int[] arr) {",
          "        return arr[0];",
          "    }",
          "    ",
          "    // O(N) - Linear Time",
          "    public static int sumAll(int[] arr) {",
          "        int sum = 0;",
          "        for (int num : arr) {",
          "            sum += num;",
          "        }",
          "        return sum;",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Visualizing the operations count.",
        frames: [
          { array: [1, 2, 3, 4, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Input size 5. O(1) takes 1 step. O(N) takes 5 steps." },
          { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Input size 10. O(1) takes 1 step. O(N) takes 10 steps." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Time is money, efficiency is key.",
        takeaways: [
          "Always ask: 'How does this scale?'",
          "Avoid nested loops (O(N^2)) if possible.",
          "Space complexity matters too (don't create huge arrays unnecessarily)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "What is the complexity of this code?",
        task: "for (int i = 0; i < n; i = i * 2) { ... }",
        solution: "O(log N)",
        explanation: "i doubles every time: 1, 2, 4, 8, 16... It reaches N very quickly. This is Logarithmic time, which is very fast!"
      }
    }
  ]
};
