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
  chapterId: 2,
  title: "Merge Overlapping Intervals",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Meeting Rooms",
        paragraphs: [
          "Shanvi, imagine you have a calendar with meetings.",
          "Meeting A: 1:00 - 3:00",
          "Meeting B: 2:00 - 4:00",
          "Since they overlap, you are effectively busy from 1:00 to 4:00.",
          "We want to merge all such overlapping time slots."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Intervals: [1,3], [2,6], [8,10]. What is the result?",
        options: [
          { text: "[1,6], [8,10]", feedback: "Correct! [1,3] and [2,6] merge because 2 < 3." },
          { text: "[1,3], [2,6], [8,10]", feedback: "No, the first two overlap." },
          { text: "[1,10]", feedback: "No, there is a gap between 6 and 8." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check every interval against every other interval.",
        issues: [
          "Sort by start time first? Yes.",
          "If we don't sort, we have to check everyone against everyone (O(N^2)).",
          "Sorting helps us process linearly."
        ],
        codeSnippet: `
// Sort first!
Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Sort, then linear pass.",
        paragraphs: [
          "1. Sort intervals by start time.",
          "2. Take the first interval as 'current'.",
          "3. Look at the next interval. If it starts before 'current' ends, Merge them (extend the end time).",
          "4. If it starts after, push 'current' to result and make this new one 'current'."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation using a List.",
        explanations: [
          "Sort the array.",
          "Initialize list with the first interval.",
          "Iterate through the rest.",
          "Check overlap: if (next.start <= current.end).",
          "Merge: current.end = Math.max(current.end, next.end)."
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
        description: "Merging timeline.",
        frames: [
          { array: [1, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Current: [1, 3]" },
          { array: [2, 6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Next: [2, 6]. 2 <= 3. Merge! End becomes max(3, 6) = 6. Current: [1, 6]" },
          { array: [8, 10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Next: [8, 10]. 8 > 6. No overlap. Push [1, 6]. New Current: [8, 10]" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Sorting simplifies relationships.",
        takeaways: [
          "Sorting by start time is the key.",
          "Once sorted, we only need to compare with the previous interval.",
          "Time complexity: O(N log N) due to sorting."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Insert Interval",
        task: "Given sorted intervals, insert a new one and merge if needed.",
        solution: "Find correct position, merge left if needed, merge right if needed.",
        explanation: "Similar logic, but you can skip sorting since the original list is sorted."
      }
    }
  ]
};
