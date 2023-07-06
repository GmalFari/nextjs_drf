import { FaEllipsisV } from 'react-icons/fa';
import {
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Box,
    Button,
    Flex
  } from '@chakra-ui/react'
import {useContext} from "react"
import UpdateOrderDrower from './UpdateOrderDrower';
import AuthContext from '../../context/AuthContext';
import MainAlert from "../MainAlert"
import { deleteProperty } from '../../utils/fetchApi';
const HorizonalOrder = ({orderDetails}) => {
  const {user} = useContext(AuthContext)
  let token = JSON.parse(localStorage.getItem("authTokens"))
  let accessToken = token?.access
  const headerContent = " حذف الطلب";
  const alertDialogHeader = "حذف الطلب ";
  const alertDialogBody = "هل أنت متأكد أنك تريد حذف الطلب ؟";
  const url = `https://fortestmimd.pythonanywhere.com/api/requests-app/${orderDetails.id}`
  console.log(url)
  const handleDelete = async (e) =>{
      e.preventDefault();
      deleteProperty(url,accessToken)
  }
  return (
    <Box>
     <Popover bg={"black"}position={"asolute"} 
     display={"flex"} flexWrap={"wrap"} maxW={"100vw"} justifyContent={"center"}
     placement='bottom-end'>
             
          <PopoverTrigger>
          <IconButton
          position={"absolute"}
          left={"2px"}
          zIndex={"9"}
          variant='ghost'
          colorScheme='gray'
          aria-label='See menu'
          icon={<FaEllipsisV /> } />
           </PopoverTrigger>
          <PopoverContent placement={""}>
              <PopoverArrow />
        <PopoverBody display={"flex"} flexWrap={"wrap"} maxW={"100vw"} justifyContent={"center"} >
      {/* {user?.user_id == orderDetails.owner.id ?  */}
         <>
         <UpdateOrderDrower width={"40%"} ml="2px"  isColumn={true} orderDetails={orderDetails}
               id={''}  fontSize={""} />
                <MainAlert headerContent={headerContent} 
                    alertDialogHeader={alertDialogHeader} 
                    alertDialogBody={alertDialogBody} 
                    handleSubmit={handleDelete} />
          </>
      {/* :null */}
      
        
        
         </PopoverBody>
          </PopoverContent>
          </Popover>
  </Box>
  )
}

export default HorizonalOrder
