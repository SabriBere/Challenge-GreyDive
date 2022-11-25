import React, { useState, useEffect } from "react";
import { Flex, Text, Grid, Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { fetchApi } from "../config/axiosInstance";
import { motion } from "framer-motion";

const Home = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getAllQuestions = async () => {
      const res = await fetchApi({
        method: "get",
        url: "/api/clientes/",
      });
      setData(res.data.data.rows);
    };
    getAllQuestions();
  }, [data]);

  return (
    <Flex
      width="100%"
      height="87.2vh"
      bg="fondo"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
    >
      <Flex
        width="100%"
        margin="auto"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition="all .20s ease-out"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
      >
        <Flex flexDirection="column" width="55%" margin="auto">
          <Input
            placeholder="Buscar testers"
            variant="flushed"
            color="navbar"
            focusBorderColor="violet"
            size="md"
            onChange={(e) => setValue(e.target.value)}
          />
        </Flex>
        <br />
        <br />
        <Grid
          templateColumns="repeat(4, 2fr)"
          gap={6}
          width="50%"
          margin="auto"
        >
          {data
            ?.filter((info) => info.cliente?.includes(value))
            .map((info, i) => {
              return (
                <Flex
                  key={i}
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
                  <Text
                    fontSize="40px"
                    fontWeight="bold"
                    textAlign="center"
                    color="navbar"
                    mt="20px"
                  >
                    {info.cliente}
                  </Text>
                  <Text
                    fontSize="15px"
                    textAlign="center"
                    color="texto"
                    mt="30px"
                    padding="10px"
                  >
                    <strong>Resumen:</strong> <br /> Test de usabilidad en el
                    sitio web
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
            })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Home;
