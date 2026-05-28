import React from "react";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getClientById } from "../services/clients";
import TituloCliente from "../components/titles/TituloCliente";
import Reproductor from "../components/reproductor/Reproductor";
import Transcripciones from "../components/buttons/Transcripciones";
import Tareas from "../components/table/Tareas";
import EmptyState from "../components/emptyStates/EmptyState";


const Test = () => {
  const { id } = useParams();
  const {
    data: test,
    isSuccess,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["clientsById", id],
    queryFn: () => getClientById(id),
    enabled: !!id,
  });

  const questions = test?.preguntas ?? [];

  console.log(questions, "qué llega");

  if (isLoading) {
    return (
      <EmptyState
        title="Cargando test"
        description="Estamos buscando la información del test solicitado."
      />
    );
  }

  if (isError || !questions) {
    return (
      <EmptyState
        title={`Test no encontrado`}
        description="El test que estás buscando no está disponible en este momento."
        actionLabel="Volver al inicio"
      />
    );
  }

  return (
    <>
      {isSuccess && (<Flex flexDirection="column" width="100%" margin="auto">
        {/* <TituloCliente questions={questions} />
        <Reproductor questions={questions} />
        <Tareas questions={questions} />
        <Transcripciones questions={questions} /> */}
      </Flex>)}
    </>

  );
};

export default Test;
