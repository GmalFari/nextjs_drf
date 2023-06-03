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
const [userDetail,setuserDetail]=useState()
const router = useRouter();
  let getuserdetail = async ()=>{
    console.log('update tokens')
    try{
      let response = await fetch('https://fortestmimd.pythonanywhere.com/auth/users/me/',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${authTokens?.access}`

      },
    })
    let data = await response.json()
    if (response.status === 200) {
      setuserDetail(data)
      console.log(userDetail)
      // router.push("/")
    }else {
      alert(error)
    }
    }catch(errors){
      alert(errors)
    }
  }
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
