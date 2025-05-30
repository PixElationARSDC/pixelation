import React from 'react'
import Navbar from '@/components/Navbar/navbar'
import './HeroPage.css'
import HeroText from '@/components/HeroText/HeroText'
import { HStack } from '@chakra-ui/react'
import HeroKeywords from '@/components/HeroKeywords/HeroKeywords'
import { heroBackground } from '@/data/data'

const HeroPage: React.FC = () => {
  const heroStyle: React.CSSProperties = {
    backgroundImage: `url(${heroBackground})`,
  }
  return (
    <div className='hero-page' style={heroStyle}>
      <Navbar />
      <HeroText
        text='The Photography and Videography Society'
        subtext1='ATMA RAM SANATAN DHARMA COLLEGE'
        subtext2='UNIVERSITY OF DELHI'
      />
      <HStack justifyContent='space-between'>
        <HeroKeywords keywords={['Landscapes', 'Portraits', 'Wildlife', 'Nature']} />
      </HStack>
    </div>
  )
}

export default HeroPage
