import React from "react";
import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Test from "./pages/Test";

const App = () => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      bg="fondo"
      // bgGradient={[
      //   'linear(to-l, #7928CA, #FF0080)',
      //   'linear(to-t, blue.200, teal.500)',
      //   'linear(to-b, orange.100, purple.300)',
      // ]}
      justifyContent="center"
      alignContent="center"
    >
      <Navbar />
      <Flex justifyContent="center" alignItems="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Flex>
    </Flex>
  );
};

export default App;
