import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const sortCharactersFrequencyLesson = {
  id: 'sort-characters-frequency',
  chapterId: 23,
  title: "Sort Characters By Frequency",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Popularity Contest",
        paragraphs: [
          "Shanvi, sort a string based on character frequency.",
          "Most frequent characters come first.",
          "Example: 'tree' -> 'eert' or 'eetr'."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "'cccaaa'?",
        options: [
          { text: "'cccaaa'", feedback: "Both count 3. Valid." },
          { text: "'aaaccc'", feedback: "Also valid." },
          { text: "'cacaca'", feedback: "Not sorted by frequency groups." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Map and Sort.",
        issues: [
          "Count chars in HashMap.",
          "Convert Map entries to List.",
          "Sort List by value (count) descending.",
          "Build string.",
          "O(N log N) due to sorting (or O(N log 26) = O(N))."
        ],
        codeSnippet: `
list.sort((a,b) -> map.get(b) - map.get(a))
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Max Heap.",
        paragraphs: [
          "Store pairs (char, count) in a Max Heap.",
          "Poll max, append char 'count' times.",
          "Repeat.",
          "Or use Bucket Sort (since max frequency is N)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Heap Approach.",
        explanations: [
          "Map counts.",
          "PriorityQueue of Map.Entry, sorted by value desc.",
          "Add all entries.",
          "Poll and build string."
        ],
        codeLines: [
          "public String frequencySort(String s) {",
          "    Map<Character, Integer> map = new HashMap<>();",
          "    for (char c : s.toCharArray()) map.put(c, map.getOrDefault(c, 0) + 1);",
          "    PriorityQueue<Map.Entry<Character, Integer>> pq = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());",
          "    pq.addAll(map.entrySet());",
          "    StringBuilder sb = new StringBuilder();",
          "    while (!pq.isEmpty()) {",
          "        Map.Entry<Character, Integer> e = pq.poll();",
          "        for (int i = 0; i < e.getValue(); i++) sb.append(e.getKey());",
          "    }",
          "    return sb.toString();",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Str: 'tree'.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Map: {t:1, r:1, e:2}." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Heap: [e:2, t:1, r:1]." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Poll e. Append 'ee'. Heap: [t:1, r:1]." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Poll t. Append 't'. Heap: [r:1]." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Poll r. Append 'r'. Result 'eetr'." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Frequent flyer.",
        takeaways: [
          "Heap is great for 'most frequent' problems.",
          "Bucket Sort is O(N) if we map frequency to index.",
          "Time: O(N log K) where K is unique chars."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Bucket Sort?",
        task: "Do it in O(N)?",
        solution: "Array of Lists where index = frequency.",
        explanation: "Iterate array from end to start."
      }
    }
  ]
};
