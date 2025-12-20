import React, { useState } from 'react';
import { Title, Paragraph } from '../common/Typography';
import { aiService } from '../../services/aiService';

const StepChallenge = ({ data }) => {
    const [showSolution, setShowSolution] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [aiFeedback, setAiFeedback] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [canReveal, setCanReveal] = useState(false);

    const handleAiCheck = async () => {
        if (!userInput.trim()) return;
        setIsLoading(true);
        const feedback = await aiService.validateThinking(data.task, userInput);
        setAiFeedback(feedback);
        setIsLoading(false);
        setCanReveal(true); // Enable reveal after AI interaction
    };

    return (
        <div className="animate-fade-in">
            <Title>Mini Challenge</Title>
            <Paragraph>{data.description}</Paragraph>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
                <h3 className="font-serif font-bold mb-2">Task:</h3>
                <p className="font-sans mb-4">{data.task}</p>
            </div>

            {/* AI Interaction Section */}
            {!canReveal && !showSolution && (
                <div className="mb-8 space-y-4">
                    <label className="block text-sm font-serif text-ink-light mb-2">
                        How would you solve this? (Describe briefly)
                    </label>
                    <textarea
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="w-full p-4 rounded border border-gray-200 focus:border-ink focus:ring-0 font-sans"
                        rows={3}
                        placeholder="My plan is..."
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
                <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-md animate-fade-in">
                    <h4 className="font-serif font-bold text-blue-900 mb-2 text-sm uppercase tracking-wider">AI Tutor</h4>
                    <p className="font-serif text-blue-800 whitespace-pre-wrap">{aiFeedback}</p>
                </div>
            )}

            <button
                onClick={() => setShowSolution(!showSolution)}
                disabled={!canReveal}
                className={`font-serif transition-colors ${canReveal
                        ? 'text-primary underline hover:text-ink cursor-pointer'
                        : 'text-gray-400 cursor-not-allowed'
                    }`}
            >
                {showSolution ? "Hide Solution" : "Show Solution (Submit approach first)"}
            </button>

            {showSolution && (
                <div className="mt-6 animate-fade-in">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm">
                        <pre>{data.solution}</pre>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">{data.explanation}</p>
                </div>
            )}
        </div>
    );
};

export default StepChallenge;
