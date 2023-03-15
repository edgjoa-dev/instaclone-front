import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Container, Divider, LinkBox, Text } from '@chakra-ui/react'
import { FaUserSlash } from 'react-icons/fa';

export const UserNotFound = () => {
    return (
        <Container centerContent w='100vw' dir='row'>
            <Divider fontWeight='extrabold' />
            <Box display='flex' justifyContent='center' alignItems='center'  flexDir='column' w='100%' mt='16'>
                <FaUserSlash size={42} />
                <Text fontSize='3xl' fontWeight='medium' textAlign='center'> Usuario No Encontrado </Text>
                <Text fontSize='18px' fontWeight='light' textAlign='center'> Es posible que el enlace sea incorrecto o el usuario a sido eleiminado. :( </Text>
                    <LinkBox color='teal.500' cursor='pointer' mt='10' _hover={{ textDecor:'underline' }}>
                            <Link to='/'>
                                Volver a home.
                            </Link>
                    </LinkBox>
            </Box>
        </Container>
    )
}
