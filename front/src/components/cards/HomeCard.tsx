import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Test } from "../../types/test";

type HomeCardProps = {
  info: Test;
};

const HomeCard = ({ info }: HomeCardProps) => {
  return (
    <Flex
      width="300px"
      minH="250px"
      bg="cards"
      borderRadius="0.5rem"
      boxShadow="0px 5px 10px 0px #000"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      p={6}
      _hover={{
        transform: "scale(1.05)",
      }}
      transition="transform .2s ease-out"
    >
      <Text
        fontSize="40px"
        fontWeight="bold"
        textAlign="center"
        color="navbar"
        minH="80px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        lineHeight="1.1"
      >
        {info.cliente}
      </Text>

      <Text fontSize="15px" textAlign="center" color="texto">
        <strong>Resumen:</strong>
        <br />
        Test de usabilidad en el sitio web
      </Text>

      <Button
        as={Link}
        to={`/test/${info.id}`}
        bg="navbar"
        size="sm"
        color="texto"
        _hover={{ bg: "violet" }}
      >
        Ver más
      </Button>
    </Flex>
  );
};

export default HomeCard;