import React from 'react'

import HeroPage from '../Hero/HeroPage'
import AboutPage from '../About/AboutPage'
import OurWork from '../OurWork/OurWork'
import AboutUs from '../About/AboutInside/AboutUs'

const Home: React.FC = () => {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <OurWork />
      <AboutUs />
    </div>
  )
}

export default Home
