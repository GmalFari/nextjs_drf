import React from 'react'
import { Box,Text,Center,Divider } from '@chakra-ui/react'
import { useState } from 'react'
const AboutUs = () => {
  return(

      <Box ms='10px' me='10px' maxW={'400px'} mb="300px" height={"80rm"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mt="100px">
      <Box mb="30px">
    <Text fontSize={"xl"} fontWeight={"bold"} as="h1" textAlign={"center"} >  من نحن</Text>
</Box>
  <Box mt={4} mb={4} >
  <Text maxW="500px">
  لبنة بروبرتي الموقع الرائد لتسويق العقارات في كافة مناطق ومدن
    الجمهورية اليمنيه 
    يقدم خدماته للأفراد
    والشركات ويتيح إمكانية البحث عن
    العقار والوصول للعملاء
    بكل سهولة ، وهو ما يحقق للباحثين و لأصحاب العقارات
    . والمكاتب العقارية والمطورين أفضل النتائج
    
  </Text>
  </Box>
      
    <Box mt={4} mb={4} ><Text fontSize={"xl"} fontWeight={"bold"} as="h1" textAlign={"center"} >   أهدافنا</Text>
</Box>
      <Divider/>
  <Box>
  <Text maxW="500px">
    توفير بيئة اَمنة وسهلة لكل من يريد بيع أوشراء العقارات في الجمهورية اليمنية .
  </Text>
  </Box>
      <Divider/>
  <Box mt={4} mb={4} >
      <Text fontSize={"xl"} fontWeight={"bold"} as="h1" textAlign={"center"} >   رؤيتنا</Text>
</Box>
  <Box>
  <Text maxW="500px">
      نسعى لتوفير البيئة الاَمنة المستقره وزيادة نسبة الإستثمار المحلي والأجنبي للعقارات في اليمن .
    </Text>
  </Box>
</Box>  
  )

}

export default AboutUs;
