import React from 'react';
import './HeroText.css';
import { Group, Heading, IconButton, VStack } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';

interface HeroTextProps {
    text: string;
    subtext1: string;
    subtext2: string;
}

const HeroText: React.FC<HeroTextProps> = ({ text, subtext1, subtext2 }) => {
    return (
        <VStack align="start">
            <Heading size="7xl">{text}</Heading>
            <Heading size="md">{subtext1}</Heading>
            <Group>
                <Heading size="md">{subtext2}</Heading>
                <IconButton size="xs" rounded="full">
                    <ArrowRight />
                </IconButton>
            </Group>
        </VStack>  
    );
};

export default HeroText;