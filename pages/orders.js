/* eslint-disable no-console */
import { useState,useEffect } from 'react';
import {FaBed,FaBath,FaImages,
  FaWhatsapp,FaEnvelope,FaPhone,FaShare,FaDownload,
  FaRegHeart, FaVideo} from 'react-icons/fa';

import { Card,Grid, CardHeader,Flex, CardBody, CardFooter,
      useColorMode,useColorModeValue,Switch } from '@chakra-ui/react'
import { Stack,StackDivider,Button,Box,Heading,Text,Badge, } from '@chakra-ui/react';
import OrderCreateDrower from '../components/orders/CreateOrderDrower';
import HorizonalOrder from "../components/orders/HorizonalOrder"
import Link from "next/link";
import { fetchApi } from '../utils/fetchApi';
import Pagination from "../components/Pagination";
import axios from 'axios';
import { useRouter } from 'next/router';
import ContactPopover from "../components/popoverModals/ContactModals";

const Orders = ({data}) =>{
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  // const [myOrders,setMyorders]=useState()
  const OrdersApi = () =>{
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5MjUwMDE2LCJpYXQiOjE2ODY2NTgwMTYsImp0aSI6IjFmYWE0Mzk4ZjQ4OTQyMDA4ZjRlOTdiYTU3OThmODg5IiwidXNlcl9pZCI6MX0.AKK2pRWie86HGGO8iFv0qRSCPq0R8fypONFwATTWt8s'
      },
      body: '{"req_order_title":"مطلوب شقة"}'
    };
    
    fetch('https://fortestmimd.pythonanywhere.com/api/requests-app/', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
  
  const [orders,setOrders]= useState(data)
  const router = useRouter();
  //for pagination
  const [pageCount,setPageCount] = useState(orders?.count);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const itemsCount = Math.round(pageCount)
  const onPageChange = (page) => {
    setCurrentPage(page);
    console.log(currentPage)
  };

// end for pagination
  
  useEffect(() => {
    if(currentPage < 1){
        setCurrentPage(1)
    }
    if(currentPage > itemsCount){
        setCurrentPage(itemsCount)
    }
    console.log(currentPage)
    const path = router.pathname;
    const {query } = router;  
    query["page"] = currentPage
    router.push({pathname:path,query})
     const data = axios.get(`https://fortestmimd.pythonanywhere.com/api/requests-app/?page=${query["page"]}`)
      .then((response) => {
        console.log(response.data.results)
        setPageCount(response.data.count)
        setOrders(response.data.results);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
        
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const myOrders = [data.map((myOrder)=>(
    <>
        <Box position={"relative"} bg={formBackground} padding={4}>      
        <HorizonalOrder orderDetails={myOrder}/>
        <Heading color="#006179" size='xs' textTransform='uppercase'>
        <Link href={`/orders/${myOrder.id}`}>
            {myOrder.req_order_title}
           </Link>
        </Heading>
        <Box>
        <Text pt='2' fontSize='sm'>
      {myOrder.property_description !== null ?
        myOrder.property_description:
        myOrder.req_order_title}

            </Text>
      </Box>
              <Box mt={"12px"} display='flex' alignItems='base line'> 
          <Badge mt={"12px"} borderRadius='full' px='2' colorScheme='teal' h="24px" w={"50px"}
           ms='4' me="4">
           جديد
          </Badge>
          <Box mt={"12px"}
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
          {myOrder.rooms !== null ?
        `${myOrder.rooms} غرف`:
            "4 غرف "   
        }
          </Box>
          <Grid backgroundColor={"transparent"}
              width={"66%"}
              me={"1vw"}
               padding={"7px"} templateColumns='repeat(3, 1fr)' gap={2} >
                <ContactPopover contentType="w" contactWith={`${"+967776278868"}`}
                  icon={<FaWhatsapp fontSize={'md'}  content="whatsapp" fontWeight={'bold'}  color='white' />} bgcolor={"#28b16d"}/>
                <ContactPopover contentType="e"
                 contactWith={'gmalfari@gmail.com'}
                  icon={<FaEnvelope fontSize={'sm'} 
                  fontWeight={'bold'} color='#28b16d' />}
                   bgcolor={'#006169'} color={'#fff'} />
                <ContactPopover contentType="p"
                contactWith={`${"+967776278868"}`|null}
                 icon={<FaPhone fontSize={'sm'} 
                 fontWeight={'bold'} color='#28b16d' />}
                  bgcolor={'#006169'} color={'#fff'}  />
                 </Grid>
            
        </Box>
      </Box>
    </>
      ))]
  return (
    <>
      <Card  dir='rtl' ms="5px" me="5px">

  <CardHeader display="flex" justifyContent={["right","space-between"]} ms={"10px"} me="10px">
    <Box>
    <Heading style={{lineHeight:"2.2 !important"}}  ms="2" me="2" color="#006179" textAlign={"center"} size={['sm','md']}>
    <Link href="#" pt="2">
  طلبات العقارات
  </Link>
    </Heading>
    </Box>
    <OrderCreateDrower/>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      {myOrders}
    </Stack>
  </CardBody>
</Card>
{orders.length !== 0&& <Flex justifyContent={"center"}>
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
         </Flex>}
    </>
  )
}

export default Orders;
export async function getServerSideProps({query}) {
    
     const orders = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/requests-app/`)
    return {
      props: {
        // propertiesForSale:propertyForSale?.results,
        data:orders?.results,
  
      }
    }
  }
