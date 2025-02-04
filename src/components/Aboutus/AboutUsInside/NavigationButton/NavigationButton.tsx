import { Stack, Button } from '@chakra-ui/react';

const Links = [
  {
    name: 'Teachers and Convenor',
    href: 'https://jdfhjd',
  },
  {
    name: 'Members and Core Team',
    href: 'https://jdfhjd',
  },
];

const NavigationButtons = () => {
  return (
    <Stack direction={['column', 'row']}>
      {Links.map((link) => (
        <Button
          key={link.name}
          as="a"
          variant="outline"
          borderRadius="full"
          width={['100%', '250px']} // Responsive width
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => (window.location.href = link.href)}
        >
          {link.name}
        </Button>
      ))}
    </Stack>
  );
};

export default NavigationButtons;