import React from 'react'
import { Button,Box,Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import AuthContext from "../context/AuthContext";
import { useRouter } from 'next/router';
import { useDisclosure } from '@chakra-ui/react'
import { useState,useEffect } from 'react';
import {FiTrash} from "react-icons/fi"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';
const MainAlert=({headerContent,alertDialogHeader,alertDialogBody,handleSubmit})=> {
  const {logoutUser}=useContext(AuthContext)
  const opens = true;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [islogout,setLogout]=useState(false)
  useEffect(()=>{
      if(islogout){
        logoutUser();
      }
  },[islogout, logoutUser])
  return (
    <>
<Button   onClick={onOpen} colorScheme='red' variant='outline'>
  {headerContent} 
  <FiTrash mx={'2px'} />
  </Button>      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        textAlign={"left"}
      >
        <AlertDialogOverlay />

        <AlertDialogContent >
          <AlertDialogHeader flexBasis={"1"}> {alertDialogHeader}   </AlertDialogHeader>
          <AlertDialogCloseButton  />
          <AlertDialogBody>
          {alertDialogBody}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} >
              لا 
            </Button>
            <form onSubmit={handleSubmit}>
              <Button  type="submit" onClick={onClose} colorScheme='red' ml={3}>
              نعم
            </Button>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
export default MainAlert;
