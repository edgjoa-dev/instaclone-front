import React from 'react'
import { Box, Button, Container, FormControl, Input, Text } from '@chakra-ui/react'
import { useFormik } from 'formik';


export const LoginPage = ( props ) => {

    const { setShowLogin } = props;
    console.log(setShowLogin);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: null,
        onSubmit: async( formData )=> {
            console.log(formData);
        }
    })




    return (
        <Container>
            <Box>
                <Text as='h2' fontSize='17px' fontWeight='medium' textAlign='center'>
                    Inicia sesión para ver vídeos y fotos de tus amigos
                </Text>

                <FormControl as='form'
                    onSubmit={ formik.handleSubmit }
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
                        name='email'
                        type='email'
                        value={ formik.values.email }
                        onChange={ formik.handleChange }
                        />

                    <Input
                        id='password'
                        placeholder='password'
                        variant='filled'
                        name='password'
                        type='password'
                        value={ formik.values.password }
                        onChange={ formik.handleChange }
                        />

                <Button colorScheme='telegram' type='submit' w='full' mt='55px'>
                    Iniciar sesión
                </Button>
                
                </FormControl>
            </Box>
        </Container>
    )
}




function initialValues() {
    return{
        email: '',
        password: '',
    }

}