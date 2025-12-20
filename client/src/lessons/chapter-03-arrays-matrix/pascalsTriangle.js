import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const pascalsTriangleLesson = {
  id: 'pascals-triangle',
  chapterId: 3,
  title: "Pascal's Triangle",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Pyramid of Numbers",
        paragraphs: [
          "Shanvi, this is a beautiful number pattern.",
          "      1",
          "     1 1",
          "    1 2 1",
          "   1 3 3 1",
          "Each number is the sum of the two numbers directly above it."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "What is the next row after [1, 3, 3, 1]?",
        options: [
          { text: "[1, 4, 4, 1]", feedback: "Check the middle sums." },
          { text: "[1, 4, 6, 4, 1]", feedback: "Correct! 1, 1+3=4, 3+3=6, 3+1=4, 1." },
          { text: "[1, 5, 5, 1]", feedback: "Nope." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Generate row by row.",
        issues: [
          "This is actually the optimal way to generate the *whole* triangle.",
          "But what if we just want the Nth row?",
          "Or just the value at (Row R, Col C)?"
        ],
        codeSnippet: `
// Standard generation
prevRow = ...
currRow[i] = prevRow[i-1] + prevRow[i];
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Combinatorics! nCr",
        paragraphs: [
          "The value at Row R, Col C is actually 'R Choose C' (Combinations).",
          "nCr = n! / (r! * (n-r)!).",
          "We can calculate any element directly without generating previous rows."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Generating the whole triangle.",
        explanations: [
          "Outer loop for rows (i).",
          "Inner loop for columns (j).",
          "First and last elements are always 1.",
          "Others are sum of top-left and top-right from previous row."
        ],
        codeLines: [
          "public List<List<Integer>> generate(int numRows) {",
          "    List<List<Integer>> triangle = new ArrayList<>();",
          "    if (numRows == 0) return triangle;",
          "    triangle.add(new ArrayList<>());",
          "    triangle.get(0).add(1);",
          "    ",
          "    for (int i = 1; i < numRows; i++) {",
          "        List<Integer> prev = triangle.get(i-1);",
          "        List<Integer> curr = new ArrayList<>();",
          "        curr.add(1);",
          "        for (int j = 1; j < i; j++) {",
          "            curr.add(prev.get(j-1) + prev.get(j));",
          "        }",
          "        curr.add(1);",
          "        triangle.add(curr);",
          "    }",
          "    return triangle;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Building the pyramid.",
        frames: [
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 0" },
          { array: [1, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Row 1" },
          { array: [1, 2, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Row 2: 1+1=2" },
          { array: [1, 3, 3, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Row 3: 1+2=3, 2+1=3" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Patterns are everywhere.",
        takeaways: [
          "Used in binomial expansion (x+y)^n.",
          "Symmetric structure.",
          "Can be computed iteratively or using math formula."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Calculate just the Nth row efficiently.",
        task: "Can you do it in O(N) time?",
        solution: "Use the relationship: val = prev * (n - i + 1) / i.",
        explanation: "This allows generating the next term from the previous term using multiplication and division."
      }
    }
  ]
};
