import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

export const MainColor = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <header>
            <Button onClick={toggleColorMode}>
                Boton {colorMode === 'light' ? 'Dark' :  'Light'}
            </Button>
        </header>
    )
}
