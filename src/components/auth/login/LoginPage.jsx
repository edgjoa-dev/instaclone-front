import React from 'react'
import { Box, Button, Container, FormControl, Input, Text } from '@chakra-ui/react'


export const LoginPage = ( props ) => {

    const { setShowLogin } = props;
    console.log(setShowLogin);

    return (
        <Container>
            <Box>
                <Text as='h2' fontSize='17px' fontWeight='medium' textAlign='center'>
                    Inicia sesión para ver vídeos y fotos de tus amigos
                </Text>

                <FormControl as='form'
                    mt='1'
                    display='flex'
                    justifyContent='center'
                    flexDir='column'
                    gap='3'
                    p='1'
                    h='333px'
                >

                    <Input
                        id='email'
                        autoFocus={true}
                        placeholder='Correo electrónico'
                        variant='filled'
                        name='name'
                        type='email'
                        />

                    <Input
                        id='password'
                        autoFocus={true}
                        placeholder='password'
                        variant='filled'
                        name='password'
                        type='password'
                        />

                <Button colorScheme='telegram' type='submit' w='full' mt='55px'>
                    Iniciar sesión
                </Button>
                
                </FormControl>
            </Box>
        </Container>
    )
}
