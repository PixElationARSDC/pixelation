import { Box, Heading, Em } from '@chakra-ui/react';
import { Prose } from '@/components/ui/prose';

const Mission = () => {
    const missionText = `
            To encourage the aspiring photographers and provide them with right exposure and creating environment for Photography and Videography as a career option.
    `;

    return (
        <Box>
            <Heading as="h2" size="3xl" color="white" mt={8} mb={3}>
                Our <Em>Mission</Em>
            </Heading>
            <Prose dangerouslySetInnerHTML={{ __html: missionText }} fontSize="lg" />
        </Box>
    );
};

export default Mission;
