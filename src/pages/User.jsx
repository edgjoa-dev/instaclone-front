import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Profile } from '../components/ui/Profile'

export const User = () => {

    const {username} = useParams()
    


    return (
        <MainLayout>
            <Box>
                <Profile username={username} />
            </Box>
        </MainLayout>
    )
}
