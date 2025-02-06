import {
  Button,
  IconButton,
  Image,
  Link as ChakraLink,
  Container,
  Group,
  useDisclosure,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerCloseTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
} from '@/components/ui/drawer';
import { Menu as HamburgerIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Container p="0" display="flex" justifyContent="space-between" alignItems="center">
      {/* Logo Section */}
      <Group>
        <ChakraLink href='/' _focus={{ outline: 'none' }} aria-label='Home'>
          <Image src='/logo.avif' alt='logo' height='50px' />
        </ChakraLink>
        <ChakraLink href='https://arsdcollege.ac.in' _focus={{ outline: 'none' }} target='_blank' aria-label='ARSD College'>
          <Image src='/logoarsd.avif' alt='logo' height='50px' />
        </ChakraLink>
      </Group>

      {/* Desktop Menu */}
      {useBreakpointValue({
        base: null,
        md: (
          <Group attached>
            <Button rounded='full' aria-label='home'>Home</Button>
            <Button asChild><a href={"#aboutus"} aria-label='about us'>About</a></Button>
            <Button asChild><a href={"#ourwork"} aria-label='our work'>Our Work</a></Button>
            <Button asChild><a href={"#ourteam"} aria-label='our team'>Our Team</a></Button>
            <Button asChild rounded='full'><a href={"#contact"} aria-label='contact us'>Contact</a></Button>
          </Group>
        )
      })}

      {/* Events Button - Desktop */}
      {useBreakpointValue({
        base: null,
        md: (
          <Group attached>
            <Link to={"/events"} aria-label="Events">
              <Group gap={0}>
                <Button rounded='full' px={7} tabIndex={-1} aria-label='Events'>Events</Button>
                <IconButton rounded='full' tabIndex={-1} aria-label='Events'>
                  <ArrowRight />
                </IconButton>
              </Group>
            </Link>
          </Group>
        )
      })}

      {/* Mobile Menu Button */}
      {useBreakpointValue({
        base: (
          <IconButton
            rounded='full'
            onClick={onOpen}
            aria-label="Open Menu"
            position="fixed"
            top="1.2rem"
            right="1.5rem"
            zIndex={20}
          ><HamburgerIcon /></IconButton>
        ),
        md: null
      })}

      {/* Drawer for Mobile Menu */}
      {useBreakpointValue({
        base: (
          <DrawerRoot open={open} onOpenChange={onClose}>
            <DrawerBackdrop />
            <DrawerContent>
              <DrawerCloseTrigger />
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <VStack gap={4} mt={10}>
                  <Button rounded={"full"} variant="surface" asChild w="100%" onClick={onClose} aria-label="Home">
                    <a href={"#"} aria-label="Home">Home</a>
                  </Button>
                  <Button rounded={"full"} variant="surface" asChild w="100%" onClick={onClose} aria-label="About Us">
                    <a href={"#aboutus"} aria-label="About Us">About</a>
                  </Button>
                  <Button rounded={"full"} variant="surface" asChild w="100%" onClick={onClose} aria-label="Our Work">
                    <a href={"#ourwork"} aria-label="Our Work">Our Work</a>
                  </Button>
                  <Button rounded={"full"} variant="surface" asChild w="100%" onClick={onClose} aria-label="Our Team">
                    <a href={"#ourteam"} aria-label="Our Team">Our Team</a>
                  </Button>
                  <Button rounded={"full"} variant="surface" asChild w="100%" onClick={onClose} aria-label="Contact Us">
                    <a href={"#contact"} aria-label="Contact Us">Contact</a>
                  </Button>
                  <Button rounded={"full"} asChild w="100%" onClick={onClose} aria-label="Events">
                    <Link to="/events" aria-label="Events">Events</Link>
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerRoot>
        ),
        md: null
      }
      )}
    </Container>
  );
};

export default Navbar;