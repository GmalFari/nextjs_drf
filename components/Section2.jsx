import React from 'react';
import Link from 'next/link';
import { Box,CardHeader,Flex,Card,Text,Heading ,CardBody} from '@chakra-ui/react'
import { useState,useEffect } from 'react';
import {sections} from "../utils/searchSections";

import yemenGis from "../utils/yemenGis.json";
import gadm41_YEM_1 from "../utils/gadm41_YEM_1.json";
const Section2 = () => {
  const [content, setcontent] = useState(null);
  useEffect((content)=>{
      setcontent(contents)
  },[])
  const contents = sections.map((content,index)=>(
   <Box key={`${content.title}-${index}`}  
   pt="10px" pb="10px" ms="20px" mt="50px" mb="50px" width={['100%','45%','25%','25%']}>
        <Heading style={{"fontFamily":"Cairo,sans-serif"}} margin="auto"  fontWeight="bold">{content.title}</Heading> 
        <Box margin="auto" >{content.content.map((content,index)=>(
           <Text key={index} color="#177578" p="2px">
            {content}
          </Text>
      ))}
      
       </Box>
        </Box>


  ))
  const newcontent  =yemenGis.features.map((Directorate,index) =>(
  
        
 return (
  
  <Flex  justifyContent="space-between" flexWrap="wrap">
   {content}
  </Flex>

  )
}


export default Section2;

