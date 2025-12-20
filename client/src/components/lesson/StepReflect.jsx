import React from 'react';
import { Title, Paragraph } from '../common/Typography';

const StepReflect = ({ data }) => {
    return (
        <div className="animate-fade-in">
            <Title>Reflection</Title>
            <div className="bg-paper border border-gray-200 p-8 rounded-lg shadow-sm">
                <Paragraph className="italic text-xl text-center">
                    "{data.quote}"
                </Paragraph>
                <div className="mt-6 space-y-4">
                    {data.takeaways.map((point, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-accent mr-3">✦</span>
                            <p className="font-sans text-ink">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StepReflect;
