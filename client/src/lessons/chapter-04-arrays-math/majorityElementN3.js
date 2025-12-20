import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const majorityElementN3Lesson = {
  id: 'majority-element-n3',
  chapterId: 4,
  title: "Majority Element (>N/3)",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Two Kings?",
        paragraphs: [
          "Shanvi, previously we looked for a winner with > 50% votes.",
          "Now we look for winners with > 33.3% votes.",
          "Mathematically, there can be at most 2 such winners."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Array: [1, 1, 1, 2, 2, 2, 3, 3]. Size 8. > 8/3 = 2.66.",
        options: [
          { text: "1 and 2", feedback: "1 has 3 votes. 2 has 3 votes. Both > 2.66. Correct!" },
          { text: "1, 2, and 3", feedback: "3 has only 2 votes." },
          { text: "None", feedback: "Check counts again." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "HashMap counting.",
        issues: [
          "O(N) space.",
          "We want O(1) space extension of Moore's Voting Algorithm."
        ],
        codeSnippet: `
// Standard map approach
Map<Integer, Integer> map = ...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Extended Moore's Voting.",
        paragraphs: [
          "Track 2 candidates and 2 counts.",
          "If current == cand1, count1++.",
          "Else if current == cand2, count2++.",
          "Else if count1 == 0, pick cand1.",
          "Else if count2 == 0, pick cand2.",
          "Else decrement BOTH counts (triple cancellation)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation with 2 candidates.",
        explanations: [
          "First pass: Find potential candidates.",
          "Second pass: Verify if they actually have > N/3 votes (Mandatory step!)."
        ],
        codeLines: [
          "public List<Integer> majorityElement(int[] nums) {",
          "    int c1 = 0, c2 = 0, cnt1 = 0, cnt2 = 0;",
          "    for (int n : nums) {",
          "        if (cnt1 > 0 && n == c1) cnt1++;",
          "        else if (cnt2 > 0 && n == c2) cnt2++;",
          "        else if (cnt1 == 0) { c1 = n; cnt1 = 1; }",
          "        else if (cnt2 == 0) { c2 = n; cnt2 = 1; }",
          "        else { cnt1--; cnt2--; }",
          "    }",
          "    // Verification",
          "    cnt1 = 0; cnt2 = 0;",
          "    for (int n : nums) {",
          "        if (n == c1) cnt1++;",
          "        else if (n == c2) cnt2++;",
          "    }",
          "    List<Integer> res = new ArrayList<>();",
          "    if (cnt1 > nums.length / 3) res.add(c1);",
          "    if (cnt2 > nums.length / 3) res.add(c2);",
          "    return res;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Triple cancellation.",
        frames: [
          { array: [1, 2, 3], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Cand1: 1, Cand2: 2. Current: 3. Mismatch both. Decr both. All counts 0." },
          { array: [1, 2, 3, 1, 2], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Reset. Cand1: 1. Cand2: 2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Generalization is a sign of understanding.",
        takeaways: [
          "We generalized from K=1 (>N/2) to K=2 (>N/3).",
          "The logic holds: if we cancel K+1 distinct elements, the majority remains.",
          "O(N) time, O(1) space."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Generalize to > N/K?",
        task: "How many candidates for > N/K?",
        solution: "K-1 candidates.",
        explanation: "You need a map of size K-1 to track them."
      }
    }
  ]
};
