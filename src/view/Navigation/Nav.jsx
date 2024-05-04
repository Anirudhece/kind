import React from "react";
import {
  IconButton,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import Step from "./components/Step";
import { useDispatch } from "react-redux";

const _Points = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

export default function SimpleSidebar() {
  return (
    <Box
      fontFamily="monospace"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <SidebarContent />
      <Drawer
        placement="left"
        size="full"
      >
        <DrawerContent>
          <SidebarContent />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav />
    </Box>
  );
}

const SidebarContent = () => {
  return (
    <Box
      bg={"#463ef6"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      display={{ base: "none", md: "block" }}
    >
      {_Points.map((ele, ind) => (
        <Step key={ele} stepNum={ind} StepTitle={ele} active={0} />
      ))}
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Flex height="20" bg='#463ef6' display={{ base: "flex", md: "none" }}>

    </Flex>
  );
};
