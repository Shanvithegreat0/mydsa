import React from 'react';

export const Title = ({ children, className = '' }) => (
    <h1 className={`font-serif text-4xl md:text-5xl font-bold text-ink mb-6 ${className}`}>
        {children}
    </h1>
);

export const Subtitle = ({ children, className = '' }) => (
    <h2 className={`font-serif text-2xl md:text-3xl font-semibold text-ink-light mb-4 ${className}`}>
        {children}
    </h2>
);

export const Paragraph = ({ children, className = '' }) => (
    <p className={`text-lg leading-relaxed text-ink mb-6 ${className}`}>
        {children}
    </p>
);

export const CodeText = ({ children }) => (
    <code className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-sm text-primary">
        {children}
    </code>
);
