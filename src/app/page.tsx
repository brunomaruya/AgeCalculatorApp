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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useState } from 'react';

const schema = yup.object().shape({
  day: yup.number().integer().positive().required(),
  month: yup.number().integer().positive().required(),
  year: yup.number().integer().positive().required(),
});

interface IResultDate {
  years: number;
  months: number;
  days: number;
}

export default function Home() {
  const [resultDate, setResultDate] = useState<IResultDate>();
  const [currDate, setCurrDate] = useState();

  const calculateAge = (currDate, inputDate) => {
    const diff = currDate - inputDate;
    return diff;
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((data) => {
    const currDate = new Date();
    const inputDate = new Date(data.year, data.month, data.day);
    const result = calculateAge(currDate, inputDate);
    console.log('-----');
    console.log(currDate);
    console.log(inputDate);

    const numberOfDays = result / (1000 * 3600 * 24);

    const years = Math.floor(numberOfDays / 365);
    const months = Math.floor((numberOfDays % 365) / 31);
    const days = Math.floor((numberOfDays % 365) % 31);

    console.log(`years: ${years} months: ${months} days: ${days}`);
    setResultDate({ years: years, months: months, days: days });
  }, []);

  useEffect(() => {
    const newD = new Date();
    setCurrDate(newD);
    console.log('useEffect');
    console.log(currDate);
  }, [onSubmit]);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap="20px" mr="50px">
              <FormControl>
                <FormLabel>DAY</FormLabel>
                <Input
                  placeholder="DD"
                  {...register('day')}
                  defaultValue="04"
                />
                {errors.day && <p>{errors.day?.message?.toString()}</p>}
              </FormControl>

              <FormControl>
                <FormLabel>MONTH</FormLabel>
                <Input
                  placeholder="MM"
                  {...register('month')}
                  defaultValue="09"
                />
                {errors.day && <p>{errors.month?.message?.toString()}</p>}
              </FormControl>

              <FormControl>
                <FormLabel>YEAR</FormLabel>
                <Input
                  placeholder="YYYY"
                  {...register('year')}
                  defaultValue="2002"
                />
                {errors.day && <p>{errors.year?.message?.toString()}</p>}
              </FormControl>
            </Flex>

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
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 46 44"
                  >
                    <g fill="none" stroke="#FFF" strokeWidth="2">
                      <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                    </g>
                  </svg>
                </Button>
              </Flex>
            </Box>
          </form>
        </Box>

        <Box>
          <Heading fontSize="5xl">
            <Text color="primary.purple" display="inline">
              {resultDate ? resultDate.years : '--'}
            </Text>
            &nbsp;years
          </Heading>
          <Heading fontSize="5xl">
            <Text color="primary.purple" display="inline">
              {resultDate ? resultDate.months : '--'}
            </Text>
            &nbsp;months
          </Heading>
          <Heading fontSize="5xl">
            <Text color="primary.purple" display="inline">
              {resultDate ? resultDate.days : '--'}
            </Text>
            &nbsp;days
          </Heading>
        </Box>
      </Container>
    </>
  );
}
