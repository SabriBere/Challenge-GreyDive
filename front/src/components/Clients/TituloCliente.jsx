import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const TituloCliente = ({questions}) => {

  const nombre = Object?.values(questions).slice(1,2)
  const correctInicial = nombre.toString().charAt(0).toUpperCase() + nombre.toString().slice(1)

  
  return (
    <Flex 
    color="texto" 
    flexDirection="column" 
    height="20%" width="80%" 
    margin="auto" 
    // border="red solid" 
    pt="5%">
      <Text fontSize="40px" fontWeight="bold" mb="5px" color="magenta1">Cliente: {correctInicial} </Text>
        <Text fontSize="30px" fontWeight="bold" mb="25px">Test: Test de usabilidad en el sitio web</Text>
        <Text fontSize="25px" fontWeight="bold" pb="5%" color="violeta2">Testeador</Text>
    </Flex>
  );
};

export default TituloCliente;
