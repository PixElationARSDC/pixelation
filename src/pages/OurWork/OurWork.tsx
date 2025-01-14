import React from 'react'
import './OurWork.css'

import Left from '@/components/OurWork/Top/Left/Left'
import Right from '@/components/OurWork/Top/Right/Right'
import Slider from '@/components/OurWork/Slider/Slider'
import { GridItem, SimpleGrid } from '@chakra-ui/react'

const OurWork: React.FC = () => {
  return (
    <div className='our-work'>
      <SimpleGrid columns={{ base: 1, md: 5 }} columnGap={10} rowGap={10}>
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <Left text='<b>Explore</b> the artistry and meticulous detail in <b>our gallery</b> of <b>timeless images.</b>' />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Right text='<div style="display: flex; flex-direction: column; align-items: end;"><p style="margin-bottom: 0;">"You don&lsquo;t take a photograph, you make it."</p> <p style="margin-top: 0;"><b>- Ansel Adams</b></p></div>' />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 5 }} display={'flex'}>
          <Slider />
        </GridItem>
      </SimpleGrid>
    </div>
  )
}

export default OurWork
