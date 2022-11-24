import React, {useEffect, useState} from 'react'
import { Flex } from '@chakra-ui/react'
import TituloCliente from '../components/Clients/TituloCliente'
import Reproductor from '../components/Clients/Reproductor'
import Transcripciones from '../components/Clients/Transcripciones'
import Tareas from '../components/Clients/Tareas'
import { fetchApi } from '../config/axiosInstance'

const Test = () => {

  const [questions, setQuestions] = useState({});

  useEffect(() => {
    const getAllQuestions = async () => {
      const res = await fetchApi({
        method: "get",
        url: "/api/clientes/",
      });
      // console.log(res.data.data.rows)
      setQuestions(res.data.data.rows[0]);
    };
    getAllQuestions();
  }, [questions]);

  return (
    <Flex
        flexDirection="column"
        width="100%"
        margin="auto"
      >
        <TituloCliente questions={questions}/>
        <Reproductor questions={questions}/>
        <Tareas questions={questions}/>
        <Transcripciones questions={questions}/>
      </Flex>
  )
}

export default Test