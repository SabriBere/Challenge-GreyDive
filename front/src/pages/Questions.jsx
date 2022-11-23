import React, { useEffect, useState } from "react";
import Video from "../components/Recorder/Video";
import {
  VerbalResponse,
  OpinionScale5,
} from "../components/Questions/CardQuestions";
import { fetchApi } from "../config/axiosInstance";
import { Flex } from "@chakra-ui/react";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [card, setCard] = useState(1);
  const [perCard] = useState(1);
  const max = questions.length / perCard;

  useEffect(() => {
    const getAllQuestions = async () => {
      const res = await fetchApi({
        method: "get",
        url: "/api/questions/",
      });
      setQuestions(res.data.data.rows);
    };
    getAllQuestions();
  }, [questions]);

  return (
    <>
      <Flex
        flexDirection="column"
        // border="red solid"
        width="100%"
        height="90vh"
      >
        <Video />
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
