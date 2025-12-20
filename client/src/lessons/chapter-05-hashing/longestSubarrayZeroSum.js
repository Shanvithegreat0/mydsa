import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const longestSubarrayZeroSumLesson = {
  id: 'longest-subarray-zero-sum',
  chapterId: 5,
  title: "Longest Subarray with 0 Sum",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Balancing Act",
        paragraphs: [
          "Shanvi, imagine a bank account where you deposit and withdraw money.",
          "We want to find the longest period where the net change is ZERO.",
          "Example: +1, -1, +2, -2. Net change 0. Length 4."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Array: [1, -1, 3, 2, -2, -8, 1, 7, 10, 23]. Subarray with sum 0?",
        options: [
          { text: "[1, -1]", feedback: "Sum 0. Length 2." },
          { text: "[3, 2, -2, -8, 1, 7]", feedback: "Sum: 3+2-2-8+1+7 = 3. Not 0." },
          { text: "[2, -2]", feedback: "Sum 0. Length 2." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check all subarrays.",
        issues: [
          "O(N^2).",
          "Calculate sum for every i to j.",
          "If sum == 0, update max length."
        ],
        codeSnippet: `
for (int i...) for (int j...) { sum... if (sum==0) ... }
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Prefix Sums & HashMap.",
        paragraphs: [
          "Calculate running sum (Prefix Sum).",
          "If Sum at index i is S, and Sum at index j is ALSO S, then the part between i and j must be 0!",
          "S - 0 = S.",
          "Store {Sum -> First Index Seen} in a Map."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Prefix Sum Map.",
        explanations: [
          "Map stores first occurrence of each sum.",
          "Iterate array, add to sum.",
          "If sum == 0, length is i + 1.",
          "If map contains sum, length is i - map.get(sum).",
          "Else, put sum in map."
        ],
        codeLines: [
          "public int maxLen(int arr[], int n) {",
          "    Map<Integer, Integer> map = new HashMap<>();",
          "    int maxLen = 0;",
          "    int sum = 0;",
          "    for (int i = 0; i < n; i++) {",
          "        sum += arr[i];",
          "        if (sum == 0) {",
          "            maxLen = i + 1;",
          "        } else {",
          "            if (map.containsKey(sum)) {",
          "                maxLen = Math.max(maxLen, i - map.get(sum));",
          "            } else {",
          "                map.put(sum, i);",
          "            }",
          "        }",
          "    }",
          "    return maxLen;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tracing [1, -1, 3, 2, -2].",
        frames: [
          { array: [1, -1, 3, 2, -2], highlightIndex: 0, currentSum: 1, maxSum: 0, explanation: "i=0, Sum=1. Map: {1:0}." },
          { array: [1, -1, 3, 2, -2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "i=1, Sum=0. MaxLen = 2." },
          { array: [1, -1, 3, 2, -2], highlightIndex: 2, currentSum: 3, maxSum: 0, explanation: "i=2, Sum=3. Map: {1:0, 3:2}." },
          { array: [1, -1, 3, 2, -2], highlightIndex: 3, currentSum: 5, maxSum: 0, explanation: "i=3, Sum=5. Map: {1:0, 3:2, 5:3}." },
          { array: [1, -1, 3, 2, -2], highlightIndex: 4, currentSum: 3, maxSum: 0, explanation: "i=4, Sum=3. Seen at index 2! Len = 4-2 = 2. MaxLen remains 2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "History repeats itself.",
        takeaways: [
          "If the state (sum) repeats, the change in between was neutral (zero).",
          "This pattern applies to many 'Subarray Sum K' problems.",
          "O(N) time, O(N) space."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Longest Subarray with Sum K?",
        task: "Generalize the code.",
        solution: "Instead of looking for 'sum', look for 'sum - k' in the map.",
        explanation: "If sum[j] - sum[i] = k, then subarray(i+1...j) has sum k."
      }
    }
  ]
};
