'use client';
import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';
import arrow from '../assets/images/icon-arrow.svg';

export default function Home() {
  return (
    <>
      <Container
        bg="neutral.offWhite"
        marginY="auto"
        p="20px"
        borderRadius="15px"
        borderEndEndRadius="50px"
      >
        <Box>a</Box>

        {/* DIVIDER */}
        <Box>
          <Flex alignItems="center" gap="10px">
            <Box w="100%" h="1px" bg="neutral.lightGrey"></Box>

            <Button
              bg="primary.purple"
              _hover={{ background: 'neutral.offBlack' }}
              h="50px"
              w="50px"
              borderRadius="50%"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 46 44"
              >
                <g fill="none" stroke="#FFF" stroke-width="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
              </svg>
            </Button>
          </Flex>
        </Box>

        <Box></Box>
      </Container>
    </>
  );
}
