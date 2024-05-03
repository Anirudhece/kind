import React, { useState } from "react";
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
  Stack,
} from "@chakra-ui/react";

import { PiJoystickFill } from "react-icons/pi"; //1
import { FaGamepad } from "react-icons/fa6"; //2
import { IoGameController } from "react-icons/io5"; //3

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
  const [selectedBox, setSelectedBox] = useState(null);

  const data = [
    {
      icon: <PiJoystickFill />,
      title: "Arcade",
      price: "9",
      iconBackground: "#eeb488",
    },
    {
      icon: <FaGamepad />,
      title: "Advanced",
      price: "12",
      iconBackground: "#e98690",
    },
    {
      icon: <IoGameController />,
      title: "Pro",
      price: "15",
      iconBackground: "#433cf4",
    },
  ];

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  return (
    <>
      <TopInfo
        main="Select your plan"
        sub="You have the option of monthly and yearly billing"
      />

      <Box display="flex" justifyContent="space-between">
        {data.map((ele, ind) => (
          <Box
            key={ind}
            w="30%"
            borderWidth="3px"
            borderRadius="lg"
            p="4"
            bg={selectedBox === ind && "purple.50"}
            borderColor={selectedBox === ind && "blue.500"} 
            onClick={() => handleBoxClick(ind)}
            _hover={{ cursor: "pointer" }} 
          >
            <Box display="flex" mb="12">
              <Text
                fontSize="2xl"
                background={ele.iconBackground}
                p="3"
                color="white"
                borderRadius="full"
              >
                {ele.icon}
              </Text>
            </Box>
            <Text color="blue.800" fontSize="lg" as="b">
              {ele.title}
            </Text>
            <Text color="gray.500" fontSize="sm" colorScheme="gray">
              ${ele.price}/mo
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

const Form3 = () => {
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

  // State to manage checked status of checkboxes
  const [checkedItems, setCheckedItems] = useState({});

  // Function to handle checkbox state change
  const handleCheckboxChange = (index) => {
    setCheckedItems({
      ...checkedItems,
      [index]: !checkedItems[index],
    });
  };

  return (
    <>
      <TopInfo
        main="Select your plan"
        sub="You have the option for monthly and yearly billing."
      />
      <VStack>
        {addOns.map((ele, ind) => (
          <Flex
            key={ind}
            p="2"
            alignItems="center"
            borderWidth="1px"
            borderRadius="lg"
            w="full"
            borderColor={checkedItems[ind] ? "blue.600" : "gray.200"} // Conditionally set border color
          >
            <Flex>
              <Checkbox
                border="gray"
                m="2"
                isChecked={checkedItems[ind]}
                onChange={() => handleCheckboxChange(ind)}
              />
              <Box mb="2" mt="2" mr="4" ml="4">
                <Text color="blue.800" fontSize="lg" as="b">
                  {ele.title}
                </Text>
                <Text color="gray.500">{ele.description}</Text>
              </Box>
            </Flex>
            <Spacer />
            <Text color="blue.600" m="2">
              +${ele.price}/mo
            </Text>
          </Flex>
        ))}
      </VStack>
    </>
  );
};

const Form4= ()=>{
  return(
    <>
      <TopInfo main='Finishing up' sub='Double check everything looks OK before confirming.' />
    </>
  )
}


const Multistep = () => {
  return (
    <>
      <VStack h="100vh">
        <Box w="60%" mt="6">
          {/* <Form1 /> */}
          {/* <Form2 /> */}
          {/* <Form3 /> */}
          <Form4/>
        </Box>

        <Spacer />

        <Flex mb="10" w="60%">
          <Button color="gray.500" variant="ghost" colorScheme="gray">
            Go Back
          </Button>
          <Spacer />
          <Button bg="blue.900" colorScheme="facebook" variant="solid">
            Next Step
          </Button>
        </Flex>
      </VStack>
    </>
  );
};

export default Multistep;
