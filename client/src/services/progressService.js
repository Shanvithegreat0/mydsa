const PROGRESS_KEY = 'java-dsa-progress';

// Helper to get current progress
const getProgress = () => {
    try {
        const stored = localStorage.getItem(PROGRESS_KEY);
        return stored ? JSON.parse(stored) : { lessons: {}, chapters: {} };
    } catch (e) {
        console.error("Failed to load progress", e);
        return { lessons: {}, chapters: {} };
    }
};

// Helper to save progress
const saveProgress = (progress) => {
    try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) {
        console.error("Failed to save progress", e);
    }
};

export const progressService = {
    // Status types: 'NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'

    getLessonStatus: (lessonId) => {
        const progress = getProgress();
        return progress.lessons[lessonId] || 'NOT_STARTED';
    },

    updateLessonStatus: (lessonId, status) => {
        const progress = getProgress();
        // Only update if status is "higher" or equal (Not Started < In Progress < Completed)
        const current = progress.lessons[lessonId] || 'NOT_STARTED';
        
        if (current === 'COMPLETED') return; // Already done
        if (current === 'IN_PROGRESS' && status === 'NOT_STARTED') return; // Don't downgrade

        progress.lessons[lessonId] = status;
        saveProgress(progress);
    },

    isLessonCompleted: (lessonId) => {
        const progress = getProgress();
        return progress.lessons[lessonId] === 'COMPLETED';
    },

    // Check if all lessons in a chapter are completed
    checkChapterCompletion: (chapterId, chapterLessons) => {
        const progress = getProgress();
        const allDone = chapterLessons.every(lesson => 
            progress.lessons[lesson.id] === 'COMPLETED'
        );

        if (allDone) {
            progress.chapters[chapterId] = 'COMPLETED';
            saveProgress(progress);
        }
        return allDone;
    },

    getChapterStatus: (chapterId) => {
        const progress = getProgress();
        return progress.chapters[chapterId] || 'NOT_STARTED';
    },
    
    // Get stats for a chapter (e.g., 3/5 completed)
    getChapterStats: (chapterLessons) => {
        const progress = getProgress();
        const completedCount = chapterLessons.filter(l => progress.lessons[l.id] === 'COMPLETED').length;
        return {
            completed: completedCount,
            total: chapterLessons.length,
            percent: Math.round((completedCount / chapterLessons.length) * 100)
        };
    }
};
