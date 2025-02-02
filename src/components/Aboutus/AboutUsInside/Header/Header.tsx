import { Heading, Box , Em} from '@chakra-ui/react';

const Header = () => {
  return (
    <Box mb={8}>
      <Heading as="h1" fontSize="5xl" color="white" className='header-text'>
        About <Em>Us</Em>
      </Heading>
    </Box>
  );
};

export default Header;