import React from 'react';
import { Title, Paragraph } from '../common/Typography';

const StepNaive = ({ data }) => {
    return (
        <div className="animate-fade-in">
            <Title>The Naive Approach</Title>
            <Paragraph>{data.description}</Paragraph>

            <div className="my-8 p-6 bg-red-50 border border-red-100 rounded-lg">
                <h3 className="font-serif text-xl text-red-800 mb-4">Why it fails (or is slow)</h3>
                <ul className="list-disc list-inside space-y-2 text-red-700 font-sans">
                    {data.issues.map((issue, index) => (
                        <li key={index}>{issue}</li>
                    ))}
                </ul>
            </div>

            <div className="font-mono text-sm bg-gray-100 p-4 rounded text-gray-600">
                {data.codeSnippet}
            </div>
        </div>
    );
};

export default StepNaive;
