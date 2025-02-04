import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const AboutUs = lazy(() => import('./pages/About/AboutInside/AboutUs'));
const Work = lazy(() => import('./pages/OurWork/WorkInside/Work'));
const EventPage = lazy(() => import('./pages/Event/EventPage'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-work" element={<Work />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </Suspense>
    </Router >
  );
};

export default App;