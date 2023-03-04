import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, Image, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Spacer, Stack, Text, useColorMode, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { WiSolarEclipse } from 'react-icons/wi';
import { BsMoonStarsFill } from 'react-icons/bs';
import { BiHome, BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { DrawerLayout } from './DrawerLayout';


export const NavBar = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
    <Box
        alignItems='center'
        borderBottom='1px solid #dbdbdb'
        boxShadow='md'
        display='flex'
        flex
        gap='4'
        justifyContent='center'
        p='3'
        w='100vw'
    >
            <Button onClick={toggleColorMode} colorScheme='messenger' color='ActiveCaption' variant='ghost'>
                {colorMode === 'light' ? 
                    <Icon fontSize={20} > <BsMoonStarsFill /> </Icon>  
                : 
                    <Icon fontSize={20} > <WiSolarEclipse /> </Icon>
                }
            </Button>
            
            <Spacer />
            
            <InputGroup w='md'>
                <InputLeftElement
                pointerEvents='none'
                children={<BiSearchAlt color='telegram' />}
                />
                <Input type='tel' placeholder='Buscar' />
            </InputGroup>
            
            <Spacer />

            <DrawerLayout />
    </Box>
    )
}