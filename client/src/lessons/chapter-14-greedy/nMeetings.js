import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const nMeetingsLesson = {
  id: 'n-meetings',
  chapterId: 14,
  title: "N Meetings in One Room",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Busy Schedule",
        paragraphs: [
          "Shanvi, you have ONE meeting room.",
          "There are N meeting requests, each with a Start time and End time.",
          "You want to host as many meetings as possible.",
          "If you pick a meeting, you can't pick another one that overlaps with it."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Meetings: A(1-2), B(3-4), C(0-6). Which to pick?",
        options: [
          { text: "C only", feedback: "Duration 6. Count = 1." },
          { text: "A and B", feedback: "Correct! A ends at 2. B starts at 3. Count = 2." },
          { text: "A and C", feedback: "Overlap." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Pick Shortest?",
        issues: [
          "Maybe pick shortest meetings first?",
          "Counter-example: A(1-5), B(4-6), C(5-9). Shortest is B(2 hours).",
          "If we pick B, we block A and C. Count = 1.",
          "Better to pick A and C. Count = 2."
        ],
        codeSnippet: `
// Shortest job first fails
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Finish First.",
        paragraphs: [
          "The sooner a meeting finishes, the sooner the room is free for the next one.",
          "Strategy: Sort all meetings by END time.",
          "Pick the first one.",
          "Then pick the next one that starts AFTER the previous one ended."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Greedy Sort.",
        explanations: [
          "Create a class/object with start, end, pos.",
          "Sort by end time (ascending).",
          "Initialize count = 1, limit = meetings[0].end.",
          "Loop from 1 to N-1.",
          "If meetings[i].start > limit: count++, limit = meetings[i].end."
        ],
        codeLines: [
          "class Meeting { int start, end, pos; }",
          "public int maxMeetings(int start[], int end[], int n) {",
          "    List<Meeting> meetings = new ArrayList<>();",
          "    for(int i=0; i<n; i++) meetings.add(new Meeting(start[i], end[i], i+1));",
          "    Collections.sort(meetings, (a, b) -> a.end - b.end);",
          "    int count = 1;",
          "    int limit = meetings.get(0).end;",
          "    for(int i=1; i<n; i++) {",
          "        if(meetings.get(i).start > limit) {",
          "            count++;",
          "            limit = meetings.get(i).end;",
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
        description: "Meetings: (1,2), (3,4), (0,6), (5,7), (8,9), (5,9).",
        frames: [
          { array: [2, 4, 6, 7, 9, 9], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Sorted by End: (1,2), (3,4), (0,6), (5,7), (8,9), (5,9)." },
          { array: [2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pick (1,2). Limit=2. Count=1." },
          { array: [2, 4], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Check (3,4). Start 3 > Limit 2. Pick. Limit=4. Count=2." },
          { array: [2, 4, 6], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Check (0,6). Start 0 < Limit 4. Skip." },
          { array: [2, 4, 7], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Check (5,7). Start 5 > Limit 4. Pick. Limit=7. Count=3." },
          { array: [2, 4, 7, 9], highlightIndex: 4, currentSum: 0, maxSum: 0, explanation: "Check (8,9). Start 8 > Limit 7. Pick. Limit=9. Count=4." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "The early bird gets the worm.",
        takeaways: [
          "Sorting by End Time is the key.",
          "This is 'Activity Selection Problem'.",
          "Time: O(N log N) for sorting."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Weighted Intervals?",
        task: "What if each meeting has a 'profit'?",
        solution: "Greedy fails. Use DP (Weighted Interval Scheduling).",
        explanation: "Sort by end time, then dp[i] = max(profit + dp[prev_compatible], dp[i-1])."
      }
    }
  ]
};
