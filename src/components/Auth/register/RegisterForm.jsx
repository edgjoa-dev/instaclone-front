import { Box, Input, InputGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const RegisterForm = (props) => {
  console.log(props);

  return (
    <Box display="flex" justifyContent="center" flexDir="column" p="3">
      <Text
        as="h1"
        fontSize="17px"
        textAlign="center"
        mb="20px"
        fontWeight="semibold"
      >
        Regístrate para ver fotos y vídeos de tus amigos.
      </Text>
      <Stack spacing={3}>
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
      </Stack>
    </Box>
  );
};
