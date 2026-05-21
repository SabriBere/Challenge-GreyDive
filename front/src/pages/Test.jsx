import React from "react";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import TituloCliente from "../components/titles/TituloCliente";
import Reproductor from "../components/reproductor/Reproductor";
import Transcripciones from "../components/buttons/Transcripciones";
import Tareas from "../components/table/Tareas";
import EmptyState from "../components/emptyStates/EmptyState";
import { getTestById } from "../services/test";

const Test = () => {
  const { id } = useParams();
  const {
    data: questions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["test", id],
    queryFn: () => getTestById(id),
  });

  if (isLoading) {
    return (
      <EmptyState
        title="Cargando test"
        description="Estamos buscando la información del test solicitado."
      />
    );
  }

  if (isError || !questions?.id) {
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
