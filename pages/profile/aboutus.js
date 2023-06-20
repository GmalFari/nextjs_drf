import React from 'react'
import { Box,Text,Center } from '@chakra-ui/react'
import { useState } from 'react'
const AboutUs = () => {
  return(

      <Box maxW={'400px'} mb="300px" height={"80rm"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mt="100px">
      <Box mb="30px"><Text fontSize={"xl"} fontWeight={"bold"} as="h1" textAlign={"center"} >  من نحن</Text>
</Box>
  <Box>
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
  <Box mb="30px"><Text fontSize={"xl"} fontWeight={"bold"} as="h1" textAlign={"center"} >   أهدافنا</Text>
</Box>
  <Box>
  <Text maxW="500px">
    توفير بيئة اَمنة وسهلة لكل من يريد بيع أوشراء العقارات في الجمهورية اليمنية .
  </Text>
  </Box>
<Box mb="30px"><Text fontSize={"xl"} fontWeight={"bold"} as="h1" textAlign={"center"} >   رؤيتنا</Text>
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
