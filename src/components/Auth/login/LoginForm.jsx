import React from 'react'

import {
  Flex,
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
      w= {[ 300 , 400 , 500 ]}
    >
      <Text as='h3' p='5' mb='10' mt='1' fontSize='lg' fontWeight='medium' textAlign='center'>
        Entra para ver fotos y vídeos de tus amigos.
      </Text>

  <Flex w='calc( 100% - 25% )' justifyContent='center' flexDirection='column' >
    <Input
      autoFocus={true}
      placeholder='Correo electronico'
      borderRadius='5px'
      p='2'
      w='full'
      bg='gray.50'
      variant='flushed'
      type='email'
      mb='5'
    />

    <Input
      placeholder='Password'
      borderRadius='5px'
      p='2'
      w='full'
      bg='gray.50'
      variant='flushed'
      type='password'
    />
    <Button mt={20} type="submit" colorScheme="blue" w='full'>
      Login
    </Button>

  </Flex>


  </Box>
  )
}