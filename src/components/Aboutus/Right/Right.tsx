import { Prose } from '@/components/ui/prose'
import { Button, Group, IconButton, VStack } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
import React from 'react'

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
        <Button variant={'outline'} rounded='full' px={7}>
          Learn More
        </Button>
        <IconButton rounded='full'>
          <ArrowRight />
        </IconButton>
      </Group>
    </VStack>
  )
}

export default Right
