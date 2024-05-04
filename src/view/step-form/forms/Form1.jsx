import React, { useEffect } from "react";
import TopInfo from "../component/TopInfo";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Form1 = ({ formValue, updateYouinfo }) => {
  const handleInputChange = (e) => {
    const { value, id } = e.target;
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
            value={formValue.yourInfo.name}
            onChange={handleInputChange}
            id="name"
            placeholder="e.g. Stephen King"
            size={{ base: "sm", md: "md" }}
          />
        </FormControl>

        <FormControl mt={{ base: 4, md: 6 }}>
          {/* {" "} */}
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            value={formValue.yourInfo.email}
            onChange={handleInputChange}
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            size={{ base: "sm", md: "md" }}
          />
        </FormControl>

        <FormControl mt={{ base: 4, md: 6 }}>
          <FormLabel htmlFor="phone" mt={{ base: "2%", md: 0 }}>
            Phone Number
          </FormLabel>
          <Input
            value={formValue.yourInfo.phone}
            onChange={handleInputChange}
            id="phone"
            type="number"
            placeholder="e.g. +1 234 567 890"
            size={{ base: "sm", md: "md" }}
          />
        </FormControl>
      </Box>
    </>
  );
};

export default Form1;
