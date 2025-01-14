import React from 'react'
import './HeroKeywords.css'

interface HeroKeywordsProps {
  keywords: string[]
}

const HeroKeywords: React.FC<HeroKeywordsProps> = ({ keywords }) => {
  return (
    <div className='hero-keywords'>
      {keywords.map((keyword, index) => (
        <span key={index} className='keyword'>
          {keyword}
        </span>
      ))}
    </div>
  )
}

export default HeroKeywords
