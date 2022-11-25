import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { ButtonOptions, ButtonStart } from "./Buttons";
import Pagination from "./Pagination";
import { useReactMediaRecorder } from "react-media-recorder";
import { Link } from "react-router-dom";

export const VerbalResponse = ({ item, card, setCard, max }) => {
  return (
    <Flex
      width={{ md1: "50%", base: "80%" }}
      height="450px"
      margin="auto"
      flexDirection="column"
      bg="cards"
      borderRadius="0.5rem"
      boxShadow="0px 5px 10px 0px #000"
      // border="red solid"
    >
      <Flex
        alignContent="center"
        justifyContent="center"
        mt="30px"
        color="texto"
        fontSize="25px"
        fontWeight="bold"
        // border="red solid"
      >
        <Text>Tarea {item.id} de 40</Text>
      </Flex>
      <Text
        height="70px"
        mt="50px"
        pl={item.texto.length >= 40 ? "40px" : "20px"}
        pr={item.texto.length >= 40 ? "40px" : "20px"}
        textAlign="center"
        color="texto"
        fontSize="20px"
      >
        {item.texto}
      </Text>
      <Flex alignContent="center" justifyContent="center" mt="90px">
        <Pagination card={card} setCard={setCard} max={max} />
      </Flex>
    </Flex>
  );
};

export const OpinionScale5 = ({ item, card, setCard, max }) => {
  return (
    <Flex
      width={{ md1: "50%", base: "80%" }}
      height="450px"
      margin="auto"
      flexDirection="column"
      bg="cards"
      borderRadius="0.5rem"
      boxShadow="0px 5px 10px 0px #000"
    >
      <Flex
        alignContent="center"
        justifyContent="center"
        mt="30px"
        color="texto"
        fontSize="25px"
        fontWeight="bold"
      >
        <Text>Tarea {item.id} de 40</Text>
      </Flex>
      <Text
        height="100px"
        mt="50px"
        pl={item.texto.length >= 40 ? "20px" : "20px"}
        pr={item.texto.length >= 40 ? "20px" : "20px"}
        textAlign="center"
        color="texto"
        fontSize="20px"
      >
        {item.texto}
      </Text>
      <ButtonOptions />
      <Flex alignContent="center" justifyContent="center" mb="50px" mt="30px">
        <Pagination card={card} setCard={setCard} max={max} />
      </Flex>
    </Flex>
  );
};

export const CardInstructions = () => {
  return (
    <Flex
      width={{ md1: "50%", base: "80%" }}
      height="450px"
      margin="auto"
      flexDirection="column"
      bg="cards"
      borderRadius="0.5rem"
      boxShadow="0px 5px 10px 0px #000"
    >
      <Text
        height="100px"
        mt="50px"
        textAlign="center"
        color="texto"
        fontSize="35px"
        fontWeight="bold"
      >
        Importante
      </Text>
      <Text
        height="100px"
        mt="20px"
        textAlign="center"
        color="texto"
        fontSize="25px"
      >
        Recuerda decir en voz alta todo lo que <br /> piensas mientras realizas
        las tareas
      </Text>
      <Flex alignContent="center" justifyContent="center" mb="50px" mt="30px">
        <ButtonStart />
      </Flex>
    </Flex>
  );
};
