import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const nonOverlappingIntervalsLesson = {
  id: 'non-overlapping-intervals',
  chapterId: 28,
  title: "Non-overlapping Intervals",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Cleanup",
        paragraphs: [
          "Shanvi, find the MINIMUM number of intervals to remove to make the rest non-overlapping.",
          "Example: [1,2], [2,3], [3,4], [1,3].",
          "Remove [1,3] to keep [1,2], [2,3], [3,4]. Count = 1."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "[1,2], [1,2], [1,2]. Remove?",
        options: [
          { text: "0", feedback: "All overlap." },
          { text: "2", feedback: "Correct! Keep one." },
          { text: "3", feedback: "Keep one." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Try All Subsets.",
        issues: [
          "Exponential time.",
          "We need a greedy approach."
        ],
        codeSnippet: `
// 2^N
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Greedy Strategy.",
        paragraphs: [
          "To fit as many intervals as possible, we should pick intervals that end EARLY.",
          "This leaves more room for subsequent intervals.",
          "Sort by END time.",
          "Iterate: if current starts >= last_end, keep it. Else remove it (count++)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Sort by end time.",
          "End = MIN_VALUE.",
          "Count = 0.",
          "Loop intervals:",
          "  If start >= End: update End = end.",
          "  Else: count++ (overlap, discard current because it ends later/same)."
        ],
        codeLines: [
          "public int eraseOverlapIntervals(int[][] intervals) {",
          "    if (intervals.length == 0) return 0;",
          "    Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));",
          "    int end = intervals[0][1];",
          "    int count = 0;",
          "    for (int i = 1; i < intervals.length; i++) {",
          "        if (intervals[i][0] < end) {",
          "            count++;",
          "        } else {",
          "            end = intervals[i][1];",
          "        }",
          "    }",
          "    return count;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "[1,2], [2,3], [3,4], [1,3]. Sorted by End.",
        frames: [
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Sorted: [1,2], [2,3], [1,3], [3,4]. Keep [1,2]. End=2." },
          { array: [2, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Next [2,3]. Start 2 >= End 2. Keep. End=3." },
          { array: [1, 3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Next [1,3]. Start 1 < End 3. Remove. Count=1." },
          { array: [3, 4], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Next [3,4]. Start 3 >= End 3. Keep. End=4." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Endings matter.",
        takeaways: [
          "Sorting by end time is key for 'max number of non-overlapping intervals'.",
          "Same as Activity Selection Problem.",
          "Time: O(N log N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Sort by Start?",
        task: "Can we sort by start?",
        solution: "Yes, but logic is slightly more complex (remove the one that ends later).",
        explanation: "Same result."
      }
    }
  ]
};
