import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeCounter } from "../../../redux/slices/counterSlice";

const Step = ({ stepNum, StepTitle }) => {
  const dispatch = useDispatch();
  const { currentFormNumber } = useSelector((state) => state.counter);

  const changeFormNumber = () => {
    currentFormNumber !== stepNum && dispatch(changeCounter({ stepNum }));
  };

  let activeCss = currentFormNumber === stepNum && { backgroundColor: "#c3ddfd", color: "black", borderColor: "#c3ddfd" };
  return (
    <Flex m={{ base: '1', md: '4' }} p={{ base: '1', md: '2' }} color="white">
      <Box onClick={changeFormNumber} border="1px" borderRadius="100%"
        sx={{
          cursor: "pointer", transition: "background-color 0.3s, color 0.3s, border 0.3s", ...activeCss
        }}
      >
        <Text pl="1.5" pr="1.5" m="3"> {stepNum + 1} </Text>
      </Box>
      <Flex alignItems="center">
        <Box ml="4">
          <Text display={{ base: 'none', md: 'block' }} fontSize="xs" color="#dadef9" sx={{ letterSpacing: "-1px" }}>
            STEP {stepNum + 1}
          </Text>
          <Text display={{ base: 'none', md: 'block' }} as="b" fontSize="lg" sx={{ letterSpacing: "1px" }}>
            {StepTitle}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Step;
