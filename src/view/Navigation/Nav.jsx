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


  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      // maxW='60'
      fontFamily="monospace"
      // minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <SidebarContent
        // onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {

  return (
    <Box
      bg={"#463ef6"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      {_Points.map((ele, ind) => (
        <Step key={ele} stepNum={ind} StepTitle={ele} active={0} />
      ))}
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg='#463ef6'
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
     

    </Flex>
  );
};
