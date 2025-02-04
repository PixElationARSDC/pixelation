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
        <ChakraLink href='/' _focus={{ outline: 'none' }}>
          <Image src='/logo.png' alt='logo' height='50px' />
        </ChakraLink>
        <ChakraLink href='https://arsdcollege.ac.in' _focus={{ outline: 'none' }} target='_blank'>
          <Image src='/logoarsd.png' alt='logo' height='50px' />
        </ChakraLink>
      </Group>

      {/* Desktop Menu */}
      {useBreakpointValue({
        base: null,
        md: (
          <Group attached>
            <Button rounded='full'>Home</Button>
            <Button asChild><a href={"#aboutus"}>About</a></Button>
            <Button asChild><a href={"#ourwork"}>Our Work</a></Button>
            <Button asChild><a href={"#ourteam"}>Our Team</a></Button>
            <Button asChild rounded='full'><a href={"#contact"}>Contact</a></Button>
          </Group>
        )
      })}

      {/* Events Button - Desktop */}
      {useBreakpointValue({
        base: null,
        md: (
          <Group attached>
            <Link to={"/events"}>
              <Group gap={0}>
                <Button rounded='full' px={7} tabIndex={-1}>Events</Button>
                <IconButton rounded='full' tabIndex={-1}>
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
            variant={"subtle"}
            rounded='full'
            onClick={onOpen}
            aria-label="Open Menu"
            position="fixed"
            top="1.5rem"
            right="1.5rem"
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
                  <Button asChild w="100%" onClick={onClose}><a href={"#"}>Home</a></Button>
                  <Button asChild w="100%" onClick={onClose}><a href={"#aboutus"}>About</a></Button>
                  <Button asChild w="100%" onClick={onClose}><a href={"#ourwork"}>Our Work</a></Button>
                  <Button asChild w="100%" onClick={onClose}><a href={"#ourteam"}>Our Team</a></Button>
                  <Button asChild w="100%" onClick={onClose}><a href={"#contact"}>Contact</a></Button>
                  <Button asChild w="100%" onClick={onClose}>
                    <Link to="/events">Events</Link>
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