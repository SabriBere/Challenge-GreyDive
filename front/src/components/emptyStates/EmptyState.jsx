import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EmptyState = ({
  title = "",
  description = "",
  actionLabel = "",
  actionTo = "/",
}) => {
  return (
    <Flex
      minH="100%"
      w="100%"
      alignItems="center"
      justifyContent="center"
      bg="fondo"
      color="texto"
      px={6}
      py={16}
    >
      <Flex
        maxW="620px"
        w="100%"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap={5}
      >
        <Heading as="h1" size="2xl" color="magenta2">
          {title}
        </Heading>
        <Text color="texto" fontSize="lg" opacity={0.85}>
          {description}
        </Text>
        {actionLabel && (
          <Button
            as={Link}
            to={actionTo}
            bg="navbar"
            color="texto"
            size="lg"
            _hover={{ bg: "magenta2", transform: "translateY(-2px)" }}
            _active={{ transform: "translateY(0)" }}
          >
            {actionLabel}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default EmptyState;
