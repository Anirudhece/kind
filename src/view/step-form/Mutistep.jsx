import React, { useState, useEffect } from "react";
import { increment, decrement } from "../../redux/slices/counterSlice";
import { Box, Spacer, Button, Flex, VStack, useToast } from "@chakra-ui/react";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import Form3 from "./forms/Form3";
import Form4 from "./forms/Form4";

import { useDispatch, useSelector } from "react-redux";

const Multistep = () => {
  const toast = useToast();
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

  const updateAddOns = (arr) => {
    setFormValue({ ...formValue, addOns: arr });
  };

  const updatePlan = (type, price, frequency) => {
    setFormValue({ ...formValue, plan: { price, type, frequency } });
  };

  const updateYouinfo = (value, id) => {
    setFormValue({
      ...formValue,
      yourInfo: { ...formValue.yourInfo, [id]: value },
    });
  };

  // useEffect(() => {
  //   console.log(formValue);
  // }, [formValue.addOns]);

  const renderForm = [
    <Form1 formValue={formValue} updateYouinfo={updateYouinfo} />,
    <Form2 formValue={formValue} updatePlan={updatePlan} />,
    <Form3 formValue={formValue} updateAddOns={updateAddOns} />,
    <Form4 formValue={formValue} />,
  ];
  const dispatch = useDispatch();
  const { currentFormNumber } = useSelector((state) => state.counter);

  const setCounter = (type) => {
    dispatch(type === "decrement" ? decrement() : increment());
  };

  function validateForm(formValue) {
    const errors = {};
    if (!formValue.yourInfo.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formValue.yourInfo.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValue.yourInfo.email)) {
      errors.email = "Email is invalid";
    }
    if (!formValue.yourInfo.phone.trim()) {
      errors.phone = "Phone is required";
    }

    if (!formValue.plan.type.trim()) {
      errors.type = "Plan type is required";
    }
    if (formValue.plan.price <= 0) {
      errors.price = "Price must be greater than 0";
    }

    return errors;
  }

  const handleSubmit = () => {
    const errors = validateForm(formValue);
    if (Object.keys(errors).length === 0) {
      toast({
        title: "Done Successfully.",
        description: "you have availed the service",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "there is an error.",
        description: JSON.stringify(errors),
        status: "warning",
        duration: 9000,
        isClosable: true,
      });

      console.log(errors);
    }
  };

  return (
    <>
      <VStack bg={{base:'purple.50',md:'none'}} h={{ base: "85vh", md: "100vh" }}>
        <Box
         bg={{base:'white'}}
          w={{ base: "70%", md: "60%" }}
          mt={{ base: "2", md: "6" }}
          p={{base:'6'}}
          boxShadow={{ base: "lg",md:'none' }} // Adding boxShadow only for base size
        >
          {renderForm[currentFormNumber]}
        </Box>

        <Spacer />

        <Flex
          bg={{ base: "white" }}
          p={{ base: 2 }}
          w={{ base: "100%", md: "60%" }}
        >
          {currentFormNumber > 0 && (
            <Button
              size={{ base: "sm", md: "md" }}
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
              size={{ base: "sm", md: "md" }}
              bg="#463ef6"
              onClick={() => setCounter("increment")}
              colorScheme="facebook"
              variant="solid"
            >
              Next Step
            </Button>
          ) : (
            <Button
              size={{ base: "sm", md: "md" }}
              onClick={handleSubmit}
              bg="#463ef6"
              colorScheme="facebook"
              variant="solid"
            >
              Confirm
            </Button>
          )}
        </Flex>
      </VStack>
    </>
  );
};

export default Multistep;
