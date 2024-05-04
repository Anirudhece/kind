import React from 'react';
import { Heading, Text, Box } from "@chakra-ui/react";

const TopInfo = ({ main, sub }) => {
  return (
    <Box mb={{ base: 6, md: 10 }}>
      <Heading fontSize={{base:'2xl'}} color="blue.900" as="b" w="100%" mb={{ base: 2, md: "2%" }}>
        {main}
      </Heading>
      <Text fontSize={{base:'sm'}} textAlign={{base:'left'}} color="gray.400" mt={{ base: 2, md: 0 }}>
        {sub}
      </Text>
    </Box>
  );
};

export default TopInfo;
