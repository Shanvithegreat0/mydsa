import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const mergeSortLesson = {
  id: 'merge-sort',
  chapterId: 19,
  title: "Merge Sort",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Divide and Conquer",
        paragraphs: [
          "Shanvi, if you have two sorted decks of cards, it's easy to merge them into one sorted deck.",
          "Merge Sort splits the array in half, sorts each half recursively, and then merges them."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "A: [1, 3], B: [2, 4]. Merge?",
        options: [
          { text: "[1, 3, 2, 4]", feedback: "Not sorted." },
          { text: "[1, 2, 3, 4]", feedback: "Correct! Compare heads: 1<2, take 1. 3>2, take 2. 3<4, take 3. Take 4." },
          { text: "[4, 3, 2, 1]", feedback: "Reverse." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Recursion.",
        issues: [
          "Base case: If size <= 1, return.",
          "Mid = N/2.",
          "Sort Left.",
          "Sort Right.",
          "Merge Left and Right.",
          "O(N log N) always."
        ],
        codeSnippet: `
merge(sort(L), sort(R))
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "The Merge Step.",
        paragraphs: [
          "The magic is in the merge.",
          "Use a temporary array.",
          "Pointers i (Left), j (Right), k (Temp).",
          "While both valid: take smaller.",
          "Copy remaining.",
          "Copy temp back to original."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "sort(arr, l, r).",
          "merge(arr, l, mid, r).",
          "Create temp arrays L[] and R[].",
          "Merge them."
        ],
        codeLines: [
          "public void mergeSort(int[] arr, int l, int r) {",
          "    if (l < r) {",
          "        int m = l + (r - l) / 2;",
          "        mergeSort(arr, l, m);",
          "        mergeSort(arr, m + 1, r);",
          "        merge(arr, l, m, r);",
          "    }",
          "}",
          "void merge(int arr[], int l, int m, int r) {",
          "    int n1 = m - l + 1, n2 = r - m;",
          "    int L[] = new int[n1];",
          "    int R[] = new int[n2];",
          "    for (int i = 0; i < n1; ++i) L[i] = arr[l + i];",
          "    for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];",
          "    int i = 0, j = 0, k = l;",
          "    while (i < n1 && j < n2) {",
          "        if (L[i] <= R[j]) arr[k++] = L[i++];",
          "        else arr[k++] = R[j++];",
          "    }",
          "    while (i < n1) arr[k++] = L[i++];",
          "    while (j < n2) arr[k++] = R[j++];",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [38, 27, 43, 3, 9, 82, 10].",
        frames: [
          { array: [38, 27, 43, 3, 9, 82, 10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Split -> [38, 27, 43, 3] and [9, 82, 10]." },
          { array: [27, 38, 3, 43, 9, 82, 10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Sort halves -> [27, 38] and [3, 43]." },
          { array: [3, 27, 38, 43, 9, 10, 82], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Merge halves -> [3, 27, 38, 43] and [9, 10, 82]." },
          { array: [3, 9, 10, 27, 38, 43, 82], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Final Merge." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Together we are strong.",
        takeaways: [
          "Stable sort.",
          "Time: O(N log N).",
          "Space: O(N) (Auxiliary)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "In-Place Merge?",
        task: "Can you do it O(1) space?",
        solution: "Very hard. Shell Sort is similar. Or block merge sort.",
        explanation: "Standard Merge Sort needs space."
      }
    }
  ]
};
