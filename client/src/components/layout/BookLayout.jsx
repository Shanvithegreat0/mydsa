import React from 'react';

const BookLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-paper text-ink font-sans selection:bg-accent selection:text-ink-light">
            <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16">
                <main className="prose prose-slate max-w-none">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default BookLayout;
