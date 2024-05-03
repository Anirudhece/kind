import React, { useState, useEffect } from "react";
import { increment, decrement } from "../../redux/slices/counterSlice";
import { Box, Spacer, Button, Flex, VStack } from "@chakra-ui/react";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import Form3 from "./forms/Form3";
import Form4 from "./forms/Form4";

import { useDispatch, useSelector } from "react-redux";

const Multistep = () => {
  const dummy = {
    yourInfo: {
      name: "",
      email: "",
      phone: "",
    },
    plan: {
      type: "",
      frequency: "monthly",
      price: 0,
    },
    addOns: [{ title: "", price: 0 }],
  };
  const [formValue, setFormValue] = useState({ ...dummy });
  
  const updateAddOns=(arr)=>{
    setFormValue({...formValue,addOns:arr})
  }

  const updatePlan = (type, price, frequency) => {
    setFormValue({ ...formValue, plan: { price, type, frequency } });
  };

  const updateYouinfo = (value, id) => {
    setFormValue({
      ...formValue,
      yourInfo: { ...formValue.yourInfo, [id]: value },
    });
  };


  useEffect(() => {
    console.log(formValue);
  }, [formValue.addOns]);

  const renderForm = [
    <Form1 formValue={formValue} updateYouinfo={updateYouinfo} />,
    <Form2 formValue={formValue} updatePlan={updatePlan} />,
    <Form3 formValue={formValue} updateAddOns={updateAddOns}/>,
    <Form4 />,
  ];
  const dispatch = useDispatch();
  const { currentFormNumber } = useSelector((state) => state.counter);

  const setCounter = (type) => {
    dispatch(type === "decrement" ? decrement() : increment());
  };

  return (
    <>
      <VStack h="100vh">
        <Box w="60%" mt="6">
          {renderForm[currentFormNumber]}
        </Box>

        <Spacer />

        <Flex mb="10" w="60%">
          {currentFormNumber > 0 && (
            <Button
              onClick={() => setCounter("decrement")}
              color="gray.500"
              variant="ghost"
              colorScheme="gray"
            >
              Go Back
            </Button>
          )}
          <Spacer />
          {currentFormNumber < 3 ? (
            <Button
              bg="#463ef6"
              onClick={() => setCounter("increment")}
              colorScheme="facebook"
              variant="solid"
            >
              Next Step
            </Button>
          ) : (
            <Button bg="#463ef6" colorScheme="facebook" variant="solid">
              Confirm
            </Button>
          )}
        </Flex>
      </VStack>
    </>
  );
};

export default Multistep;
