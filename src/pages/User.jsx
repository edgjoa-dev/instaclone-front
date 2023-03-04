import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'

export const User = () => {

    const params = useParams()
    console.log(params);

    return (
        <MainLayout>
            <Box>
                <Text as='h1' fontSize='6xl'> User Page</Text>
            </Box>
        </MainLayout>
    )
}
