import React, { useEffect } from "react";
import TopInfo from "../component/TopInfo";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateYourInfo } from "../../../redux/slices/formStateSlice";

const Form1 = ({ formValue, updateYouinfo }) => {
  // const dispatch = useDispatch();

  // const { formState } = useSelector((state) => state.formData);
  // const { name, email, phone } = formState;

  const handleInputChange = (e) => {
    const { value, id } = e.target;
    dispatch(updateYourInfo({ value, id }));
    updateYouinfo(value, id);
  };

  return (
    <>
      <TopInfo
        main=" Personal info"
        sub=" Please provide your name, email address and phone number."
      />
      <Box color="blue.800">
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            // value={name}
            value={formValue.yourInfo.name}
            onChange={handleInputChange}
            id="name"
            placeholder="e.g. Stephen King"
          />
        </FormControl>

        <FormControl mt="6">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            // value={email}
            value={formValue.yourInfo.email}
            onChange={handleInputChange}
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
          />
        </FormControl>

        <FormControl mt="6">
          <FormLabel htmlFor="phone" mt="2%">
            Phone Number
          </FormLabel>
          <Input
            // value={phone}
            value={formValue.yourInfo.phone}
            onChange={handleInputChange}
            id="phone"
            type="number"
            placeholder="e.g. +1 234 567 890"
          />
        </FormControl>
      </Box>
    </>
  );
};

export default Form1;
