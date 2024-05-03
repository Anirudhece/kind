import React, { useState } from "react";
import TopInfo from "../component/TopInfo";
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
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
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

export default Form3;
