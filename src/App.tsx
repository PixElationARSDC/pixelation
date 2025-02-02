import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutInside/AboutUs';
import Work from './pages/OurWork/WorkInside/Work';
import EventPage from './pages/Event/EventPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-work" element={<Work />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </Router>
  );
};

export default App;