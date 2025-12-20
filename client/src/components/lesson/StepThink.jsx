import React, { useState } from 'react';
import { Title, Paragraph } from '../common/Typography';
import { aiService } from '../../services/aiService';

const StepThink = ({ data, onNext }) => {
    const [userInput, setUserInput] = useState('');
    const [aiFeedback, setAiFeedback] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);

    const [selectedOption, setSelectedOption] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleAiCheck = async () => {
        if (!userInput.trim()) return;
        setIsLoading(true);
        const feedback = await aiService.validateThinking(data.question, userInput);
        setAiFeedback(feedback);
        setIsLoading(false);
        setShowQuiz(true); // Reveal MCQs after AI interaction
    };

    const handleSelect = (index) => {
        if (showFeedback) return;
        setSelectedOption(index);
        setShowFeedback(true);
    };

    return (
        <div className="animate-fade-in">
            <Title>Think First</Title>
            <Paragraph>{data.question}</Paragraph>

            {/* AI Interaction Section */}
            {!showQuiz && (
                <div className="mt-8 space-y-4">
                    <label className="block text-sm font-serif text-ink-light mb-2">
                        Describe your approach (in your own words):
                    </label>
                    <textarea
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="w-full p-4 rounded border border-gray-200 focus:border-ink focus:ring-0 font-sans"
                        rows={3}
                        placeholder="I think I should..."
                    />
                    <button
                        onClick={handleAiCheck}
                        disabled={isLoading || !userInput.trim()}
                        className="px-6 py-2 bg-ink text-paper font-serif rounded-sm hover:bg-primary transition-colors disabled:opacity-50"
                    >
                        {isLoading ? "Thinking..." : "Check my thinking"}
                    </button>
                </div>
            )}

            {/* AI Feedback Display */}
            {aiFeedback && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md animate-fade-in">
                    <h4 className="font-serif font-bold text-blue-900 mb-2 text-sm uppercase tracking-wider">AI Tutor</h4>
                    <p className="font-serif text-blue-800 whitespace-pre-wrap">{aiFeedback}</p>
                </div>
            )}

            {/* MCQ Section (Shown after AI or if skipped/legacy) */}
            {showQuiz && (
                <div className="space-y-4 mt-8 animate-fade-in">
                    <div className="text-sm font-serif text-ink-light italic mb-4">
                        Now, select the best option to confirm:
                    </div>
                    {data.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            className={`w-full text-left p-4 rounded border transition-all ${showFeedback
                                ? index === data.correctIndex
                                    ? 'bg-green-50 border-green-200'
                                    : index === selectedOption
                                        ? 'bg-red-50 border-red-200'
                                        : 'border-gray-200 opacity-50'
                                : 'border-gray-200 hover:border-ink hover:bg-gray-50'
                                }`}
                        >
                            <div className="font-serif text-lg">{option.text}</div>
                            {showFeedback && index === selectedOption && (
                                <div className={`mt-2 text-sm ${index === data.correctIndex ? 'text-green-700' : 'text-red-700'}`}>
                                    {index === data.correctIndex ? "Correct! " : "Not quite. "}
                                    {option.feedback}
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {showFeedback && (
                <div className="mt-8 flex justify-end">
                    <button
                        onClick={onNext}
                        className="px-6 py-2 bg-ink text-paper font-serif rounded-sm hover:bg-primary transition-colors"
                    >
                        Continue →
                    </button>
                </div>
            )}
        </div>
    );
};

export default StepThink;
