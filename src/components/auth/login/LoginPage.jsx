import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'


export const LoginPage = ( props ) => {

    const { setShowLogin } = props;
    console.log(setShowLogin);

    return (
        <Container>
            <Box>
                <Text as='h1'> Login </Text>
            </Box>
        </Container>
    )
}
