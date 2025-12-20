import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const functionsLesson = {
  id: 'functions',
  chapterId: 1,
  title: "Functions (Methods)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Recipe for Success",
        paragraphs: [
          "Imagine you are baking a cake, Shanvi. You don't reinvent the recipe for 'flour mix' every time. You just say 'Prepare Flour Mix' and follow that specific sub-recipe.",
          "In Java, functions (or methods) are these sub-recipes.",
          "They let you group code together, give it a name, and reuse it whenever you want."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If you have code to calculate the area of a circle, and you need it for 5 different circles, what should you do?",
        options: [
          { text: "Copy the formula 3.14 * r * r five times.", feedback: "If you change 3.14 to Math.PI later, you have to fix it 5 times." },
          { text: "Create a function 'calculateArea(radius)' and call it 5 times.", feedback: "Exactly! Write once, use everywhere." },
          { text: "Write it once and hope for the best.", feedback: "Code doesn't run on hope!" }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Spaghetti code: everything in one giant 'main' method.",
        issues: [
          "Hard to read.",
          "Hard to debug.",
          "Impossible to reuse parts of it."
        ],
        codeSnippet: `
public static void main(String[] args) {
    // ... 500 lines of code ...
    // ... confusing logic ...
    // ... duplicate logic ...
}
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Inputs go in, Output comes out.",
        paragraphs: [
          "Think of a function as a machine.",
          "You put raw materials in (Parameters).",
          "The machine does work (Body).",
          "It gives you a finished product (Return Value)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Let's write a function to add two numbers.",
        explanations: [
          "Define the return type (int).",
          "Name the function (add).",
          "Define inputs (int a, int b).",
          "Return the result (a + b).",
          "Call it from main."
        ],
        codeLines: [
          "public class Main {",
          "    // The Function",
          "    public static int add(int a, int b) {",
          "        return a + b;",
          "    }",
          "    ",
          "    public static void main(String[] args) {",
          "        int sum = add(5, 10);",
          "        System.out.println(sum); // Prints 15",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "The 'Stack Frame'. When you call a function, Java creates a temporary workspace for it.",
        frames: [
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Main Stack: waiting for 'add' to finish." },
          { array: [5, 10], highlightIndex: 0, currentSum: 15, maxSum: 0, explanation: "Add Stack: a=5, b=10. Calculating 5+10." },
          { array: [15], highlightIndex: 0, currentSum: 15, maxSum: 0, explanation: "Add Stack: Returns 15. Stack frame destroyed." },
          { array: [15], highlightIndex: 0, currentSum: 15, maxSum: 0, explanation: "Main Stack: Resumes with value 15." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Don't repeat yourself (DRY).",
        takeaways: [
          "Functions make code reusable and clean.",
          "They have a signature: return type, name, parameters.",
          "They run in their own memory space (stack frame)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Write a function to check if a number is even.",
        task: "Create 'boolean isEven(int n)' that returns true if even, false otherwise.",
        solution: `
public static boolean isEven(int n) {
    return n % 2 == 0;
}
        `,
        explanation: "Simple and elegant. We return the result of the comparison directly."
      }
    }
  ]
};
