import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const ninjasTrainingLesson = {
  id: 'ninjas-training',
  chapterId: 12,
  title: "Ninja's Training",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Daily Routine",
        paragraphs: [
          "Shanvi, a Ninja trains for N days.",
          "Each day, he can choose 1 of 3 activities: Running, Fighting, Learning.",
          "Each activity gives points.",
          "Rule: He cannot do the SAME activity two days in a row."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Day 1: [10, 50, 1]. Day 2: [5, 100, 11]. Max points?",
        options: [
          { text: "150", feedback: "50 (Fight) + 100 (Fight). Same activity twice! Illegal." },
          { text: "61", feedback: "50 (Fight) + 11 (Learn). Valid." },
          { text: "110", feedback: "10 (Run) + 100 (Fight). Correct! 110 > 61." }
        ],
        correctIndex: 2
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Greedy?",
        issues: [
          "Pick max today? Might force a bad choice tomorrow.",
          "We need to carry forward the 'last activity' performed.",
          "State: f(day, lastActivity)."
        ],
        codeSnippet: `
f(day, last) = max( points[day][i] + f(day-1, i) ) where i != last
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "2D DP.",
        paragraphs: [
          "dp[day][last_activity] = Max points until 'day' ending with 'last_activity' performed on 'day+1'.",
          "Actually, simpler: dp[day][current_activity] = Max points ending with current_activity today.",
          "Wait, the restriction is on the NEXT day. So we need to know what we did TODAY to decide TOMORROW.",
          "Let's flip it: dp[i][0] = max points on day i if we did activity 0.",
          "To calculate dp[i][0], we look at max(dp[i-1][1], dp[i-1][2])."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Tabulation.",
        explanations: [
          "dp[N][3].",
          "Base case: Day 0. dp[0][0] = points[0][0], etc.",
          "Loop day from 1 to N.",
          "dp[i][0] = points[i][0] + max(dp[i-1][1], dp[i-1][2]).",
          "dp[i][1] = points[i][1] + max(dp[i-1][0], dp[i-1][2]).",
          "dp[i][2] = points[i][2] + max(dp[i-1][0], dp[i-1][1]).",
          "Result: max(dp[N-1][0], dp[N-1][1], dp[N-1][2])."
        ],
        codeLines: [
          "public int ninjaTraining(int n, int[][] points) {",
          "    int[][] dp = new int[n][3];",
          "    dp[0][0] = points[0][0];",
          "    dp[0][1] = points[0][1];",
          "    dp[0][2] = points[0][2];",
          "    for (int i = 1; i < n; i++) {",
          "        dp[i][0] = points[i][0] + Math.max(dp[i - 1][1], dp[i - 1][2]);",
          "        dp[i][1] = points[i][1] + Math.max(dp[i - 1][0], dp[i - 1][2]);",
          "        dp[i][2] = points[i][2] + Math.max(dp[i - 1][0], dp[i - 1][1]);",
          "    }",
          "    return Math.max(dp[n - 1][0], Math.max(dp[n - 1][1], dp[n - 1][2]));",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Points: [[10, 40, 70], [20, 50, 80], [30, 60, 90]].",
        frames: [
          { array: [10, 40, 70], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Day 0: dp[0] = [10, 40, 70]." },
          { array: [20, 50, 80], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Day 1 Act 0: 20 + max(40, 70) = 90." },
          { array: [20, 50, 80], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Day 1 Act 1: 50 + max(10, 70) = 120." },
          { array: [20, 50, 80], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Day 1 Act 2: 80 + max(10, 40) = 120. dp[1] = [90, 120, 120]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Variety is the spice of life.",
        takeaways: [
          "This introduces 'State' in DP.",
          "The state is (Day, Last Activity).",
          "Time: O(N*3*3) approx O(N).",
          "Space: O(N*3) -> can optimize to O(3) (just previous day)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Vacation?",
        task: "What if there are K activities?",
        solution: "Inner loops become size K. O(N*K*K).",
        explanation: "Find max and second max of previous day to optimize to O(N*K)."
      }
    }
  ]
};
