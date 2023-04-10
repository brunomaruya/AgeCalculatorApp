'use client';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Container
        bg="neutral.offWhite"
        marginY="auto"
        p="20px"
        borderRadius="15px"
        borderEndEndRadius="50px"
      >
        <Box>
          <form>
            <Flex gap="20px" mr="50px">
              <FormControl>
                <FormLabel>DAY</FormLabel>
                <Input placeholder="DD" {...register('day')} />
              </FormControl>

              <FormControl>
                <FormLabel>MONTH</FormLabel>
                <Input placeholder="MM" {...register('month')} />
              </FormControl>

              <FormControl>
                <FormLabel>YEAR</FormLabel>
                <Input placeholder="YYYY" {...register('year')} />
              </FormControl>
            </Flex>
          </form>
        </Box>

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

        <Box>
          <Heading fontSize="5xl">
            <Text color="primary.purple" display="inline">
              --
            </Text>
            years
          </Heading>
          <Heading fontSize="5xl">
            <Text color="primary.purple" display="inline">
              --
            </Text>
            months
          </Heading>
          <Heading fontSize="5xl">
            <Text color="primary.purple" display="inline">
              --
            </Text>
            days
          </Heading>
        </Box>
      </Container>
    </>
  );
}
