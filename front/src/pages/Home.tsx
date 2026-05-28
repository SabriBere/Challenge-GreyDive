import React, { useState } from "react";
import { Flex, Grid, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import EmptyState from "../components/emptyStates/EmptyState";
import { getTests } from "../services/clients";
import type { Test } from "../types/test";
import Close from "../icons/Close";
import HomeCardsSkeleton from "../components/skeletons/HomeCardsSkeleton";
import HomeCard from "../components/cards/HomeCard";

const Home = () => {
  const [value, setValue] = useState("");
  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["tests"],
    queryFn: getTests,
    retry: false,
  });

  const filteredTests = data.filter((info: Test) =>
    info.cliente?.toLowerCase().includes(value.toLowerCase())
  );

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
        <Flex width="55%" margin="auto">
          <InputGroup>
            <Input
              placeholder="Buscar testers"
              variant="flushed"
              color="navbar"
              focusBorderColor="violet"
              size="md"
              value={value}
              paddingRight="3rem"
              onChange={(e) => setValue(e.target.value)}
            />
            {value !== "" && (
              <InputRightElement cursor="pointer" onClick={() => setValue("")}>
                <Close width={24} height={24} />
              </InputRightElement>
            )}
          </InputGroup>
        </Flex>
        <br />
        <br />
        {isLoading && <HomeCardsSkeleton />}

        {isError && (
          <EmptyState
            title="No hay tests disponibles"
            description="No pudimos cargar la lista de tests en este momento."
          />
        )}

        {isSuccess && !data.length && (
          <EmptyState
            title="No hay tests disponibles"
            description="No hay tests cargados en este momento."
          />
        )}

        {isSuccess && data.length > 0 && !filteredTests.length && (
          <EmptyState
            title="Sin resultados"
            description="No encontramos testers que coincidan con tu búsqueda."
          />
        )}

        {isSuccess && filteredTests.length > 0 && (
          <Grid templateColumns="repeat(4, 2fr)" gap={6} width="50%" margin="auto">
            {filteredTests?.map((info) => {
              return <HomeCard key={info.id} info={info} />;
            })}
          </Grid>
        )}
      </Flex>
    </Flex>
  );
};

export default Home;
