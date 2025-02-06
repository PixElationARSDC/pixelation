import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Skeleton } from '@chakra-ui/react';

const AboutUs = lazy(() => import('./pages/About/AboutInside/AboutUs'));
// const Work = lazy(() => import('./pages/OurWork/WorkInside/Work'));
const EventPage = lazy(() => import('./pages/Event/EventPage'));
const OurTeamPage = lazy(() => import('./pages/OurTeam/OurTeamPage'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton height="100vh" width={"100%"} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/our-work" element={<Work />} /> */}
          <Route path="/events" element={<EventPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
        </Routes>
      </Suspense>
    </Router >
  );
};

export default App;