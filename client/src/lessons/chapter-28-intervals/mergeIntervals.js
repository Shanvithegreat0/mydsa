import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const mergeIntervalsLesson = {
  id: 'merge-intervals',
  chapterId: 28,
  title: "Merge Intervals",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Time Blocks",
        paragraphs: [
          "Shanvi, you have a set of time intervals.",
          "Merge all overlapping intervals.",
          "Example: [1,3], [2,6], [8,10], [15,18].",
          "Result: [1,6], [8,10], [15,18]."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "[1, 4] and [4, 5]. Overlap?",
        options: [
          { text: "No", feedback: "They touch at 4." },
          { text: "Yes", feedback: "Correct! Merge to [1, 5]." },
          { text: "Maybe", feedback: "Yes." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Compare All Pairs.",
        issues: [
          "For every interval, check every other interval.",
          "If overlap, merge and restart.",
          "O(N^2) or worse.",
          "Messy logic."
        ],
        codeSnippet: `
// Nested loops
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Sort by Start Time.",
        paragraphs: [
          "Sort intervals by start time.",
          "Iterate through sorted intervals.",
          "If current interval overlaps with the previous merged interval (curr.start <= prev.end), merge them.",
          "Else, add current as a new interval."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Sort intervals.",
          "List<int[]> result.",
          "Add first interval.",
          "Loop rest.",
          "If overlap, update end of last interval in result.",
          "Else add new interval."
        ],
        codeLines: [
          "public int[][] merge(int[][] intervals) {",
          "    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));",
          "    LinkedList<int[]> merged = new LinkedList<>();",
          "    for (int[] interval : intervals) {",
          "        if (merged.isEmpty() || merged.getLast()[1] < interval[0]) {",
          "            merged.add(interval);",
          "        } else {",
          "            merged.getLast()[1] = Math.max(merged.getLast()[1], interval[1]);",
          "        }",
          "    }",
          "    return merged.toArray(new int[merged.size()][]);",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Sorted: [1,3], [2,6], [8,10].",
        frames: [
          { array: [1, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add [1,3]." },
          { array: [1, 6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Next [2,6]. 2 <= 3. Overlap. End = max(3, 6) = 6. Merged: [1,6]." },
          { array: [1, 6], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Next [8,10]. 8 > 6. No overlap. Add [8,10]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Sorted and simple.",
        takeaways: [
          "Sorting makes overlap check O(1) for adjacent items.",
          "Time: O(N log N).",
          "Space: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Insert Interval?",
        task: "Insert new interval into sorted list?",
        solution: "Find position, merge left, merge right. O(N).",
        explanation: "Next lesson."
      }
    }
  ]
};
