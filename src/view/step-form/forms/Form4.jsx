import React, { useState } from "react";
import TopInfo from "../component/TopInfo";
import {Text,Button,Box,Flex,Table,Tbody,Tr,Td} from "@chakra-ui/react";

const Form4 = () => {
  return (
    <>
      <TopInfo
        main="Finishing up"
        sub="Double check everything looks OK before confirming."
      />
      <Box>
        <Table bg="green.50" variant="unstyled">
          <Tbody>
            <Tr style={{ borderBottom: "1px solid #CBD5E0" }}>
              <Td>
                <Text fontWeight="bold" color="blue.800" fontSize="md">
                  Arcade (Monthly)
                </Text>
                <Button size="sm" textDecoration="underline" variant="link">
                  Change
                </Button>
              </Td>
              <Td
                textAlign="right"
                fontWeight="bold"
                color="blue.800"
                fontSize="md"
              >
                $9/mo
              </Td>
            </Tr>

            <Tr color="gray.400">
              <Td>Online service</Td>
              <Td fontWeight="bold" textAlign="right">
                +$1/mo
              </Td>
            </Tr>
            <Tr color="gray.400">
              <Td>Larger storage</Td>
              <Td fontWeight="bold" textAlign="right">
                +$2/mo
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Flex alignItems="center" justifyContent="space-between" m="6">
          <Text color="gray.400">Total (per month)</Text>
          <Text fontSize="lg" as="b" color="#463ef6">
            +$12/mo
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Form4;
