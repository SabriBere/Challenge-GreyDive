import React, {useState} from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

const Transcripciones = ({ questions, hide = false }) => {
  const texto = Object.values(questions).slice(2, 3).toString();
  const textoCortado = texto.split(" ").slice(0, 200).join(" ") + "...";

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
      <Flex borderRadius="0.5rem" width="100%" textAlign="justify" className="hide" id="hideText">
        <div dangerouslySetInnerHTML={{ __html: textoCortado }} />
      </Flex>
      <br />
      <Button
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        _hover={{ bg: "none" }}
        boxShadow="dark-lg"
        id="hideText_btn"
      >
        Leer más
      </Button>
    </Flex>
  );
};

export default Transcripciones;
