import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Box, Container, Text } from '@chakra-ui/react';
import { MainLayout } from '../../layouts/MainLayout';

export const Home = () => {

    const auth = useAuth()
    console.log(auth);

    return (
        <MainLayout>
            <Container centerContent>
                <Box> 
                    <Text as='h1' fontSize='5xl'>Home Page</Text>
                </Box>
            </Container>
        </MainLayout>
    )
}
