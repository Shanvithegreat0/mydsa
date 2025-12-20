import React, { useState } from 'react';
import { Title, Paragraph } from '../common/Typography';

const StepCode = ({ data }) => {
    const [revealedLines, setRevealedLines] = useState(0);

    const handleReveal = () => {
        if (revealedLines < data.codeLines.length) {
            setRevealedLines(revealedLines + 1);
        }
    };

    return (
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            <div>
                <Title>Let's Code</Title>
                <Paragraph>{data.description}</Paragraph>
                <div className="space-y-4">
                    {data.explanations.slice(0, revealedLines).map((exp, index) => (
                        <div key={index} className="p-4 bg-yellow-50 border-l-4 border-yellow-200 text-ink text-sm font-serif">
                            {exp}
                        </div>
                    ))}
                </div>

                {revealedLines < data.codeLines.length && (
                    <button
                        onClick={handleReveal}
                        className="mt-6 px-4 py-2 border border-ink text-ink font-serif hover:bg-gray-50 transition-colors"
                    >
                        Reveal Next Line ↓
                    </button>
                )}
            </div>

            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm text-gray-100 overflow-x-auto shadow-soft">
                <pre>
                    {data.codeLines.map((line, index) => (
                        <div
                            key={index}
                            className={`transition-opacity duration-500 ${index < revealedLines ? 'opacity-100' : 'opacity-10'}`}
                        >
                            <span className="text-gray-500 select-none mr-4 w-6 inline-block text-right">{index + 1}</span>
                            {line}
                        </div>
                    ))}
                </pre>
            </div>
        </div>
    );
};

export default StepCode;
