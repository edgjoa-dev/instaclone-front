import React from 'react'

import { Container, Text } from '@chakra-ui/react'

import { useQuery } from '@apollo/client'
import { GET_USER } from '../../../gql/user'

export const Profile = (props) => {
    const { username } = props;

    const { data, loading, error } = useQuery(GET_USER,{
        variables: { username }
    })
        if(loading) return <Text fontSize='3xl'> Loading... </Text>
        if(error) return <Text fontSize='3xl'>Usuario no encontrado!</Text>
        const { getUser } = data;
        console.log(getUser);

    return (
        <Container centerContent>
            <Text as='h1' fontSize='6xl'> { username }</Text>
        </Container>
    )
}
