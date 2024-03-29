import React, { useRef } from 'react'

import { Link } from 'react-router-dom'
import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, Image, Input, Text, useDisclosure } from '@chakra-ui/react'

import { HiMenu } from 'react-icons/hi'
import { BiHome } from 'react-icons/bi'
import { FaPlus } from 'react-icons/fa'

import { useAuth } from '../../hooks/useAuth.js'
import instaclone from '../../assets/png/instaclone.png'
import ImageNotFound from '../../assets/png/avatar.png'


export const DrawerLayout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const { auth } = useAuth();


    return (
        <>
            <Button ref={btnRef} onClick={onOpen} colorScheme='messenger' color='ActiveCaption' variant='ghost' >
                <Icon fontSize={'20'} >
                    <HiMenu />
                </Icon>
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
                    <DrawerHeader>
                        <Image src={instaclone} alt='log-instagram' h='10' w='32' />
                    </DrawerHeader>

                    <DrawerBody display='flex' flexDir='column' gap={4} >
                        <Input placeholder='Type here...' variant='flushed' mb={20}/>

                            <Link to='/' >
                                <Button colorScheme='messenger' color='ActiveCaption' variant='ghost' w='full' gap={5}>
                                    <Icon fontSize={25} > <BiHome /> </Icon> Home
                                </Button>
                            </Link>

                            <Button colorScheme='messenger' color='ActiveCaption' variant='ghost' w='full' gap={5}>
                                <Icon fontSize={'20'} >
                                    <FaPlus />
                                </Icon>
                            </Button>

                            <Link to={`/${auth.userName}`} >
                                <Button colorScheme='messenger' color='ActiveCaption' variant='ghost' w='full' gap={5} >
                                    <Avatar size='sm'  src={ImageNotFound} /> <Text> Avatar </Text>
                                </Button>
                            </Link>
                            
                    </DrawerBody>

                </DrawerContent>
        </Drawer>
        </>
    )
}
