import React from 'react';
import { Button, Container, Em, Heading, IconButton, Text, Separator, Image, Link, Group } from '@chakra-ui/react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import './ContactUsPage.css';
import { FiYoutube, FiInstagram } from "react-icons/fi";

const ContactUsPage: React.FC = () => {
    const [year,] = React.useState(new Date().getFullYear());
    return (
        <div className='contactus-page' id='contact'>
            <Container bg="gray.800" maxW="container.xl" p={6} rounded="xl">
                <Heading size="4xl" textAlign={{ base: 'center', md: 'left' }}>
                    Contact <Em>Us</Em>
                </Heading>
                <Container display={{ base: 'block', md: 'flex' }} p={0} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={{ base: '3xl', md: '6xl' }} fontWeight="light" color="gray.300" mt={10} w={"full"} lineHeight={{ base: "1.4", md: "1.2" }} textAlign={{ base: 'center', md: 'left' }}>
                        Let's <b style={{ color: "white", fontWeight: "600" }}>discuss</b> your vision{' '}
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                verticalAlign: "middle",
                                gap: 0
                            }}
                        >
                            <Link href="mailto:pixelation@arsd.du.ac.in" target="_blank" gapX={0}>
                                <Button
                                    rounded="full"
                                    size={{base: "sm", md: "lg"}}
                                    px={6}
                                    fontSize={{base: "sm", md: "lg"}}
                                    bg="white"
                                    color="black"
                                    _hover={{ bg: "gray.300" }}
                                >
                                    LET'S TALK
                                </Button>
                                <IconButton rounded="full" size={{base: "sm", md: "lg"}} aria-label="Arrow Right"><ArrowUpRight /></IconButton>
                            </Link>
                        </span>{' '}
                        with us
                    </Text>
                    <Container display={"flex"} flexDirection={"column"} alignItems={{ base: "center", md: "end" }} p={0}>
                        <Text fontSize={{ base: "md", md: "lg"}} fontWeight="light" color="gray.300" mt={10} w={"full"} textAlign={{ base: 'center', md: 'right' }}>
                            PixElation<br />
                            Atma Ram Sanatan Dharma College<br />
                            Dhaula Kuan, New Delhi, 110021<br />
                            <Link href="mailto:pixelation@arsd.du.ac.in" target="_blank"
                            >
                                pixelation@arsd.du.ac.in
                            </Link>
                        </Text>
                        <Group gap={2} mt={2}>
                            <Link href="https://www.youtube.com/@PixElation_arsd" target="_blank" rel="noopener noreferrer">
                                <IconButton rounded={"full"}><FiYoutube /></IconButton>
                            </Link>
                            <Link href="https://www.instagram.com/pixelation.arsd/" target="_blank" rel="noopener noreferrer">
                                <IconButton rounded={"full"}><FiInstagram /></IconButton>
                            </Link>
                        </Group>
                    </Container>
                </Container>
                <Separator my={10} borderColor={'gray.300'} size={"md"} rounded={"full"} />
                <Container display={{ base: 'block', md: 'flex' }} p={0} justifyContent={"space-between"} alignItems={"center"}>
                    <Group justifyContent={{ base: 'center', md: 'flex-start' }} mb={{ base: 4, md: 0 }} w={"full"}>
                        <Link href='/' _focus={{ outline: 'none' }}>
                            <Image src='/logo.png' alt='logo' height='50px' />
                        </Link>
                        <Link href='https://arsdcollege.ac.in' _focus={{ outline: 'none' }} target='_blank'>
                            <Image src='/logoarsd.png' alt='logo' height='50px' />
                        </Link>
                    </Group>

                    <Text fontSize="sm" fontWeight="light" color="gray.300" w={{ base: '100%', md: '50%' }} textAlign={"center"}>
                        @{year} PixElation. All rights reserved.
                    </Text>
                    <IconButton
                        rounded="full"
                        aria-label="Arrow Up"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        mt={{ base: 4, md: 0 }}
                        position={{ base: 'fixed', md: 'static' }}
                        bottom={4}
                        right={4}
                    >
                        <ArrowUp />
                    </IconButton>
                </Container>
            </Container>
        </div>
    );
};

export default ContactUsPage;
