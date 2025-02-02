import { Heading, Box , Em} from '@chakra-ui/react';

const Header = () => {
  return (
    <Box>
      <Heading as="h1" fontSize="4xl" color="white" className='header-text'>
        Our <Em>Work</Em>
      </Heading>
    </Box>
  );
};

export default Header;