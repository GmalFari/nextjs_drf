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
  ,Box

} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import MainAlert from "../MainAlert"
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
      const headerContent = " حذف العقار";
    const alertDialogHeader = "حذف العقار ";
    const alertDialogBody = "هل أنت متأكد أنك تريد حذف العقار ؟";

    const handleDelete = async (e) =>{
        e.preventDefault();
        // deleteProperty(id,accessToken)
    }
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
          <DrawerHeader>

          <Box mt="30px" textAlign={"center"}>
    <Button ms={"20px"} me={"20px"}  colorScheme='teal' variant='outline'>
        تعديل الطلب
    </Button>
    <MainAlert headerContent={headerContent} 
                    alertDialogHeader={alertDialogHeader} 
                    alertDialogBody={alertDialogBody} 
                    handleSubmit={handleDelete} />
                      
    </Box>
          </DrawerHeader>
          <DrawerBody>
            <CustOrders myData={data} />
          </DrawerBody>
          {/* 
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          
          */}
<DrawerFooter>
</DrawerFooter> 
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default OrderCreateDrower
