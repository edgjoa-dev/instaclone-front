import React, { useState } from 'react'

import { Box, Container, Image, Link, Spinner, Text } from '@chakra-ui/react'

import { useQuery } from '@apollo/client'
import { GET_USER } from '../../../gql/user'

import profile_img from '../../../assets/png/avatar.png'

import 'animate.css';
import { UserNotFound } from '../userNotFound'
import { ModalBasic } from '../modal/ModalBasic'
import { AvatarForm } from '../User/AvatarForm'
import { useAuth } from '../../../hooks/useAuth'

export const ProfilePage = (props) => {

    const { username } = props;

    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState('')
    const [childrenModal, setChildrenModal] = useState(null)

    const {auth} = useAuth();
        
        const { data, loading, error } = useQuery(GET_USER, {
            variables: { username }
        })
        if(loading) return <Box > <Spinner color='alphaWhite.500' size={'xl'} thickness='5px'/></Box>
        if(error) return <UserNotFound />
        const { getUser } = data;
        console.log(getUser);

    const handlerModal = (type) => {
        switch (type) {
            case 'avatar':
                setTitleModal( 'Cambiar foto de perfil' )
                setChildrenModal(<AvatarForm setShowModal={setShowModal} />)
                setShowModal(true)
                break;
            default:
                break;
        }
    }

        return (
        <Container centerContent p='4' className='animate__animated animate__fadeInUp' display='flex' justifyContent='space-evenly' flexDir='row' w='100vw' >
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                borderRadius='3xl'
                h='150px'
                w='150px'
            >
                <Image src={profile_img} alt='foto_perfil' borderRadius='50%' size='md' onClick={()=>  username === auth.userName && handlerModal('avatar')} />
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
            <ModalBasic show={ showModal } setShow={ setShowModal } title={titleModal} >
                { childrenModal }
            </ModalBasic>
        </Container>
    )
}
