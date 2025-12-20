import React from 'react';
import { Title, Paragraph } from '../common/Typography';

const StepInsight = ({ data }) => {
    return (
        <div className="animate-fade-in">
            <Title>The Core Insight</Title>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
                <Paragraph className="!mb-0 font-medium text-yellow-900">
                    {data.insight}
                </Paragraph>
            </div>

            {data.paragraphs.map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
            ))}
        </div>
    );
};

export default StepInsight;
