import { Box, Button, Flex, Input, InputGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const RegisterForm = (props) => {
  console.log(props);

  return (
    <Box
    alignItems='center'
    //bg='gold'
    borderRadius='15px'
    borderWidth="1px"
    display='flex'
    flexDirection='column'
    minH='fit-content'
    justifyContent='flex-start'
    shadow="md"
    p='5'
    w= {[ 300 , 400 , 500 ]}
  >

  <Text as='h3' p='5' mb='10' mt='1' fontSize='lg' fontWeight='medium' textAlign='center'>
    Regístrate para ver fotos y videos de tus amigos.
  </Text>

  <Flex w='calc( 100% - 25% )' justifyContent='center' flexDirection='column' >

  <Input
    autoFocus={true}
    placeholder='Nombre y apellido'
    borderRadius='5px'
    p='2'
    w='full'
    bg='gray.50'
    variant='flushed'
    type='text'
        mb='5'
      />

  <Input
    placeholder='Usuario'
    borderRadius='5px'
    p='2'
    w='full'
    bg='gray.50'
    variant='flushed'
    type='text'
    mb='5'
      />

  <Input
    placeholder='Correo'
    borderRadius='5px'
    p='2'
    w='full'
    bg='gray.50'
    variant='flushed'
    type='email'
    mb='5'
      />

  <Input
    placeholder='Contraseña'
    borderRadius='5px'
    p='2'
    w='full'
    bg='gray.50'
    variant='flushed'
    type='password'
    mb='5'
  />

  <Input
    placeholder='Repetir contraseña'
    borderRadius='5px'
    p='2'
    w='full'
    bg='gray.50'
    variant='flushed'
    type='password'
    mb='5'
  />

  <Button type="submit" mt='2' colorScheme="blue" w='full'>
    Registrar
  </Button>

  </Flex>

  </Box>
  );
};
