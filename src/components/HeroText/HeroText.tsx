import React from 'react'
import { Box, Heading, VStack } from '@chakra-ui/react'

interface HeroTextProps {
  text: string
  subtext1: string
  subtext2: string
}

const HeroText: React.FC<HeroTextProps> = ({ text, subtext1, subtext2 }) => {
  return (
    <VStack align='start' maxW={{ base: '90%', md: '3xl' }} p={4}>
      <Heading
        size={{ base: '4xl', md: '6xl', lg: '7xl' }}
        textShadow='4px 4px 11px rgba(180, 180, 180, 0.6)'
        fontFamily="'Gloock', serif"
        fontWeight={400}
        fontStyle='normal'
      >
        {text}
      </Heading>
      <Heading size={{ base: 'sm', md: 'md' }}>{subtext1}</Heading>
      <Box>
        <Heading size={{ base: 'sm', md: 'md' }}>{subtext2}</Heading>
      </Box>
    </VStack>
  )
}

export default HeroText