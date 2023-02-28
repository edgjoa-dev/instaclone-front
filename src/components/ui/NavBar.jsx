import { Box, Button, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { WiSolarEclipse } from 'react-icons/wi';
import { BsMoonStarsFill } from 'react-icons/bs';



export const NavBar = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box>
            <header>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <BsMoonStarsFill /> : <WiSolarEclipse />}
                </Button>
            </header>
            
            <Text fontSize='4xl' > Navbar </Text>
        </Box>
    )
}
