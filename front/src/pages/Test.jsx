import React from 'react'
import { Flex } from '@chakra-ui/react'
import TituloCliente from '../components/Clients/TituloCliente'
import Reproductor from '../components/Clients/Reproductor'
import Transcripciones from '../components/Clients/Transcripciones'
import Tareas from '../components/Clients/Tareas'

const Test = () => {
  return (
    <Flex
        flexDirection="column"
        width="100%"
        margin="auto"
      >
        <TituloCliente/>
        <Reproductor/>
        <Tareas/>
        <Transcripciones/>
      </Flex>
  )
}

export default Test