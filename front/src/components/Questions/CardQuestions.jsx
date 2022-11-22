import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ButtonContinue, ButtonOptions } from "./Buttons";
import TitleTask from "./TitleTask";

export const VerbalResponse = ({item}) => {
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
        height="100px"
        mt="50px"
        padding="15px"
        textAlign="center"
        color="texto"
        fontSize="20px"
      >
        {item.texto}
      </Text>
      <Flex alignContent="center" justifyContent="center" mt ="100px">
      <ButtonContinue />
      </Flex>
    </Flex>
  );
};

export const OpinionScale5 = ({item}) => {
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
        height="100px"
        mt="50px"
        padding="15px"
        textAlign="center"
        color="texto"
        fontSize="20px"
      >
        {item.texto}
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
      width="70%"
      height="450px"
      mt="70px"
      flexDirection="column"
      bg="cards"
      borderRadius="0.5rem"
      boxShadow="0px 5px 10px 0px #000"
    >
      <Text
        height="100px"
        mt="50px"
        padding="15px"
        textAlign="center"
        color="texto"
        fontSize="25px"
        fontWeight="bold"
      >
       Importante
      </Text>
      <br />
      <Text
        height="100px"
        mt="50px"
        padding="15px"
        textAlign="center"
        color="texto"
        fontSize="20px"
      >
       Recurda decir en voz alta todo lo que piensas mientras realizas las tareas
      </Text>


      <ButtonContinue />
    </Flex>
    
  );
};
