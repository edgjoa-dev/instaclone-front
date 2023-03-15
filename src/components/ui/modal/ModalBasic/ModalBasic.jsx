import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react'

export const ModalBasic = (props) => {

    const { show, setShow, title, children } = props;
    
    const onClose = ()=>{
        setShow(false)
    }

    // const OverlayTwo = () => (
    //     <ModalOverlay
    //         bg='none'
    //         backdropFilter='auto'
    //         backdropInvert='80%'
    //         backdropBlur='2px'
    //     />
    //     )
    
    return (
        <>

        <Modal isOpen={show} onClose={onClose} >
            {/* <ModalOverlay  OverlayTwo={OverlayTwo} /> */}
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                    <ModalBody>
                        { children }
                    </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}