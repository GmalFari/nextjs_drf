import React from 'react'
import { useState,useContext } from 'react'
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

import CustOrders from "./CustOrders"
import { useDisclosure } from '@chakra-ui/react';


// import OrderCreatebtns  fro./CreateOrderDrowertns"
import { FaPlus } from 'react-icons/fa';
import MainAlert from "../MainAlert"
import {updateOrderApi} from "../../utils/fetchApi"
import AuthContext from "../../context/AuthContext"
const UpdateOrderDrower = ({isColumn,orderDetails}) => {
  let {user} = useContext(AuthContext) ;
  let token = JSON.parse(localStorage.getItem("authTokens"))
  let accessToken = token?.access

      const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [myData,setData] = useState(orderDetails)
      const headerContent = " حذف الطلب";
    const alertDialogHeader = "حذف الطلب ";
    const alertDialogBody = "هل أنت متأكد أنك تريد حذف الطلب ؟";
    const handleDelete = async (e) =>{
        e.preventDefault();
        // deleteProperty(id,accessToken)
    }

    const handleSubmit = async (e) =>{
      e.preventDefault();
      updateOrderApi(myData ,accessToken)
      // deleteProperty(id,accessToken)
  }

  return (
    <Box   display={"flex"} ml={"5px"} flexWrap={"wrap"}>
      <Button leftIcon={< FaPlus/>}  ref={btnRef} colorScheme='teal' onClick={onOpen}>
      تعديل الطلب
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
        
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>

          <Box mt="30px" textAlign={"center"}>
                      
    </Box>
          </DrawerHeader>
          <DrawerBody>

          <CustOrders myData={myData} 
              setData={setData} handleSubmit={handleSubmit} />
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
    </Box>
  )
}

export default UpdateOrderDrower;
