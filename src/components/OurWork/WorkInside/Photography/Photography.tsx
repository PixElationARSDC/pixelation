import Slider from './Slider/Slider'
import { VStack, Container } from '@chakra-ui/react'
import { PhotoSwiper } from './PhotoSwiper'

const Photography = () => {
  return (
    <div>
      <Slider />
        <Container maxW="container.xl" bg="black" color="white" py={8}>
            <VStack gap={12} align="stretch">
            <PhotoSwiper />
            </VStack>
        </Container>
    </div>
  )
}
export default Photography