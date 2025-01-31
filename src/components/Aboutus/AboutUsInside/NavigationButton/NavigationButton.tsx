import { Stack, Button } from '@chakra-ui/react';

const NavigationButtons = () => {
  return (
    <Stack direction={['column', 'row']}>
      <Button
        variant="outline"
        borderRadius="full"
        width={['100%', '250px']} // Responsive width
        _hover={{ bg: 'whiteAlpha.200' }}
      >
        Teachers and Convenor
      </Button>
      <Button
        variant="outline"
        borderRadius="full"
        width={['100%', '250px']} // Responsive width
        _hover={{ bg: 'whiteAlpha.200' }}
      >
        Past Members and Core Team
      </Button>
    </Stack>
  );
};

export default NavigationButtons;