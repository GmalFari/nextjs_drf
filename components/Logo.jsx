import React from 'react'
import myLogo from "../assets/images/logo2.png"
import { Img,Text } from '@chakra-ui/react'
const OurLogo = () => {
  const imgSrc ="https://fortestmimd.pythonanywhere.com/media/media/logo11.png"
  return (
    <>

   
    <Img src={imgSrc} width="141px" 
     height="60px" />      
    


    </>
  )
}

export default OurLogo
