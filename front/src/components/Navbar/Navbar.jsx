import React from 'react'
import { Flex, Text} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex
    w="100%"
    h="80px"
    bg="navbar"
    alignItems="center"
    justifyContent="center"
    >
      <Text as="h1" color="texto" fontWeight="bold" fontSize="30px">
      simulacr.
      </Text>
      
    </Flex>
  )
}

export default Navbar