import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const jobSequencingLesson = {
  id: 'job-sequencing',
  chapterId: 14,
  title: "Job Sequencing Problem",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Deadline Dash",
        paragraphs: [
          "Shanvi, you have N jobs.",
          "Each job has a Deadline and a Profit.",
          "Each job takes 1 unit of time.",
          "If you finish a job BEFORE or ON its deadline, you get the profit.",
          "Maximize total profit."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Job A: D=1, P=100. Job B: D=1, P=50. Can do both?",
        options: [
          { text: "Yes", feedback: "Both need to finish by time 1. Only 1 slot available (0-1)." },
          { text: "No", feedback: "Correct! Pick A (100) > B (50)." },
          { text: "Maybe", feedback: "Math says no." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Sort by Deadline?",
        issues: [
          "If we sort by deadline, we might pick low profit jobs first.",
          "Example: A(D=4, P=10), B(D=1, P=100).",
          "If we pick A first (at t=1), we might miss B?",
          "Actually, we want to prioritize PROFIT."
        ],
        codeSnippet: `
// Sort by Profit DESC
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Do it as late as possible.",
        paragraphs: [
          "Sort jobs by Profit (Descending).",
          "For the highest profit job with deadline D:",
          "Try to schedule it on day D, D-1, D-2... until we find a free slot.",
          "Why late? To save early slots for jobs with tighter deadlines."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Greedy with Slots.",
        explanations: [
          "Sort jobs by profit desc.",
          "Find max deadline to size the schedule array.",
          "Initialize schedule array with -1 (empty).",
          "For each job, loop from min(n, job.deadline) down to 1.",
          "If slot empty, fill it, add profit, break."
        ],
        codeLines: [
          "public int[] JobScheduling(Job arr[], int n) {",
          "    Arrays.sort(arr, (a, b) -> (b.profit - a.profit));",
          "    int maxDeadline = 0;",
          "    for (Job j : arr) maxDeadline = Math.max(maxDeadline, j.deadline);",
          "    int[] result = new int[maxDeadline + 1];",
          "    Arrays.fill(result, -1);",
          "    int count = 0, profit = 0;",
          "    for (int i = 0; i < n; i++) {",
          "        for (int j = arr[i].deadline; j > 0; j--) {",
          "            if (result[j] == -1) {",
          "                result[j] = arr[i].id;",
          "                count++;",
          "                profit += arr[i].profit;",
          "                break;",
          "            }",
          "        }",
          "    }",
          "    return new int[]{count, profit};",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Jobs: A(4, 20), B(1, 10), C(1, 40), D(1, 30).",
        frames: [
          { array: [40, 30, 20, 10], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Sorted: C(40), D(30), A(20), B(10)." },
          { array: [40], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Pick C (D=1). Slot 1 free? Yes. Fill 1. Profit 40." },
          { array: [40], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Pick D (D=1). Slot 1 taken. No earlier slots. Skip." },
          { array: [40, 20], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Pick A (D=4). Slot 4 free? Yes. Fill 4. Profit 40+20=60." },
          { array: [40, 20], highlightIndex: 3, currentSum: 0, maxSum: 0, explanation: "Pick B (D=1). Slot 1 taken. Skip. Total: 60." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Procrastination pays off (sometimes).",
        takeaways: [
          "Delaying a task leaves room for urgent ones.",
          "Time: O(N^2) (worst case loop).",
          "Can optimize to O(N log N) using Disjoint Set Union (DSU) to find slots."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "DSU Optimization?",
        task: "How does DSU help?",
        solution: "Parent of slot i is i-1. Find(deadline) gives nearest available slot.",
        explanation: "Reduces the inner loop to nearly O(1)."
      }
    }
  ]
};
