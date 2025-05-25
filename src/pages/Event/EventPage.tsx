import React from 'react';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import { Helmet } from "react-helmet";
import Left from '@/components/Event/Left';
import Right from '@/components/Event/Right';
import { Events } from '@/data/data';

const EventPage: React.FC = () => {
    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "PixElation Events",
        "description": "PixElation presents exciting photography and videography events. Join us for Lens Eye, Chrono Tales, and Pixinema at ARSD College or online.",
        "url": "https://pixelation.live/events",
        "organizer": {
            "@type": "Organization",
            "name": "PixElation - Photography & Videography Society",
            "url": "https://pixelation.live",
            "email": "pixelation@arsd.du.ac.in"
        },
        "event": Events.map(event => ({
            "@type": "Event",
            "name": event.name,
            "location": {
                "@type": "Place",
                "name": event.location
            },
            "startDate": event.date !== "TBA" ? event.date : undefined,
            "description": event.agenda,
            "image": event.image,
            "offers": {
                "@type": "Offer",
                "price": event.price !== "TBA" ? event.price : "Free",
                "priceCurrency": "INR",
                "url": event.registrationurl
            },
            "organizer": {
                "@type": "Organization",
                "name": "PixElation",
                "email": event.eventmanageremail
            }
        }))
    };

    return (
        <>
            <Helmet>
                <title>PixElation Events | Photography & Filmmaking Competitions</title>
                <meta name="description" content="Join PixElation's upcoming photography and videography events at ARSD College and online. Participate in Lens Eye, Chrono Tales, and Pixinema!" />
                <meta name="keywords" content="photography, filmmaking, competitions, events, PixElation, ARSD College, Delhi University" />
                <meta name="author" content="PixElation - Photography & Videography Society" />
                <meta property="og:title" content="PixElation Events | Photography & Filmmaking Competitions" />
                <meta property="og:description" content="Join PixElation's upcoming photography and videography events at ARSD College and online. Participate in Lens Eye, Chrono Tales, and Pixinema!" />
                <meta property="og:image" content="https://pixelation.live/logo.avif" />
                <meta property="og:url" content="https://pixelation.live/events" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="PixElation Events | Photography & Filmmaking Competitions" />
                <meta name="twitter:description" content="Join PixElation's upcoming photography and videography events at ARSD College and online. Participate in Lens Eye, Chrono Tales, and Pixinema!" />
                <meta name="twitter:image" content="https://pixelation.live/logo.avif" />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLD)}
                </script>
            </Helmet>

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
