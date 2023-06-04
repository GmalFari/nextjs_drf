import React from 'react';
import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
    Center,
    Textarea,
  } from '@chakra-ui/react';
import Link from 'next/link';
import { useDisclosure } from '@chakra-ui/react';
const ContactPopover=({icon,bgcolor,color,content,contactWith,
    contentType,    
    })=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    // add add it
    const CHARACTER_LIMIT = 100;

        const [numberEmptyError, setNumberEmptyError] = useState(false);
        const [messageEmptyError, setMessageEmptyError] = useState(false);
        
        const [formData, setFormData] = useState({
            mobileNumber: "",
            message: "",
        });
        
        const { mobileNumber, message } = formData;
        
        const onChange = (e) => {
            e.preventDefault();
            setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            });
        };
        
        const onSubmit = (e) => {
            e.preventDefault();
            if (mobileNumber.length < 1) {
            setNumberEmptyError(true);
            setTimeout(() => setNumberEmptyError(false), 3000);
            } else if (message.length < 1) {
            setMessageEmptyError(true);
            setTimeout(() => setMessageEmptyError(false), 3000);
            } else {
            // TODO: Enter code here
            }
        };
        let mainContent = ''
    if(contentType === "e"){
      mainContent = 
      <>
        <FormControl>
                <FormLabel> البريد الإلكتروني</FormLabel>
                <Input ref={initialRef} value={contactWith} name="email"
            onChange={onChange} placeholder='البريد الإلكتروني' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>المحتوى</FormLabel>
                <Textarea>

                </Textarea>
                
              </FormControl>
              <Button 
               pt={0}
      //     pb={0} ps={5} pe={5} 
          bg={bgcolor}
       colorScheme={bgcolor} 
      // fontSize fontWeight={700} variant='inline' 
      // color={color}
      // height={'2.1rem'}
      >
        إرسال</Button>
              <FormControl>

              </FormControl>
      </>
    }
    else if (contentType=="w"){
      mainContent = <>
      <Center>
      <Link href={`https://wa.me/${contactWith}`}
      target={"_blank"}>
        
        <Button 
          onClick={onOpen} pt={0}
      //     pb={0} ps={5} pe={5} 
          bg={bgcolor}
       colorScheme={bgcolor} 
      // fontSize fontWeight={700} variant='inline' 
      // color={color}
      // height={'2.1rem'}
      >
        
        الذهاب للوتس أب
        </Button>
      </Link>
      </Center>
      </>
    }
    else if (contentType === "p"){
      mainContent = <>
        open contact
        <Link href={`tel:${776278868}`}>
        <Button 
          onClick={onOpen} pt={0}
      //     pb={0} ps={5} pe={5} 
          bg={bgcolor}
       colorScheme={bgcolor} 
      // fontSize fontWeight={700} variant='inline' 
      // color={color}
      // height={'2.1rem'}
      >
        أتصل        </Button>
        </Link>
      </>
      
    }
  
    return (
      <>
      <Button 
          onClick={onOpen} pt={0}
      //     pb={0} ps={5} pe={5} 
          bg={bgcolor}
       colorScheme={bgcolor} 
      // fontSize fontWeight={700} variant='inline' 
      // color={color}
      // height={'2.1rem'}
      >
        {icon}<small>
        {content||''}</small>
     
        </Button>

        {/* <Button >Open Modal</Button> */}
        {/* <Button ml={4} ref={finalRef}>
          I Will receive focus on close
        </Button> */}
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>مراسلة مع {contactWith}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            {mainContent}
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
            {numberEmptyError && (
          <Box className="errors">Mobile number cannot be empty!</Box>
        )}
        {messageEmptyError && (
          <Box className="errors">Message cannot be empty!</Box>
        )}
        {!numberEmptyError && !messageEmptyError && (
          <Box className="errors-null">.</Box>
        )}
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ContactPopover;