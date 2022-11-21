import React from 'react'
import { useReactMediaRecorder } from "react-media-recorder";
import { Button } from '@chakra-ui/react';
import useInput from '../../hooks/useInput';
import { fetchApi } from '../../config/axiosInstance';

const Video = () => {

    const { status, startRecording, stopRecording, ...mediaBlobUrl} =
    useReactMediaRecorder({ 
        screen: true,
        type: "video/mp4",
        // onStop: (blobUrl, blob) => {
        //     const url = URL.createObjectURL(blob)
        //     console.log(url)
        // }
    });

    const url = mediaBlobUrl.mediaBlobUrl
    //pasar al axios.  

    return (
    <div>
      <p>{status}</p>
      <Button color="navbar" _selected={{ bg: "cards" }} onClick={startRecording} mr="20px">Empezar</Button>
      <Button onClick={stopRecording} color="navbar" variant='outline'>Finalizar</Button>
      <a src={mediaBlobUrl} controls autoPlay />
    </div>
  )
  
}

export default Video