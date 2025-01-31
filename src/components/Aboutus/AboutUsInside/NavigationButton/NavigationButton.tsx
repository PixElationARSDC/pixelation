import { Stack, Button } from '@chakra-ui/react';

const NavigationButtons = () => {
  return (
    <Stack direction={['column', 'row']} gap={8} mb={8} ml={12}>
      <Button
        variant="outline"
        borderRadius="full"
        borderWidth="2px"
        borderColor="gray.600"
        color="white"
        width={['100%', '200px']} // Responsive width
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
        width={['100%', '200px']} // Responsive width
        _hover={{ bg: 'whiteAlpha.200' }}
      >
        Members and Core Team
      </Button>
    </Stack>
  );
};

export default NavigationButtons;