const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const User = require('../models/User');

// Get Progress for a Lesson
router.get('/progress/:lessonId', async (req, res) => {
  try {
    let progress = await Progress.findOne({ lessonId: req.params.lessonId });
    if (!progress) {
      progress = new Progress({ lessonId: req.params.lessonId });
      await progress.save();
    }
    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Progress
router.post('/progress/:lessonId', async (req, res) => {
  try {
    const { completedSteps, isComplete } = req.body;
    let progress = await Progress.findOne({ lessonId: req.params.lessonId });
    
    if (!progress) {
      progress = new Progress({ lessonId: req.params.lessonId });
    }

    progress.completedSteps = completedSteps;
    if (isComplete !== undefined) progress.isComplete = isComplete;
    progress.lastUpdated = Date.now();

    await progress.save();
    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
