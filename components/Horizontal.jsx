import Link from "next/link";
import Image from 'next/image';
import { Img } from "@chakra-ui/react";
import { FaPhone,FaEnvelope,FaWhatsapp,FaMapMarker,faGridVer} from "react-icons/fa";
import {Box,Grid,Flex,Text,Avator, Spacer} from '@chakra-ui/react';
import millify from 'millify';
import {BsBoxArrowInDown, BsGridFill,BsFillGeoAltFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go'
import DefualtImage from "../assets/images/webimg2.webp"
import { Avatar } from "@chakra-ui/react";
import {FaBed , FaBath} from 'react-icons/fa';
import { Card,CardBody,CardFooter,Stack,Heading,Button } from "@chakra-ui/react";
import MainBtn from "./MainBtn";
const Horizontal = (
    {property:{coverPhoto,price,rentFrequency,location,rooms,title_l1,baths,area,agency,isVerified,externalID,geography}}) => {
      return (
      <Flex w={['95%','95%','700px','800px']} 
            height={[170,200]} 
            border='1px solid #ddd'  
            flexWrap="nowrap" 
            flexDirection={["row"]}
            overflow="hidden" m="2" 
            paddingTop="0" 
            justifyContent="flex-start" 
            cursor="pointer">
            <Link  href={`/property/${externalID}`} passHref>
            <Box  height={'100%'} me="4" >
                <Img src={coverPhoto ? coverPhoto.url:DefualtImage.url} 
                borderRadius={2}
                width={[160,170,250]} 
                height={[170,200]}
                minH={[170,200]}
                 objectFit={'cover'}
                  alt="default house" />
            </Box>
            </Link>
            <Box position={'relative'} w={[200,250]} flexGrow={1} >
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between" >
                    <Flex alignItems="center">
                        <Box   paddingRight="0" color="green.400">{isVerified &&  <GoVerified />}</Box>
                        <Text fontWeight="bold" fontSize="md"> AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                </Flex>
                <Box display={"flex"}   fontSize={['sm','md']} alignItems="center" p="1" justifyContent="right" w="100%" color="#006169">
                <Box display={"flex"} alignItems="center" ml={2}>  {rooms} <FaBed  /> </Box> 
                <Box display={"flex"} alignItems="center" ml={2}>  {baths} <FaBath /> </Box>
                <Box display={"flex"} alignItems="center" ml={2}>{millify(area)} sqft <BsGridFill/></Box>
                </Box>
                <Text fontSize={["sm","md"]} >
                    {title_l1.length > 25? `${title_l1.substring(0,25)}...`:title_l1}
                </Text>
                <Flex display={'flex'}  pt={[1,2]} fontSize={['11px','sm','md']} color={'#006169'} >
                <BsFillGeoAltFill />
                {`${location[3]['name_l1']}`},
                {`${location[2]['name_l1']}`},
                {`${location[1]['name_l1']}`}
                </Flex>
                <Grid width={'100%'} position={'absolute'} bottom={1}   templateColumns='repeat(3, 1fr)' gap={1} >
                <MainBtn  icon={<FaWhatsapp fontSize={'sm'} content="whatsapp" fontWeight={'bold'}  color='white' />} bgcolor={'#28b16d'} color={'#fff'}  />
                <MainBtn icon={<FaEnvelope fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} />
                <MainBtn icon={<FaPhone fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'}  />
                {/* <Link href={`/agencies`}>
                    <Avatar ms="70%"   size="sm" src={agency?.logo?.url} />
                    </Link> */}
            </Grid>
            </Box>
        </Flex>
)
              }
export default Horizontal;
