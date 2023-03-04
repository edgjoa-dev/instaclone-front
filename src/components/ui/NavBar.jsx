import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Spacer, Stack, Text, useColorMode, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { WiSolarEclipse } from 'react-icons/wi';
import { BsMoonStarsFill } from 'react-icons/bs';
import { BiHome, BiSearchAlt } from 'react-icons/bi';
import { HiMenu, HiMenuAlt1 } from 'react-icons/hi';
import instaclone from '../../assets/png/instaclone.png'
import { Link } from 'react-router-dom';


export const NavBar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

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
            <Button onClick={toggleColorMode} colorScheme='blackAlpha' color='ActiveCaption' variant='ghost'>
                {colorMode === 'light' ? <BsMoonStarsFill /> : <WiSolarEclipse />}
            </Button>
            <Button colorScheme='blackAlpha' color='ActiveCaption' variant='ghost'>
                <Link to='/' >
                    <BiHome />
                </Link>
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
            <Button ref={btnRef} onClick={onOpen} colorScheme='blackAlpha' color='ActiveCaption' variant='ghost'>
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
                <DrawerHeader><Image src={instaclone} alt='log-instagram' h='10' w='32' /></DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' variant='filled'/>
                </DrawerBody>

                </DrawerContent>
            </Drawer>
    </Box>
    )


}
