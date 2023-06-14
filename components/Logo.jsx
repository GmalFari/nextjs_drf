import React from 'react'
import myLogo from "../assets/images/logo2.png"
import { Img } from '@chakra-ui/react'
const OurLogo = () => {
  const imgSrc ="https://fortestmimd.pythonanywhere.com/media/media/logo1.png"
     
  return (
    <>

   {imgSrc ?{ <Img src={imgSrc} width="141px" 
     height="60px" />} : 'لبنة بروبيرتي '}
    }
    </>
  )
}

export default OurLogo
