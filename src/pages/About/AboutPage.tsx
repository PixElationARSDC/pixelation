import React from 'react'
import './AboutPage.css'
import { GridItem, SimpleGrid } from '@chakra-ui/react'

import Left from '@/components/Aboutus/Left/Left'
import Right from '@/components/Aboutus/Right/Right'

const AboutPage: React.FC = () => {
  return (
    <div className='about-page'>
      <SimpleGrid columns={{ base: 1, md: 5 }} spaceX={10}>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Left text='Established in 2017, <b>PixElation</b>, the <b>Photography and Videography Society</b> of <b>Atma Ram Sanatan Dharma College, Delhi University</b>, is a dynamic collective passionate about <b>exploring the world through photography and filmmaking.</b>' />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <Right text="<b>The negative</b> is the equivalent of the composer's score and the <b>print the performance.</b>" />
        </GridItem>
      </SimpleGrid>
    </div>
  )
}

export default AboutPage
