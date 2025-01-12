import React from 'react';

import HeroPage from '../Hero/HeroPage';
import AboutPage from '../About/AboutPage';

const Home: React.FC = () => {
    return (
        <div>
            <HeroPage />
            <AboutPage />
        </div>
    );
};

export default Home;