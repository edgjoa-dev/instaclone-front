import { Container } from '@chakra-ui/react'
import React from 'react'
import { NavBar } from '../components/ui/NavBar'

export const MainLayout = ({ children }) => {
    return (
        <Container centerContent w='calc( 100% - 10% )'>
            <NavBar />
            { children }
        </Container>
    )
}
