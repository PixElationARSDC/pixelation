import { Button, Group, IconButton, Image, Link } from '@chakra-ui/react'
import React from 'react'
import './navbar.css'
import { ArrowRight } from 'lucide-react'

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <Group>
        <Link href='/' _focus={{ outline: 'none' }}>
          <Image src='/logo.png' alt='logo' height='50px' />
          <Image src='/logoarsd.png' alt='logo' height='50px' />
        </Link>
      </Group>
      <Group attached>
        <Button rounded='full'>Home</Button>
        <Button asChild><a href={"#aboutus"}>About</a></Button>
        <Button asChild><a href={"#ourwork"}>Our Work</a></Button>
        <Button asChild><a href={"#ourteam"}>Our Team</a></Button>
        <Button asChild rounded='full'><a href={"#contact"}>Contact</a></Button>
      </Group>
      <Group>
        <Link href='/events' gap={0}>
          <Button rounded='full' px={7} tabIndex={-1}>Events</Button>
          <IconButton rounded='full' tabIndex={-1}>
            <ArrowRight />
          </IconButton>
        </Link>
      </Group>
    </nav>
  )
}

export default Navbar
