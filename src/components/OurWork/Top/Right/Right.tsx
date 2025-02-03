import { Prose } from '@/components/ui/prose'
import { Group, VStack, Button, IconButton } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
import React from 'react'

interface RightProps {
  text: string
}
const Right: React.FC<RightProps> = ({ text }) => {
  const Html = String.raw
  const content = Html`${text}`
  return (
    <VStack h={'full'} justify={'start'} align={'end'} spaceY={10}>
      <Prose
        dangerouslySetInnerHTML={{ __html: content }}
        textAlign={'justify'}
        fontSize={'md'}
        color={'gray.300'}
        fontFamily={'body'}
      />
      <a href='https://www.instagram.com/pixelation.arsd/' target='_blank' rel='noreferrer'>
        <Group gap={0}>
          <Button variant={'outline'} rounded='full' px={7}>
            Explore More
          </Button>
          <IconButton rounded='full'>
            <ArrowRight />
          </IconButton>
        </Group>
      </a>
    </VStack>
  )
}

export default Right
