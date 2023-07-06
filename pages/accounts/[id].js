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
import UserInfo from '../../components/accounts/UserInfo';
import axios from 'axios';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { useContext,useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';  
import { useRouter } from 'next/router';
import ContactPopover from '../../components/popoverModals/ContactModals';


const Profile =({data})=>{
  const router = useRouter();
  const {query } = router;  
  const id = query['id']
  alert(id)
  const {user,authTokens} = useContext(AuthContext);
  // console.log(user.user_id)
const myproperties = data?.results
const [properties,setProperties] = useState(myproperties);
const listingsH = [properties.filter(myProperty => myProperty.owner == user?.user_id).map((property) =>(
  <HorizonalCard   property={property} key={property.id} /> 
      ))]
  return(
  <Box  paddingTop={"100px"}>
 <Center>  
  <UserInfo ownerId={id}  />
{/*     */}
  
  </Center> 
  <Flex flexDirection={['column']}   flexWrap="wrap" justifyContent="center" alignItems="center" >
           
                <Box display={['Flex']} 
        flexDirection={['column','column','column']}  
       justifyContent="center"
       alignItems="center"
       >{listingsH}
       </Box>
          </Flex>
          <Box p={0} bg='#fff' position={['fixed','fixed','fixed','relative']} left={0} bottom={'0'} width={['100%','50%']}>
            <Grid backgroundColor={"white"} padding={"7px"} templateColumns='repeat(3, 1fr)' gap={2} >
                <ContactPopover contentType="w" contactWith={`967${'776278868'}`}  icon={<FaWhatsapp fontSize={'md'}  content="whatsapp" fontWeight={'bold'}  color='white' />} bgcolor={"#28b16d"}/>
                <ContactPopover contentType="e" contactWith={'gmalfari@gmail.com'} icon={<FaEnvelope fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} />
                <ContactPopover contentType="p" icon={<FaPhone fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'}  />
            
                 </Grid>
            </Box>
  </Box>
)}

export default Profile;



export async function getServerSideProps({params: {id}}) {
        const data = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/list-properties/?owner=${id}`)
                  return {
                      props:{
                          data:data
                            }

                  }
}
