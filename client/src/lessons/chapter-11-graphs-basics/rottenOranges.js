import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const rottenOrangesLesson = {
  id: 'rotten-oranges',
  chapterId: 11,
  title: "Rotten Oranges",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Infection",
        paragraphs: [
          "Shanvi, you have a grid of oranges.",
          "0: Empty, 1: Fresh, 2: Rotten.",
          "Every minute, a rotten orange rots its 4 neighbors (up, down, left, right).",
          "How long until ALL fresh oranges are rotten?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "R F F. How many minutes?",
        options: [
          { text: "1 min", feedback: "R rots middle F. End state: R R F." },
          { text: "2 mins", feedback: "Correct! Min 1: R R F. Min 2: R R R." },
          { text: "Never", feedback: "They are connected." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Simulation?",
        issues: [
          "Loop through grid.",
          "If rotten, mark neighbors as 'to be rotten'.",
          "Update grid.",
          "Repeat until no change.",
          "Inefficient O(N*M * Time)."
        ],
        codeSnippet: `
while(changed) { ... }
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Multi-Source BFS.",
        paragraphs: [
          "Put ALL initially rotten oranges in the Queue at time 0.",
          "Process them level by level.",
          "When a rotten orange affects a fresh one, that fresh one becomes rotten at time T+1 and enters the Queue.",
          "Track max time."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "BFS on Grid.",
        explanations: [
          "Queue stores (row, col, time).",
          "Count fresh oranges initially.",
          "Loop Queue.",
          "Check 4 directions.",
          "If fresh, rot it, decrement fresh count, add to queue.",
          "If fresh count > 0 at end, return -1."
        ],
        codeLines: [
          "public int orangesRotting(int[][] grid) {",
          "    Queue<int[]> q = new LinkedList<>();",
          "    int fresh = 0; int time = 0;",
          "    for(int i=0; i<n; i++) for(int j=0; j<m; j++) {",
          "        if(grid[i][j] == 2) q.add(new int[]{i, j, 0});",
          "        if(grid[i][j] == 1) fresh++;",
          "    }",
          "    while(!q.isEmpty()) {",
          "        int[] curr = q.poll();",
          "        int r = curr[0], c = curr[1], t = curr[2];",
          "        time = Math.max(time, t);",
          "        // check 4 neighbors, if 1 -> make 2, q.add(..., t+1), fresh--",
          "    }",
          "    return fresh == 0 ? time : -1;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Grid: [[2, 1], [1, 0]].",
        frames: [
          { array: [2, 1, 1, 0], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Time 0. Q: [(0,0,0)]. Fresh: 2." },
          { array: [2, 2, 1, 0], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Pop (0,0). Rot (0,1) and (1,0). Q: [(0,1,1), (1,0,1)]. Fresh: 0." },
          { array: [2, 2, 2, 0], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Pop (0,1). No fresh neighbors. Pop (1,0). No fresh neighbors. Max Time: 1." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Bad apples spoil the bunch.",
        takeaways: [
          "Multi-source BFS is powerful for 'simultaneous' expansion.",
          "Always check if any fresh oranges remain unreachable (-1 case).",
          "Time: O(N*M)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Walls and Gates?",
        task: "Find distance to nearest gate for every room.",
        solution: "Same logic! Put all gates in Queue and run BFS.",
        explanation: "Distance propagates from all sources at once."
      }
    }
  ]
};
