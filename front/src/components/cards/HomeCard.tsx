import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { Test } from "../../types/test";

type HomeCardProps = {
  info: Test;
};

const HomeCard = ({ info }: HomeCardProps) => {
  return (
    <Flex
      width="300px"
      height="250px"
      bg="cards"
      borderRadius="0.5rem"
      boxShadow="0px 5px 10px 0px #000"
      flexDirection="column"
      _hover={{
        transform: "scale(1.1)",
      }}
      transition="all 3s ease-out"
    >
      <Text fontSize="40px" fontWeight="bold" textAlign="center" color="navbar" mt="20px">
        {info.cliente}
      </Text>
      <Text fontSize="15px" textAlign="center" color="texto" mt="30px" padding="10px">
        <strong>Resumen:</strong> <br /> Test de usabilidad en el sitio web
      </Text>

      <Button
        bg="navbar"
        size="sm"
        color="texto"
        _hover={{ bg: "violet" }}
        margin="auto"
        alignItems="center"
      >
        <Link to={`/test/${info.id}`}>Ver más</Link>
      </Button>
    </Flex>
  );
};

export default HomeCard;
