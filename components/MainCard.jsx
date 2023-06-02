import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image from "../assets/images/img1.jpg";
import {Divider,
    Img,
  Avatar,CardBody,Flex,ButtonGroup,Button,Text, Card,Stack, CardFooter,Heading, Box } from '@chakra-ui/react'
import millify from 'millify';
import {FaBed , FaBath,FaGripHorizontal} from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified,GoKebabVertical } from 'react-icons/go';
const MainCard = (
  {property:{id,coverPhoto,property_price,rent_frequency,rooms,property_title,baths,sqrt_area
    ,agency,isVerified,externalID,timestamp}}  
  ) => {
    console.log(timestamp)
    const date = new Date(timestamp);
    const currentDate = new Date()
    const created = currentDate.getHours() - date.getHours();
    const checkCreatedFunc = created =>{
      let checkCreated = '';
      if(created < 1) {
        return checkCreated = 'الاَن'
      } else if (created == 2){
       return  checkCreated='ساعتين';
      }
       else if (created <= 10) {
       return  checkCreated = `${created} ساعات`
      }
      return  checkCreated = `${created} ساعة`
      
    }
  return (
    <Card minW="200px">
      <CardBody >
    <Link href={`/property/${id}`} passHref dir='rtl'>
      <Img  
                src={coverPhoto ? coverPhoto:image} 
                borderRadius={10}
               width={[160,170,250]} 
                height={[170,200]}
                minH={[170,200]}
                 style={{objectFit:'cover'}}
                  alt="default house" />    
          </Link>
      <Box   
        position="absolute"
         top="25px"
         left="25px"
         background="#187875b0" 
         color="white" 
         fontWeight="bold" width="fit-content"
         borderRadius="5px" padding="0 3px"
         fontSize="14px"
         >
       <small >جديد-منذ {checkCreatedFunc(created)} </small>
   </Box>
       <Box >
        <Flex paddingTop="0" alignItems="center" justifyContent="space-between" >
            <Flex alignItems="center">
                <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                <Text fontWeight="bold" fontSize="sm"> {millify(property_price)} ريال {rent_frequency && `/${rent_frequency}`}</Text>
            </Flex>
        </Flex>
       <Heading size='sm'>{property_title.length < 30 ?property_title:`${property_title.substring(0,30)}...`}</Heading>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250" color="blue.400">
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(sqrt_area)} sqft <BsGridFill />
                </Flex>
                <Box>
                <Text hei fontSize="md"  >
                    {property_title.length > 30 ? `${property_title.substring(0,25)}...`:property_title}
                </Text>
                </Box>
            </Box>
   </CardBody>
   <Divider />
 
 </Card>
 
  )
}

export default MainCard
