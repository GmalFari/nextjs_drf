//import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import { fetchApi,baseUrl } from '../../utils/fetchApi'
import { Img } from "@chakra-ui/react";
import CustDetail from "../../components/CustDetail"
const OrderCard = ({orderDetail:{id,owner,req_order_title,property_description,property_town}}) => {
 alert('hgg')
 const defaultImg = "https://www.pythonanywhere.com/user/fortestmimd/files/home/fortestmimd/realestate_restapi/mediafiles/No_Image_Available.jpg"

  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Img
            src={defaultImg}
            width={'full'} 
                height={'full'}
                minH={'full'}
                 style={{objectFit:'cover'}}
                  alt="default no img order"
              
              
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            تفاصيل الطلب
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {req_order_title && req_order_title}
               </Heading>
          <Text color={'gray.500'}>
              {property_description && property_description}
          </Text>
        </Stack>
        <CustDetail userId={owner} />
        
      </Box>
    </Center>
  );
}
export default  OrderCard;
export async function getServerSideProps({params: {id}}){
    const data = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/requests-app/${id}`)
    return {
       props : {
            orderDetail:data
        }
    }
}
