import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const handlingFailureLesson = {
  id: 'handling-failure',
  chapterId: 30,
  title: "Handling Failure & Growth",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Rejection is Normal",
        paragraphs: [
          "Shanvi, you will get rejected.",
          "Google rejects 99% of applicants.",
          "It doesn't mean you are bad.",
          "It means you need more practice or it wasn't a match."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Failed an interview. Next step?",
        options: [
          { text: "Quit coding.", feedback: "Never." },
          { text: "Analyze what went wrong.", feedback: "Correct! Write down the questions you missed." },
          { text: "Blame the interviewer.", feedback: "Unproductive." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Giving Up.",
        issues: [
          "Imposter Syndrome.",
          "Burnout.",
          "Comparison with others.",
          "Focus on your own journey."
        ],
        codeSnippet: `
while(alive) learn();
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Growth Mindset.",
        paragraphs: [
          "Talent is overrated. Consistency is key.",
          "DSA is a skill, like playing guitar.",
          "Every failure is data.",
          "Review your weak topics."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "The Loop.",
        explanations: [
          "1. Study.",
          "2. Apply.",
          "3. Fail.",
          "4. Learn.",
          "5. Repeat."
        ],
        codeLines: [
          "public void success() {",
          "    while (!offerReceived) {",
          "        try {",
          "            interview();",
          "        } catch (Rejection e) {",
          "            study(e.getFeedback());",
          "        }",
          "    }",
          "    celebrate();",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Progress.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Day 1: Confused." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Day 30: Solving Easy problems." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Day 90: Solving Mediums." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Day 180: Offer!" }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Keep going.",
        takeaways: [
          "You have completed the syllabus.",
          "You are ready.",
          "Believe in yourself, Shanvi."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "The End?",
        task: "What now?",
        solution: "Build projects. Contribute to Open Source. Keep LeetCoding.",
        explanation: "Learning never ends."
      }
    }
  ]
};
