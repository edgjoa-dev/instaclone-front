import React, { useState } from 'react'
import { Box, Container, Image, Text } from '@chakra-ui/react'
import   instaclone   from '../../assets/png/instaclone.png'
import 'animate.css';
import { LoginPage } from '../../components/auth/login';
import { RegisterPage } from '../../components/auth/register';


export const AuthPage = () => {

    const [showLogin, setShowLogin] = useState(false)

return (
    <Container className="animate__animated animate__fadeIn">
        <Box as='div'
            alignItems='center'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            >

            <Box display='flex' justifyContent='center' alignItems='center' as='div' mb='10' mt='10' p='1rem'>
                <Image  objectFit='contain' maxW='200px' maxH='180px' src={instaclone} alt='instaclone_logo'/>
            </Box>

            <Box as='div'
                border='1px solid'
                borderColor='gray.100'
                borderRadius='5px'
                bg='whiteAlpha.700'
                mt='5px'
                p='20px 50px'
                maxW='400px'
                >
                { showLogin ? (
                    <LoginPage/>
                ) : (
                    <RegisterPage  setShowLogin={setShowLogin} /> 
                )
                }
            </Box>

            <Box as='div'
                border='1px solid'
                borderColor='gray.100'
                borderRadius='5px'
                bg='whiteAlpha.700'
                mt='20px'
                p='20px 50px'
                textAlign='center'
                w='400px'

            >
                <Text as='p'>
                { showLogin ? (
                    <>
                        ¿No tienes cuenta?
                        <Text as='span'
                            _hover={{ textDecor:'underline', cursor:'pointer', fontWeight:'bold' }}
                            color='blue.300'
                            fontWeight='medium'
                            ml='.5rem'
                            onClick={ ()=> setShowLogin(!showLogin) }
                        > Regístrate </Text>
                    </>
                ):(
                    <>
                        ¿Ya tienes una cuenta?
                        <Text as='span'
                            _hover={{ textDecor:'underline', cursor:'pointer', fontWeight:'bold' }}
                            color='blue.300'
                            fontWeight='medium'
                            ml='.5rem'
                            onClick={ ()=> setShowLogin(!showLogin) }
                        > Inicia sesión </Text>
                    </>
                    ) 
                }
                </Text>
            </Box>
        </Box>
    </Container>
)
}
