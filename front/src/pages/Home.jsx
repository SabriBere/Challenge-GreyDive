import React from 'react'
import { Flex } from '@chakra-ui/react'
import { CardInstructions } from '../components/Questions/CardQuestions'

const Home = () => {
  return (
    <Flex
    width="100%"
    height="87.2vh"
    bg="fondo"
    >
      <CardInstructions/>
    </Flex>
    
  )
}

export default Home