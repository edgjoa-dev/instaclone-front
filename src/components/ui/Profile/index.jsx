import React from 'react'

import { Container, Text } from '@chakra-ui/react'

import { useQuery } from '@apollo/client'
import { GET_USER } from '../../../gql/user'

export const Profile = ({ username }) => {

    const result = useQuery(GET_USER,{
        variables: { username }
    })

    console.log(result);

    return (
        <Container centerContent>
            <Text as='h1' fontSize='6xl'> { username }</Text>
        </Container>
    )
}
