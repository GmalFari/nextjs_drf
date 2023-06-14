
import {Flex,Grid,Select
     ,Box,Text,Input,
     Avatar,
     Container,
     Divider,
     Heading
     ,Button} from '@chakra-ui/react';
import {FaBed,FaBath,FaImages,
    FaWhatsapp,FaEnvelope,FaPhone,FaShare,FaDownload,
    FaRegHeart, FaVideo} from 'react-icons/fa';
import { Img } from '@chakra-ui/react';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import ImageScrollbar from '../../components/ImageScrollbar';
import Link from 'next/link';
import {useState, createContext, useContext } from 'react';
import {baseUrl,fetchApi} from '../../utils/fetchApi';
import { BasicUsage } from '../../components/BasicUsage';
import MainBtn from '../../components/MainBtn';
import PropertyTable from "../../components/property/PropertyTable";
import { AspectRatio } from "@chakra-ui/react";
import UserInfo from '../../components/accounts/userInfo';
import {FaMapMarked,FaYoutube} from 'react-icons/fa';
import ContactPopover from "../../components/popoverModals/ContactModals";
import ExpandableText from "../../components/ReadMoreLess";
import MyBreadcrumb from "../../components/MyBreadcrumb";
import Head from "next/head";
import MainAlert from "../../components/MainAlert"
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";
import UpdateDeletebtns from '../../components/property/UpdateDeletebtns';
const PropertyDetails = ({propertyDetails,propertyDetails:
    {   id,
        owner,
        property_number,
        property_title,
        coverPhoto,
        purpose,
        location,
        property_town,
        property_district,
        rent_frequency,
        ownership_type,
        property_street,
        property_description,
        currency,
        is_negotiable,
        phone,
        rooms,
        baths,
        furnishingStatus,
        building_facade,
        building_age,
        sqrt_area,
        omities,
        timestamp,
        updated,
            property_price,
        property_area,
        rentFrequency,
        photos,amenities,geography}})=>{
        const router = useRouter()
    let [toggleMap,setToggleMap ] = useState(true)
    let t = ''
    const {user} = useContext(AuthContext)



return(
        <>
        <Box width={"50%"} me={"50%"} textAlign={"center"} mt={4} mb={4}>
         <MyBreadcrumb /> 
         </Box>

            {user?.user_id == owner ? 
                <UpdateDeletebtns propertyDetails={propertyDetails} id={id} />
               :null }
        <Box
         //marginLeft={["auto","auto","100px"]}
           // marginRight={["auto","auto","100px"]}
            display={["block","block","flex"]}
            justifyContent="center"
             >
        <Box width={['100%','80vh']}  maxWidth="1000px"  p="2">
        <Box display={['block','block','block']}>
        <Box width="100%" >
        <Grid mb={2} templateColumns='repeat(3, 1fr)' gap={2}>
            <BasicUsage comId="I" icon={<FaImages />}
             btnContent={"الصور"} coverPhoto={coverPhoto} photos={photos}   geography={geography} />
            <BasicUsage comId="M" icon={<FaMapMarked />} 
            btnContent={"الخريطة"}   coverPhoto={coverPhoto} photos={photos}   geography={geography} />
            <BasicUsage comId="V" icon={<FaYoutube />} 
             btnContent={"الفيديو"}  coverPhoto={coverPhoto} photos={photos}   geography={geography} />
        </Grid>
        </Box>
          </Box>
          <Box position={'relative'}>
          <Flex bg='rgba(255,255,255,0.8)' position={'absolute'} bottom={0} mb={2} justifyContent={'left'} templateColumns='repeat(3, 1fr)' gap={2} >
                <MainBtn icon={<FaRegHeart fontWeight={'bold'} color='#006169' />} color={'#fff'}  />
                <MainBtn icon={<FaShare fontWeight={'bold'} color='#006169' />}  color={'#fff'} />
                <MainBtn icon={<FaDownload fontWeight={'bold'} color='#006169' />} color={'#fff'}  />
            </Flex>
            {coverPhoto && <Img src={coverPhoto} ms="2px" me="2px" width={"100%"} height={"100%"} />}
          </Box>
        
        
        
        <Box w='full'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'><GoVerified /></Box>
            <Text fontWeight='bold' fontSize='lg'>ريال يمني  {property_price}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Link href={`/agencies`}>
            <Avatar size='sm' src="#"></Avatar>
          </Link>
        </Flex>
        <Flex  w={250} alignItems='center' p='1' justifyContent='space-between'  color='#006169' >
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(property_area)|'22 م٢'} sqft <BsGridFill />  
          {/* {toggleMap ? 
          <Button onClick={()=>{setToggleMap(!toggleMap)}} ></Button> 
           : <MyMap geoDetail={geography} />} */}
        
        </Flex>
             <Box mt={"4"} mb={"4"}>
            <Text fontSize="lg" marginBottom="2" fontWeight="bold">
                {property_title}
            </Text>
            <Divider/>
            <Box mt={"4"} mb={"4"}>
                {property_description &&
                <>
                <Box as="h2" fontWeight={"bold"} >الوصف
                </Box>
                <ExpandableText description={property_description}/>
            </>
                }
            </Box>
            <Divider/>
            <Box p={0} bg='#fff' position={['fixed','fixed','fixed','relative']} left={0} bottom={'0'} width={'100%'}>
            <Grid backgroundColor={"white"} padding={"7px"} templateColumns='repeat(3, 1fr)' gap={2} >
                <ContactPopover contentType="w" contactWith={`967${'776278868'}`}  icon={<FaWhatsapp fontSize={'md'}  content="whatsapp" fontWeight={'bold'}  color='white' />} bgcolor={"#28b16d"}/>
                <ContactPopover contentType="e" contactWith={'gmalfari@gmail.com'} icon={<FaEnvelope fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} />
                <ContactPopover contentType="p" icon={<FaPhone fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'}  />
            
                 </Grid>
            </Box>
            <Box  mt={"4"} mb={"4"}>
            <Text as="h2" fontSize="lg" marginBottom="2" fontWeight="bold">
            معلومات العقار
            </Text>
            <PropertyTable property_town={property_town}
                        property_district={property_district}
                        property_area={property_area}
                        property_street={property_street}
                        property_price={property_price}
                        is_negotiable={is_negotiable}
                        phone={phone}
                        rooms={rooms}
                        baths={baths}
                        furnishingStatus={furnishingStatus}
                        building_facade={building_facade}
                        building_age={building_age}
                        sqrt_area={sqrt_area}

                        
                    /> 
            </Box>

      </Box>
        </Box>
        <Divider/>

        <Box display={['block','none']}>
            <Text as="h2" fontSize="lg" marginBottom="2" fontWeight="bold">
            المعلن
            </Text>
                <UserInfo />
        </Box>
            <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
                {/* <Flex justifyContent="space-between" w="400px"  borderBottom="1px" borderColor="gray.100" p="3">
                    <Text> Type</Text>
                    <Text fontWeight="bold" >{type}</Text>
                </Flex> */}
                {/* <Flex justifyContent="space-between" w="400px"
                  borderBottom="1px" borderColor="gray.100" p="3">
                    <Text> purpose</Text>
                    <Text fontWeight="bold" >{purpose}</Text>
                </Flex> */}
                {furnishingStatus &&(
                    <Flex justifyContent="space-between" w="400px"  borderBottom="1px" borderColor="gray.100" p="3">
                        <Text> furnishingStatus</Text>
                        <Text fontWeight="bold" >{furnishingStatus}</Text>
                    </Flex>
                )
                }
                <Box>
                    {/* {amenities.length && <Text fontSize="2xl" fontWeight="black"  marginTop="5"  >
                        Amenities
                    </Text>} */}
                    {/* <Flex flexWrap="wrap">
                        {amenities.map((item)=>(
                            item.amenities.map((amenity)=>(
                                <Text key={amenity.text} 
                                fontWeight="bold" 
                                color="blue.400"
                                fontSize="16"
                                p="2"
                                bg="gray.200"
                                m="1"
                                borderRadius="5"
                                >
                                {amenity.text}
                                </Text>
                            ))
                        ))}
                    </Flex> */}
                </Box>
           </Flex> 
            </Box>
            </Box>
            <Box mt={"60px"}  width={"20vw"} display={["none","none","block"]}
             background={"#fff"}
             height={"100vh"}>
            <Img  src={coverPhoto} width={"100%"} height={"150px"} />
            <Box display={['none','block']}>
            <Text as="h2" fontSize="lg" marginBottom="2" fontWeight="bold">
            المعلن
            </Text>
                <UserInfo />
            </Box>
            {/* <AspectRatio ratio={4/3}>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
            />
            </AspectRatio> */}
            </Box>
        </>
)}


export default PropertyDetails
export async function getServerSideProps({params: {id}}){
    const data = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/list-properties/${id}`)
    return {
        props : {
            propertyDetails:data
        }
    }
}

