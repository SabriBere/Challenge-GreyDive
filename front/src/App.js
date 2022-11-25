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
      justifyContent="center"
      alignContent="center"
    >
      <Navbar />
      <Flex justifyContent="center" alignItems="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </Flex>
    </Flex>
  );
};

export default App;
