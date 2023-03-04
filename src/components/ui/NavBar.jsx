import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Spacer, Stack, Text, useColorMode, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { WiSolarEclipse } from 'react-icons/wi';
import { BsMoonStarsFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { HiMenu, HiMenuAlt1 } from 'react-icons/hi';



export const NavBar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
    <Box display='flex' flex justifyContent='center' alignItems='center' w='100%' p='3' gap='4'>
            <Button onClick={toggleColorMode} colorScheme='twitter' variant='ghost'>
                {colorMode === 'light' ? <BsMoonStarsFill /> : <WiSolarEclipse />}
            </Button>
            <Spacer />
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<BiSearchAlt color='telegram' />}
                />
                <Input type='tel' placeholder='Buscar' />
            </InputGroup>
            <Spacer />
            <Button ref={btnRef} onClick={onOpen} colorScheme='twitter' variant='ghost'>
                <HiMenu />
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
