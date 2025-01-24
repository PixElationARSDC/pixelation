import React from 'react'
import HeroPage from '../Hero/HeroPage'
import AboutPage from '../About/AboutPage'
import OurWork from '../OurWork/OurWork'

const Home: React.FC = () => {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <OurWork />
    </div>
  )
}

export default Home