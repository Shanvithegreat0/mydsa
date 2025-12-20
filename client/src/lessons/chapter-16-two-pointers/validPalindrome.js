import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const validPalindromeLesson = {
  id: 'valid-palindrome',
  chapterId: 16,
  title: "Valid Palindrome",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Mirror Image",
        paragraphs: [
          "Shanvi, a palindrome reads the same forwards and backwards.",
          "Example: 'racecar', 'madam'.",
          "We usually ignore spaces and punctuation."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "'A man, a plan, a canal: Panama'. Palindrome?",
        options: [
          { text: "No", feedback: "Ignore spaces and ':'." },
          { text: "Yes", feedback: "Correct! 'amanaplanacanalpanama'." },
          { text: "Maybe", feedback: "It is." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Reverse String.",
        issues: [
          "Create a new string by reversing the original.",
          "Compare them.",
          "O(N) time, but O(N) space.",
          "Can we do it without extra space?"
        ],
        codeSnippet: `
return s.equals(reverse(s));
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Pointers.",
        paragraphs: [
          "One pointer at Start (Left).",
          "One pointer at End (Right).",
          "Move them towards each other.",
          "If chars match, continue.",
          "If mismatch, return false.",
          "Skip non-alphanumeric chars."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Initialize left=0, right=n-1.",
          "While left < right:",
          "  If left not alphanumeric, left++.",
          "  If right not alphanumeric, right--.",
          "  If chars not equal (ignore case), return false.",
          "  left++, right--.",
          "Return true."
        ],
        codeLines: [
          "public boolean isPalindrome(String s) {",
          "    int left = 0, right = s.length() - 1;",
          "    while (left < right) {",
          "        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;",
          "        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;",
          "        if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {",
          "            return false;",
          "        }",
          "        left++;",
          "        right--;",
          "    }",
          "    return true;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "String: 'Race a car'.",
        frames: [
          { array: ['R', 'a', 'c', 'e', ' ', 'a', ' ', 'c', 'a', 'r'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "L: 'R', R: 'r'. Match." },
          { array: ['R', 'a', 'c', 'e', ' ', 'a', ' ', 'c', 'a', 'r'], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "L: 'a', R: 'a'. Match." },
          { array: ['R', 'a', 'c', 'e', ' ', 'a', ' ', 'c', 'a', 'r'], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "L: 'c', R: 'c'. Match." },
          { array: ['R', 'a', 'c', 'e', ' ', 'a', ' ', 'c', 'a', 'r'], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "L: 'e', R: ' ' (skip) -> 'a'. 'e' != 'a'. False." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Meet in the middle.",
        takeaways: [
          "Two pointers is the standard for palindrome checks.",
          "Time: O(N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Delete One Char?",
        task: "Can you make it a palindrome by deleting at most 1 char?",
        solution: "If mismatch at (L, R), check if (L+1, R) OR (L, R-1) is a palindrome.",
        explanation: "Recursive check (depth 1)."
      }
    }
  ]
};
