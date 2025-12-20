import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const meetingRoomsLesson = {
  id: 'meeting-rooms',
  chapterId: 28,
  title: "Meeting Rooms I & II",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Booking System",
        paragraphs: [
          "Shanvi, given meeting time intervals.",
          "I: Can a person attend ALL meetings? (No overlap allowed).",
          "II: Minimum conference rooms required?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "[0, 30], [5, 10], [15, 20]. Rooms?",
        options: [
          { text: "1", feedback: "Overlap exists." },
          { text: "2", feedback: "Correct! [0,30] needs one. [5,10] needs another. [15,20] can reuse [5,10]'s room." },
          { text: "3", feedback: "Can optimize." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check Overlaps.",
        issues: [
          "I: Sort and check adjacent. O(N log N).",
          "II: For every meeting, check how many overlap at that time.",
          "Checking all points is slow."
        ],
        codeSnippet: `
sort(); check(i, i+1)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Chronological Ordering.",
        paragraphs: [
          "Separate Start times and End times.",
          "Sort both arrays.",
          "Iterate through Starts.",
          "If start[i] < end[j], we need a new room (count++).",
          "Else, a meeting ended (end[j]), so we can reuse a room (j++).",
          "This is like a sweep-line algorithm."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation (Rooms II).",
        explanations: [
          "Extract starts and ends.",
          "Sort both.",
          "Pointers s=0, e=0.",
          "Loop s.",
          "If start[s] < end[e]: rooms++.",
          "Else: e++ (room freed).",
          "Return rooms."
        ],
        codeLines: [
          "public int minMeetingRooms(int[][] intervals) {",
          "    int n = intervals.length;",
          "    int[] starts = new int[n];",
          "    int[] ends = new int[n];",
          "    for(int i=0; i<n; i++) {",
          "        starts[i] = intervals[i][0];",
          "        ends[i] = intervals[i][1];",
          "    }",
          "    Arrays.sort(starts);",
          "    Arrays.sort(ends);",
          "    int rooms = 0, e = 0;",
          "    for(int s=0; s<n; s++) {",
          "        if(starts[s] < ends[e]) {",
          "            rooms++;",
          "        } else {",
          "            e++;",
          "        }",
          "    }",
          "    return rooms;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Starts: [0, 5, 15]. Ends: [10, 20, 30].",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "s=0 (0) < e=0 (10). Room needed. Rooms=1." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "s=1 (5) < e=0 (10). Room needed. Rooms=2." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "s=2 (15) >= e=0 (10). Room freed. e++. Rooms=2 (unchanged logic, or rooms-- then ++? Code says rooms++ only on overlap. Wait. Code logic: if start < end, rooms++. Else e++. This counts max simultaneous? No. This counts total rooms allocated? Actually, simpler logic: rooms needed = s - e + 1? No. Standard logic: res++, if start>=end res--." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Correction: Standard logic is: if start < end, count++. Else e++, count--. Max count is answer. Or the code above counts *allocated* rooms which never decrease, just get reused. Yes, code above returns *total rooms needed*." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Space management.",
        takeaways: [
          "Sorting starts and ends independently works because meeting identity doesn't matter for count.",
          "Time: O(N log N).",
          "Space: O(N)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Priority Queue?",
        task: "Use Min Heap?",
        solution: "Store end times in Min Heap. If new.start >= heap.peek(), poll (reuse). Add new.end.",
        explanation: "Heap size is max rooms."
      }
    }
  ]
};
