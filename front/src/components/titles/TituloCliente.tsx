import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import type { Test } from "../../types/test";

type TituloClienteProps = {
  questions: Test;
};

const TituloCliente = ({ questions }: TituloClienteProps) => {
  const nombre = questions.cliente;
  const correctInicial = nombre.toString().charAt(0).toUpperCase() + nombre.toString().slice(1);

  return (
    <Flex
      color="texto"
      flexDirection="column"
      height="20%"
      width="82%"
      margin="auto"
      // border="red solid"
      pt="5%"
    >
      <Text fontSize="40px" fontWeight="bold" mb="5px" color="magenta1">
        {correctInicial}
      </Text>
    </Flex>
  );
};

export default TituloCliente;
