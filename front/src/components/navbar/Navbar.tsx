import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition="all .5s ease-out"
      w="100%"
      h="80px"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      alignItems="center"
      justifyContent="center"
    >
      <Text as="h1" color="texto" fontWeight="bold" fontSize="30px">
        <Link to={"/"}>
        simulacr.
        </Link>
      </Text>
    </Flex>
  );
};

export default Navbar;
