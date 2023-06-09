import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import {useEffect,useState} from 'react';
const CustDetail =({owner})=>{
  
 const  [personalDetail,setPersonalDetail] =useState()
  // useEffect(()=>{
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5MjUwMDE2LCJpYXQiOjE2ODY2NTgwMTYsImp0aSI6IjFmYWE0Mzk4ZjQ4OTQyMDA4ZjRlOTdiYTU3OThmODg5IiwidXNlcl9pZCI6MX0.AKK2pRWie86HGGO8iFv0qRSCPq0R8fypONFwATTWt8s'
  //   },
  //     };
  
  // fetch(`https://fortestmimd.pythonanywhere.com/api/users/${userId}/`, options)
  //   .then(response => response.json())
  //   .then(response => {setPersonalDetail(response)})
  //   .catch(err => console.error(err));}
  //   ,[])
  //   console.log(personalDetail)
  return(
    <>
<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            // src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{owner.first_name&&owner.first_name } {owner.last_name&& owner.last_name}</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
  </Stack>
    </>
)
}
export default CustDetail;
