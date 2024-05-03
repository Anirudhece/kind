import React, { useState } from "react";
import TopInfo from "../component/TopInfo";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

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

export default Form1;
