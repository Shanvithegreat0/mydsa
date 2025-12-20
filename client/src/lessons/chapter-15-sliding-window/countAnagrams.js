import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const countAnagramsLesson = {
  id: 'count-anagrams',
  chapterId: 15,
  title: "Count Occurrences of Anagrams",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Scrambled Words",
        paragraphs: [
          "Shanvi, find how many times an anagram of a pattern P appears in a text T.",
          "Anagram means same characters, different order.",
          "Example: P='abc', T='cbaebabacd'. Anagrams: 'cba', 'bac'."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Text: 'forxxorfxdofr', Pattern: 'for'. Anagrams?",
        options: [
          { text: "2", feedback: "'for', 'orf'. Missed 'ofr'." },
          { text: "3", feedback: "Correct! 'for', 'orf', 'ofr'." },
          { text: "1", feedback: "More than 1." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Sort every window?",
        issues: [
          "Extract substring of length |P|.",
          "Sort it.",
          "Compare with sorted P.",
          "O(N * K log K). Too slow."
        ],
        codeSnippet: `
sort(window) == sort(pattern)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Frequency Map.",
        paragraphs: [
          "Maintain a frequency map (or array size 26) for the current window.",
          "Compare it with the frequency map of P.",
          "Slide window: Decrement count of leaving char, Increment count of entering char.",
          "Comparison is O(26) -> O(1)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Sliding Window with Arrays.",
        explanations: [
          "Count freq of P.",
          "Count freq of first window of T.",
          "Check match.",
          "Slide: remove i-K, add i.",
          "Check match again."
        ],
        codeLines: [
          "public int search(String pat, String txt) {",
          "    int k = pat.length();",
          "    int n = txt.length();",
          "    int[] pMap = new int[26];",
          "    int[] tMap = new int[26];",
          "    for(char c : pat.toCharArray()) pMap[c-'a']++;",
          "    for(int i=0; i<k; i++) tMap[txt.charAt(i)-'a']++;",
          "    int count = 0;",
          "    if(Arrays.equals(pMap, tMap)) count++;",
          "    for(int i=k; i<n; i++) {",
          "        tMap[txt.charAt(i)-'a']++;",
          "        tMap[txt.charAt(i-k)-'a']--;",
          "        if(Arrays.equals(pMap, tMap)) count++;",
          "    }",
          "    return count;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Txt: 'aaba', Pat: 'ab'.",
        frames: [
          { array: ['a', 'a'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Window 'aa'. Map: {a:2}. Pat Map: {a:1, b:1}. No match." },
          { array: ['a', 'b'], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Slide. Add 'b', remove 'a'. Window 'ab'. Map: {a:1, b:1}. Match! Count=1." },
          { array: ['b', 'a'], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Slide. Add 'a', remove 'a'. Window 'ba'. Map: {a:1, b:1}. Match! Count=2." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Same ingredients, different recipe.",
        takeaways: [
          "Frequency maps are the standard way to check anagrams.",
          "Arrays.equals() on size 26 is very fast.",
          "Time: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Permutation in String?",
        task: "LeetCode 567.",
        solution: "Exact same problem. Return true if count > 0.",
        explanation: "Just a boolean version."
      }
    }
  ]
};
