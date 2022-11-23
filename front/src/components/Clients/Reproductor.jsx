import React from 'react'
import ReactPlayer from 'react-player'
import { Flex } from '@chakra-ui/react'

const Reproductor = () => {
  return (
    <Flex
    alignContent="center"
    justifyContent="center"
    // border="red solid"
    >
                <ReactPlayer
                    url='https://dbw7vamj238cm.cloudfront.net/Viamo_challenge.mp4'
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