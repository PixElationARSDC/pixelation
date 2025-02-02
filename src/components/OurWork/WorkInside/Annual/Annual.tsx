import { Box, Button,Em, Container, Heading } from '@chakra-ui/react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useState, useEffect } from 'react';

const AnnualMagazine = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.js',
      import.meta.url,
    ).toString();
  }, []);

  const pdfUrl = '/sample.pdf';

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const openPdfInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <Box bg="black" width="100%" py={{ base: 4, md: 6, lg: 8 }}>
      <Container maxW="container.lg">
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          color="white"
          mb={12}
        >
          Annual <Em>Magazine</Em>
        </Heading>

        <Box
          width="100%"
          height={{ base: "400px", md: "500px", lg: "600px" }}
          bg="white"
          overflowY="auto"
          borderRadius="md"
          mb={4}
          display="flex"
          justifyContent="center"
          ref={(ref: HTMLDivElement | null) => {
            if (ref) {
              setContainerWidth(ref.clientWidth * 0.9); 
            }
          }}
          css={{
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '5px',
            },
          }}
        >
          <Box
            width="90%" 
            height="100%"
            py={4}
          >
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <Box 
                  width="100%" 
                  height="100%" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  color="gray.600"
                >
                  Loading PDF...
                </Box>
              }
              error={
                <Box 
                  width="100%" 
                  height="100%" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  color="red.500"
                >
                  Error loading PDF. Please try again.
                </Box>
              }
            >
              {numPages && Array.from(
                new Array(numPages),
                (_, index) => (
                  <Box 
                    key={`page_${index + 1}`} 
                    mb={4}
                    width="100%"
                    display="flex"
                    justifyContent="center"
                  >
                    <Page
                      pageNumber={index + 1}
                      width={containerWidth}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      loading={
                        <Box 
                          width="100%" 
                          height="100%" 
                          minHeight="500px"
                          bg="white" 
                        />
                      }
                      
                      scale={0.9} 
                    />
                  </Box>
                )
              )}
            </Document>
          </Box>
        </Box>

        <Button
          width="10%"
          height={10}
          bg="red.500"
          color="white"
          size="lg"
          onClick={openPdfInNewTab}
          _hover={{ bg: 'red.600' }}
          borderRadius="lg"
        >
          View PDF
        </Button>
      </Container>
    </Box>
  );
};

export default AnnualMagazine;