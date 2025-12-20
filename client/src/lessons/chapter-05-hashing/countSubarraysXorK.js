import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const countSubarraysXorKLesson = {
  id: 'count-subarrays-xor-k',
  chapterId: 5,
  title: "Count Subarrays with XOR K",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "XOR Magic",
        paragraphs: [
          "Shanvi, XOR is a special operation.",
          "A ^ A = 0.",
          "A ^ 0 = A.",
          "If A ^ B = C, then A ^ C = B and B ^ C = A.",
          "We want to find subarrays where elements XOR'd together equal K."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Array: [4, 2, 2, 6, 4]. K = 6.",
        options: [
          { text: "[4, 2]", feedback: "4^2 = 6. Yes." },
          { text: "[2, 2, 6]", feedback: "2^2^6 = 0^6 = 6. Yes." },
          { text: "Both", feedback: "Correct! And maybe more." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check all subarrays.",
        issues: [
          "O(N^2).",
          "Compute XOR for every range.",
          "Count if equals K."
        ],
        codeSnippet: `
for i... for j... xor...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Prefix XOR + Map.",
        paragraphs: [
          "Let XR be the prefix XOR up to index i.",
          "We want a subarray ending at i with XOR K.",
          "So we need a previous prefix XOR 'Y' such that XR ^ Y = K.",
          "This implies Y = XR ^ K.",
          "We check the map: 'How many times have I seen XR ^ K before?'"
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Counting with Map.",
        explanations: [
          "Map stores {XOR Value -> Count}.",
          "Initialize map with {0: 1} (to handle cases where subarray starts from index 0).",
          "Iterate, update XR.",
          "Target Y = XR ^ K.",
          "Add map.get(Y) to total count.",
          "Update map with current XR."
        ],
        codeLines: [
          "public int solve(int[] A, int B) {",
          "    Map<Integer, Integer> map = new HashMap<>();",
          "    map.put(0, 1); // Important!",
          "    int count = 0;",
          "    int xr = 0;",
          "    for (int num : A) {",
          "        xr = xr ^ num;",
          "        int target = xr ^ B;",
          "        if (map.containsKey(target)) {",
          "            count += map.get(target);",
          "        }",
          "        map.put(xr, map.getOrDefault(xr, 0) + 1);",
          "    }",
          "    return count;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Tracing [4, 2, 2, 6, 4], K=6.",
        frames: [
          { array: [4, 2, 2, 6, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "XR=4. Target=4^6=2. Map has 2? No. Map: {0:1, 4:1}." },
          { array: [4, 2, 2, 6, 4], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "XR=4^2=6. Target=6^6=0. Map has 0? Yes(1). Count=1. Map: {0:1, 4:1, 6:1}." },
          { array: [4, 2, 2, 6, 4], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "XR=6^2=4. Target=4^6=2. Map has 2? No. Map: {0:1, 4:2, 6:1}." },
          { array: [4, 2, 2, 6, 4], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "XR=4^6=2. Target=2^6=4. Map has 4? Yes(2). Count=1+2=3. Map: {..., 2:1}." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "XOR undoes itself.",
        takeaways: [
          "The logic is identical to 'Subarray Sum K', just using XOR instead of + and -.",
          "Don't forget map.put(0, 1) for prefixes starting at 0.",
          "O(N) time, O(N) space."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Longest Subarray with XOR K?",
        task: "Modify the code to find length instead of count.",
        solution: "Store first index instead of count in the map.",
        explanation: "Similar to 'Longest Subarray with 0 Sum'."
      }
    }
  ]
};
