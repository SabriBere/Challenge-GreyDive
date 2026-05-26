import React from "react";
import ReactPlayer from "react-player";
import { Flex } from "@chakra-ui/react";
import type { Test } from "../../types/test";

type ReproductorProps = {
  questions: Test;
};

const Reproductor = ({ questions }: ReproductorProps) => {
  return (
    <Flex alignContent="center" justifyContent="center">
      <ReactPlayer
        url={questions.linkVideo}
        controls
        width="65%"
        height="30%"
        volume={0.5}
        playbackRate={1}
      />
    </Flex>
  );
};

export default Reproductor;
