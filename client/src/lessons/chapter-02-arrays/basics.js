import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const basicsLesson = {
  id: 'arrays-basics',
  chapterId: 2,
  title: "Arrays: The Basics",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "What is an Array?",
        paragraphs: [
          "An array is a collection of items stored at contiguous memory locations.",
          "The idea is to store multiple items of the same type together.",
          "This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If you know the address of the first element (index 0) is 1000, and each element takes 4 bytes, what is the address of the element at index 5?",
        options: [
          { text: "1005", feedback: "Remember, each element takes 4 bytes." },
          { text: "1020", feedback: "Correct! 1000 + (5 * 4) = 1020." },
          { text: "1024", feedback: "Close, but index 5 is the 6th element. The offset is 5 * 4." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Accessing elements.",
        issues: [
          "Arrays allow random access to elements.",
          "This means you can access any element in O(1) time if you know its index.",
          "However, searching for an element by value takes O(N) time in an unsorted array because you might have to check every element."
        ],
        codeSnippet: `
// Accessing element at index i
int x = arr[i]; // O(1)

// Searching for value v
for(int i=0; i<n; i++) {
    if(arr[i] == v) return i; // O(N)
}
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Insertion and Deletion are costly.",
        paragraphs: [
          "Inserting an element at the beginning or middle requires shifting all subsequent elements.",
          "Deleting an element also requires shifting elements to fill the gap.",
          "Both operations take O(N) time in the worst case."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Basic Array Operations.",
        explanations: [
          "We can declare an array of a fixed size.",
          "We can iterate over it using a loop.",
          "We can modify elements at specific indices."
        ],
        codeLines: [
          "public void arrayBasics() {",
          "    // Declaration",
          "    int[] arr = new int[5];",
          "    ",
          "    // Initialization",
          "    arr[0] = 10;",
          "    arr[1] = 20;",
          "    ",
          "    // Traversal",
          "    for (int i = 0; i < arr.length; i++) {",
          "        System.out.println(arr[i]);",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Visualizing Memory.",
        frames: [
          { array: [10, 20, 0, 0, 0], highlightIndex: 0, explanation: "Index 0 holds 10." },
          { array: [10, 20, 0, 0, 0], highlightIndex: 1, explanation: "Index 1 holds 20." },
          { array: [10, 20, 0, 0, 0], highlightIndex: 2, explanation: "Index 2 is default 0." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Arrays are the building blocks of data structures.",
        takeaways: [
          "Fast access O(1) by index.",
          "Slow search O(N) by value (unless sorted).",
          "Slow insertion/deletion O(N).",
          "Fixed size (in languages like Java/C++)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Dynamic Arrays?",
        task: "What if we don't know the size beforehand?",
        solution: "We use Dynamic Arrays (like ArrayList in Java or vector in C++). They resize themselves automatically.",
        explanation: "When full, they create a new larger array and copy elements over."
      }
    }
  ]
};
