import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const browserHistoryLesson = {
  id: 'browser-history',
  chapterId: 29,
  title: "Design Browser History",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Back and Forth",
        paragraphs: [
          "Shanvi, design browser navigation.",
          "visit(url): Clears forward history, adds new url.",
          "back(steps): Move back.",
          "forward(steps): Move forward."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "A -> B -> C. Back(1) -> B. Visit(D). History?",
        options: [
          { text: "A -> B -> C -> D", feedback: "Forward history is cleared." },
          { text: "A -> B -> D", feedback: "Correct! C is lost." },
          { text: "A -> D", feedback: "B remains." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Two Stacks?",
        issues: [
          "Back stack and Forward stack.",
          "Works, but accessing index 'steps' away requires popping multiple times.",
          "List is better."
        ],
        codeSnippet: `
backStack.pop(); fwdStack.push()
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Dynamic Array + Pointer.",
        paragraphs: [
          "Use a List<String> history.",
          "Int `curr` points to current index.",
          "Int `end` points to the last valid index.",
          "Visit: overwrite `curr+1`, set `end = curr+1`, `curr++`.",
          "Back/Forward: simply move `curr` pointer, clamped by 0 and `end`."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "ArrayList history.",
          "curr index.",
          "visit: remove elements after curr? No, just overwrite and track 'size'.",
          "Actually, ArrayList remove is O(N).",
          "Better: Keep logical size variable."
        ],
        codeLines: [
          "class BrowserHistory {",
          "    ArrayList<String> history = new ArrayList<>();",
          "    int curr = 0;",
          "    int total = 0;",
          "    public BrowserHistory(String homepage) {",
          "        history.add(homepage);",
          "        total = 1;",
          "    }",
          "    public void visit(String url) {",
          "        curr++;",
          "        if (curr < history.size()) history.set(curr, url);",
          "        else history.add(url);",
          "        total = curr + 1;",
          "    }",
          "    public String back(int steps) {",
          "        curr = Math.max(0, curr - steps);",
          "        return history.get(curr);",
          "    }",
          "    public String forward(int steps) {",
          "        curr = Math.min(total - 1, curr + steps);",
          "        return history.get(curr);",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Visit A, B, C.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Hist: [A, B, C]. Curr: 2 (C). Total: 3." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Back(1). Curr: 1 (B)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Visit D. Overwrite index 2. Hist: [A, B, D]. Curr: 2. Total: 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "History rewritten.",
        takeaways: [
          "O(1) for all operations.",
          "Doubly Linked List also works.",
          "Array is cache-friendly."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Memory Leak?",
        task: "ArrayList grows forever?",
        solution: "Yes. In real browser, we limit history size or use circular buffer.",
        explanation: "Practical constraint."
      }
    }
  ]
};
