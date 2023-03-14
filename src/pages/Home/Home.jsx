import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Box, Container, Text } from '@chakra-ui/react';
import { MainLayout } from '../../layouts/MainLayout';
import 'animate.css';


export const Home = () => {

    const auth = useAuth()
    //console.log(auth);

    return (
        <MainLayout>
            <Container centerContent className='animate__animated animate__fadeInUp' >
                <Box> 
                    <Text as='h1' fontSize='5xl'>Home Page</Text>
                </Box>
            </Container>
        </MainLayout>
    )
}
