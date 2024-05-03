import React, { useState } from "react";
import TopInfo from "../component/TopInfo";
import { Text, Box, Switch, Flex, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { PiJoystickFill } from "react-icons/pi"; //1
import { FaGamepad } from "react-icons/fa6"; //2
import { IoGameController } from "react-icons/io5"; //3

// Extend the theme to customize the Switch component
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
    <ChakraProvider theme={theme}>
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
              bg={selectedBox === ind && "green.50"}
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
        <Flex
          alignItems="center"
          color="blue.800"
          fontSize="md"
          as="b"
          mt="8"
          p="4"
          bg="blue.50"
          justifyContent="center"
        >
          <Text>Monthly</Text>
          <Switch size="lg" pl="2" pr="2" />
          <Text>Yearly</Text>
        </Flex>
      </>
    </ChakraProvider>
  );
};
export default Form2;
