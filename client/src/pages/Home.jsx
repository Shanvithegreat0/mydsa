import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookLayout from '../components/layout/BookLayout';
import { Title, Paragraph } from '../components/common/Typography';
import { syllabus } from '../data/syllabus';
import { progressService } from '../services/progressService';

const Home = () => {
    // Force re-render to get latest progress
    const [_, setTick] = useState(0);

    useEffect(() => {
        // Simple way to ensure we have latest data on mount
        setTick(t => t + 1);
    }, []);

    return (
        <BookLayout>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <Title className="!mb-6">The Java DSA Handbook</Title>
                    <Paragraph className="text-lg text-ink-light italic">
                        A curated journey by Shanvi.
                    </Paragraph>
                </div>

                <div className="space-y-12">
                    {syllabus.map((chapter) => {
                        const stats = progressService.getChapterStats(chapter.lessons);
                        const isChapterDone = stats.completed === stats.total;

                        return (
                            <div key={chapter.id} className="border-b border-paper-darker pb-8 last:border-0">
                                <div className="flex items-baseline justify-between mb-6">
                                    <h2 className="font-serif text-2xl text-ink flex items-baseline">
                                        <span className="text-base text-ink-light mr-4 font-sans uppercase tracking-widest">
                                            Chapter {chapter.id}
                                        </span>
                                        {chapter.title}
                                    </h2>
                                    <span className={`text-sm font-mono ${isChapterDone ? 'text-green-600' : 'text-ink-light'}`}>
                                        {isChapterDone ? "Completed" : `${stats.completed}/${stats.total} Lessons`}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {chapter.lessons.map((lesson, index) => {
                                        const status = progressService.getLessonStatus(lesson.id);
                                        const isDone = status === 'COMPLETED';
                                        const isInProgress = status === 'IN_PROGRESS';

                                        return (
                                            <Link
                                                key={lesson.id}
                                                to={`/learn/${chapter.id}/${lesson.id}`}
                                                className={`group flex items-center p-4 rounded-sm transition-colors border ${isDone ? 'bg-green-50 border-green-100' :
                                                        isInProgress ? 'bg-yellow-50 border-yellow-100' :
                                                            'hover:bg-paper-darker border-transparent'
                                                    }`}
                                            >
                                                <span className={`w-8 h-8 flex items-center justify-center rounded-full border text-sm font-serif mr-4 transition-colors ${isDone ? 'bg-green-100 border-green-200 text-green-700' :
                                                        isInProgress ? 'bg-yellow-100 border-yellow-200 text-yellow-700' :
                                                            'border-ink-light/20 text-ink-light group-hover:border-primary group-hover:text-primary'
                                                    }`}>
                                                    {isDone ? '✓' : index + 1}
                                                </span>
                                                <div className="flex-1">
                                                    <span className={`font-medium transition-colors ${isDone ? 'text-green-900' :
                                                            isInProgress ? 'text-yellow-900' :
                                                                'text-ink group-hover:text-primary'
                                                        }`}>
                                                        {lesson.title}
                                                    </span>
                                                    {isInProgress && (
                                                        <div className="text-xs text-yellow-600 font-serif italic mt-1">In Progress</div>
                                                    )}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-24 text-center text-ink-light text-sm font-serif italic">
                    &copy; 2023 Shanvi's DSA Learning App
                </div>
            </div>
        </BookLayout>
    );
};

export default Home;
