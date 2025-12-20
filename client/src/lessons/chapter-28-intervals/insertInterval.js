import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const insertIntervalLesson = {
  id: 'insert-interval',
  chapterId: 28,
  title: "Insert Interval",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Squeezing In",
        paragraphs: [
          "Shanvi, you have a list of non-overlapping intervals sorted by start time.",
          "Insert a new interval and merge if necessary.",
          "Example: [1,3], [6,9]. Insert [2,5].",
          "Result: [1,5], [6,9]."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Insert [4,8] into [[1,2], [3,5], [6,7], [8,10], [12,16]]?",
        options: [
          { text: "[1,2], [3,10], [12,16]", feedback: "Correct! Merges [3,5], [6,7], [8,10]." },
          { text: "[1,2], [4,8], [12,16]", feedback: "Overlaps ignored." },
          { text: "Error", feedback: "No." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Add and Sort.",
        issues: [
          "Add new interval to list.",
          "Sort again (O(N log N)).",
          "Run Merge Intervals (O(N)).",
          "Valid, but we can do O(N) since input is already sorted."
        ],
        codeSnippet: `
list.add(new); sort(); merge();
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Three Stages.",
        paragraphs: [
          "1. Add all intervals ending BEFORE newInterval starts.",
          "2. Merge all intervals that OVERLAP with newInterval (update min start, max end).",
          "3. Add all intervals starting AFTER newInterval ends."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Loop i.",
          "While intervals[i].end < new.start: add to result.",
          "While intervals[i].start <= new.end: merge (new.start = min, new.end = max).",
          "Add merged newInterval.",
          "Add remaining intervals."
        ],
        codeLines: [
          "public int[][] insert(int[][] intervals, int[] newInterval) {",
          "    List<int[]> result = new ArrayList<>();",
          "    int i = 0, n = intervals.length;",
          "    while (i < n && intervals[i][1] < newInterval[0]) {",
          "        result.add(intervals[i++]);",
          "    }",
          "    while (i < n && intervals[i][0] <= newInterval[1]) {",
          "        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);",
          "        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);",
          "        i++;",
          "    }",
          "    result.add(newInterval);",
          "    while (i < n) result.add(intervals[i++]);",
          "    return result.toArray(new int[result.size()][]);",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "List: [1,3], [6,9]. New: [2,5].",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0 ([1,3]). End 3 < Start 2? No. Overlap? Start 1 <= End 5? Yes." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Merge. New: [min(1,2), max(3,5)] = [1,5]. i++." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=1 ([6,9]). Start 6 <= End 5? No. Stop merging." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Add [1,5]. Add remaining [6,9]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Fit right in.",
        takeaways: [
          "Linear scan handles it perfectly.",
          "Time: O(N).",
          "Space: O(N) for result."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Binary Search?",
        task: "Find insertion point with Binary Search?",
        solution: "Yes, O(log N) to find start, but shifting/merging still takes O(N).",
        explanation: "Not asymptotically faster for array."
      }
    }
  ]
};
