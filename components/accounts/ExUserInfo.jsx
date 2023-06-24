import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Flex,Avatar,Box,Heading,Text,IconButton ,Button} from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import {BiLike,BiChat,BiShare} from "react-icons/bi";
import { StarIcon } from '@chakra-ui/icons';
import { useContext,useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';

const  ExUserInfo=({ownerId})=> {

  const {user,authTokens} = useContext(AuthContext);
  const [phonenumber,setPhonenumber]=useState()
  const[userDetail,setUserDetail]=useState({
    
    name:"",
    email:"",
    phonenumber:"",
  });
  const getUserdetail = async ()=>{
    console.log('update tokens')
   
}
useEffect(()=>{
  try{
    let response =  fetch(`https://fortestmimd.pythonanywhere.com/auth/users/${ownerId}`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${authTokens?.access}`

    },
  })
  let data =  response.json()
  if (response.status === 200) {
    setUserDetail(data)
    // router.push("/")
  }else {
    alert(JSON.stringify(data))
  }
}catch(errors){
  alert(errors)
}
  
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
// console.log(userDetail)
//   setPhonenumber(userDetail['phonenumber'])
      return (
<Card maxW='md' dir='rtl'>
  <CardHeader>
    <Flex spacing='2'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={`${userDetail.name && userDetail.name} ${userDetail.name && userDetail.name}`}/>
        <Box>
          <Heading size='sm'>{userDetail.name&& userDetail.name} {userDetail.name &&userDetail.name} </Heading>
        {userDetail.name && <Text>{userDetail.name} </Text>}
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<FaEllipsisV />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>

    </Text>
  </CardBody>
  

  <CardFooter
    justify='center'
    flexWrap='wrap'
    
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button>
    <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < 4 ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {4} reviews
          </Box>
        </Box>
  </CardFooter>
</Card>
)}
export default ExUserInfo;
