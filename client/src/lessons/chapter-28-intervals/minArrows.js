import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const minArrowsLesson = {
  id: 'min-arrows',
  chapterId: 28,
  title: "Min Arrows to Burst Balloons",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Sharp Shooter",
        paragraphs: [
          "Shanvi, balloons are represented as intervals [start, end].",
          "An arrow shot at x bursts all balloons where start <= x <= end.",
          "Find min arrows to burst all."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "[10,16], [2,8], [1,6], [7,12]. Arrows?",
        options: [
          { text: "4", feedback: "One per balloon? Wasteful." },
          { text: "2", feedback: "Correct! Shoot at 6 (bursts [2,8], [1,6]) and 11 (bursts [10,16], [7,12])." },
          { text: "1", feedback: "Impossible." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Greedy?",
        issues: [
          "Same as Non-overlapping Intervals.",
          "We want to find max non-overlapping intervals.",
          "Wait, actually we want to find intersection groups.",
          "If we sort by end time, we shoot at the END of the first balloon.",
          "This bursts as many overlapping balloons as possible."
        ],
        codeSnippet: `
sort(end); shoot(end)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Sort by End Time.",
        paragraphs: [
          "Sort balloons by end coordinate.",
          "First arrow must be shot at `points[0].end` to burst the first balloon (and potentially others).",
          "Skip all subsequent balloons that start before this arrow position.",
          "When a balloon starts after the arrow, we need a new arrow."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Sort by end.",
          "Arrows = 1.",
          "End = points[0].end.",
          "Loop from 1 to N.",
          "If start > End: arrows++, End = current.end.",
          "Else: it's burst by current arrow."
        ],
        codeLines: [
          "public int findMinArrowShots(int[][] points) {",
          "    if (points.length == 0) return 0;",
          "    Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));",
          "    int arrows = 1;",
          "    int end = points[0][1];",
          "    for (int i = 1; i < points.length; i++) {",
          "        if (points[i][0] > end) {",
          "            arrows++;",
          "            end = points[i][1];",
          "        }",
          "    }",
          "    return arrows;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "[1,6], [2,8], [7,12], [10,16]. Sorted.",
        frames: [
          { array: [1, 6], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "First [1,6]. Shoot at 6. Arrows=1." },
          { array: [2, 8], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Next [2,8]. Start 2 <= 6. Burst." },
          { array: [7, 12], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Next [7,12]. Start 7 > 6. New arrow at 12. Arrows=2." },
          { array: [10, 16], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Next [10,16]. Start 10 <= 12. Burst." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Bullseye.",
        takeaways: [
          "Identical logic to Non-overlapping Intervals.",
          "Sorting by end time is the standard greedy choice.",
          "Time: O(N log N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Integer Overflow?",
        task: "Integer.compare(a[1], b[1])?",
        solution: "Safe. a[1] - b[1] can overflow if numbers are large/negative.",
        explanation: "Always use Integer.compare."
      }
    }
  ]
};
