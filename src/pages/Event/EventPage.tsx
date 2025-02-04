import React from 'react';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import Left from '@/components/Event/Left';
import Right from '@/components/Event/Right';

const Events = [
    {
        name: "LENS EYE",
        location: "ARSD CAMPUS",
        date: "24/02/25",
        time: "STARTING 10:00 AM",
        agenda: "In this fast-paced competition, shutterbugs demonstrate their prowess in capturing the essence of fleeting moments. Participants roamed the campus, capturing scenes that resonated with the event's theme, showcasing their keen eye for detail and composition.",
        details: "Join us on <b>24th February</b> at <b>10:00 AM</b> in <b>ARSD Campus</b> for an exhilarating on-spot photography competition. Test your skills, creativity, and quick thinking to craft stunning visual stories on the go.",
        price: "TBA",
        image: "https://picsum.photos/id/15/500/800",
        registrationurl: "https://forms.gle/k3oGCQMXjWDDxm7YA",
        eventmanageremail: "pixelation@arsd.du.ac.in"
    },
    {
        name: "CHRONO TALES",
        location: "ONLINE",
        date: "TBA",
        time: "TBA",
        agenda: "Chrono Tales provides a virtual canvas for participants to weave captivating narratives through the lens of photography. Through an online platform, students unleashed their creativity, capturing moments and emotions to craft visually stunning photostories.",
        details: "Participate in <b>Chrono Tales</b>, our online photostory competition, and let your creativity shine. Capture moments, tell stories, and showcase your vision in a stunning visual format.",
        price: "TBA",
        image: "https://picsum.photos/id/16/500/800",
        registrationurl: "https://forms.gle/vUb4sEGQvy9MPYKh8",
        eventmanageremail: "pixelation@arsd.du.ac.in"
    },
    {
        name: "PIXINEMA",
        location: "ARSD CAMPUS",
        date: "25/02/25",
        time: "STARTING 11:00 AM",
        agenda: "Pixinema sparkes creativity and camaraderie among participants who crafted compelling short films on the spot. Teams of budding filmmakers showcased their storytelling prowess under pressure, resulting in a display of remarkable ingenuity and teamwork.",
        details: "Join us on <b>25th February</b> at <b>11:00 AM</b> in <b>ARSD Campus</b> for Pixinema, an exciting on-spot filmmaking challenge. Work with your team to create short films under time constraints and showcase your storytelling skills.",
        price: "TBA",
        image: "https://picsum.photos/id/17/500/800",
        registrationurl: "https://forms.gle/iihjrV5MqutRNuNe7",
        eventmanageremail: "pixelation@arsd.du.ac.in"
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
