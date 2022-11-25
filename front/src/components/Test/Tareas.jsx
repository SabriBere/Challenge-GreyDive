import React, { useState } from "react";
import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import TablePagination from "./TablePagination";

const Tareas = ({ questions }) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  return (
    <Flex
      color="texto"
      width="82%"
      margin="auto"
      flexDirection="column"
      pt="5%"
    >
      <Text fontSize="25px" fontWeight="bold" mb="30px" color="magenta2">
        Tareas
      </Text>
      <Flex borderRadius="0.5rem" width="100%" textAlign="justify">
        <Text>
          <strong>Escenario:</strong> {questions.escenario}
        </Text>
      </Flex>
      <br />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="teal.300">N° Tarea</Th>
              <Th textAlign="center" color="teal.300">
                Duración
              </Th>
              <Th color="teal.300">Puntuación (1 al 5) </Th>
            </Tr>
          </Thead>
          <Tbody>
            {questions.preguntas
              ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((task, i) => (
                <Tr key={i}>
                  <Td>
                    <strong>Tarea {i + 1}</strong>
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: task.texto }} />
                  </Td>
                  <Td textAlign="center" color="orange.200">
                    <strong> {task.tiempo} </strong>
                  </Td>
                  <Td textAlign="center">
                    <strong>
                      {task.respuesta !== "respuesta verbal"
                        ? task.respuesta
                        : "Respuesta verbal"}{" "}
                    </strong>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <TablePagination page={page} setPage={setPage} />
    </Flex>
  );
};

export default Tareas;
