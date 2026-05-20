import React, { useEffect, useState } from "react";
import {
  VerbalResponse,
  OpinionScale5,
} from "../components/cards/CardQuestions";
import { fetchApi } from "../config/axiosInstance";
import { Flex } from "@chakra-ui/react";
import EmptyState from "../components/emptyStates/EmptyState";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [card, setCard] = useState(1);
  const [perCard] = useState(1);
  const max = questions.length / perCard;

  useEffect(() => {
    const getAllQuestions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetchApi({
          method: "get",
          url: "/api/questions/",
        });
        setQuestions(res.data.data.rows);
      } catch (error) {
        setQuestions([]);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllQuestions();
  }, []);

  if (isLoading) {
    return (
      <EmptyState
        title="Cargando preguntas"
        description="Estamos buscando las preguntas del test solicitado."
      />
    );
  }

  if (error || !questions.length) {
    return (
      <EmptyState
        title="Preguntas no disponibles"
        description="No pudimos encontrar preguntas para este test en este momento."
        actionLabel="Volver al inicio"
      />
    );
  }

  return (
    <>
      <Flex flexDirection="column" width="100%" height="90vh">
        {questions
          ?.slice((card - 1) * perCard, (card - 1) * perCard + perCard)
          .map((pregunta, i) => {
            return pregunta?.tipoTarea === "verbalResponse" ? (
              <VerbalResponse
                key={i}
                item={pregunta}
                flexDirection="column"
                card={card}
                setCard={setCard}
                max={max}
              />
            ) : (
              <OpinionScale5
                item={pregunta}
                flexDirection="column"
                card={card}
                setCard={setCard}
                max={max}
              />
            );
          })}
      </Flex>
    </>
  );
};

export default Questions;
