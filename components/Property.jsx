import Link from "next/link";
import Image from 'next/image';
import {Box,Flex,Text,Img,Avator} from '@chakra-ui/react';
import millify from 'millify';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go'
import DefaultImage from '../assets/images/Default_img.jpg'
import { Avatar } from "@chakra-ui/react";
import {FaBed , FaBath} from 'react-icons/fa';
import { Card,CardBody,CardFooter,Stack,Heading,Button } from "@chakra-ui/react";
const Property = (
    {property:{coverPhoto,property_price,owner,
            rent_frequency,rooms,property_town,
            property_title,baths,sqrt_area,agency,isVerified,externalID,geography}}) => (
        <Flex flexWrap="wrap" flexDirection="column" overflow="hidden" m="2" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Link  href={`/property/${externalID}`} passHref>
            <Box overflow={"hidden"} me="4" height="200" minH="200" 
                    width="100%" minW="100%"  >
                <Box 
                style={{
                backgroundImage:`url(${coverPhoto?coverPhoto:DefaultImage})`,backgroundSize:"cover"}}
                 width="100%" minW="100%"  height={200} overscrollY={"hidden"} ></Box>
            </Box>
            </Link>
            <Box >
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between" >
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                        {property_price ? <Text fontWeight="bold" fontSize="lg"> ريال يمني 
                         {millify(property_price)}{rent_frequency && `/${rent_frequency}`}</Text>:
                         <Text fontWeight="bold" fontSize="lg"> 
                         {property_town}{rent_frequency && `/${rent_frequency}`}</Text>}
                    </Flex>
                    <Link href={`/agencies`}>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url} />
                    </Box>
                    </Link>

                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250" color="blue.400">
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(sqrt_area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize="lg" >
                    {property_title.length > 30 ? `${property_title.substring(0,30)}...`:property_title}
                </Text>
            </Box>
        </Flex>
       

    
)
export default Property;
