import { Box, Heading } from '@chakra-ui/react';
import { Prose } from '@/components/ui/prose';
import './Mission.css'; 

const Mission = () => {
    const missionText = `
        <p class="mission-text">
            To encourage the aspiring photographers and provide them with right exposure and creating environment for Photography and videography as a career option.
        </p>
    `;

    return (
        <Box mb={8} className='mission'>
            <Heading as="h2" size="2xl" color="white" mt={8} mb={0} className="mission-heading">
            Our Mission
            </Heading>
            <Prose dangerouslySetInnerHTML={{ __html: missionText }} color="white" fontSize="xl" mr={6} />
        </Box>
    );
};

export default Mission;