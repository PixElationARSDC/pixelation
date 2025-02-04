import React from 'react'
import './HeroKeywords.css'
import { Link } from '@chakra-ui/react'

interface HeroKeywordsProps {
  keywords: string[],
}

const HeroKeywords: React.FC<HeroKeywordsProps> = ({ keywords }) => {
  return (
    <div className='hero-keywords'>
      {keywords.map((keyword, index) => (
        <Link key={index} href='https://www.instagram.com/pixelation.arsd/' target='_blank' className='keyword'>
          {keyword}
        </Link>
      ))}
    </div>
  )
}

export default HeroKeywords
