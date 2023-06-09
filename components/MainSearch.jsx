import React from 'react'

import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button
  } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import { fetchApi,baseUrl } from '../utils/fetchApi';
import { useRouter } from 'next/router';
const MainSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const[loading,setLoading] = useState(false);
  const router = useRouter();
  // useEffect(()=>{
  //   if(searchTerm !== ''){
  //       const fetchData = async ()=>{
  //           setLoading(true);
  //           const data = await fetchApi(`{baseUrl}/properties/list?locationExternalIDs=6020`)
  //           setLoading(data?.hits);
  //       };
  //       fetchData();
    // }
  // },[searchTerm]);
  
const handleClick=()=>{
  
}
  return (
    <Box className="card">
    <Box background="#0000009c"  borderRadius="20px" padding={0}   className="card-body">
      <Box  background="#0000009c"  borderRadius="10px" width={{"base":"160px","md":"initial"}}
        height={{"base":"60px","md":"initial"}} className="rent-sale"  display="flex" justifyContent="space-around" position="absolute" top="-30">
      <Link href="/search?purpose=for-sale"passHref>
        <Button fontWeight={'bold'}  className="sale">للبيع</Button>
      </Link>
      <Link href="/search?purpose=for-rent" passHref>
        <Button  fontWeight={'bold'}   className="rent">للإيجار</Button>
        </Link>
      </Box>
      <FormControl 
           dir="rtl" 
           padding="5px" 
           background="white" 
           borderRadius={10} width="100%" 
           position="absolute" top={["30px"]} >
          <Input paddingLeft="60px" onInput={(e)=>{setSearchTerm(e.target.value)}} color="black" border="none"  type='text' placeholder='أبحث بأسم المدينة المنطقة أو النوع'   />
        <Button onClick={handleClick} width="20px" zIndex="10" borderRadius="30%" position="absolute" left="10px" color="white" background="#187875">
          <Link width="20px" zIndex="10" borderRadius="30%"
                   position="absolute" left="10px"
                    color="white" background="#187875"
                     href={`/search?search=${searchTerm}`} passHref>
        <FaSearch/>
        </Link>
        </Button>              
      </FormControl>

    </Box>
   
    </Box>
  )
}

export default MainSearch
