import { Box, Em, Heading } from '@chakra-ui/react';
import React from 'react';
import TrueFocus from '@/components/ui/TextFocus/textFocus';

const Motto: React.FC = () => {
    return (
        <Box>
            <Heading as="h2" size="3xl" color="white" mt={8} mb={4} >
                Our <Em>Motto</Em>
            </Heading>
            <TrueFocus
                sentence="COME CLICK CREATE"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={1}
            />
        </Box>
    );
};

export default Motto;