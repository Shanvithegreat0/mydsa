import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const variablesLesson = {
  id: 'variables-data-types',
  chapterId: 1,
  title: "Variables & Data Types",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Containers for Information",
        paragraphs: [
          "Welcome to the start of your Java journey, Shanvi! Before we can build complex algorithms, we need to understand the building blocks.",
          "Imagine you are organizing a kitchen. You have different jars for different things: a small jar for spices, a medium jar for sugar, and a large bin for rice.",
          "In Java, 'variables' are these jars. And 'data types' tell Java what kind of jar to use—so you don't try to pour liquid milk into a woven basket!"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If you wanted to store a person's age (like 25) and their name (like 'Shanvi'), which types would you pick?",
        options: [
          { text: "int for both", feedback: "Names aren't numbers, so 'int' won't work for the name." },
          { text: "String for age, int for name", feedback: "Close, but swapped! Age is a number, Name is text." },
          { text: "int for age, String for name", feedback: "Perfect! 'int' holds whole numbers, and 'String' holds text." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "A common mistake is to use the wrong container size. For example, trying to store a huge number in a small container.",
        issues: [
          "Java has fixed sizes for primitive types.",
          "An 'int' can only hold up to about 2 billion.",
          "If you try to store the world population (8 billion) in an 'int', it will overflow and become a negative number!"
        ],
        codeSnippet: `
int worldPopulation = 8000000000; // Error! Too big for int.
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Choose the right type for the job: 'long' for big numbers, 'double' for decimals.",
        paragraphs: [
          "Just like you wouldn't put a pinch of salt in a rice bin (waste of space) or a sack of rice in a spice jar (overflow), Java wants you to be precise.",
          "Use 'int' for most counts, 'long' for huge counts, 'double' for money or measurements, and 'boolean' for true/false decisions."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Let's declare some variables in Java. Notice how we state the type first, then the name, then the value.",
        explanations: [
          "Declare an integer for age.",
          "Declare a double for height (decimals).",
          "Declare a boolean for learning status.",
          "Declare a String for your name (capital S for String!)."
        ],
        codeLines: [
          "public class Main {",
          "    public static void main(String[] args) {",
          "        int age = 20;",
          "        double height = 5.5;",
          "        boolean isLearning = true;",
          "        String name = \"Shanvi\";",
          "        ",
          "        System.out.println(name + \" is \" + age);",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Visualize the memory slots. 'int' takes 4 bytes, 'long' takes 8 bytes.",
        frames: [
          { array: [0, 0, 0, 20], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Memory Address 100: 'int age' takes 4 bytes. Value is 20." },
          { array: [0, 0, 0, 0, 0, 0, 0, 1], highlightIndex: 7, currentSum: 0, maxSum: 0, explanation: "Memory Address 104: 'boolean isLearning' takes 1 bit (effectively). Value is true (1)." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Well begun is half done.",
        takeaways: [
          "Java is statically typed: you must declare types.",
          "Primitives (int, double, boolean) store values directly.",
          "Objects (String) store references to data."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Can you swap two variables without using a third one?",
        task: "Given a = 5, b = 10. Swap them so a = 10, b = 5.",
        solution: `
int a = 5, b = 10;
a = a + b; // a becomes 15
b = a - b; // b becomes 5 (15 - 10)
a = a - b; // a becomes 10 (15 - 5)
        `,
        explanation: "This is a classic math trick! By adding them, we store the total. Then we subtract one to get the other."
      }
    }
  ]
};
