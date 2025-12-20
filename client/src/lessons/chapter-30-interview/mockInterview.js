import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const mockInterviewLesson = {
  id: 'mock-interview',
  chapterId: 30,
  title: "Mock Interview Simulation",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Showtime",
        paragraphs: [
          "Shanvi, let's simulate a 45-minute interview.",
          "5 min: Intro.",
          "35 min: Coding (1-2 problems).",
          "5 min: Questions for interviewer."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Interviewer is silent. What do you do?",
        options: [
          { text: "Keep coding silently.", feedback: "Awkward." },
          { text: "Ask 'Does this make sense?'.", feedback: "Correct! Engage them." },
          { text: "Wait for them to speak.", feedback: "Wastes time." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Panic Mode.",
        issues: [
          "Blanking out.",
          "Sweating.",
          "Giving up.",
          "It happens to everyone. Take a deep breath. Drink water."
        ],
        codeSnippet: `
// ...
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Checklist.",
        paragraphs: [
          "1. Clarify inputs/outputs.",
          "2. State brute force (get some points).",
          "3. Optimize (discuss trade-offs).",
          "4. Write code (modular, clean).",
          "5. Test with examples (dry run).",
          "6. Analyze complexity."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Sample Problem.",
        explanations: [
          "Problem: Two Sum.",
          "You know this.",
          "Don't just memorize. Explain WHY HashMap is better than nested loops."
        ],
        codeLines: [
          "// Interviewer: Find pair with sum target.",
          "// You: I can use a HashMap to store complements.",
          "// Time: O(N), Space: O(N).",
          "// Shall I implement it?"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Timeline.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "0-5m: Chat. 'Tell me about yourself'." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "5-10m: Problem statement & Clarification." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "10-30m: Coding & Talking." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "30-40m: Testing & Optimization." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "You got this.",
        takeaways: [
          "Practice mock interviews with friends or Pramp/Interviewing.io.",
          "Recording yourself helps.",
          "Soft skills matter."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Questions?",
        task: "What to ask interviewer?",
        solution: "Ask about team culture, tech stack, challenges. Show interest.",
        explanation: "Reverse interview."
      }
    }
  ]
};
