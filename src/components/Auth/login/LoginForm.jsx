import React from 'react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Button,
} from '@chakra-ui/react'

export const LoginForm = () => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" h='500px' w='450px' borderRadius='15px' display='flex' justifyContent='center' alignItems='center'  >
    <form>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          borderWidth="1px"
          borderRadius='5px'
          p='3'
          w='full'
          type="email"
          id="email"
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
        />
      </FormControl>
      <Button mt={4} type="submit" colorScheme="teal">
        Submit
      </Button>
    </form>
  </Box>
  )
}