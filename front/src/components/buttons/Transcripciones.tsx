import { Flex, Text } from "@chakra-ui/react";
import type { Test } from "../../types/test";

type TranscripcionesProps = {
  questions: Test;
};

const Transcripciones = ({ questions }: TranscripcionesProps) => {
  return (
    <Flex color="texto" width="80%" margin="auto" flexDirection="column" pt="3%" pb="10%">
      <Text fontSize="25px" fontWeight="bold" mb="25px" color="magenta3">
        Transcripción
      </Text>

      <Flex borderRadius="0.5rem" width="100%" textAlign="justify">
        <div
          dangerouslySetInnerHTML={{
            __html: questions.transcripcion,
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Transcripciones;
