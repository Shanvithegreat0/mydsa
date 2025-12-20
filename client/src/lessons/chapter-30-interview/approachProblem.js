import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const approachProblemLesson = {
  id: 'reacto-approach',
  chapterId: 30,
  title: "The REACTO Method",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Don't Panic",
        paragraphs: [
          "Shanvi, in an interview, structure is your best friend.",
          "Use REACTO:",
          "R: Repeat the question.",
          "E: Examples (Edge cases).",
          "A: Approach (Brainstorm).",
          "C: Code.",
          "T: Test.",
          "O: Optimize."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Interviewer asks: 'Reverse a string'. First step?",
        options: [
          { text: "Start coding immediately.", feedback: "No! You might miss constraints." },
          { text: "Ask clarifying questions.", feedback: "Correct! 'In place?', 'ASCII or Unicode?'" },
          { text: "Say nothing.", feedback: "Communication is key." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Jumping to Code.",
        issues: [
          "Writing code before agreeing on an approach is a red flag.",
          "You might solve the wrong problem.",
          "You might write a suboptimal solution and run out of time to fix it."
        ],
        codeSnippet: `
// Coding without a plan...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Talk Out Loud.",
        paragraphs: [
          "Explain your thought process.",
          "'I'm thinking of using a HashMap to store frequencies...'",
          "This lets the interviewer guide you.",
          "If you get stuck, state what you know and what you are missing."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Clean Code.",
        explanations: [
          "Use meaningful variable names (not a, b, x).",
          "Modularize code (helper functions).",
          "Handle null/empty inputs.",
          "Dry run your code manually before saying 'I'm done'."
        ],
        codeLines: [
          "// Bad",
          "void f(int[] a) { ... }",
          "",
          "// Good",
          "public int findMaxElement(int[] numbers) {",
          "    if (numbers == null || numbers.length == 0) return -1;",
          "    // ...",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Whiteboard.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "1. Write constraints in corner." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "2. Draw example input/output." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "3. Write pseudocode/steps." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "4. Write actual code." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Process over perfection.",
        takeaways: [
          "Interviews test your thinking, not just your memory.",
          "Be collaborative.",
          "Listen to hints."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Stuck?",
        task: "What if you have NO idea?",
        solution: "Start with Brute Force. Ask for a hint. Don't stay silent.",
        explanation: "Silence is deadly."
      }
    }
  ]
};
