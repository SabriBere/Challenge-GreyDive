import React from "react";
import { Flex } from "@chakra-ui/react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home";
import Questions from "./pages/Questions";
// import Video from "./components/Recorder/Video";
import ScreenRecording from "./components/Recorder/Video";

const App = () => {
  return (
    <Flex
    w="100%"
    height="100vh"
    boxSizing="border-box"
    flexDirection="column"
    bg="fondo"
    >
      <Navbar />
      <Flex justifyContent="center" alignItems="center">
      <Routes>
        {/* <Route path="/" element={<Home />} />  */}
        <Route path="/questions" element={<Questions />} />
        <Route path="/video" element={<ScreenRecording />} />
      </Routes>
      </Flex>
    </Flex>
  );
};

export default App;
