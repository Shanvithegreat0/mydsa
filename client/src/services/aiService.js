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
      const context = getContextString();
      const prompt = `
Shanvi is learning Java DSA.
She described her approach below.
Respond like a calm teacher.

Rules:
- Start with encouragement
- Say what part is correct (if any)
- Point out one missing or incorrect idea gently
- Do NOT give full solution
- Do NOT write code
- Keep response under 6 lines
- Context: ${context || "None"}

Question:
${question}

Shanvi's approach:
${userInput}
`;

      const response = await window.puter.ai.chat(prompt, { model: 'gemini-2.5-flash' });
      const text = response?.message?.content || response?.toString() || "";
      return text.replace(/```json/g, '').replace(/```/g, '').trim();
    } catch (error) {
      console.error("AI Service Error:", error);
      return "I'm having trouble connecting to my brain right now.";
    }
  },

  explainConfusion: async (lessonTitle, stepContent) => {
    try {
      const context = getContextString();
      const prompt = `
The learner Shanvi feels confused at this step.

Rules:
- Reassure first
- Explain the core idea simply
- Mention what she does NOT need to worry about yet
- Avoid code unless absolutely needed
- Keep response under 5 lines
- Context: ${context || "None"}

Lesson:
${lessonTitle}

Step content:
${stepContent}
`;

      const response = await window.puter.ai.chat(prompt, { model: 'gemini-2.5-flash' });
      const text = response?.message?.content || response?.toString() || "";
      return text.replace(/```json/g, '').replace(/```/g, '').trim();
    } catch (error) {
      console.error("AI Service Error:", error);
      return "I'm having trouble connecting to my brain right now.";
    }
  },

  recordSuccess: (topic) => updateLocalContext(topic, true),
  recordStruggle: (topic) => updateLocalContext(topic, false)
};
