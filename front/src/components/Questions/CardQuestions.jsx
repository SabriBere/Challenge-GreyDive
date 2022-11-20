import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ButtonContinue, ButtonOptions } from "./Buttons";
import TitleTask from "./TitleTask";

export const VerbalResponse = () => {
  return (
    <Flex
      width={{ md1: "50%", base: "80%" }}
      height="450px"
      mt="50px"
      flexDirection="column"
      bg="cards"
      borderRadius="0.5rem"
      boxShadow="0px 5px 10px 0px #000"
    >
      <TitleTask />
      <Text
        height="100px"
        mt="50px"
        padding="15px"
        textAlign="center"
        color="texto"
        fontSize="20px"
      >
        Necesitas comprar zapatillas, entonces decidís visitar el sitio web de
        Viamo.
      </Text>
      <Flex alignContent="center" justifyContent="center" mt ="100px">
      <ButtonContinue />
      </Flex>
    </Flex>
  );
};

export const OpinionScale5 = () => {
  return (
    <Flex
      width={{ md1: "50%", base: "80%" }}
      height="450px"
      mt="50px"
      flexDirection="column"
      bg="cards"
      borderRadius="0.5rem"
      boxShadow="0px 5px 10px 0px #000"
    >
      <TitleTask />
      <Text
        height="100px"
        mt="50px"
        padding="15px"
        textAlign="center"
        color="texto"
        fontSize="20px"
      >
        De todo lo que vistes hasta ahora: <br />
        Del 1 al 5 cuánto te motiva a comprar
      </Text>

      <ButtonOptions />

      <Flex alignContent="center" justifyContent="center" mb ="50px" mt="30px">
      <ButtonContinue />
      </Flex>
      
    </Flex>
  );
};

export const CardInstructions = () => {
  return (
    <Flex
      width={{ md1: "50%", base: "80%" }}
      height="450px"
      mt="70px"
      flexDirection="column"
      bg="cards"
      borderRadius="0.5rem"
      boxShadow="0px 5px 10px 0px #000"
    >
      <TitleTask />
      <Text
        height="100px"
        mt="50px"
        padding="15px"
        textAlign="center"
        color="texto"
        fontSize="20px"
      >
        Necesitas comprar zapatillas, entonces decidís visitar el sitio web de
        Viamo.
      </Text>

      <ButtonContinue />
    </Flex>
  );
};
