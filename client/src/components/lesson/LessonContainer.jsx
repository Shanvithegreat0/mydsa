import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BookLayout from '../layout/BookLayout';
import { Title, Subtitle, Paragraph } from '../common/Typography';
import { aiService } from '../../services/aiService';
import { progressService } from '../../services/progressService';
import { syllabus } from '../../data/syllabus';
import { API_BASE_URL } from '../../config';

const LessonContainer = ({ lessonData }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const { lessonId, chapterId } = useParams();
    const navigate = useNavigate();

    // AI Confusion State
    const [confusionExplanation, setConfusionExplanation] = useState(null);
    const [isAiThinking, setIsAiThinking] = useState(false);

    // Initialize progress
    useEffect(() => {
        // If lesson is already completed, maybe we could show a "Completed" badge?
        // For now, just mark as IN_PROGRESS if started
        if (currentStep > 0 && !progressService.isLessonCompleted(lessonData.id)) {
            progressService.updateLessonStatus(lessonData.id, 'IN_PROGRESS');
        }
    }, [currentStep, lessonData.id]);

    // Clear confusion explanation when step changes
    useEffect(() => {
        setConfusionExplanation(null);
    }, [currentStep]);

    const handleNext = async () => {
        if (currentStep < lessonData.steps.length - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            progressService.updateLessonStatus(lessonData.id, 'IN_PROGRESS');
        } else {
            // Finish Lesson
            progressService.updateLessonStatus(lessonData.id, 'COMPLETED');

            // Check Chapter Completion
            const currentChapterIndex = syllabus.findIndex(c => c.id === parseInt(chapterId));
            const currentChapter = syllabus[currentChapterIndex];

            if (currentChapter) {
                progressService.checkChapterCompletion(chapterId, currentChapter.lessons);
            }

            // Navigate to next
            const currentLessonIndex = currentChapter.lessons.findIndex(l => l.id === lessonData.id);

            if (currentLessonIndex < currentChapter.lessons.length - 1) {
                // Next lesson in same chapter
                navigate(`/learn/${chapterId}/${currentChapter.lessons[currentLessonIndex + 1].id}`);
            } else if (currentChapterIndex < syllabus.length - 1) {
                // Next chapter
                const nextChapter = syllabus[currentChapterIndex + 1];
                navigate(`/learn/${nextChapter.id}/${nextChapter.lessons[0].id}`);
            } else {
                // Course finished
                navigate('/');
            }
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const handleConfusion = async () => {
        setIsAiThinking(true);
        const currentStepData = lessonData.steps[currentStep];
        // Extract text content from data for context (simplified)
        const stepContent = JSON.stringify(currentStepData.data);

        const explanation = await aiService.explainConfusion(lessonData.title, stepContent);
        setConfusionExplanation(explanation);
        setIsAiThinking(false);

        // Record struggle for local memory
        aiService.recordStruggle(lessonData.title);
    };

    const CurrentStepComponent = lessonData.steps[currentStep].component;
    const isLastStep = currentStep === lessonData.steps.length - 1;

    return (
        <BookLayout>
            <div className="mb-4">
                <Link to="/" className="inline-flex items-center text-sm text-ink-light hover:text-primary transition-colors font-serif">
                    ← Back to Home
                </Link>
            </div>

            <div className="mb-8 flex justify-between items-center">
                <span className="text-sm font-serif italic text-ink-light">
                    Chapter {lessonData.chapterId} • Lesson {lessonData.id}
                </span>
                <span className="text-sm font-mono text-ink-light">
                    Step {currentStep + 1} of {lessonData.steps.length}
                </span>
            </div>

            <Title>{lessonData.title}</Title>

            <div className="min-h-[400px]">
                <CurrentStepComponent
                    data={lessonData.steps[currentStep].data}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            </div>

            {/* AI Confusion Detector */}
            <div className="mt-8 mb-4">
                {!confusionExplanation ? (
                    <button
                        onClick={handleConfusion}
                        disabled={isAiThinking}
                        className="text-sm text-ink-light underline hover:text-primary font-serif italic transition-colors"
                    >
                        {isAiThinking ? "Asking AI..." : "I feel lost here"}
                    </button>
                ) : (
                    <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-md animate-fade-in relative">
                        <button
                            onClick={() => setConfusionExplanation(null)}
                            className="absolute top-2 right-2 text-yellow-700 hover:text-yellow-900"
                        >
                            ✕
                        </button>
                        <h4 className="font-serif font-bold text-yellow-800 mb-2 text-sm uppercase tracking-wider">Simple Explanation</h4>
                        <p className="font-serif text-yellow-900 whitespace-pre-wrap">{confusionExplanation}</p>
                    </div>
                )}
            </div>

            <div className="mt-12 flex justify-between border-t border-gray-200 pt-6">
                <button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={`px-4 py-2 font-serif text-ink-light hover:text-ink transition-colors ${currentStep === 0 ? 'opacity-0' : ''}`}
                >
                    ← Previous
                </button>

                <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-ink text-paper font-serif rounded-sm hover:bg-primary transition-colors"
                >
                    {isLastStep ? "Finish & Next →" : "Continue →"}
                </button>
            </div>
        </BookLayout>
    );
};

export default LessonContainer;
