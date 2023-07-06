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
import {useRouter} from "next/router"
const  ExUserInfo=({setUserDetail,userDetail})=> {
  const router = useRouter();
  const {user,authTokens} = useContext(AuthContext);
  const [phonenumber,setPhonenumber]=useState()
  const [review,setReview]=useState(false)
  
  const[newuserDetail,setnewUserDetail]=useState({
    first_name:"",
    last_name:"",
    email:"",
    name:"",
    phonenumber:"",
  });

// alert(JSON.stringify(userDetail))

useEffect(()=>{
  setnewUserDetail(userDetail)

  
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
// console.log(userDetail)
//   setPhonenumber(userDetail['phonenumber'])
      return (
<Card maxW='md' dir='rtl'>
  <CardHeader>
    <Flex spacing='2'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={`${newuserDetail.first_name && newuserDetail.first_name} 
        ${newuserDetail.last_name && newuserDetail.last_name}`}/>
        <Box>
          <Heading size='sm'>{newuserDetail.first_name&& newuserDetail.first_name} {newuserDetail.last_name &&newuserDetail.last_name} </Heading>
        {newuserDetail.email && <Text>{newuserDetail.email} </Text>}
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
export default ExUserInfo;
