import React, { useState } from 'react'

import { Box, Container, Image, Link, ModalOverlay, Spinner, Text } from '@chakra-ui/react'

import { useQuery } from '@apollo/client'
import { GET_USER } from '../../../gql/user'

import profile_img from '../../../assets/png/avatar.png'

import 'animate.css';
import { UserNotFound } from '../userNotFound'
import { ModalBasic } from '../modal/ModalBasic'

export const ProfilePage = (props) => {
    const { username } = props;
    console.log(props);

    const [showModal, setShowModal] = useState(false)
    
        
        const { data, loading, error } = useQuery(GET_USER, {
            variables: { username }
        })
        if(loading) return <Box > <Spinner 
        color='alphaWhite.500'
            size={'xl'}
            thickness='5px'
        /></Box>
        if(error) return <UserNotFound />
        const { getUser } = data;
        console.log(getUser);

        return (
        <Container centerContent p='10' className='animate__animated animate__fadeInUp' display='flex' flexDir='row' gap='4'>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                borderRadius='3xl'
                h='150px'
                w='150px'
            >
                <Image src={profile_img} alt='foto_perfil' borderRadius='50%' size='md' onClick={()=> setShowModal(true)} />
            </Box>
            <Box>
                <Text> Header Profile </Text>
                <Text> Followers </Text>
                <Text as='p' fontWeight='bold'>{ getUser.name }</Text>
                    { 
                        getUser.siteWeb && (
                            <Link color='teal.500' href={getUser.siteWeb} isExternal>{getUser.siteWeb}</Link>
                            )
                    }
                    { 
                        getUser.description && (
                            <Text as='h3' fontWeight='medium' mt='1'>{getUser.description}</Text>
                            )
                    }
            </Box>
            <ModalBasic show={ showModal } setShow={ setShowModal } title='Subir Avatar' >
                <p>opciones...</p>
                <p>opciones...</p>
                <p>opciones...</p>
            </ModalBasic>
        </Container>
    )
}
