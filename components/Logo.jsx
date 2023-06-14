import React from 'react'
import myLogo from "../assets/images/logo2.png"
import { Img,Text } from '@chakra-ui/react'
const OurLogo = () => {
  const imgSrc ="https://fortestmimd.pythonanywhere.com/media/media/logo1.png"
     /*  {imgSrc && 
    <Img src={imgSrc} width="141px" 
     height="60px" />      } */
  return (
    <>

   
    {imgSrc && 
   <Text color='#006275'> 'لبنة بروبيرتي '</Text>
}
    </>
  )
}

export default OurLogo
