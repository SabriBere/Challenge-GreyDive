import React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";
const calificación = [1,2,3,4,5]

export const ButtonContinue = () => {
  return (
      <Button bg="navbar" size="lg" color="texto" _hover={{ bg: "fondo" }}>
        Continuar
      </Button>
  );
};

export const ButtonOptions = () => {
  return(
    <Grid templateColumns="repeat(5, 1fr)"  alignContent="center" justifyContent="center" margin="auto" width="45%">
      {calificación.map((puntaje, i)=>{
        return(
          <GridItem key={i} margin="auto">
      <Button bg="fondo" size="xs" h="50px" width="50px"  color="texto" _hover={{ bg: "navbar" }} variant='outline' fontWeight="20px" fontSize="2xl">
        {puntaje}
      </Button>
      </GridItem>
        )
      })}
  </Grid>

  )
  
};

