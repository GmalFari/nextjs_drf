import React from 'react'
import myLogo from "../assets/images/logo2.png"
import { Img,Text } from '@chakra-ui/react'
const OurLogo = () => {
  const imgSrc ="https://www.pythonanywhere.com/user/fortestmimd/files/home/fortestmimd/realestate_restapi/mediafiles/logo1.png"
     
  return (
    <>

   {imgSrc && 
    <Img src={imgSrc} width="141px" 
     height="60px" />      } 
    {!imgSrc && 
   <Text color='#006275'> لبنة بروبيرتي </Text>
}
    </>
  )
}

export default OurLogo
