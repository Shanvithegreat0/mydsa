import React from 'react';
import { Title, Paragraph } from '../common/Typography';

const StepWarmUp = ({ data }) => {
    return (
        <div className="animate-fade-in">
            <Title>{data.title}</Title>
            {data.paragraphs.map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
            ))}
        </div>
    );
};

export default StepWarmUp;
