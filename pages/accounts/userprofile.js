import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Grid,
    Text,
    Stack,
    Button,
  } from '@chakra-ui/react';

import UserInfo from '../../components/accounts/userInfo';
import axios from 'axios';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { useContext,useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';  
import { useRouter } from 'next/router';
const UserProfile =()=>{
  const {user,authTokens} = useContext(AuthContext);
  const [userDetail,setuserDetail]=useState()
    // let getuserdetail = async ()=>{
    //     console.log('update tokens')
    //     try{
    //       let response = await fetch('https://fortestmimd.pythonanywhere.com/auth/users/me/',{
    //       method:'GET',
    //       headers:{
    //         'Content-Type':'application/json',
    //         'Authorization':`Bearer ${authTokens?.access}`
    
    //       },
    //     })
    //     let data = await response.json()
    //     if (response.status === 200) {
    //       setuserDetail(data)
    //       console.log(userDetail)
    //       // router.push("/")
    //     }else {
    //       alert(data)
    //     }
    //     }catch(errors){
    //       alert(errors)
    //     }
    //   }
      // useEffect(()=>{
      //   getuserdetail()
      // },[])
    return(
    <Box  paddingTop={"100px"}>
   <Center>
    <UserInfo />
    
    </Center> 
    </Box>
)}

export default UserProfile;