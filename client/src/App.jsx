import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LessonContainer from './components/lesson/LessonContainer';
import { syllabus } from './data/syllabus';

// Wrapper to extract params and find lesson
const LessonRoute = () => {
  const { chapterId, lessonId } = useParams();

  const chapter = syllabus.find(c => c.id === parseInt(chapterId));
  if (!chapter) return <div>Chapter not found</div>;

  const lesson = chapter.lessons.find(l => l.id === lessonId);
  if (!lesson) return <div>Lesson not found</div>;

  return <LessonContainer lessonData={lesson} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/learn/:chapterId/:lessonId"
          element={<LessonRoute />}
        />
        {/* Redirect old hardcoded route if needed, or just let 404 */}
      </Routes>
    </Router>
  );
}

export default App;
