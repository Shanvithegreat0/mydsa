import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const nextPermutationLesson = {
  id: 'next-permutation',
  chapterId: 3,
  title: "Next Permutation",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Dictionary Order",
        paragraphs: [
          "Shanvi, imagine numbers as words in a dictionary.",
          "123 comes before 132.",
          "We want to find the 'next' word in alphabetical order using the same digits."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "What comes after 13542?",
        options: [
          { text: "13524", feedback: "That's smaller (2 < 4)." },
          { text: "14235", feedback: "Too big of a jump." },
          { text: "14235", feedback: "Wait, let's think. 13542 -> 14235 is correct? No. 13542 -> 14235 is a big jump. 13542 -> 14235... actually 13542 -> 14235 is wrong. 13542 -> 14235. Let's trace. 13542. 542 is decreasing. Break point at 3. Next bigger than 3 is 4. 14... then smallest rest 235. So 14235." },
          { text: "14235", feedback: "Let's re-evaluate. 13542. Suffix 542 is maxed out. Pivot is 3. Swap 3 with 4 (next larger in suffix). 14532. Reverse suffix. 14235. Yes!" }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Generate all permutations, sort them, find next.",
        issues: [
          "N! permutations. For N=10, that's 3.6 million.",
          "Way too slow.",
          "We need an O(N) approach."
        ],
        codeSnippet: `
// Don't do this!
generateAll(arr);
Collections.sort(perms);
findNext(current);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Find the first dip, swap, reverse.",
        paragraphs: [
          "1. Find the first pair from the right where arr[i] < arr[i+1]. This is the 'pivot'.",
          "2. Find the smallest number in the suffix that is greater than the pivot.",
          "3. Swap them.",
          "4. Reverse the suffix to make it as small as possible."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "The 3-step algorithm.",
        explanations: [
          "Find pivot i from right.",
          "If pivot exists, find successor j from right.",
          "Swap i and j.",
          "Reverse from i+1 to end."
        ],
        codeLines: [
          "public void nextPermutation(int[] nums) {",
          "    int i = nums.length - 2;",
          "    while (i >= 0 && nums[i] >= nums[i + 1]) i--;",
          "    ",
          "    if (i >= 0) {",
          "        int j = nums.length - 1;",
          "        while (nums[j] <= nums[i]) j--;",
          "        swap(nums, i, j);",
          "    }",
          "    reverse(nums, i + 1, nums.length - 1);",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Transforming 13542.",
        frames: [
          { array: [1, 3, 5, 4, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Scan from right. 2<4, 4<5, 5>3. Stop at 3 (index 1)." },
          { array: [1, 3, 5, 4, 2], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Scan suffix [5,4,2] for next bigger than 3. It's 4." },
          { array: [1, 4, 5, 3, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Swap 3 and 4." },
          { array: [1, 4, 2, 3, 5], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Reverse suffix [5,3,2] -> [2,3,5]. Result: 14235." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Smallest change for the next big step.",
        takeaways: [
          "We keep the prefix as long as possible.",
          "We just tweak the suffix.",
          "O(N) time, O(1) space."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Previous Permutation?",
        task: "How would you find the previous permutation?",
        solution: "Logic is reversed. Find first bump (arr[i] > arr[i+1]), swap with largest smaller, reverse.",
        explanation: "It's the mirror image of the Next Permutation algorithm."
      }
    }
  ]
};
