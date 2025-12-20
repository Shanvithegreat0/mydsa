import { API_BASE_URL } from '../config';

const API_URL = `${API_BASE_URL}/api/ai`;

// Local Memory Keys
const MEMORY_KEY = 'shanvi_dsa_memory';

// Get local context (struggled/strong topics)
const getLocalContext = () => {
  try {
    const memory = localStorage.getItem(MEMORY_KEY);
    return memory ? JSON.parse(memory) : { struggledTopics: [], strongTopics: [] };
  } catch (e) {
    return { struggledTopics: [], strongTopics: [] };
  }
};

// Update local context
const updateLocalContext = (topic, isStrong) => {
  const context = getLocalContext();
  if (isStrong) {
    if (!context.strongTopics.includes(topic)) context.strongTopics.push(topic);
    context.struggledTopics = context.struggledTopics.filter(t => t !== topic);
  } else {
    if (!context.struggledTopics.includes(topic)) context.struggledTopics.push(topic);
    context.strongTopics = context.strongTopics.filter(t => t !== topic);
  }
  localStorage.setItem(MEMORY_KEY, JSON.stringify(context));
};

// Format context for AI
const getContextString = () => {
  const { struggledTopics, strongTopics } = getLocalContext();
  let context = "Learning history: ";
  if (strongTopics.length > 0) context += `Shanvi is confident with: ${strongTopics.join(', ')}. `;
  if (struggledTopics.length > 0) context += `She previously struggled with: ${struggledTopics.join(', ')}.`;
  return context;
};

export const aiService = {
  validateThinking: async (question, userInput) => {
    try {
      const res = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          userInput,
          context: getContextString()
        })
      });
      const data = await res.json();
      return data.message;
    } catch (error) {
      console.error("AI Service Error:", error);
      return "I'm having trouble connecting to my brain right now.";
    }
  },

  explainConfusion: async (lessonTitle, stepContent) => {
    try {
      const res = await fetch(`${API_URL}/confusion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonTitle,
          stepContent,
          context: getContextString()
        })
      });
      const data = await res.json();
      return data.message;
    } catch (error) {
      console.error("AI Service Error:", error);
      return "I'm having trouble connecting to my brain right now.";
    }
  },

  recordSuccess: (topic) => updateLocalContext(topic, true),
  recordStruggle: (topic) => updateLocalContext(topic, false)
};
