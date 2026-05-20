import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, GridItem, Input } from "@chakra-ui/react";
const calificación = [1, 2, 3, 4, 5];

export const ButtonStart = () => {
  return (
    <Link to={"/questions"}>
      <Button bg="navbar" size="lg" color="texto" _hover={{ bg: "fondo" }}>
        Comenzar el test
      </Button>
    </Link>
  );
};

export const ButtonOptions = () => {
  const [opinion, setOpinion] = useState("");
  const userCalification = (e) => {
    setOpinion(e.target.value);
  };

  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      alignContent="center"
      justifyContent="center"
      margin="auto"
      width="45%"
    >
      {calificación.map((puntaje, i) => {
        return (
          <GridItem key={i} margin="auto">
            <Input
              type="button"
              value={puntaje}
              borderRadius="0.4rem"
              bg="fondo"
              size="xs"
              h="50px"
              width="50px"
              color="texto"
              _hover={{ bg: "navbar" }}
              variant="outline"
              fontWeight="20px"
              fontSize="2xl"
              onClick={userCalification}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};
