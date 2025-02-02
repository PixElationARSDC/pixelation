import { Heading, Box , Em} from '@chakra-ui/react';

const Header = () => {
  return (
    <Box mx={12} my={6}>
      <Heading as="h1" fontSize="5xl" mb={12} color="white" className='header-text'>
        Our <Em>Work</Em>
      </Heading>
    </Box>
  );
};

export default Header;