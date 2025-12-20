import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const fourSumLesson = {
  id: 'four-sum',
  chapterId: 5,
  title: "4 Sum",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Quadruplets",
        paragraphs: [
          "Shanvi, finding 2 numbers is easy.",
          "Finding 3 numbers is a bit harder.",
          "Finding 4 numbers (a+b+c+d = target) is the next level.",
          "We want unique quadruplets."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "If we fix 'a' and 'b', what problem remains?",
        options: [
          { text: "3 Sum", feedback: "We fixed 2, so 2 remain." },
          { text: "2 Sum", feedback: "Correct! We need to find c+d = target - (a+b)." },
          { text: "1 Sum", feedback: "We need 2 more numbers." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "4 Nested Loops.",
        issues: [
          "O(N^4).",
          "For N=100, 100^4 = 100 million. Okay-ish.",
          "For N=1000, 10^12. Way too slow.",
          "Also handling duplicates is a nightmare."
        ],
        codeSnippet: `
for i... for j... for k... for l...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Sort + Fix 2 + Two Pointers.",
        paragraphs: [
          "1. Sort the array.",
          "2. Loop 'i' from 0 to n-3.",
          "3. Loop 'j' from i+1 to n-2.",
          "4. Now use Two Pointers (left, right) for the remaining part to find target - (nums[i] + nums[j]).",
          "Skip duplicates carefully."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "O(N^3) Approach.",
        explanations: [
          "Sort array.",
          "Skip duplicates for i and j.",
          "Use long for sum to avoid overflow.",
          "Standard 2-pointer logic for the inner part."
        ],
        codeLines: [
          "public List<List<Integer>> fourSum(int[] nums, int target) {",
          "    Arrays.sort(nums);",
          "    List<List<Integer>> res = new ArrayList<>();",
          "    int n = nums.length;",
          "    for (int i = 0; i < n; i++) {",
          "        if (i > 0 && nums[i] == nums[i-1]) continue;",
          "        for (int j = i + 1; j < n; j++) {",
          "            if (j > i + 1 && nums[j] == nums[j-1]) continue;",
          "            int k = j + 1, l = n - 1;",
          "            while (k < l) {",
          "                long sum = (long)nums[i] + nums[j] + nums[k] + nums[l];",
          "                if (sum == target) {",
          "                    res.add(Arrays.asList(nums[i], nums[j], nums[k], nums[l]));",
          "                    k++; l--;",
          "                    while (k < l && nums[k] == nums[k-1]) k++;",
          "                    while (k < l && nums[l] == nums[l+1]) l--;",
          "                } else if (sum < target) k++;",
          "                else l--;",
          "            }",
          "        }",
          "    }",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Reduction strategy.",
        frames: [
          { array: [1, 0, -1, 0, -2, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Sorted: [-2, -1, 0, 0, 1, 2]. Target 0." },
          { array: [-2, -1, 0, 0, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Fix i=-2. Fix j=-1. Need 3. Remaining: [0, 0, 1, 2]. Two Pointers." },
          { array: [-2, -1, 0, 0, 1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Found 1+2=3. Quad: [-2, -1, 1, 2]. Sum=0." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Reduce complex problems to simpler ones.",
        takeaways: [
          "4 Sum becomes N * 3 Sum.",
          "3 Sum becomes N * 2 Sum.",
          "Sorting helps avoid duplicates easily.",
          "O(N^3) is acceptable for N=200."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "K Sum?",
        task: "Can you write a generic kSum(nums, target, k) function?",
        solution: "Yes, using recursion. Base case is k=2 (Two Sum).",
        explanation: "This handles 2Sum, 3Sum, 4Sum, ... KSum."
      }
    }
  ]
};
