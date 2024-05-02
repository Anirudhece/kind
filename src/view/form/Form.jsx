import React from "react";
import {
  Heading,
  Text,
  Box,
  Spacer,
  Button,
  Flex,
  VStack,
  HStack,
} from "@chakra-ui/react";

const TopInfo = ({ main, sub }) => {
  return (
    <>
      <Box>
        <Heading color="blue.900" as="b" w="100%" mb="2%">
          {main}
        </Heading>
        <Text color="gray.400" mt="2 ">
          {sub}
        </Text>
      </Box>
    </>
  );
};

const Form1 = () => {
  return (
    <>
      <TopInfo
        main=" Personal info"
        sub=" Please provide your name, email address and phone number."
      />
    </>
  );
};

const Multistep = () => {
  return (
    <>
      <VStack h="100vh">
        <Box w="60%" mt="6">
          <Form1 />
        </Box>

        <Spacer />

        <Flex mb="10" w="60%">
          <Button size='lg' color='gray.500' variant='ghost' colorScheme='gray' >Go Back</Button>
          <Spacer />
          <Button size='lg' bg='blue.900' colorScheme="facebook" variant='solid' >Next</Button>
        </Flex>
      </VStack>
    </>
  );
};

export default Multistep;
