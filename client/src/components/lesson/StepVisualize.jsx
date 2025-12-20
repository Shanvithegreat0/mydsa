import React, { useState } from 'react';
import { Title, Paragraph } from '../common/Typography';

const StepVisualize = ({ data }) => {
    const [step, setStep] = useState(0);
    const currentFrame = data.frames[step];

    return (
        <div className="animate-fade-in">
            <Title>Visualize It</Title>
            <Paragraph>{data.description}</Paragraph>

            <div className="mt-8 mb-4 flex justify-center space-x-2 overflow-x-auto py-4">
                {currentFrame.array.map((val, idx) => (
                    <div
                        key={idx}
                        className={`
              w-12 h-12 flex items-center justify-center border-2 rounded font-mono text-lg transition-all duration-300
              ${idx === currentFrame.highlightIndex ? 'border-blue-500 bg-blue-50 scale-110' : 'border-gray-300 bg-white'}
              ${currentFrame.activeRange && idx >= currentFrame.activeRange[0] && idx <= currentFrame.activeRange[1] ? 'bg-blue-100' : ''}
            `}
                    >
                        {val}
                    </div>
                ))}
            </div>

            <div className="text-center mb-8 min-h-[60px]">
                <p className="font-serif text-lg text-ink">{currentFrame.explanation}</p>
                <div className="text-sm font-mono text-gray-500 mt-2">
                    Current Sum: {currentFrame.currentSum} | Max Sum: {currentFrame.maxSum}
                </div>
            </div>

            <div className="flex justify-center space-x-4">
                <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    className="px-4 py-2 border border-gray-300 rounded disabled:opacity-30"
                >
                    Previous
                </button>
                <span className="py-2 font-mono text-sm text-gray-500">
                    Step {step + 1} / {data.frames.length}
                </span>
                <button
                    onClick={() => setStep(Math.min(data.frames.length - 1, step + 1))}
                    disabled={step === data.frames.length - 1}
                    className="px-4 py-2 bg-ink text-paper rounded hover:bg-primary disabled:opacity-30"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default StepVisualize;
