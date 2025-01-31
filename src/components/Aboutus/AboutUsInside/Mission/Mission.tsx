import { Box, Heading, Em } from '@chakra-ui/react';
import { Prose } from '@/components/ui/prose';

const Mission = () => {
    const missionText = `
        <p class="mission-text">
            To encourage the aspiring photographers and provide them with right exposure and creating environment for Photography and videography as a career option.
        </p>
    `;

    return (
        <Box>
            <Heading as="h2" size="2xl" color="white" mt={8} bg={"#000000"}>
                Our <Em>Mission</Em>
            </Heading>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia explicabo sed qui dolor debitis alias harum, sit at saepe quaerat voluptatum distinctio. Et id ut sunt omnis quo voluptatem ad.
            <Prose dangerouslySetInnerHTML={{ __html: missionText }} fontSize="xl" bg={"#000"}/>
        </Box>
    );
};

export default Mission;