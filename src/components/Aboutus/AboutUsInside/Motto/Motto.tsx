import { Box, Heading, Flex, Text, Em } from '@chakra-ui/react';
import './Motto.css'

const Motto = () => {
  return (
    <Box p={0} className='motto' mt={8}>
      <Heading as="h2" size="2xl" color="white" mb={2}>
        Our <Em>Motto</Em>
      </Heading>
      <Flex justify="flex-start" gap={8} mt={2} mb={2}>
        <Text fontSize="3xl" color="white" className="motto-text">COME</Text>
        <Text fontSize="3xl" color="white" className="motto-text">CLICK</Text>
        <Text fontSize="3xl" color="white" className="motto-text">CREATE</Text>
      </Flex>
    </Box>
  );
};

export default Motto;