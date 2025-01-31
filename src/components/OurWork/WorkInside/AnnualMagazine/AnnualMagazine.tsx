// components/OurWork/AnnualMagazine.tsx
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AnnualMagazine = () => {
  const pdfUrl = "/path-to-your-pdf.pdf";
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Annual Magazine
      </Text>
      <VStack gap={4}>
        <Box
          w="100%"
          h="400px" 
          borderRadius="md"
          overflow="hidden"
          border="1px solid"
          borderColor="gray.600"
        >
          <iframe
            src={`${pdfUrl}#view=FitH`}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Annual Magazine PDF"
          />
        </Box>
        
        <Link to="/view-pdf" style={{ width: '100%' }}>
          <Button
            colorScheme="blue"
            width="100%"
            size="lg"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            transition="all 0.2s"
          >
            View Full PDF
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default AnnualMagazine;