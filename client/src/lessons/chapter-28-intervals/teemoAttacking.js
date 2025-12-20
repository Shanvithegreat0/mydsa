import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const teemoAttackingLesson = {
  id: 'teemo-attacking',
  chapterId: 28,
  title: "Teemo Attacking",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Poison Duration",
        paragraphs: [
          "Shanvi, Teemo attacks at times `timeSeries`.",
          "Each attack poisons the enemy for `duration` seconds.",
          "If attacked again before poison expires, the timer resets.",
          "Find total poisoned time."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Times: [1, 4], Duration: 2.",
        options: [
          { text: "3", feedback: "1-3 (2s), 4-6 (2s). Total 4." },
          { text: "4", feedback: "Correct! No overlap." },
          { text: "2", feedback: "Too low." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Simulation.",
        issues: [
          "Boolean array for every second?",
          "Time range can be huge (10^9).",
          "Memory Limit Exceeded.",
          "We need math."
        ],
        codeSnippet: `
timeline[t] = true
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Merge Logic.",
        paragraphs: [
          "For each attack at `t[i]`, it lasts until `t[i] + duration`.",
          "If next attack `t[i+1]` is BEFORE current ends, we only get `t[i+1] - t[i]` seconds.",
          "Else, we get full `duration`.",
          "Add full duration for the last attack."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Total = 0.",
          "Loop i from 0 to N-2.",
          "Diff = time[i+1] - time[i].",
          "Total += min(diff, duration).",
          "Total += duration (for last)."
        ],
        codeLines: [
          "public int findPoisonedDuration(int[] timeSeries, int duration) {",
          "    if (timeSeries.length == 0) return 0;",
          "    int total = 0;",
          "    for (int i = 0; i < timeSeries.length - 1; i++) {",
          "        total += Math.min(timeSeries[i + 1] - timeSeries[i], duration);",
          "    }",
          "    return total + duration;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Times: [1, 2], Duration: 2.",
        frames: [
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "i=0. Next is 2. Diff=1. Min(1, 2)=1. Total=1." },
          { array: [1, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Last attack at 2. Add full duration 2. Total=3. (1-2, 2-4)." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Reset timer.",
        takeaways: [
          "Simple interval union problem.",
          "Time: O(N).",
          "Space: O(1)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Gaps?",
        task: "Find total un-poisoned time in range [0, T]?",
        solution: "Total time - Poisoned time.",
        explanation: "Complement."
      }
    }
  ]
};
