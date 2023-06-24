import React from 'react'
import CustOrders from './CustOrders';
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
import { FaPlus } from 'react-icons/fa';
import MainAlert from "../MainAlert"
import { useDisclosure,useToast } from '@chakra-ui/react';

import AuthContext from '../../context/AuthContext';
const OrderCreateDrower = () => {
  let {user} = useContext(AuthContext) ;
  let token = JSON.parse(localStorage.getItem("authTokens"))
  let accessToken = token?.access

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const toast = useToast({
    position: 'top',
    // 'textAlign':'end',
    title: '',
    containerStyle: {
      'textAlign':'center',
      // 'display':'flex',
      // 'justifyContent':'right',
      marginTop:'2em',
      width: '400px',
      Height:"400px",
      maxWidth: '100%',
    },
  });
  const [myData,setData] = useState(
        {
        // req_order_slug:"",
        // coverPhoto:"",
        // "location":{  
        //       latitude:"",
        //       longitude:""},
        req_order_title:"",
        purpose:"",
        // location:"",
        property_town:"",
        property_district:'',
        property_street:'',
        property_area:'',
        rent_frequency:"",
        // ownership_type:"",
        property_description:"",
        property_price:"",
        phone:"",
        rooms: "2",
        baths: "2",
         furnishingStatus: false,
        owner: null,

      })
      const headerContent = " حذف العقار";
    const alertDialogHeader = "حذف العقار ";
    const alertDialogBody = "هل أنت متأكد أنك تريد حذف العقار ؟";
let requestApi = async()=>{
      // setLoading(true);
      const myform = new FormData()
      
      {/*  myform.append("property_number",myData.property_number);
       */}
        // myform.append("owner",user.user_id);
        myform.append("req_order_title",myData.req_order_title);
        myform.append("property_description",myData.property_description);
        myform.append("purpose",myData.purpose);                                                            
        myform.append("property_town",myData.property_town);
        myform.append("rent_frequency",myData.rent_frequency);
        // myform.append("location",JSON.stringify(propertyLocation));
        myform.append("property_price",myData.property_price);
        myform.append("phone",myData.phone);
        myform.append("rooms",myData.rooms);
        myform.append("baths",myData.baths);
        myform.append("is_negotiable",myData.is_negotiable);
        myform.append("furnishingStatus",myData.furnishingStatus);

        const url = 'https://fortestmimd.pythonanywhere.com/api/requests-app/'
        const options = {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`          },
          body: myform
          // JSON.stringify({"req_order_title":myData.req_order_title})
        };

        const response = await fetch('https://fortestmimd.pythonanywhere.com/api/requests-app/', options)
          .then(response => response.json())
          .then(response => {
            
            setData({
              ...myData,
              req_order_title:""
            })
            toast(
              {
             title: ` تم`,
             description:`${JSON.stringify(response)}`,
               status: 'success',
              isClosable: true
             })
             location.reload()

          })
          .catch(err => {
            toast(
              {
             title: ` خطأ`,
             description:`${JSON.stringify(err)}`,
               status: 'error',
              isClosable: true
             })
          }
            );
      }
      //  const options = {
      //     method: 'POST',
      //     headers: {
      //       // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryIBWMiF3BTtutX0oq',
      //       "Authorization" : `Bearer ${accessToken}`,
      //     },
  
          
      //     body:JSON.stringify({"req_order_title":"jamaldjfd"})
      //   }
        
      //   try {
      //     const response = await fetch(url, options);
      //     const result = await response.json();
      //     if (response.status ===201){
      //          // router.push(`/property/${result.id}`)
      //       toast(
      //           {
      //           // title: ` لقد تم  إضافة الطلب`,
      //           // description:`${result.property_title}`,
      //           //   // newData.map((m,i)=>(
      //           //   //     <>
      //           //   //       {m.key}: {m.value}
      //           //   //     </>
      //           //   // )
      //           //   // )
      //           //   ,
      //             status: 'success',
      //             isClosable: true
      //            })
              
      //       console.log(result)
      //       alert(JSON.stringify(result))
      //       setStep(4)
      //     }else{
      //       setErrors(result)
          // toast(
          //        {
          //       title: ` خطأ`,
          //       description:`${JSON.stringify(result)}`,
          //         status: 'error',
          //        isClosable: true
          //       })
      //     }
      //   } catch (error) {
      //     alert(JSON.stringify(error))

      //     toast(
      //            {
      //           title: ` خطأ`,
      //           description:`${JSON.stringify(error)}`,
      //             status: 'error',
      //            isClosable: true
      //           })
      //   }
    const handleSubmit = async (e) =>{
          e.preventDefault();
          requestApi()
          // deleteProperty(id,accessToken)
      }
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
        إضافة الطلب
    </Button>
    <MainAlert headerContent={headerContent} 
                    alertDialogHeader={alertDialogHeader} 
                    alertDialogBody={alertDialogBody} 
                    handleSubmit={handleDelete} />
                      
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
    </>
  )
}

export default OrderCreateDrower