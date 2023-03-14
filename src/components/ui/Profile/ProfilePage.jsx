import React from 'react'

import { Box, Container, Image, Progress, Spinner, Text } from '@chakra-ui/react'

import { useQuery } from '@apollo/client'
import { GET_USER } from '../../../gql/user'

import profile_img from '../../../assets/png/avatar.png'

import 'animate.css';

export const ProfilePage = (props) => {
    const { username } = props;
    console.log(props);

    const { data, loading, error } = useQuery(GET_USER, {
        variables: { username }
    })
        if(loading) return <Box > <Spinner 
            color='alphaWhite.500'
            size={'xl'}
            thickness='5px'
        /></Box>
        if(error) return <Text fontSize='3xl'> Usuario no encontrado! </Text>
        const { getUser } = data;
        console.log(getUser);

    return (
        <Container centerContent p='10' className='animate__animated animate__fadeInUp'>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                borderRadius='3xl'
                h='150px'
                w='150px'
            >
                <Image src={profile_img} alt='foto_perfil' borderRadius='50%' size='md' />
            </Box>
            <Box>
                <Text> Header Profile </Text>
                <Text> Followers </Text>
                <Text as='p'>{ getUser.name }</Text>
                    { 
                        getUser.siteWeb && (
                            <a href={getUser.siteWeb} target='_blank'>{getUser.siteWeb}</a>
                            )
                    }
                    { 
                        getUser.description && (
                            <Text>{getUser.description}</Text>
                            )
                    }
            </Box>
        </Container>
    )
}
