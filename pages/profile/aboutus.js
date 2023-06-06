import React from 'react'
import { Box,Text,Center } from '@chakra-ui/react'
import { useState } from 'react'
const AboutUs = () => {
  return(

      <Box mb="300px" height={"80rm"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mt="100px">
      <Box mb="30px"><Text fontSize={"xl"} fontWeight={"bold"} as="h1" textAlign={"center"} >  من نحن</Text>
</Box>
  <Box>
  <Text maxW="500px">
  لبنة هاوس الموقع الرائد لتسويق العقارات في كافة مناطق ومدن
    الجمهورية اليمنيه 
    يقدم خدماته للأفراد
    والشركات ويتيح إمكانية البحث عن
    العقار والوصول للعملاء
    بكل سهولة ، وهو ما يحقق للباحثين و لأصحاب العقارات
    . والمكاتب العقارية والمطورين أفضل النتائج
    
  </Text>
  </Box>
</Box>  
  )

}

export default AboutUs;
