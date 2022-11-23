import React from "react";
import { Flex, Button, Input } from "@chakra-ui/react";

const Pagination = ({ card, setCard, max }) => {
  const nextPage = () => {
    setCard(card + 1);
  };

  return (
    <Flex color="border red">
      <Button
        onClick={() => nextPage()}
        bg="navbar"
        size="lg"
        color="texto"
        _hover={{ bg: "fondo" }}
        disabled={card === Math.ceil(max) || card > Math.ceil(max)}
      >
        Continuar
      </Button>
    </Flex>
  );
};

export default Pagination;
