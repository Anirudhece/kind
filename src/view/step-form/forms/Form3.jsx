import React, { useEffect, useState } from "react";
import TopInfo from "../component/TopInfo";
import { Text, Box, Spacer, Flex, VStack, Checkbox } from "@chakra-ui/react";

const Form3 = ({ updateAddOns, formValue }) => {
  const addOns = [
    {
      title: "Online Service",
      description: "access to multiplayer games",
      price: 1,
    },
    {
      title: "Larger storage",
      description: "extra 1TB of cloud save",
      price: 2,
    },
    {
      title: "Customizable profile",
      description: "custom theme on your profile",
      price: 2,
    },
  ];

  const initialCheckedItems = addOns.reduce((acc, _, index) => {
    acc[index] = formValue.addOns.some(
      (addOn) => addOn.title === addOns[index].title
    );
    return acc;
  }, {});

  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

  const handleCheckboxChange = (index) => {
    setCheckedItems({
      ...checkedItems,
      [index]: !checkedItems[index],
    });
  };

  useEffect(() => {
    const initialChecked = addOns.map((_, index) =>
      formValue.addOns.some((addOn) => addOn.title === addOns[index].title)
    );
    setCheckedItems(initialChecked);
  }, [formValue.addOns]);

  useEffect(() => {
    const selectedAddOns = addOns
      .filter((_, index) => checkedItems[index])
      .map(({ title, price }) => ({ title, price }));
    updateAddOns(selectedAddOns);
  }, [checkedItems]);

  return (
    <>
      <TopInfo
        main="Select your plan"
        sub="You have the option for monthly and yearly billing."
      />
      <VStack>
        {addOns.map((ele, ind) => (
          <Flex
            key={ind}
            p="2"
            alignItems="center"
            borderWidth="1px"
            borderRadius="lg"
            w="full"
            borderColor={checkedItems[ind] ? "blue.600" : "gray.200"}
          >
            <Flex>
              <Checkbox
                border="gray"
                display="flex"
                m="2"
                isChecked={checkedItems[ind]}
                onChange={() => handleCheckboxChange(ind)}
              />

              <Box
                mb="2"
                mt="2"
                mr={{ base: "2", md: "4" }}
                ml={{ base: "2", md: "4" }}
              >
                <Text
                  color="blue.800"
                  fontSize={{ base: "sm", md: "lg" }}
                  as="b"
                >
                  {ele.title}
                </Text>
                <Text fontSize={{ base: "xs" }} color="gray.500">
                  {ele.description}
                </Text>
              </Box>
            </Flex>
            <Spacer />
            <Text
              fontSize={{ base: "xs" }}
              color="blue.600"
              m={{ base: "0", md: "2" }}
            >
              +${ele.price}/mo
            </Text>
          </Flex>
        ))}
      </VStack>
    </>
  );
};

export default Form3;
