import React, { useState } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import type { Test } from "../../types/test";

type TranscripcionesProps = {
  questions: Test;
};

const Transcripciones = ({ questions }: TranscripcionesProps) => {
  const texto = questions.transcripcion;
  const textoCortado = texto.split(" ").slice(0, 200).join(" ") + "...";
  const [visible, setVisible] = useState(true);
  const resultText = visible ? textoCortado : texto;

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <Flex
      color="texto"
      width="80%"
      margin="auto"
      flexDirection="column"
      pt="3%"
      pb="10%"
    >
      <Text fontSize="25px" fontWeight="bold" mb="25px" color="magenta3">
        Transcripción
      </Text>
      <Flex borderRadius="0.5rem" width="100%" textAlign="justify">
        <div dangerouslySetInnerHTML={{ __html: resultText }} />
      </Flex>
      <br />
      <Button
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        _hover={{ bg: "none" }}
        boxShadow="dark-lg"
        id="hideText_btn"
        onClick={toggle}
      >
        {visible ? "Leer más" : "Leer menos"}
      </Button>
      <br />
    </Flex>
  );
};

export default Transcripciones;
