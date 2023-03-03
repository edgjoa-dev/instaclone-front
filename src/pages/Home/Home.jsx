import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Box, Container, Text } from '@chakra-ui/react';

export const Home = () => {

    const auth = useAuth()
    console.log(auth);

    return (
        <Container centerContent>
            <Box> 
                <Text as='h1' fontSize='5xl'>Home Page</Text>
            </Box>
        </Container>
    )
}
