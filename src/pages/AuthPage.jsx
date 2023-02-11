import { Box, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

import instaclone from '../assets/instaclone.png'
import { LoginForm } from '../components/Auth/login/LoginForm';
import { RegisterForm } from '../components/Auth/register/RegisterForm';

export const AuthPage = () => {

  const [showLogin, setShowLogin] = useState(true);


  return (
      <Box bg='bgLight.100' display='flex' flexDirection='column' justifyContent='center' alignItems='center' h='100vh' w='100vw'  p='5'>

        <Box as='div' mb='5rem'>
          <Image src={instaclone} alt='instaclone_logo' w='250px'/>
        </Box>
        
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' p='1rem' >
          {showLogin ? (
            <LoginForm />
          ) : (
            <RegisterForm setShowLogin={setShowLogin} />
          )}
        </Box>

        <Box as='div'  borderRadius='15px' borderColor='grey.50' w='450px' h='75px' display='flex' justifyContent='center' alignItems='center'>
          {showLogin ? (
            <Text as='p'>
              ¿No tienes cuenta?
              <Text as='span' cursor={'pointer'} ml='3' color='actionColor.100' fontWeight='medium'  _hover={{ cursor:'pointer', textDecoration:'underline' }} onClick={() => setShowLogin(!showLogin)}>Regístrate</Text>
            </Text>
          ) : (
            <Text as='p'>
              ¡Entra con tu cuenta!
              <Text as='span' cursor={'pointer'} ml='3' color='actionColor.100' fontWeight='medium' _hover={{ cursor:'pointer', textDecoration:'underline' }} onClick={() => setShowLogin(!showLogin)}>
                Iniciar sesión
              </Text>
            </Text>
          )}
        </Box>
      </Box>
  )
}
