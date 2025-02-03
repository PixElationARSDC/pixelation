import { Button, Group, IconButton, Image, Link as ChakraLink, Container } from '@chakra-ui/react'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <Container p="0" display="flex" justifyContent="space-between" alignItems="center" maxW="container.xl">
      <Group>
        <ChakraLink href='/' _focus={{ outline: 'none' }}>
          <Image src='/logo.png' alt='logo' height='50px' />
        </ChakraLink>
        <ChakraLink href='https://arsdcollege.ac.in' _focus={{ outline: 'none' }} target='_blank'>
          <Image src='/logoarsd.png' alt='logo' height='50px' />
        </ChakraLink>
      </Group>
      <Group attached>
        <Button rounded='full'>Home</Button>
        <Button asChild><a href={"#aboutus"}>About</a></Button>
        <Button asChild><a href={"#ourwork"}>Our Work</a></Button>
        <Button asChild><a href={"#ourteam"}>Our Team</a></Button>
        <Button asChild rounded='full'><a href={"#contact"}>Contact</a></Button>
      </Group>
      <Group>
        <Link to={"/events"}>
          <Group gap={0}>
            <Button rounded='full' px={7} tabIndex={-1}>Events</Button>
            <IconButton rounded='full' tabIndex={-1}>
              <ArrowRight />
            </IconButton>
          </Group>
        </Link>
      </Group>
    </Container>
  )
}

export default Navbar
