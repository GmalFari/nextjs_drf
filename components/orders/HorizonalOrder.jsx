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
  } from '@chakra-ui/react'
import {useContext} from "react"
import UpdateOrderDrower from './UpdateOrderDrower';
const HorizonalOrder = () =>{
const {user} = useContext(AuthContext)

return (
  <>
   <Popover width={"100px"} position={"asolute"}  dir={"ltr"} placement='bottom-end'>
           
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
            <PopoverBody display={"flex"} flexDirection={"column"}>
    {user?.user_id == owner ? 
        <UpdateDeletebtns  isColumn={true} propertyDetails={property} id={id} width={"70px"} fontSize={""} />
          
      :null} 
       </PopoverBody>
        </PopoverContent>
        </Popover>
</>
)

}

export default HorizonalOrder;
