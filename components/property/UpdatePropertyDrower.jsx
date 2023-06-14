import React from 'react'
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
import Multistep from '../MultiSteps';
import { FaPlus } from 'react-icons/fa';
import MainAlert from "../MainAlert"
import { useDisclosure } from '@chakra-ui/react';

const UpdatePropertyDrower = ({propertyDetails}) => {
    console.log(propertyDetails)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
  const [myData,setData] = useState(propertyDetails)
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
      تعديل العقار
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
    <MainAlert headerContent={headerContent} 
                    alertDialogHeader={alertDialogHeader} 
                    alertDialogBody={alertDialogBody} 
                    handleSubmit={handleDelete} />
                      
    </Box>
          </DrawerHeader>
          <DrawerBody>
          <Multistep myData={myData} setData={setData}/>
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


export default UpdatePropertyDrower
