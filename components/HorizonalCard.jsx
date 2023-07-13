import Link from "next/link";
import Image from 'next/image';
import { Img } from "@chakra-ui/react";
import { FaPhone,FaEnvelope,FaWhatsapp,FaMapMarker,faGridVer} from "react-icons/fa";
import {Box,Grid,Flex,IconButton,Text,Avator, Spacer,LinkBox, LinkOverlay } from '@chakra-ui/react';
import millify from 'millify';
import {BsBoxArrowInDown, BsGridFill,BsFillGeoAltFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go'
import { Avatar } from "@chakra-ui/react";
import {FaBed , FaBath} from 'react-icons/fa';
import { Card,CardBody,CardFooter,Stack,Heading,Button } from "@chakra-ui/react";
import MainBtn from "./MainBtn";
import Horizontal from './Horizontal';
import ContactPopover from "./popoverModals/ContactModals";
import UpdateDeletebtns from "./property/UpdateDeletebtns";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { FaEllipsisV } from 'react-icons/fa';

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
// use this for send email
const Mailto = ({ email, subject, body, children }) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};


const HorizonalCard = (
    {property,property:{id,owner,purpose,coverPhoto,property_title,sqrt_area,phone,
               property_town,property_area
        ,property_price,rentFrequency,
        location,rooms,
        property_status,
        baths,area,agency,isVerified,externalID,geography}}) => {
    //   const loc11 = location[3]['name_l1']
    //   const loc1 = loc11.replace('Dubai','Sanaa');
    //   const loc2 = location[1]['name_l1'].replace('Dubai','Sanaa');
    //   const loc3 = location[2]['name_l1'].replace('Dubai','Sanaa');
    const defaultImg =
        "https://upcdn.io/kW15bRn/raw/No_Image_Available.jpg"
        const {user} = useContext(AuthContext)

      return (
      <Flex w={['95%','95%','700px','800px']} 
            height={[170,200]} 
            border='1px solid #ddd'  
            flexWrap="nowrap" 
            flexDirection={["row"]}
            overflow="hidden" m="2" 
            paddingTop="0" 
            justifyContent="flex-start" 
            cursor="pointer"
            position={"relative"}
            >
              
        <Popover width={"100px"} position={"asolute"}  dir={"ltr"} placement='bottom-end'>
           
        <PopoverTrigger>
        <IconButton
        position={"absolute"}
        left={"2px"}
        zIndex={"9"}
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<FaEllipsisV /> } />
         </PopoverTrigger>
        <PopoverContent placement={""}>
            <PopoverArrow />
            <PopoverBody display={"flex"} flexDirection={"column"}>
    {user?.user_id == owner.id ? 
        <UpdateDeletebtns  isColumn={true} propertyDetails={property} id={id} width={"70px"} fontSize={""} />
          
      :null} 
       </PopoverBody>
        </PopoverContent>
        </Popover>

            <LinkBox as='horizonalCard'  rounded='md'>
            <LinkOverlay href={`/property/${id}`} passHref>
            <Box position={"relative"}  height={'100%'} me="4" >
                <Box position='absolute'
                    top=' 0'
                     left =' 0'
                      bottom='0'
                    right='0'
                      zIndex='9999'
                      backgroundColor='rgba(0,0,0,0,0.6)'
                    ></Box>
                <Img src={coverPhoto ? coverPhoto:defaultImg} 
                borderRadius={2}
                width={[160,170,250]} 
                height={[170,200]}
                minH={[170,200]}
                 style={{objectFit:'cover'}}
                  alt="default house" />
                  <Box position={"absolute"}
                        padding={"1px 3px"}
                        borderRadius={"5"}
                        fontSize={"xx-small"}
                        fontWeight={"700"}
                        backgroundColor={purpose=="للبيع"?"#a3e5eb":"#ff9f53"}
                        color={'white'}
                         top={"0.5"} 
                         right={"0.5"}
                          zIndex={"111"}>
                        {property_status==="نشط"? purpose:property_status}
                  </Box>
                 {coverPhoto &&  <Box position={"absolute"}
                        padding={"1px 3px"}
                        borderRadius={"5"}
                        fontSize={"xx-small"}
                        fontWeight={"700"}
                        bg={"#ffffffa3"}
                         top={"0.5"} 
                         left={"0.5"}
                          zIndex={"111"}
                          display={"flex"}>
                    <Box color="green.400" me={"2px"} mt={"2px"}  >

                       <GoVerified  /> 
                    </Box>
                    <Box fontSize={"xx-small"} fontWeight={"600"}>
                    تم التوثيق
                    </Box>
                  </Box>}
            </Box>
            </LinkOverlay>
            </LinkBox>

            <Box position={'relative'} w={[200,250]} flexGrow={1} >
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between" >
                    <Flex alignItems="center">
                        <Box   paddingRight="0" color="green.400">{
                          coverPhoto ?
                           <GoVerified />:null}</Box>
                        <Text fontWeight="bold" fontSize="sm"> ريال يمني  {property_price| 'none'}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                </Flex>
                
                <Text isTruncated fontSize={["sm","md"]} >
                     {property_title}
                </Text>
                <Flex isTruncated flexWrap='noWrap' display={'flex'}  pt={[1,2]} fontSize={['11px','sm','md']} color={'#006169'} >
                <BsFillGeoAltFill />{property_town && property_town}{property_area && `/${property_area}`}
                {/* {`${loc1}`},
                {`${loc3}`},
                {`${loc2}`} */}
                </Flex>
            <Box display={"flex"} flexWrap='noWrap'   fontSize={['sm','md']} alignItems="center" p="1" justifyContent="right" w="100%" color="#000">
                <Box display={"flex"} alignItems="center" ml={2}>  {rooms} <FaBed  /> </Box> 
                <Box display={"flex"} alignItems="center" ml={2}>  {baths} <FaBath /> </Box>
                <Box display={"flex"} alignItems="center" ml={2}>{millify(sqrt_area)} sqft <BsGridFill/></Box>
                {/* {user?.user_id == owner ? 
                <Box  flexGrow={1}  display={"flex"} alignItems="center" ml={2}>
                <UpdateDeletebtns propertyDetails={property} id={id} width={"70px"} fontSize={""} />
                </Box>
                :null} */}
                </Box>
                <Grid  width={'100%'} position={'absolute'} bottom={1}   templateColumns='repeat(3, 1fr)' gap={1} >
                <ContactPopover headerContent="تواصل مع المعلن لمزيد من المعلومات" contentType="w"
                 contactWith={`${owner.phonenumber}`|'+967776278868'}  icon={<FaWhatsapp fontSize={'md'}  content="whatsapp" fontWeight={'bold'}  color='white' />} bgcolor={"#28b16d"}/>
                <ContactPopover  contentType="e" contactWith={'gmalfari@gmail.com'} 
                icon={<FaEnvelope fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} />
                <ContactPopover contentType="p"  contactWith={owner.phonenumber|null} icon={<FaPhone fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'}  />
                {/* <Link href={`#`}>
                    <Avatar ms="70%"   size="sm" src={agency?.logo?.url} />
                    </Link> */}
            </Grid>
            </Box>
        </Flex>
)
              }
export default HorizonalCard;
