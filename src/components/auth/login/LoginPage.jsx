import React, { useState } from 'react'
import { Box, Button, Container, FormControl, Input, Text } from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../gql/user';

export const LoginPage = () => {

    const [error, setError] = useState("")
    const [ login ] = useMutation(LOGIN)
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            email: Yup.string().required(true).matches(/^[a-zA-Z0-9._   -]+@(gmail|yahoo|outlook)\.com$/, 'El correo electrónico no es válido'),
            password: Yup.string('La contraseña es obligatoria')
            .required(true)
            .min(8)
            .test(
                'password-requirements',
                'La contraseña debe contener al menos tres letras mayúsculas, tres letras minúsculas y tres números',
                (value) => {
                    const regexUpper = /[A-Z]/g;
                    const regexLower = /[a-z]/g;
                    const regexNumber = /[0-9]/g;
                    const uppercaseCount = (value.match(regexUpper) || []).length;
                    const lowercaseCount = (value.match(regexLower) || []).length;
                    const numberCount = (value.match(regexNumber) || []).length;
                    return uppercaseCount >= 3 && lowercaseCount >= 3 && numberCount >= 3;
                }
            ),
        }),
        onSubmit: async( formData )=> {
            setError('');
            try {
                const { data } = await login({
                    variables: {
                        input: formData,
                    }
                })
                console.log(data)

            } catch (error) {
                setError(error.message)
            }
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
                    gap='6'
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
                        isInvalid={ formik.errors.email }
                        />

                    <Input
                        id='password'
                        placeholder='password'
                        variant='filled'
                        name='password'
                        type='password'
                        value={ formik.values.password }
                        onChange={ formik.handleChange }
                        isInvalid={ formik.errors.password }
                        />

                <Button colorScheme='telegram' type='submit' w='full' mt='55px'>
                    Iniciar sesión
                </Button>
                
                <Box h='2rem' w='full'>
                    { error && <Text as='p' color='red.500' fontWeight='medium' textAlign='center'> { error } </Text> }
                </Box>
                
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