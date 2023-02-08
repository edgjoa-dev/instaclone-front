import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import instaclone from "../assets/instaclone.png";
import { LoginForm } from "../components/Auth/login";
import { RegisterForm } from "../components/Auth/register";

export const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      bg="gray.100"
    >
      <Image w="125px" src={instaclone} alt={"instaclone"} />

      <Box
        w="400px"
        bg="gray.50"
        p="20px 50px"
        border="1px solid gray.500"
        mt="50px"
        borderRadius="10px"
        width={{ base: "75%", sm: "100%", md: "25%" }}
      >
        <Text as="div">
          {" "}
          {showLogin ? (
            <LoginForm />
          ) : (
            <RegisterForm setShowLogin={setShowLogin} />
          )}{" "}
        </Text>
      </Box>

      <Box
        w="400px"
        bg="gray.50"
        p="20px 50px"
        border="1px solid gray.500"
        mt="50px"
        borderRadius="10px"
      >
        <Text>
          {showLogin ? (
            <>
              ¿No tienes cuenta?
              <Text
                as="span"
                onClick={() => setShowLogin(!showLogin)}
                color="actionColor.100"
                _hover={{ cursor: "pointer", textDecor: "underline" }}
                fontWeight="bold"
                ml="5px"
              >
                Registrate
              </Text>
            </>
          ) : (
            <>
              ¿Tienes una cuenta?
              <Text
                as="span"
                onClick={() => setShowLogin(!showLogin)}
                ml="5px"
                color="actionColor.100"
                fontWeight="bold"
                _hover={{ cursor: "pointer", textDecor: "underline" }}
              >
                Inicia Sesión
              </Text>
            </>
          )}
        </Text>
      </Box>
    </Box>
  );
};
