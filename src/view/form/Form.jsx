import React from "react";
import {
  Heading,
  Text,
  Box,
  Spacer,
  Button,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
} from "@chakra-ui/react";

const TopInfo = ({ main, sub }) => {
  return (
    <>
      <Box mb="10">
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
      <Box color="blue.800">
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" placeholder="e.g. Stephen King" />
        </FormControl>

        <FormControl mt="6">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            type="email"
          />
        </FormControl>

        <FormControl mt="6">
          <FormLabel htmlFor="phone" mt="2%">
            Phone Number
          </FormLabel>
          <Input id="phone" type="number" placeholder="e.g. +1 234 567 890" />
        </FormControl>
      </Box>
    </>
  );
};

const Form2 = () => {
  const addOns = [
    {
      title: "Online Service",
      description: "access to multiplayer games",
      price: 1,
    },
    {
      title: "Larger storage",
      description: "extra 1TB of cloud save",
      price: 2,
    },
    {
      title: "Customizable profile",
      description: "custom theme on your profile",
      price: 2,
    },
  ];
  return (
    <>
      <TopInfo
        main="Select your plan"
        sub="You have the option for monthly and yearly billing."
      />
      <VStack>
        <Flex
          p="4"
          alignItems="center"
          borderWidth="1px"
          borderRadius="lg"
          w="full"
        >
          <Flex>
            <Checkbox  m="2" />
            <Box m="4">
              <Text>Online Service</Text>
              <Text>access to multiplayer games</Text>
            </Box>
          </Flex>
          <Spacer />
          <Text m="2">+$1/mo</Text>
        </Flex>
      </VStack>
    </>
  );
};

const Multistep = () => {
  return (
    <>
      <VStack h="100vh">
        <Box w="60%" mt="6">
          {/* <Form1 /> */}
          <Form2 />
        </Box>

        <Spacer />

        <Flex mb="10" w="60%">
          <Button size="lg" color="gray.500" variant="ghost" colorScheme="gray">
            Go Back
          </Button>
          <Spacer />
          <Button
            size="lg"
            bg="blue.900"
            colorScheme="facebook"
            variant="solid"
          >
            Next
          </Button>
        </Flex>
      </VStack>
    </>
  );
};

export default Multistep;
