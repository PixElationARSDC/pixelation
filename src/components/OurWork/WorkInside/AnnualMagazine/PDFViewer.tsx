// components/PDFViewer/PDFViewer.tsx
import { Box, IconButton, Container } from '@chakra-ui/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PDFViewer = () => {
  const navigate = useNavigate();
  const pdfUrl = "/path-to-your-pdf.pdf"; 
  return (
    <Container maxW="container.xl" p={4}>
      <IconButton
        aria-label="Go back"
        icon={<ArrowLeft />}
        onClick={() => navigate(-1)}
        mb={4}
        variant="ghost"
        _hover={{ bg: 'gray.700' }}
      />
      
      <Box
        w="100%"
        h="calc(100vh - 100px)"
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
          title="Annual Magazine PDF Full View"
        />
      </Box>
    </Container>
  );
};

export default PDFViewer;