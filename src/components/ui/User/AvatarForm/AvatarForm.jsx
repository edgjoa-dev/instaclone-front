import { Box, Button, Container, Divider, Text } from '@chakra-ui/react'
import React from 'react'

export const AvatarForm = ({ setShowModal }) => {
    return (
        <Container centerContent w='full'>
            <Box  display='flex' flexDir='column' w='100%' >
                    <Button bg='AppWorkspace' w='100%' color='blue.500' >Cargar una foto</Button>
                <Divider />
                    <Button bg='AppWorkspace' w='100%' color='red.500' >Eliminar foto actual</Button>
                <Divider />
                    <Button bg='AppWorkspace' w='100%' onClick={()=> setShowModal(false)} >Cancelar</Button>
                <Divider />
            </Box>
        </Container>
    )
    }
