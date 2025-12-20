import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const quickSortLesson = {
  id: 'quick-sort',
  chapterId: 19,
  title: "Quick Sort",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Pivot",
        paragraphs: [
          "Shanvi, pick an element (Pivot).",
          "Move all smaller elements to its Left.",
          "Move all larger elements to its Right.",
          "Now the Pivot is in its correct sorted position!",
          "Recursively do this for Left and Right parts."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr: [3, 1, 2]. Pivot 2.",
        options: [
          { text: "[3, 1, 2]", feedback: "Not partitioned." },
          { text: "[1, 2, 3]", feedback: "Correct! 1 < 2, 3 > 2." },
          { text: "[3, 2, 1]", feedback: "Wrong." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Partitioning.",
        issues: [
          "How to partition in-place?",
          "Lomuto Partition Scheme: Iterate j.",
          "If arr[j] < pivot, swap arr[j] with arr[i] (boundary).",
          "Finally swap pivot with arr[i+1]."
        ],
        codeSnippet: `
partition(arr, low, high)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Speed.",
        paragraphs: [
          "Average case O(N log N).",
          "Worst case O(N^2) (if already sorted and pivot is first/last).",
          "But in practice, it's faster than Merge Sort because it's in-place (cache friendly)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Pivot = arr[high].",
          "i = low - 1.",
          "Loop j from low to high-1.",
          "If arr[j] < pivot: i++, swap(i, j).",
          "Swap(i+1, high).",
          "Return i+1."
        ],
        codeLines: [
          "public void quickSort(int[] arr, int low, int high) {",
          "    if (low < high) {",
          "        int pi = partition(arr, low, high);",
          "        quickSort(arr, low, pi - 1);",
          "        quickSort(arr, pi + 1, high);",
          "    }",
          "}",
          "int partition(int[] arr, int low, int high) {",
          "    int pivot = arr[high];",
          "    int i = (low - 1);",
          "    for (int j = low; j < high; j++) {",
          "        if (arr[j] < pivot) {",
          "            i++;",
          "            int temp = arr[i];",
          "            arr[i] = arr[j];",
          "            arr[j] = temp;",
          "        }",
          "    }",
          "    int temp = arr[i + 1];",
          "    arr[i + 1] = arr[high];",
          "    arr[high] = temp;",
          "    return i + 1;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Arr: [10, 80, 30, 90, 40, 50, 70]. Pivot 70.",
        frames: [
          { array: [10, 30, 40, 50, 70, 90, 80], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "Partition around 70. Small: 10, 30, 40, 50. Large: 90, 80." },
          { array: [10, 30, 40, 50, 70, 80, 90], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Sort Left (already sorted). Sort Right ([90, 80] -> [80, 90])." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Divide and rule.",
        takeaways: [
          "Unstable sort.",
          "Time: O(N log N) avg.",
          "Space: O(log N) stack.",
          "Use Randomized Pivot to avoid worst case."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Hoare Partition?",
        task: "Another partition scheme?",
        solution: "Two pointers from both ends. Fewer swaps.",
        explanation: "Often faster."
      }
    }
  ]
};
