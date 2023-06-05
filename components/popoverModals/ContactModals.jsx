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
    Checkbox,
    IconButton
  } from '@chakra-ui/react';
import { FaEnvelope,FaWhatsapp,FaPhone } from 'react-icons/fa';
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
      <Box dir="rtl" fontSize={"sm"}>
        <FormControl >
                <FormLabel> البريد الإلكتروني</FormLabel>
                <Input ref={initialRef} value={contactWith} name="email"
            onChange={onChange} placeholder='البريد الإلكتروني' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>المحتوى</FormLabel>
                <Textarea>
                مرحباً، أرغب بالاستفسار عن عقارك رقم:  1799-Ap-S-1838. أرجو منك الاتصال بي في أقرب وقت ممكن.
                </Textarea>
                
              </FormControl>
              <FormControl mt={4}>
              <Checkbox size='sm' colorScheme='green' defaultChecked>
              أعلمني عن العقارات المشابهه
            </Checkbox>
              </FormControl>
              <FormControl mt={4}>
              <Button width={"full"} leftIcon={<FaEnvelope />} colorScheme='teal' variant='solid'>
                </Button>
              </FormControl>
      </Box>
    }
    else if (contentType=="w"){
      mainContent = <>
      <Link width={"full"} href={`https://wa.me/${contactWith}`}
      target={"_blank"}>
             
       <FormControl mt={4}>
              <Button width={"full"} leftIcon={<FaWhatsapp />} bg={"#28b16d"}
              color={"white"}
               variant='solid'>
                  وتس أب
                </Button>
              </FormControl>
      </Link>
      </>
    }
    else if (contentType === "p"){
      mainContent = <>
        <FormControl mt={4}>
              <Center>
              <Link href={"tel:+96776278868"} color="teal">+96776278868  
              {/* <IconButton
                ms={"20px"}
                colorScheme='teal'

                borderRadius={"50%"}
                aria-label='Search database'
                icon={<FaPhone />}
              /> */}
              </Link>
              </Center>
             </FormControl>
        <FormControl mt={4}>
        <Link href={"tel:+96776278868"} color="teal">

              <Button width={"full"} leftIcon={<FaPhone />}
              colorScheme='teal'
              color={"white"}
               variant='solid'>
                                   أتصل
                </Button>
                </Link>
              </FormControl>
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
          size="sm"
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader dir="rtl" textAlign={"center"} >تواصل لمزيد من المعلومات</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            {mainContent}
            </ModalBody>
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