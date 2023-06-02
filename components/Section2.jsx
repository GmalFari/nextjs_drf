import React from 'react';
import Link from 'next/link';
import { Box,CardHeader,Flex,Card,Text,Heading ,CardBody} from '@chakra-ui/react'
import { useState,useRef,useEffect } from 'react';
import {sections,sectionsForrent} from "../utils/searchSections";
const Section2 = () => {
  const [togglePurpose,setTogglePurpose]=useState(false);
  const [content, setContent] = useState(null);
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  // useEffect(()=>{
  //   togglePurpose?setContent(contents):setContent(contentsForsale)
  // },[])
  // useEffect(() => {
  //   if(ref.current.clientHeight){
  //   setHeight(ref.current.clientHeight)
  //   console.log(height)
  //   }
  // },[height])
  const contents = sections.map((content,index)=>(
  <Box key={`${content.title}-${index}`}  
   pt="10px" pb="10px" ms="20px" mt="50px" mb="50px" width={['100%','45%','25%','25%']}>
        
        <Heading size="md" style={{"fontFamily":"Cairo,sans-serif"}} margin="auto"  fontWeight="bold">{content.title}</Heading> 
        
        <Box   ref={ref} margin="auto" >{content.content.map((content,index)=>(
           // eslint-disable-next-line react/jsx-key
           <Link key={index} href={`/search?area=${content}`}> <Text key={index} color="#177578" p="2px">
            {content}
          </Text></Link>
      ))}
      
       </Box>
        </Box>


  ))
  
  const contentsForRent= sectionsForrent.map((content,index)=>(
    <Box key={`${content.title}-${index}`}  
     pt="10px" pb="10px" ms="20px" mt="50px" mb="50px" width={['100%','45%','25%','25%']}>
          
          <Heading size="md" style={{"fontFamily":"Cairo,sans-serif"}} margin="auto"  fontWeight="bold">{content.title}</Heading> 
          
          <Box margin="auto" >{
          content.content.map((content,index)=>(
             <>
             <Link href={`/search?area=${content}`}> <Text key={index} color="#177578" p="2px">
              {content}
            </Text></Link>
             </>
        ))}
        
         </Box>
          </Box>
  
  
    ))
 return (
  <Box>
    <Flex justifyContent={"center"} >
    <Box position="relative" cursor={"pointer"} onClick={()=>{setTogglePurpose(false)}} me="5px">
    <Box
      
      display={"flex"}
      justifyContent={"center"}
    _after={{

      content: '""',
      width: "100%",
      height: "3px",
      backgroundColor: `${togglePurpose?"transparent":"rgb(23 116 113)"}`,
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",      
    }}
    >عقارات للبيع</Box>
    </Box>
    <Box width="100px" 
    cursor={"pointer"} onClick={()=>{setTogglePurpose(true)}}
     position="relative" ms="5px">
    <Box
      display={"flex"}
      justifyContent={"center"}
    _after={{
      content: '""',
      width: "100%",
      height: "3px",
      backgroundColor: `${!togglePurpose?"transparent":"rgb(23 116 113)"}`,
      position: "absolute",
      bottom: "-8px",
      left: "-60%",
      transform: "translateX(50%)",      
    }}
    >عقارات للإيجار</Box>
      </Box>
    
      </Flex>

  <Flex   justifyContent={{"base":'center',"md":"space-around"}} flexWrap="wrap">
       {togglePurpose?contentsForRent:contents}
  </Flex>
  </Box>

  )
}


export default Section2;

