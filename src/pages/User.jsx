import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { ProfilePage } from '../components/ui/Profile/ProfilePage'

export const User = () => {

    const { username } = useParams()


    return (
        <MainLayout>
            <Box>
                <ProfilePage username={username} />
            </Box>
        </MainLayout>
    )
}
