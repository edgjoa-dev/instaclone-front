import { Box, Button, Input, InputGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const RegisterForm = (props) => {
  console.log(props);

  const toggleSubmit = ()=> {
    console.log('formulario enviado');
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDir="column"
      p="3"
      bg="gray.50"
      borderRadius='10px'
      boxShadow='2xl'
      w='calc( 100% - 10px )'
      h='500px'
    >
      
      <Text
        as="h1"
        fontSize="17px"
        textAlign="center"
        mb="20px"
        fontWeight="semibold"
      >
        Regístrate para ver fotos y vídeos de tus amigos.
      </Text>
      <Stack spacing={3} p="1rem">
        <InputGroup display="flex" justifyContent="center" flexDir="column">
          <Input
            type="text"
            autoFocus={true}
            bg="gray.100"
            borderRadius="10px"
            placeholder="Nombre y apellidos"
            p="3"
            variant="flushed"
            w="full"
            mb={3}
          />

          <Input
            type="text"
            bg="gray.100"
            borderRadius="10px"
            placeholder="Nombre de usuario"
            p="3"
            variant="flushed"
            w="full"
            mb={3}
          />

          <Input
            type="email"
            bg="gray.100"
            borderRadius="10px"
            placeholder="Correo eléctronico"
            p="3"
            variant="flushed"
            w="full"
            mb={3}
          />

          <Input
            type="password"
            bg="gray.100"
            borderRadius="10px"
            placeholder="Contraseña"
            p="3"
            variant="flushed"
            w="full"
            mb={3}
          />

          <Input
            type="password"
            bg="gray.100"
            borderRadius="10px"
            placeholder="Repetir contraseña"
            p="3"
            variant="flushed"
            w="full"
            mb={3}
          />
        </InputGroup>
        <Button
          type="submit"
          bg='actionColor.100'
          color='gray.100'
          w='full'
          p='1'
          borderRadius='5px'
          fontWeight='medium'
          _hover={{ bg:'#1D4ED8' }} onClick={toggleSubmit}>
          Registrar
        </Button>
      </Stack>
    </Box>
    
  );
};
