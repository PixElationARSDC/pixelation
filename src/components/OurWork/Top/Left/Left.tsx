import { Prose } from "@/components/ui/prose";
import { Em, Heading, VStack } from "@chakra-ui/react";
import React from "react";

interface LeftProps {
  text: string;
}

const Left: React.FC<LeftProps> = ({ text }) => {
  const Html = String.raw;

  const content = Html`${text}`;

  return (
    <VStack align={"start"}>
      <Heading size={"4xl"}>
        Our <Em>Work</Em>
      </Heading>
      <Prose
        dangerouslySetInnerHTML={{ __html: content }}
        fontSize={"4xl"}
        color={"gray.300"}
        lineHeight={"shorter"}
        letterSpacing={"wide"}
        mt={10}
      />
    </VStack>
  );
};

export default Left;
