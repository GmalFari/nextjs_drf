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

   
         <Box paddingTop={"100px"}>
         <Center> 
         <Box  
            maxW={'300px'}
            w={'full'}
            bg={'white'}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
            <Center>
            <Link href={`/accounts/`} passHref>
            {/* <Image
              h={'170px'}
              w={'full'}
              src={
              //   company.logo.url
              }
              objectFit={'fill'}
              alt={'agencies image'}
            /> */}
            <Avatar>

            </Avatar>
            </Link>
            </Center>
            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'lg'} align={'center'} fontWeight={500} fontFamily={'body'}>
                {userDetail?userDetail?.first_name:''}  {userDetail?userDetail?.last_name:''}
                </Heading>
              </Stack>
              <Stack direction={'row'} justify={'center'} spacing={6}>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>3</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Agent
                  </Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>3</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                  properties
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Box>
</Center>
  </Box>
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
