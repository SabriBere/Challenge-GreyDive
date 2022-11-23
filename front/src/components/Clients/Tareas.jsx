import React from "react";
import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Tareas = () => {
  return (
    <Flex
      color="texto"
      width="80%"
      margin="auto"
      flexDirection="column"
      pt="5%"
      // border="red solid"
    >
      <Text fontSize="25px" fontWeight="bold" mb="30px" color="magenta2">
        Tareas
      </Text>
      <Flex
        borderRadius="0.5rem"
        width="100%"
        textAlign="justify"
      >
        <Text>
        <strong>Escenario:</strong> Necesitás comprar zapatillas, entonces decidís visitar el
        sitio web de Viamo.
        </Text>
     
      </Flex>
      <br />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="teal.300">N° Tarea</Th>
              <Th textAlign="center" color="teal.300">Descripción</Th>
              <Th width="20%" textAlign="center" color="teal.300">Duración</Th>
              <Th color="teal.300">Puntuación (1 al 5) </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><strong>Tarea 1</strong></Td>
              <Td textAlign="justify" margin="auto">
                De todo lo que viste hasta ahora: Del 1 al 5 cuánto te motiva a
                comprar? <br />
                De todo lo que viste hasta ahora: Del 1 al 5 cuánto te motiva a
                comprar?
              </Td>
              <Td textAlign="center" color="orange.200"><strong> 0:0:44 </strong></Td>
              <Td textAlign="center"><strong>3</strong> </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Tareas;
