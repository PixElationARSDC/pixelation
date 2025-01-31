import React from 'react'
import HeroPage from '../Hero/HeroPage'
import AboutPage from '../About/AboutPage'
import OurWork from '../OurWork/OurWork'
import CoreTeamPage from '../CoreTeam/CoreTeamPage'

const Home: React.FC = () => {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <OurWork />
      <CoreTeamPage />
    </div>
  )
}

export default Home