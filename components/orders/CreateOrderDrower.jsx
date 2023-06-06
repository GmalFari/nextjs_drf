import React from 'react'
import CustOrders from './CustOrders';
import { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

import { useDisclosure } from '@chakra-ui/react';

const OrderCreateDrower = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
  const [data,setData] = useState(
        {
        property_title:"jamal",
        // coverPhoto:"",
        // "location":{  
        //       latitude:"",
        //       longitude:""},
        proType:"",
        purpose:"",
        rentFrequency:"",
        rentFrequency:"",
        city:"",
        state:"",
        directorate:"",
        district:"",
        district:"",
        street:"",
        isForRent:true,
      
        //form2
        title:"",
        img:"",
      })
  return (
    <>

     <Button leftIcon={< FaPlus/>}  ref={btnRef} colorScheme='teal' onClick={onOpen}>
     إضافة طلب
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>إضافة طلب جديد</DrawerHeader>
          <DrawerBody>
            <CustOrders myData={data} />
          </DrawerBody>
          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default OrderCreateDrower
