const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini
const genAI = new GoogleGenerativeAI("AIzaSyDXGJ2Ro-8wCb-TVaCow_nnpgDq4vGjvIk");
console.log(genAI);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Helper to clean response
const cleanResponse = (text) => {
  return text.replace(/```json/g, '').replace(/```/g, '').trim();
};

// POST /api/ai/predict
// Validates user's thinking approach
router.post('/predict', async (req, res) => {
  try {
    const { question, userInput, context } = req.body;

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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ message: text });
  } catch (error) {
    console.error("AI Predict Error:", error);
    res.status(500).json({ message: "I'm having a little trouble thinking right now. Try again?" });
  }
});

// POST /api/ai/confusion
// Explains a concept simply when user is confused
router.post('/confusion', async (req, res) => {
  try {
    const { lessonTitle, stepContent, context } = req.body;

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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ message: text });
  } catch (error) {
    console.error("AI Confusion Error:", error);
    res.status(500).json({ message: "I'm having a little trouble thinking right now. Try again?" });
  }
});

module.exports = router;
