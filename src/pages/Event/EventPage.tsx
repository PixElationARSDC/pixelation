import React from 'react';
import './EventPage.css';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import Left from '@/components/Event/Left';
import Right from '@/components/Event/Right';

const EventPage: React.FC = () => {
    return (
        <div className='event-page'>
            <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
                <GridItem colSpan={{ base: 1, md: 2 }}>
                    <Left name='CONFERENCE' location='AUDITORIUM' date='04/05/25' time='OPENING 10AM' agenda='Lorem, ipsum dolor sit <b>amet consectetur</b> adipisicing elit. Cumque perspiciatis nisi temporibus sunt deleniti cum ipsum voluptas quisquam est, neque, nobis minus <b>impedit tempora!</b> Natus assumenda in <strong>laborum mollitia?</strong> Quos!' />
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 2 }} bg={"gray.800"}>
                    <Right details='Lorem, ipsum dolor sit <b>amet consectetur</b> adipisicing elit. Cumque perspiciatis nisi temporibus sunt deleniti cum ipsum voluptas quisquam est, neque, nobis minus <b>impedit tempora!</b> Natus assumenda in <strong>laborum mollitia?</strong> Quos!' price='PRICE 100Rs.' />
                </GridItem>
            </SimpleGrid>
        </div>
    );
};

export default EventPage;