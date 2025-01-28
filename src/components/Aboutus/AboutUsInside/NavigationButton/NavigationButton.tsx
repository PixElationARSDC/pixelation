import { Stack, Button } from '@chakra-ui/react';

const NavigationButtons = () => {
  return (
    <Stack direction={['column', 'row']} gap={8} mb={8} m={4} mt={0}>
      <Button
        variant="outline"
        borderRadius="full"
        borderWidth="2px"
        borderColor="gray.600"
        color="white"
        width={['100%', '250px']} // Responsive width
        _hover={{ bg: 'whiteAlpha.200' }}
      >
        Teachers and Convenor
      </Button>
      <Button
        variant="outline"
        borderRadius="full"
        borderWidth="2px"
        borderColor="gray.600"
        color="white"
        width={['100%', '250px']} // Responsive width
        _hover={{ bg: 'whiteAlpha.200' }}
      >
        Past Members and Core Team
      </Button>
    </Stack>
  );
};

export default NavigationButtons;