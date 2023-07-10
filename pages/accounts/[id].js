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
import Pagination from '../../components/Pagination';


const Profile =({data})=>{
  const router = useRouter();
  const {query } = router;  
  const id = query['id']
  const {user,authTokens} = useContext(AuthContext);
  // console.log(user.user_id)
const myproperties = data?.results
const [properties,setProperties] = useState(myproperties);
// myproperties.length == 0? setProperties([]):setProperties(myproperties)
const [pageCount,setPageCount] = useState(data?.count);
    const itemsCount = Math.round(pageCount)
    const [searchValue,setSearchValue] = useState('')
    const [onSearch,setOnSearch] = useState(false)
    const [searchFilter,setSearchFilter] = useState(false);
    const [toggleVerticalCard,setToggleVerticalCard] = useState('true');
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 5;
   const [onFilter,setOnFilter]=useState(false)
   const onPageChange = (page) => {
    setCurrentPage(page);
    console.log(currentPage)
  };
  // alert(myproperties)
useEffect(() => {
   if(currentPage == 1){
      setCurrentPage(1)
  }
  if(currentPage > itemsCount){
     setCurrentPage(itemsCount)
  }
  const path = router.pathname;
  const {query } = router;  
  // clear filter data
  Object.keys(query).forEach(key => {
    delete query[key]
  })
  query["search"] = searchValue
  query["page"] = currentPage
  query['owner']=user?.user_id
  query['id']= user?.user_id
  router.push({pathname:path,query});
   const data = axios.get(`https://fortestmimd.pythonanywhere.com/api/list-properties/`,{
    params:{
      ...query
    }
   })
    .then((response) => {

      setPageCount(response.data.count)
      setOnFilter(false)
      setProperties(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

const listingsH = [properties.length >=1?properties.filter(myProperty => myProperty.owner.id == user?.user_id).map((property) =>(
  <HorizonalCard   property={property} key={property.id} /> 
      )):null]
  
  return(
  <Box  paddingTop={"100px"}>
 <Center>
  <UserInfo  userDetail={user}  />
{/*     */}
  
  </Center> 
  <Flex flexDirection={['column']}   flexWrap="wrap" justifyContent="center" alignItems="center" >
           
                <Box display={['Flex']} 
        flexDirection={['column','column','column']}  
       justifyContent="center"
       alignItems="center"
       >{listingsH}
       </Box>
       {properties.length >=9?
        properties.length !== 0&& <Flex justifyContent={"center"}>
         <Box  style={{
           "display": "flex",
          "justify-content": "center",
         " align-items": "center",
          "paddingRight": "0.5rem",
          "paddingLeft": "0.5rem",
          "margin":"0 20px",
          "border": "1px solid #eaeaea",
          "border-radius": "0.5rem",
          "cursor": "pointer",
          "marginTop":"50px",
          "height":"30px",

         }}
         onClick={()=>{setCurrentPage(currentPage -1)}}
         >السابق</Box>
         <Pagination
                items={itemsCount} // 100
                currentPage={currentPage} // 1
                pageSize={pageSize} // 10
                onPageChange={onPageChange}
            />
            <Box style={{   
              "display": "flex",
          "justify-content": "center",
         " align-items": "center",
          "paddingRight": "0.5rem",
          "paddingLeft": "0.5rem",
          "margin":"0 20px",
          "border": "1px solid #eaeaea",
          "border-radius": "0.5rem",
          "cursor": "pointer",
          "marginTop":"50px",
          "height":"30px",
        }}
        onClick={()=>{setCurrentPage(currentPage  + 1)}}
        >
                القادم
            </Box>
         </Flex>:null}
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



export async function getServerSideProps({params: {id}}) {
        const data = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/list-properties/?owner=${id}`)
                  return {
                      props:{
                          data:data,

                            }

                  }
}
