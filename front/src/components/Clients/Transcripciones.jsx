import React from "react";
import { Flex, Text} from "@chakra-ui/react";

const Transcripciones = () => {
  const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odio iusto. Laudantium quos vel magnam. Quia id corrupti veniam natus sunt vitae illum! Voluptas officia magni cum sit voluptate inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odio iusto. Laudantium quos vel magnam. Quia id corrupti veniam natus sunt vitae illum! Voluptas officia magni cum sit voluptate inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odio iusto. Laudantium quos vel magnam. Quia id corrupti veniam natus sunt vitae illum! Voluptas officia magni cum sit voluptate inventore!"
  return (
    <Flex
      color="texto"
      width="80%"
      margin="auto"
      flexDirection="column"
      pt="5%"
      pb="10%"
      // border="red solid"
    >
      <Text fontSize="25px" fontWeight="bold" mb="25px" color="magenta3">
        Transcripción
      </Text>

      <Flex borderRadius="0.5rem" width="100%" textAlign="justify">
        {texto}
      </Flex>
    </Flex>
  );
};

export default Transcripciones;
