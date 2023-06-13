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
import axios from 'axios';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { useContext,useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';  
import { useRouter } from 'next/router';
import UserProfile from './userprofile';


const  Profile =()=> {
  const {user,authTokens} = useContext(AuthContext);
  const router = useRouter();

  useEffect(()=>{
    getuserdetail()
  },[])
  return (
    // <>
    //   hello 
    //   {userDetail?userDetail?.first_name:''}
    // </>

   <UserProfile/>
        
  );
}

export default Profile;
// export async function getServerSideProps(){
//   const {data} = await axios.get(("https://fortestmimd.pythonanywhere.com/auth/users/me/"), {
//     headers:{
//                 // 'Content-Type':'application/json',
//                 'Authorization':`Bearer ${authTokens?.access}`
//               },
//     });    
//     return {
//         props : {
//             userDetail:data
//         }
//     }
// }
