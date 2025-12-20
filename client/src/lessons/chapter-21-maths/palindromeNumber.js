import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const palindromeNumberLesson = {
  id: 'palindrome-number',
  chapterId: 21,
  title: "Palindrome Number",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Mirror Image",
        paragraphs: [
          "Shanvi, check if an integer reads the same backward as forward.",
          "121 -> Yes.",
          "-121 -> No (reads 121-).",
          "10 -> No (01)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "0?",
        options: [
          { text: "No", feedback: "0 reversed is 0." },
          { text: "Yes", feedback: "Correct!" },
          { text: "Undefined", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "String Conversion.",
        issues: [
          "String s = String.valueOf(x).",
          "Return s.equals(new StringBuilder(s).reverse().toString()).",
          "Uses extra space.",
          "Can we do it without converting to string?"
        ],
        codeSnippet: `
s.equals(reverse(s))
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Revert Half.",
        paragraphs: [
          "If we reverse the WHOLE number, it might overflow (though not for palindromes usually).",
          "Better: Reverse only the second half.",
          "Stop when reversed number >= original number.",
          "Example: 1221. x=12, rev=21 -> rev=12. x==rev.",
          "Example: 121. x=1, rev=12. x == rev/10."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Negative numbers are not palindromes.",
          "Numbers ending in 0 (except 0) are not.",
          "Loop while x > rev.",
          "rev = rev * 10 + x % 10.",
          "x /= 10.",
          "Return x == rev || x == rev/10."
        ],
        codeLines: [
          "public boolean isPalindrome(int x) {",
          "    if (x < 0 || (x % 10 == 0 && x != 0)) return false;",
          "    int rev = 0;",
          "    while (x > rev) {",
          "        rev = rev * 10 + x % 10;",
          "        x /= 10;",
          "    }",
          "    return x == rev || x == rev / 10;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "X=1221.",
        frames: [
          { array: [1221], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "X=1221, Rev=0." },
          { array: [122], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 1. Rev=1. X=122." },
          { array: [12], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pop 2. Rev=12. X=12. Stop (X <= Rev)." },
          { array: [12], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "X==Rev? Yes. True." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Perfect balance.",
        takeaways: [
          "Reversing half avoids overflow issues.",
          "Time: O(log N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Palindrome Linked List?",
        task: "Check if LL is palindrome?",
        solution: "Find middle, reverse second half, compare.",
        explanation: "O(N) time, O(1) space."
      }
    }
  ]
};
