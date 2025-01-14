import { Button, Group, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import './navbar.css'
import { ArrowRight } from 'lucide-react'

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <Group>
        <Image src='/logo.png' alt='logo' height='50px' />
        <Image src='/logoarsd.png' alt='logo' height='50px' />
      </Group>
      <Group attached>
        <Button rounded='full'>Home</Button>
        <Button>About</Button>
        <Button>Our Work</Button>
        <Button>Achievements</Button>
        <Button rounded='full'>Contact</Button>
      </Group>
      <Group gap='0'>
        <Button rounded='full'>Events</Button>
        <IconButton rounded='full'>
          <ArrowRight />
        </IconButton>
      </Group>
    </nav>
  )
}

export default Navbar
