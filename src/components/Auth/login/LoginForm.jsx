import React from 'react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Button,
  Text,
} from '@chakra-ui/react'

export const LoginForm = () => {
  return (
    <Box
      alignItems='center'
      //bg='gold'
      borderRadius='15px'
      borderWidth="1px"
      display='flex'
      flexDirection='column'
      h='500px'
      justifyContent='flex-start'
      shadow="md"
      p='5'
      w='450px'
    >
      <Text as='h3' p='5' mb='10' mt='1' fontSize='lg' fontWeight='medium' >
        Regístrate para ver fotos y videos de tus amigos.
      </Text>

      <Box w='calc( 100% - 25% )'>
        <Input
          autoFocus={true}
          placeholder='Correo electronico'
          borderRadius='5px'
          p='2'
          w='full'
          bg='gray.50'
          variant='flushed'
        />
      </Box>

      <Button mt={4} type="submit" colorScheme="blue" w='calc( 100% - 25% )'>
        Submit
      </Button>
  </Box>
  )
}