import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Flex,Avatar,Box,Heading,Text,IconButton ,Button} from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import {BiLike,BiChat,BiShare} from "react-icons/bi";
import { StarIcon } from '@chakra-ui/icons';
import { useContext,useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import ShareBtns from '../share/ShareBtns';
import ShareToWhatsApp from '../share/ShareToWhatsApp';
import Share from '../share/AllShare';
import SocialMedia from './SocialMedia';
const  UserInfo=({ownerId})=> {

  const {user,authTokens} = useContext(AuthContext);
  const [phonenumber,setPhonenumber]=useState()
  const [reivew,setReview]=useState(False)
  const[userDetail,setUserDetail]=useState({
   // first_name:"",
  //  last_name:"",
    email:"",
    name:"",
    phonenumber:"",
  });

useEffect(()=>{
  try{
    fetch(`https://fortestmimd.pythonanywhere.com/auth/users/${ownerId}`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${authTokens?.access}`

    }
  }).then(response=>response.json()).
  then(data=>{
    setUserDetail(data)
  })

}catch(errors){
  alert("errors")
  
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
        <Avatar name={`${userDetail.name && userDetail.name} 
        ${userDetail.name && userDetail.name}`}/>
        <Box>
          <Heading size='sm'>{userDetail.name&& userDetail.name} {userDetail.name &&userDetail.name} </Heading>
        {userDetail.email && <Text>{userDetail.email} </Text>}
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
    <Share/>
    <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                onClick={(()=>{setReview(!review)})}
                key={i}
                color={review? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {4} reviews
          </Box>
        </Box>
    <Box>
    </Box>
  </CardFooter>
</Card>
)}
export default UserInfo;
