import React, { useState } from "react";
import TopInfo from "../component/TopInfo";
import {
  Text,
  Button,
  Box,
  Flex,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeCounter } from "../../../redux/slices/counterSlice";
const Form4 = ({ formValue }) => {
  const { yourInfo, plan, addOns } = formValue;
  const dispatch = useDispatch();

  const routeToChangeMonth = () => {
    dispatch(changeCounter({ stepNum: 1 }));
  };
  const totalPrice = () => {
    let temp = plan.frequency === "monthly" ? +plan.price : +plan.price * 10;
    let accu = addOns.reduce((acc, ele) => {
      return plan.frequency === "monthly"
        ? acc + +ele.price
        : acc + +ele.price * 10;
    }, 0);
    return temp + accu;
  };

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
                  {plan.type} ({plan.frequency})
                </Text>
                <Button
                  size="sm"
                  onClick={routeToChangeMonth}
                  textDecoration="underline"
                  variant="link"
                >
                  Change
                </Button>
              </Td>
              <Td
                textAlign="right"
                fontWeight="bold"
                color="blue.800"
                fontSize={{base:'sm',md:'md'}}
              >
                ${plan.frequency === "monthly" ? plan.price : plan.price * 10}/
                {plan.frequency === "monthly" ? "mo" : "yr"}
              </Td>
            </Tr>
            {addOns.map((ele, ind) => (
              <Tr color="gray.400">
                <Td>{ele.title}</Td>
                <Td fontSize={{base:'sm'}} fontWeight="bold" textAlign="right">
                  +${plan.frequency === "monthly" ? ele.price : ele.price * 10}/
                  {plan.frequency === "monthly" ? "mo" : "yr"}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex alignItems="center" justifyContent="space-between" m={{ base: "3",md:'6' }}>
          <Text fontSize={{base:'md'}} color="gray.400">
            Total (per {plan.frequency === "monthly" ? "month" : "year"})
          </Text>
          <Text  fontSize={{base:'md',md:'lg'}} as="b" color="#463ef6">
            +${totalPrice()}/{plan.frequency === "monthly" ? "mo" : "yr"}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Form4;
