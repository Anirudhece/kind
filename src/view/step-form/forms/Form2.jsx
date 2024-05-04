import React, { useState, useEffect } from "react";
import TopInfo from "../component/TopInfo";
import {
  Text,
  Box,
  Switch,
  Flex,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { PiJoystickFill } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";

const theme = extendTheme({
  components: {
    Switch: {
      baseStyle: {
        track: {
          backgroundColor: "blue.800",
        },
      },
    },
  },
});

const Form2 = ({ updatePlan, formValue }) => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const { type, frequency } = formValue.plan;
    const selectedIndex = data.findIndex((item) => item.title === type);
    setSelectedBox(selectedIndex);
    setIsYearly(frequency === "yearly");
  }, [formValue.plan]);

  const handleBoxClick = (index) => {
    setSelectedBox(index);
    const type = data[index].title;
    const price = data[index].price;
    const frequency = isYearly ? "yearly" : "monthly";
    updatePlan(type, price, frequency);
  };

  const handleSwitchChange = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
    const frequency = isYearly ? "monthly" : "yearly";
    const selectedPlan = data[selectedBox];
    updatePlan(selectedPlan.title, selectedPlan.price, frequency);
  };

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

  return (
    <ChakraProvider theme={theme}>
      <>
        <TopInfo
          main="Select your plan"
          sub="You have the option of monthly and yearly billing"
        />

        <Box
          display={{ base: "block", md: "flex" }}
          justifyContent="space-between"
        >
          {data.map((ele, ind) => (
            <Box
              mt={{ base: "4", md: "0" }}
              mb={{ base: "4", md: "0" }}
              key={ind}
              w={{ base: "100%", md: "30%" }}
              borderWidth="3px"
              borderRadius="lg"
              p={{ base: "1", md: "4" }}
              bg={selectedBox === ind && "green.50"}
              borderColor={selectedBox === ind && "blue.500"}
              onClick={() => handleBoxClick(ind)}
              _hover={{ cursor: "pointer" }}
              display={{ base: "flex", md: "block" }}
              alignItems="center"
            >
              <Box
                ml={{ base: "2", md: "0" }}
                mr={{ base: "6", md: "0" }}
                display="flex"
                mb={{ md: "12" }}
              >
                <Text
                  fontSize={{ base: "l", md: "2xl" }}
                  background={ele.iconBackground}
                  p="3"
                  color="white"
                  borderRadius="full"
                >
                  {ele.icon}
                </Text>
              </Box>
              <Box>
                <Text
                  color="blue.800"
                  fontSize={{ base: "md", md: "lg" }}
                  as="b"
                >
                  {ele.title}
                </Text>
                <Text
                  color="gray.500"
                  fontSize={{ base: "xs", md: "sm" }}
                  colorScheme="gray"
                >
                  ${ele.price}/mo
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
        <Flex
          alignItems="center"
          fontSize="md"
          as="b"
          mt="8"
          p="4"
          bg="blue.50"
          justifyContent="center"
        >
          <Text as="b" color={!isYearly ? "blue.800" : "gray.500 "} mr={2}>
            Monthly
          </Text>
          <Switch
            size="lg"
            pl="2"
            pr="2"
            onChange={() => handleSwitchChange()}
            isChecked={isYearly}
          />
          <Text as="b" color={isYearly ? "blue.800" : "gray.500 "} ml={2}>
            Yearly
          </Text>
        </Flex>
      </>
    </ChakraProvider>
  );
};

export default Form2;
