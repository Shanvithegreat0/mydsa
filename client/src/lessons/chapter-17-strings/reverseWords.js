import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const reverseWordsLesson = {
  id: 'reverse-words',
  chapterId: 17,
  title: "Reverse Words in a String",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Backwards Talk",
        paragraphs: [
          "Shanvi, reverse the order of WORDS in a string.",
          "Example: 'the sky is blue' -> 'blue is sky the'.",
          "Remove extra spaces."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "'  hello world  '. Reverse?",
        options: [
          { text: "'  world hello  '", feedback: "Need to trim spaces." },
          { text: "'world hello'", feedback: "Correct!" },
          { text: "'dlrow olleh'", feedback: "Reverse words, not letters." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Split and Join.",
        issues: [
          "Split by space.",
          "Filter empty strings.",
          "Reverse array.",
          "Join by space.",
          "Easy in high-level languages, but uses O(N) extra space."
        ],
        codeSnippet: `
s.trim().split("\\s+").reverse().join(" ")
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "In-Place (Mutable Strings).",
        paragraphs: [
          "1. Reverse the WHOLE string.",
          "2. Reverse each WORD individually.",
          "3. Clean up spaces.",
          "Example: 'the sky' -> 'yks eht' -> 'sky the'."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "StringBuilder Approach.",
        explanations: [
          "Trim spaces.",
          "Split by regex space.",
          "Use StringBuilder.",
          "Append words from end to start.",
          "Add space between words."
        ],
        codeLines: [
          "public String reverseWords(String s) {",
          "    String[] words = s.trim().split(\"\\\\s+\");",
          "    StringBuilder sb = new StringBuilder();",
          "    for (int i = words.length - 1; i >= 0; i--) {",
          "        sb.append(words[i]);",
          "        if (i > 0) sb.append(\" \");",
          "    }",
          "    return sb.toString();",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Str: 'the sky is blue'.",
        frames: [
          { array: ['the', 'sky', 'is', 'blue'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Split: [the, sky, is, blue]." },
          { array: ['blue'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Append 'blue'." },
          { array: ['blue', 'is'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Append 'is'." },
          { array: ['blue', 'is', 'sky', 'the'], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Result: 'blue is sky the'." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Flip it and reverse it.",
        takeaways: [
          "String immutability in Java means we usually need StringBuilder.",
          "Time: O(N).",
          "Space: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Reverse String II?",
        task: "Reverse first K chars for every 2K chars.",
        solution: "Loop with step 2K, reverse subarray.",
        explanation: "Simple iteration."
      }
    }
  ]
};
