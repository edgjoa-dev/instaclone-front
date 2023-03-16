import { Box, Button, Container, Divider, Text } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'


export const AvatarForm = ({ setShowModal }) => {

    const onDrop = useCallback( ( acceptedFiles )=> {
        console.log(acceptedFiles);
    }, [])

    const {getRootProps, getInputProps} = useDropzone({
        accept: "image/jpeg, image/jpg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop
    })

    return (
        <Container centerContent w='full'>
            <Box  display='flex' flexDir='column' w='100%' >
                    <Button bg='AppWorkspace' w='100%' color='blue.500' { ...getRootProps() }>Cargar una foto</Button>
                <Divider />
                    <Button bg='AppWorkspace' w='100%' color='red.500' >Eliminar foto actual</Button>
                <Divider />
                    <Button bg='AppWorkspace' w='100%' onClick={()=> setShowModal(false)} >Cancelar</Button>
                    <input {...getInputProps()}/>
                <Divider />
            </Box>
        </Container>
    )
    }
