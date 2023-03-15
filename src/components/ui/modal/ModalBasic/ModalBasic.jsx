import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'

export const ModalBasic = (props) => {

    const { show, setShow, title, children } = props;
    
    const onClose = ()=>{
        setShow(false)
    }
    
    const OverlayTwo = () => (
        <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='40%'
        backdropBlur='2px'
        />
        )

        const [overlay, setOverlay] = useState(<OverlayTwo />)
    
    return (
        <>

        <Modal isCentered isOpen={show} onClose={onClose} setOverlay={setOverlay}>
            { overlay }
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