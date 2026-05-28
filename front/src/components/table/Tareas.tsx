import React from "react";
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
import type { Test } from "../../types/test";

type TareasProps = {
  questions: Test;
};

const Tareas = ({ questions }: TareasProps) => {
  return (
    <Flex color="texto" width="82%" margin="auto" flexDirection="column" pt="5%">
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
              <Th color="teal.300">Puntuación (1 al 5)</Th>
            </Tr>
          </Thead>

          <Tbody>
            {questions.preguntas?.map((task, i) => (
              <Tr key={i}>
                <Td>
                  <strong>Tarea {i + 1}</strong>
                  <br />
                  <div dangerouslySetInnerHTML={{ __html: task.texto }} />
                </Td>

                <Td textAlign="center" color="orange.200">
                  <strong>{task.tiempo}</strong>
                </Td>

                <Td textAlign="center">
                  <strong>
                    {task.respuesta !== "respuesta verbal"
                      ? task.respuesta
                      : "Respuesta verbal"}
                  </strong>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Tareas;