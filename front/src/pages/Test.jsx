import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import TituloCliente from "../components/Test/TituloCliente";
import Reproductor from "../components/Test/Reproductor";
import Transcripciones from "../components/Test/Transcripciones"
import Tareas from "../components/Test/Tareas";
import { fetchApi } from "../config/axiosInstance";
import { useParams } from "react-router-dom";

const Test = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    const getAllQuestions = async () => {
      const res = await fetchApi({
        method: "get",
        url: `/api/clientes/${id}`,
      });
      setQuestions(res.data.data);
    };
    getAllQuestions();
  }, [questions]);

  return (
    <Flex flexDirection="column" width="100%" margin="auto">
      <TituloCliente questions={questions} />
      <Reproductor questions={questions} />
      <Tareas questions={questions} />
      <Transcripciones questions={questions} />
    </Flex>
  );
};

export default Test;
