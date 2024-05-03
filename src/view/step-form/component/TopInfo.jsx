import React from 'react'
import {Heading,Text,Box} from "@chakra-ui/react";
const TopInfo = ({ main, sub }) => {
    return (
      <>
        <Box mb="10">
          <Heading color="blue.900" as="b" w="100%" mb="2%">
            {main}
          </Heading>
          <Text color="gray.400" mt="2 ">
            {sub}
          </Text>
        </Box>
      </>
    );
  };

export default TopInfo