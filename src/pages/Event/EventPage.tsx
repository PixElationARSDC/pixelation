import React from 'react';
import { GridItem, SimpleGrid, Box } from '@chakra-ui/react';
import Left from '@/components/Event/Left';
import Right from '@/components/Event/Right';

const EventPage: React.FC = () => {
    return (
        <div className='section2'>
            {/* First Event */}
            <Box width="full">
                <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                        <Left name='WORKSHOP' location='SEM HALL 1' date='31/01/25' time='STARTING 11:30 AM' agenda="An an <b>immersive learning experience</b> designed to guide you through the intricacies of filmmaking, from conceptualizing ideas to crafting visually stunning narratives." />
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 2 }} bg="gray.800">
                        <Right details="Join us on <b>31st January</b> at <b>12:00 PM</b> in <b>Seminar Hall 1, ARSD College</b>, for an exciting and creative experience. There are <b>no entry fees</b>, so come, create, and explore the world of photography with us. Don't miss this opportunity to enhance your skills and engage with like-minded individuals." price='FREE AND OPEN TO ALL' />
                    </GridItem>
                </SimpleGrid>
            </Box>

            {/* Spacer to separate both events */}
            <Box height="50px" />

            {/* Second Event (Below the First One) */}
            <Box width="full">
                <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                        <Left name='WORKSHOP' location='SEM HALL 1' date='31/01/25' time='STARTING 11:30 AM' agenda="An an <b>immersive learning experience</b> designed to guide you through the intricacies of filmmaking, from conceptualizing ideas to crafting visually stunning narratives." />
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 2 }} bg="gray.800">
                        <Right details="Join us on <b>31st January</b> at <b>12:00 PM</b> in <b>Seminar Hall 1, ARSD College</b>, for an exciting and creative experience. There are <b>no entry fees</b>, so come, create, and explore the world of photography with us. Don't miss this opportunity to enhance your skills and engage with like-minded individuals." price='FREE AND OPEN TO ALL' />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </div>
    );
};

export default EventPage;
