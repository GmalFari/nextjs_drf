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

import {FaBed,FaBath,FaImages,
  FaWhatsapp,FaEnvelope,FaPhone,FaShare,FaDownload,
  FaRegHeart} from 'react-icons/fa';


import { fetchApi } from '../../utils/fetchApi';
import HorizonalCard from '../../components/HorizonalCard';
import UserInfo from '../../components/accounts/userInfo';
import axios from 'axios';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { useContext,useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';  
import { useRouter } from 'next/router';
import ContactPopover from '../../components/popoverModals/ContactModals';


const Profile =({data})=>{

const {user,authTokens} = useContext(AuthContext);
const myproperties = data?.results
const [properties,setProperties] = useState(myproperties);
const [phonenumber,setPhonenumber] = useState()
console.log(phonenumber)
const listingsH = [properties.filter(myProperty => myProperty.owner == user?.user_id).map((property) =>(
  <HorizonalCard   property={property} key={property.id} /> 
      ))]
  return(
  <Box  paddingTop={"100px"}>
 <Center>
  <UserInfo setPhonenumber={setPhonenumber} />
  
  </Center> 
  <Flex flexDirection={['column']}   flexWrap="wrap" justifyContent="center" alignItems="center" >
           
                <Box display={['Flex']} 
        flexDirection={['column','column','column']}  
       justifyContent="center"
       alignItems="center"
       >{listingsH}
       </Box>
          </Flex>
          <Box p={0} bg='#fff' position={['fixed','fixed','fixed','relative']} left={0} bottom={'0'} width={'100%'}>
            <Grid backgroundColor={"white"} padding={"7px"} templateColumns='repeat(3, 1fr)' gap={2} >
                <ContactPopover contentType="w" contactWith={`967${'776278868'}`}  icon={<FaWhatsapp fontSize={'md'}  content="whatsapp" fontWeight={'bold'}  color='white' />} bgcolor={"#28b16d"}/>
                <ContactPopover contentType="e" contactWith={'gmalfari@gmail.com'} icon={<FaEnvelope fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} />
                <ContactPopover contentType="p" icon={<FaPhone fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'}  />
            
                 </Grid>
            </Box>
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
                          data:data
                            }

                  }
}
