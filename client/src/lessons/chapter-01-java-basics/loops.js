import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const loopsLesson = {
  id: 'loops-conditions',
  chapterId: 1,
  title: "Loops & Conditions",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Making Decisions & Repeating Tasks",
        paragraphs: [
          "Life is full of decisions, Shanvi. 'If it rains, I will take an umbrella.' This is a condition.",
          "Life is also full of repetition. 'Walk 1000 steps.' This is a loop.",
          "Computers are great at both. They never get tired of repeating things, and they follow your rules exactly."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If you wanted to print 'Hello' 5 times, which approach is better?",
        options: [
          { text: "Write System.out.println('Hello') 5 times.", feedback: "That works for 5, but what if you needed 1000?" },
          { text: "Use a loop that runs 5 times.", feedback: "Exactly! It scales perfectly whether you need 5 or 5 million." },
          { text: "Copy-paste the code.", feedback: "That's messy and hard to change later." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Without loops, we have to repeat code manually.",
        issues: [
          "Code becomes huge and unreadable.",
          "If you want to change the message, you have to change it in 100 places.",
          "It's prone to errors."
        ],
        codeSnippet: `
System.out.println("Hello");
System.out.println("Hello");
System.out.println("Hello");
System.out.println("Hello");
System.out.println("Hello");
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Use 'for' when you know how many times. Use 'while' when you don't.",
        paragraphs: [
          "The 'for' loop is like a counter: 'Count from 1 to 10'.",
          "The 'while' loop is like a sensor: 'Keep filling water WHILE the bucket is not full'.",
          "Conditions ('if/else') let your code choose different paths."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Let's write a loop that counts even numbers up to 10.",
        explanations: [
          "Start a loop from i = 0.",
          "Keep going as long as i <= 10.",
          "After each step, increase i by 1.",
          "Inside the loop, check IF i is even (i % 2 == 0).",
          "If yes, print it."
        ],
        codeLines: [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        for (int i = 0; i <= 10; i++) {",
          "            if (i % 2 == 0) {",
          "                System.out.println(i + \" is even\");",
          "            }",
          "        }",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Watch 'i' change. The condition checks every time.",
        frames: [
          { array: [0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i = 0. 0 <= 10? Yes. 0 % 2 == 0? Yes. Print '0 is even'." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i = 1. 1 <= 10? Yes. 1 % 2 == 0? No. Skip print." },
          { array: [2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i = 2. 2 <= 10? Yes. 2 % 2 == 0? Yes. Print '2 is even'." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Insanity is doing the same thing over and over... unless you are a loop.",
        takeaways: [
          "Loops automate repetition.",
          "Conditions (if/else) create logic branches.",
          "Combined, they make your code smart and powerful."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Can you sum numbers from 1 to N?",
        task: "Write a loop to calculate 1 + 2 + ... + 100.",
        solution: `
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum = sum + i;
}
System.out.println("Total: " + sum);
        `,
        explanation: "We create a 'sum' variable outside the loop and keep adding 'i' to it."
      }
    }
  ]
};
