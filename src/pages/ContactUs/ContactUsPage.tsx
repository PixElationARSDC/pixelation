import React from 'react';
import { Button, Container, Em, Heading, IconButton, Text, Box, Separator, Image, HStack, Link } from '@chakra-ui/react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import './ContactUsPage.css'

const ContactUsPage: React.FC = () => {
    const [year,] = React.useState(new Date().getFullYear());
    return (
        <div className='contactus-page' id='contact'>
            <Container bg="#373733" maxW="container.xl" p={6} rounded="xl">
                <Heading size="4xl" textAlign={{ base: 'center', md: 'left' }}>
                    Contact <Em>Us</Em>
                </Heading>
                <Container display={{ base: 'block', md: 'flex' }} p={0} justifyContent={"space-between"} alignItems={"center"}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems={{ base: "center", md: "flex-start" }}
                        mt={{ base: 8, md: 6 }}
                        w={{ base: "100%", md: "50%" }}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        <Text
                            fontSize={{ base: "2xl", md: "4xl" }}
                            fontWeight="medium"
                            color="gray.300"
                            lineHeight={{ base: "1.3", md: "1.5" }}
                        >
                            <Text as="span" color="white" fontWeight="bold">
                                Discuss
                            </Text>{" "}
                            your vision with us
                        </Text>

                        <Link href="mailto:pixelation@arsd.du.ac.in" target="_blank" mt={6} gapX={0}>
                            <Button
                                rounded="full"
                                size="lg"
                                px={6}
                                fontSize="lg"
                                bg="white"
                                color="black"
                                _hover={{ bg: "gray.300" }}
                            >
                                LET'S TALK
                            </Button>
                            <IconButton rounded='full' tabIndex={-1}>
                                <ArrowUpRight />
                            </IconButton>
                        </Link>
                    </Box>

                    <Text fontSize="lg" fontWeight="light" color="gray.300" mt={10} w={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'right' }}>
                        PixElation<br />
                        Atma Ram Sanatan Dharma College<br />
                        Dhaula Kuan, New Delhi, 110021<br />
                        <Link href="mailto:pixelation@arsd.du.ac.in" target="_blank"
                        // _hover={{ textDecoration: 'none' }}  // if you want to remove the underline on hover
                        >
                            pixelation@arsd.du.ac.in
                        </Link>
                    </Text>
                </Container>
                <Separator my={10} borderColor={'gray.300'} size={"md"} rounded={"full"} />
                <Container display={{ base: 'block', md: 'flex' }} p={0} justifyContent={"space-between"} alignItems={"center"}>
                    <HStack justifyContent={{ base: 'center', md: 'flex-start' }} mb={{ base: 4, md: 0 }}>
                        <Image src='/logo.png' alt='logo' height='40px' />
                        <Image src='/logoarsd.png' alt='logo' height='40px' />
                    </HStack>
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
