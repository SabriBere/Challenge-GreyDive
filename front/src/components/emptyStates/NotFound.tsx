import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Flex
      minH="100%"
      w="100%"
      alignItems="center"
      justifyContent="center"
      bg="fondo"
      color="texto"
      px={6}
    >
      <Flex
        maxW="520px"
        w="100%"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap={5}
      >
        <Text color="magenta2" fontSize="72px" fontWeight="black" lineHeight="1">
          404
        </Text>
        <Heading as="h1" size="xl" color="magenta1">
          Página no encontrada
        </Heading>
        <Text color="texto" fontSize="lg" opacity={0.85}>
          La ruta que estás buscando no existe o fue movida durante la reorganización del proyecto.
        </Text>
        <Button
          as={Link}
          to="/"
          bg="navbar"
          color="texto"
          size="lg"
          _hover={{ bg: "magenta2", transform: "translateY(-2px)" }}
          _active={{ transform: "translateY(0)" }}
        >
          Volver al inicio
        </Button>
      </Flex>
    </Flex>
  );
};

export default NotFound;
