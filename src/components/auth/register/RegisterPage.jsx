import { Box, Button, Container, FormControl, Input, Text, useToast } from '@chakra-ui/react';
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@apollo/client';
import { REGISTER } from '../../../gql/user';

export const RegisterPage = (props) => {

    const { setShowLogin } = props;

    const [ register ] = useMutation(REGISTER)
    const toast = useToast()

    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            name: Yup.string().required(true) ,
            userName: Yup.string().required(true).matches(/^[a-zA-Z0-9-._*¡!\/]+$/, 'El nombre de usuario no es válido'),
            email: Yup.string().required(true).matches(/^[a-zA-Z0-9._   -]+@(gmail|yahoo|outlook)\.com$/, 'El correo electrónico no es válido'),
            password: Yup.string('La contraseña es obligatoria')
            .required(true)
            .min(8)
            .oneOf([Yup.ref('repeatPassword')], 'Las contraseñas no coinciden'),
            repeatPassword: Yup.string()
            .required(true)
            .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
        }),
        onSubmit: async(formData) => {
            try {
                const newUser = formData;
                delete newUser.repeatPassword;
                console.log(newUser);

                const result = await register({
                    variables:{
                        input: newUser,
                    }
                })
                toast({
                    title: 'Cuenta creada.',
                    description: "Hemos creado una cuenta para tí.",
                    status: 'success',
                    variant: 'subtle',
                    position:'top-right',
                    duration: 5000,
                    isClosable: true,
                })
                setShowLogin(true)
                console.log(result);
            } catch (error) {
                toast({
                    title: `Error de registro: ${error.message}`,
                    description: "válidar campos nuevamente",
                    status: 'error',
                    variant: 'subtle',
                    position:'top-right',
                    duration: 5000,
                    isClosable: true,
                })
                console.log(error);
            }
        },
    })
    

    return (
        <Container>
            <Box>
                <Text as='h2' fontSize='17px' fontWeight='medium' textAlign='center'>
                    Regístrate para ver vídeos y fotos de tus amigos
                </Text>

                <FormControl as='form'
                    mt='5'
                    display='flex'
                    justifyContent='center'
                    flexDir='column'
                    gap='3'
                    onSubmit={formik.handleSubmit}
                >
                    <Input
                        id='name'
                        autoFocus={true}
                        placeholder='Nombre completo'
                        variant='filled'
                        name='name'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.name === undefined ? '' : formik.values.name}
                        isInvalid={ formik.errors.name }
                    />
                    
                    <Input
                        id='username'
                        placeholder='Nombre de usario'
                        variant='filled'
                        name='userName'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.userName === undefined ? '' : formik.values.userName}
                        isInvalid={ formik.errors.userName }
                    />
                    
                    <Input
                        id='email'
                        placeholder='Correo electrónico'
                        variant='filled'
                        name='email'
                        type='email'
                        onChange={formik.handleChange}
                        value={formik.values.email === undefined ? '' : formik.values.email}
                        isInvalid={ formik.errors.email }
                    />


                    <Input
                        id='password'
                        placeholder='Contraseña'
                        variant='filled'
                        name='password'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.password === undefined ? '' : formik.values.password}
                        isInvalid={ formik.errors.password }
                    />

                    <Input
                        id='repeatPassword'
                        placeholder='Repetir contraseña'
                        variant='filled'
                        name='repeatPassword'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.repeatPassword === undefined ? '' : formik.values.repeatPassword}
                        isInvalid={ formik.errors.repeatPassword }
                    />

                <Button colorScheme='telegram' type='submit' w='full' mt='5'>
                    Registrar
                </Button>
                </FormControl>

            </Box>
        </Container>
    )
}


function initialValues (){
    return{
        name: '',
        userName: '',
        email: '',
        password: '',
        repeatPassword: '',
    }

}