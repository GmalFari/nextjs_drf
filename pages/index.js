import Link from 'next/link';
import Image from 'next/image';
import {Container,Flex,Box,Text,Button, Heading,Grid, Spacer} from '@chakra-ui/react';
import Property from '../components/Property';
import {baseUrl,fetchApi} from '../utils/fetchApi';
import MainCard from "../components/MainCard";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Carousel from '../components/Carousel';
import Rent from "../assets/images/Rent_a_home.webp";
import Sell from "../assets/images/Sell_a_home.webp";
import Buy from "../assets/images/Buy_a_home.webp";
import HorizonalCard from "../components/HorizonalCard";
import { BsNodePlusFill } from 'react-icons/bs';
const Banner = ({purpose , property_title,title2,desc1,desc2,buttonText,linkName,imageUrl }) => 
(
  <Flex  flexWrap="wrap" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner"  />
    <Box m="10">
      <Text color="gray.500" fontSize="sm" fontWeight="medium" >{purpose}</Text>
      <Text  fontSize="3xl" fontWeight="bold" >{property_title}<br/>{property_title}</Text>
      <Text color="gray.700" paddingTop="3" paddingBottom="3"  fontSize="lg"  >{desc1}<br/> {desc2}</Text>
      <Button fontSize="xl">
          {/* <Link href={linkName} > {buttonText}</Link> */}
      </Button>
  </Box>
  </Flex>
)


export default function Home({propertiesForSale,propertiesForRent}) {
  return (
  <>page
    
    </>
     )
}
 

export async function getStaticProps() {
//   const propertyForSale = await fetchApi(`http://127.0.0.1:8000/api/list-properties/`)
//  const propertyForRent = await fetchApi(`http://127.0.0.1:8000/api/list-properties/`)
 
   const propertyForSale = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/list-properties/`)
   const propertyForRent = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/list-properties/`)
  return {
    props: {
      propertiesForSale:propertyForSale?.results,
      propertiesForRent:propertyForRent?.results,

    }
  }
}
