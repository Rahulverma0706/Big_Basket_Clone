import React from 'react'
import { Stack, Input, Popover, PopoverArrow, Button, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverTrigger, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, FormControl, FormLabel, useDisclosure, ModalFooter} from "@chakra-ui/react"

function InitialFocus() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)
        return (
            <>
            <Button onClick={onOpen} style={{backgroundColor:'black', color:'white'}}>Login / Sign up</Button>

                <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>First name</FormLabel>
                                <Input ref={initialRef} placeholder='First name' />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Last name</FormLabel>
                                    <Input placeholder='Last name' />
                                    </FormControl>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3}>
                                            Save
                                            </Button>
                                            <Button onClick={onClose}>Cancel</Button>
                                            </ModalFooter>
                                            </ModalContent>
                                            </Modal>
                                            <img src="https://cdn-icons-png.freepik.com/512/275/275790.png" alt="Cart img" width={50} height={40} />


   </>
  )}

export default InitialFocus
