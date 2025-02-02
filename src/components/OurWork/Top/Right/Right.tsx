import { Prose } from '@/components/ui/prose'
import { Group, VStack, Button, IconButton } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
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
      <Group gap={0}>
      <Link to="/our-work"> 
          <Button variant={'outline'} rounded='full' px={7}>
            Learn More
          </Button>
        </Link>
        <Link to="/our-work"> 
          <IconButton rounded='full'>
            <ArrowRight />
          </IconButton>
        </Link>
      </Group>
    </VStack>
  )
}

export default Right
