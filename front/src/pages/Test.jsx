import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { fetchApi } from "../config/axiosInstance";
import { useParams } from "react-router-dom";
import TituloCliente from "../components/titles/TituloCliente";
import Reproductor from "../components/reproductor/Reproductor";
import Transcripciones from "../components/buttons/Transcripciones";
import Tareas from "../components/table/Tareas";
import EmptyState from "../components/emptyStates/EmptyState";

const Test = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllQuestions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetchApi({
          method: "get",
          url: `/api/clientes/${id}`,
        });
        setQuestions(res.data.data);
      } catch (error) {
        setQuestions(null);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllQuestions();
  }, [id]);

  if (isLoading) {
    return (
      <EmptyState
        title="Cargando test"
        description="Estamos buscando la información del test solicitado."
      />
    );
  }

  if (error || !questions?.id) {
    return (
      <EmptyState
        title={`Test no encontrado`}
        description="El test que estás buscando no está disponible en este momento."
        actionLabel="Volver al inicio"
      />
    );
  }

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
