import React from 'react';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import Left from '@/components/Event/Left';
import Right from '@/components/Event/Right';

const Events = [
    {
        name: "FILMCRAFT",
        location: "SEM HALL 1",
        date: "31/01/25",
        time: "STARTING 11:30 AM",
        agenda: "An an <b>immersive learning experience</b> designed to guide you through the intricacies of filmmaking, from conceptualizing ideas to crafting visually stunning narratives.",
        details: "Join us on <b>31st January</b> at <b>12:00 PM</b> in <b>Seminar Hall 1, ARSD College</b>, for an exciting and creative experience. There are <b>no entry fees</b>, so come, create, and explore the world of photography with us. Don't miss this opportunity to enhance your skills and engage with like-minded individuals.",
        price: "FREE AND OPEN TO ALL",
        image: "https://picsum.photos/id/15/500/800",
        registrationurl: "https://www.google.com",
        eventmanageremail: "example@example.com"
    },
    {
        name: "PHOTOQUEST",
        location: "AUDITORIUM",
        date: "01/02/25",
        time: "STARTING 10:00 AM",
        agenda: "Showcase your photography skills and compete with fellow enthusiasts in a thrilling contest.",
        details: "Participate in our <b>Photography Contest</b> on <b>1st February</b> at <b>10:00 AM</b> in the <b>Auditorium</b>. Capture stunning moments and stand a chance to win exciting prizes. Entry is <b>free</b> for all participants.",
        price: "FREE ENTRY",
        image: "https://picsum.photos/id/16/500/800",
        registrationurl: "https://www.google.com",
        eventmanageremail: "example@example.com"
    },
    {
        name: "SCREENFEST",
        location: "SEMINAR HALL 2",
        date: "02/02/25",
        time: "STARTING 2:00 PM",
        agenda: "Enjoy a curated selection of short films from emerging filmmakers.",
        details: "Join us for a <b>Film Screening</b> on <b>2nd February</b> at <b>2:00 PM</b> in <b>Seminar Hall 2</b>. Experience a variety of short films and engage in discussions with the filmmakers. The event is <b>free</b> and open to all.",
        price: "PRICE 100RS",
        image: "https://picsum.photos/id/17/500/800",
        registrationurl: "https://www.google.com",
        eventmanageremail: "example@example.com"
    }
];

const EventPage: React.FC = () => {
    return (
        <>
            {Events.map((event, index) => (
                <div className='section2' style={{ flexDirection: 'column', justifyContent: "center" }} key={index}>
                    <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
                        <GridItem colSpan={{ base: 1, md: 2 }}>
                            <Left name={event.name} location={event.location} date={event.date} time={event.time} agenda={event.agenda} image={event.image} eventmanageremail={event.eventmanageremail} />
                        </GridItem>
                        <GridItem colSpan={{ base: 1, md: 2 }} bg={"gray.800"}>
                            <Right details={event.details} price={event.price} registrationurl={event.registrationurl} />
                        </GridItem>
                    </SimpleGrid>
                </div>
            ))}
        </>
    );
};

export default EventPage;
