import React from "react";
import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Test from "./pages/Test";
import NotFound from "./components/emptyStates/NotFound";

const App = () => {
  return (
    <Flex
      w="100%"
      minH="100vh"
      flexDirection="column"
      bg="fondo"
      justifyContent="center"
      alignContent="center"
    >
      <Navbar />
      <Flex flex="1" w="100%" bg="fondo" justifyContent="center" alignItems="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Flex>
    </Flex>
  );
};

export default App;
