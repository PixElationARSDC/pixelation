import React from 'react'
import HeroPage from '../Hero/HeroPage'
import AboutPage from '../About/AboutPage'
import OurWork from '../OurWork/OurWork'
import CoreTeamPage from '../CoreTeam/CoreTeamPage'
import ContactUsPage from '../ContactUs/ContactUsPage'
import SplashCursor from '@/components/ui/Background'

const Home: React.FC = () => {
  return (
    <div>
      <SplashCursor />
      <HeroPage />
      <AboutPage />
      <OurWork />
      <CoreTeamPage />
      <ContactUsPage />
    </div>
  )
}

export default Home