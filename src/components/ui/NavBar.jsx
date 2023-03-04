import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Input, Radio, RadioGroup, Spacer, Stack, Text, useColorMode, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { WiSolarEclipse } from 'react-icons/wi';
import { BsMoonStarsFill } from 'react-icons/bs';
import { HiMenu, HiMenuAlt1 } from 'react-icons/hi';



export const NavBar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
    <Box display='flex' flex justifyContent='center' alignItems='center' w='100%' p='3' >
            <Button ref={btnRef} onClick={onOpen} colorScheme='telegram' variant='outline'>
                <HiMenu />
            </Button>
            <Spacer />
            <Button onClick={toggleColorMode} colorScheme='telegram' variant='outline' >
                {colorMode === 'light' ? <BsMoonStarsFill /> : <WiSolarEclipse />}
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Buscar...</DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' variant='filled'/>
                </DrawerBody>

                </DrawerContent>
            </Drawer>
    </Box>
    )


}
