import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Step = ({ stepNum, StepTitle, active }) => {
  let activeCss = active === stepNum && {
    backgroundColor: "#c3ddfd",
    color: "black",
    border: "0",
  };
  return (
    <Flex m="4" p="2" color="white">
      <Box
        border="1px"
        borderRadius="100%"
        sx={{ cursor: "pointer", ...activeCss }}
      >
        <Text pl="1.5" pr="1.5" m="3">
          {stepNum + 1}
        </Text>
      </Box>
      <Flex alignItems="center">
        <Box ml="4">
          <Text fontSize="xs" color="#dadef9" sx={{ letterSpacing: "-1px" }}>
            STEP {stepNum + 1}
          </Text>
          <Text as="b" fontSize="lg" sx={{ letterSpacing: "1px" }}>
            {StepTitle}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Step;
