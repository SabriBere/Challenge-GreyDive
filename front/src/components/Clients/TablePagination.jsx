import React, {useState} from 'react'
import { Flex, Button, Text } from '@chakra-ui/react'

const TablePagination = ({max = 4, page, setPage}) => {
    const [input, setInput] = useState(1)
    const nextPage = () => {
        setPage(page + 1);
      };

      const previousPage = () => {
        setPage(page - 1);
      };

  return (
    <Flex
    mt="2%"
    ml={{md1:"75%", base:"20%"}}
    >
    
        <Button
        onClick={() => previousPage()}
        bg="navbar"
        size="sm"
        color="texto"
        _hover={{ bg: "violet" }}
        disabled={page === 1 || page < 1}
        mr="20px"
      >
        Anterior
      </Button>
        <Text mt="3px">
            {page} de {max}
        </Text>
        <Button
        onClick={() => nextPage()}
        bg="navbar"
        size="sm"
        color="texto"
        _hover={{ bg: "violet" }}
        disabled={page === Math.ceil(max) || page > Math.ceil(max)}
        ml="20px"
      >
        Siguiente
      </Button>
    </Flex>
  )
}

export default TablePagination