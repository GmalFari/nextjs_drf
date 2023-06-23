/* eslint-disable no-console */
import { Card, CardHeader, CardBody, CardFooter,
      useColorMode,useColorModeValue,Switch } from '@chakra-ui/react'
import { Stack,StackDivider,Button,Box,Heading,Text,Badge, } from '@chakra-ui/react';
import OrderCreateDrower from '../components/orders/CreateOrderDrower';
//import HorizonalOrder from '../components/orders/HorizonalOrder';
import Link from "next/link";
import { fetchApi } from '../utils/fetchApi';
const Orders = ({orders}) =>{
const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  // const [myOrders,setMyorders]=useState()
  const OrdersApi = () =>{
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5MjUwMDE2LCJpYXQiOjE2ODY2NTgwMTYsImp0aSI6IjFmYWE0Mzk4ZjQ4OTQyMDA4ZjRlOTdiYTU3OThmODg5IiwidXNlcl9pZCI6MX0.AKK2pRWie86HGGO8iFv0qRSCPq0R8fypONFwATTWt8s'
      },
      body: '{"req_order_title":"مطلوب شقة"}'
    };
    
    fetch('https://fortestmimd.pythonanywhere.com/api/requests-app/', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
  const myOrders = [orders.map((myOrder)=>(
    <>
        <Box position={relative} bg={formBackground} padding={4}>      

           
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
              <Box display='flex' alignItems='base line' mt={4}> 
          <Badge borderRadius='full' px='2' colorScheme='teal' ms='4' me="4">
           جديد
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
      4غرف  &bull;  
          </Box>
        </Box>
      </Box>
    </>
      ))]
  return (
    <>
      <Card dir='rtl' ms="5px" me="5px">
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
    </>
  )
}

export default Orders;
export async function getStaticProps() {
     const orders = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/requests-app/     `)
    return {
      props: {
        // propertiesForSale:propertyForSale?.results,
        orders:orders?.results,
  
      }
    }
  }
