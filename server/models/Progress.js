const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  lessonId: {
    type: String,
    required: true
  },
  completedSteps: {
    type: Number,
    default: 0
  },
  isComplete: {
    type: Boolean,
    default: false
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Progress', ProgressSchema);
