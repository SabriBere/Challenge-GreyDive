import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { Button, Flex } from "@chakra-ui/react";
import { fetchApi } from "../../config/axiosInstance";

const Video = () => {
  const { status, startRecording, stopRecording, ...mediaBlobUrl } =
    useReactMediaRecorder({
      screen: true,
      type: "video/mp4",
      onStop: (blobUrl, blob) => {
        const url = URL.createObjectURL(blob);
        console.log(blob);
        console.log(blobUrl, "es el video?");
      },
    });

  // const url = mediaBlobUrl.mediaBlobUrl;
  //pasar al axios.
  // alert(`Se genero correctamente la url: ${url}`)
  //

  return (
    <Flex margin="auto" pb="20px" width="25%" pt="20px">
      <Button colorScheme="none" _selected={{ bg: "cards" }} mr="20px">
        {status === "idle"
          ? "Not Recording"
          : status === "recording"
          ? "Recording"
          : status === "stopped"
          ? "Stopped"
          : ""}
      </Button>
      <br />
      <Button
        color="navbar"
        _selected={{ bg: "cards" }}
        onClick={startRecording}
        mr="20px"
      >
        Empezar
      </Button>
      <Button onClick={stopRecording} color="navbar" variant="outline">
        Finalizar
      </Button>
      <a src={mediaBlobUrl} controls autoPlay />
    </Flex>
  );
};

export default Video;
