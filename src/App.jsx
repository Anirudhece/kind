import Nav from "./view/Navigation/Nav";
import Multistep from "./view/step-form/Mutistep";
import {  Box } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Box sx={{ overflowX: "hidden" }}>
        <Nav />
        <Box ml={{ base: 0, md: 60 }}>
          <Multistep />
        </Box>
      </Box>
    </>
  );
}

export default App;
