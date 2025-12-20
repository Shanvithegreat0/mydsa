import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const mergeArraysLesson = {
  id: 'merge-sorted-arrays',
  chapterId: 2,
  title: "Merge Two Sorted Arrays",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Zippering Two Lists",
        paragraphs: [
          "Shanvi, imagine you have two stacks of cards, both already sorted.",
          "You want to combine them into one big sorted stack.",
          "You don't need to re-sort everything. You just need to look at the top card of each stack and pick the smaller one."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Arr1: [1, 3, 5], Arr2: [2, 4, 6]. What is the first comparison?",
        options: [
          { text: "1 vs 2", feedback: "Correct! Smallest vs Smallest." },
          { text: "5 vs 6", feedback: "No, we start from the beginning." },
          { text: "1 vs 6", feedback: "Why compare the start of one with the end of another?" }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Combine and Sort.",
        issues: [
          "Create a new array of size N+M.",
          "Copy all elements.",
          "Sort the new array.",
          "Time complexity: O((N+M) log (N+M)). We can do better!"
        ],
        codeSnippet: `
// Naive
int[] res = new int[n+m];
// copy...
Arrays.sort(res);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Pointers Strategy.",
        paragraphs: [
          "Pointer i for Arr1, Pointer j for Arr2.",
          "Compare Arr1[i] and Arr2[j].",
          "Take the smaller one and move its pointer.",
          "If one array runs out, take the rest of the other array."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Merging without extra space (Gap Method) is hard. Let's do the standard merge first.",
        explanations: [
          "Create result array.",
          "While both have elements, compare and add.",
          "Add remaining elements from Arr1.",
          "Add remaining elements from Arr2."
        ],
        codeLines: [
          "public void merge(int[] nums1, int m, int[] nums2, int n) {",
          "    int i = m - 1; // End of valid nums1",
          "    int j = n - 1; // End of nums2",
          "    int k = m + n - 1; // End of result",
          "    ",
          "    while (j >= 0) {",
          "        if (i >= 0 && nums1[i] > nums2[j]) {",
          "            nums1[k] = nums1[i];",
          "            i--;",
          "        } else {",
          "            nums1[k] = nums2[j];",
          "            j--;",
          "        }",
          "        k--;",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Merging from the back (LeetCode version).",
        frames: [
          { array: [1, 3, 5, 0, 0, 0], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Compare 5 (Arr1) and 6 (Arr2). 6 is bigger." },
          { array: [1, 3, 5, 0, 0, 6], highlightIndex: 5, currentSum: 0, maxSum: 0, explanation: "Place 6 at the end. Move Arr2 pointer." },
          { array: [1, 3, 5, 0, 5, 6], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "Compare 5 and 4. 5 is bigger. Place 5." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Leverage existing order.",
        takeaways: [
          "If data is already sorted, don't re-sort.",
          "Two pointers is the standard technique here.",
          "Merging from the back avoids overwriting data in the LeetCode variation."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Merge without ANY extra space (Shell Sort logic)?",
        task: "Look up the 'Gap Method' for merging.",
        solution: "It compares elements with a gap (ceil((n+m)/2)) and reduces the gap.",
        explanation: "This allows merging in O(1) space but is more complex."
      }
    }
  ]
};
