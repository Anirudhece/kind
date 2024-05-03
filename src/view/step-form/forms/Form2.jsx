import React, { useState } from "react";
import TopInfo from "../component/TopInfo";
import { Text, Box } from "@chakra-ui/react";
import { PiJoystickFill } from "react-icons/pi"; //1
import { FaGamepad } from "react-icons/fa6"; //2
import { IoGameController } from "react-icons/io5"; //3

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
export default Form2;
