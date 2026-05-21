import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const TitleTask = () => {
  return (
    <Flex
      alignContent="center"
      justifyContent="center"
      mt="30px"
      color="texto"
      fontSize="25px"
      fontWeight="bold"
    //   border="red solid"
    >
      <Text>Tarea 1 de 40</Text>
    </Flex>
  );
};

export default TitleTask;
