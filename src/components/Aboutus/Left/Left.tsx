import React from 'react'
import './Left.css'
import { Em, Heading, VStack } from '@chakra-ui/react'
import { Prose } from '@/components/ui/prose'

interface LeftProps {
  text: string
}

const Left: React.FC<LeftProps> = ({ text }) => {
  const Html = String.raw

  const content = Html`${text}`
  return (
    <VStack align={'start'} justifyContent={'space-between'} h={'full'}>
      <Heading size={'4xl'}>
        About <Em>Us</Em>
      </Heading>
      <Prose
        dangerouslySetInnerHTML={{ __html: content }}
        textAlign={'justify'}
        fontSize={'md'}
        color={'gray.300'}
        fontFamily={'body'}
      />
    </VStack>
  )
}

export default Left
