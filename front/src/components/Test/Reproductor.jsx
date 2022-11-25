import React from 'react'
import ReactPlayer from 'react-player'
import { Flex } from '@chakra-ui/react'

const Reproductor = (questions) => {
  return (
    <Flex
    alignContent="center"
    justifyContent="center"
    >
                <ReactPlayer
                    url={questions.questions.linkVideo}
                    controls
                    width="65%"
                    height="30%"
                    volume="0.5"
                    playbackRate="1"
                />
    </Flex>
  )
}

export default Reproductor