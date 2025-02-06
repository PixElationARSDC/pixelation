import { Prose } from '@/components/ui/prose'
import { Button, Group, IconButton, VStack } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

interface RightProps {
  text: string
}
const Right: React.FC<RightProps> = ({ text }) => {
  const Html = String.raw
  const content = Html`${text}`

  return (
    <VStack align={'start'} h={'full'} spaceY={10}>
      <Prose
        dangerouslySetInnerHTML={{ __html: content }}
        fontSize={'5xl'}
        color={'gray.300'}
        lineHeight={'shorter'}
        letterSpacing={'wide'}
      />
      <Group gap={0}>
        <Link to="/about-us" aria-label="Learn more about us">
          <Button variant={'outline'} rounded='full' px={7} aria-label="Learn more about us">
            Learn more about us
          </Button>
          <IconButton rounded='full' aria-label="Learn more about us">
            <ArrowRight />
          </IconButton>
        </Link>
      </Group>
    </VStack>
  )
}

export default Right
