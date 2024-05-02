import Nav from "./view/Navigation/Nav";
import Form from "./view/form/Form";
import { Container, Box } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Box sx={{ overflowX: "hidden" }}>
        <Nav />
        <Box ml={{ base: 0, md: 60 }}>
          <Form />
        </Box>
      </Box>
    </>
  );
}

export default App;
