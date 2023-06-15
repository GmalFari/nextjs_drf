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
import { fetchApi } from '../../utils/fetchApi';
import HorizonalCard from '../../components/HorizonalCard';
import UserInfo from '../../components/accounts/userInfo';
import axios from 'axios';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { useContext,useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';  
import { useRouter } from 'next/router';
const Profile =({data})=>{
const {user,authTokens} = useContext(AuthContext);
const [userDetail,setUserDetail]=useState({})
const myproperties = data?.results
const [properties,setProperties] = useState(myproperties);
const listingsH = [properties.filter(myProperty => myProperty.owner == user?.user_id).map((property) =>(
  <HorizonalCard   property={property} key={property.id} /> 
      ))]
  const getUserdetail = async ()=>{
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

        setUserDetail(data)
        // router.push("/")
      }else {
        alert(JSON.stringify(data))
      }
      }catch(errors){
        alert(errors)
      }
    }
    useEffect(()=>{
      getUserdetail()
    },[])
  return(
  <Box  paddingTop={"100px"}>
 <Center>
  <UserInfo userDetail={userDetail} />
  
  </Center> 
  <Flex flexDirection={['column']}  flexWrap="wrap" justifyContent="center" alignItems="center" >
           
                <Box display={['Flex']} 
        flexDirection={['column','column','column','row']}  
       justifyContent="center"
       alignItems="center"
       >{listingsH}
       </Box>
          </Flex>
  </Box>
)}

export default Profile;



export async function getServerSideProps({query}) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const baths = query.baths || '0';
  const rooms = query.rooms || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4'; 
  const lang = query.lang || 'ar';
  // const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=6&rentFrequency=${rentFrequency}&minPrice=${minPrice}&maxPrice=${maxPrice}&bathsMin=${bathsMin}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&categoryExternalID=${categoryExternalID}&lang=${lang}`);
      const data = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/list-properties/`)
                  return {
                      props:{
                          data:data,
                            }
                  }
}
