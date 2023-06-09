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


export default function Home({propertiesForRent}) {
  return (
  <>
     <Box>

    <Container maxW='1600px'>
    <Carousel />
    </Container>
     
    <Container maxW='1400px'>
        <Box 
     ms={['2px','50px','100px']}
     m={['2px','50px','100px']}> 
      <Box textAlign="center" margin='10px' fontSize="40px" 
      fontWeight="bold">   تصفح اَخر العقارت
      </Box>
      <Box overflowX={"scoll"}  justifyContent={"center"}   display="flex"  flexWrap="nowrap" overflowY="hidden" >
      {propertiesForRent.map((property) => <MainCard  property={property} key={property.id} />)}
    </Box>
    <Spacer/>
    
      <Box mt="100" display={['Flex']} 
         flexDirection={['column','column','column','column','row']}  
        justifyContent="center"
        alignItems="center"
        >
        <Link href="/search?purpose=for-rent">
        <Section1 image={Rent} title="أستأجر عقار " content="نحن نخلق تجربة سلسة عبر الإنترنت - من التسوق على أكبر شبكة تأجير ، إلى التقديم ، إلى دفع الإيجار."  />
        </Link>
        <Link href="/search?purpose=for-sale">
        <Section1 image={Buy} title=" أشتري عقار" content="اعثر على مكانك من خلال تجربة صور غامرة ومعظم القوائم ، بما في ذلك الأشياء التي لن تجدها في أي مكان آخر."/>
        </Link>
        <Section1  image={Sell} title="بيع عقار " content="بغض النظر عن المسار الذي تسلكه لبيع منزلك ، يمكننا مساعدتك في اجتياز عملية بيع ناجحة." />
      </Box>
      
          
      </Box>
      </Container>
   </Box>
    
    </>
     )
}
 

export async function getStaticProps() {
  //const propertyForSale = await fetchApi(`http://127.0.0.1:8000/api/list-properties/`)
 // const propertyForRent = await fetchApi(`http://127.0.0.1:8000/api/list-properties/`)
 
  //  const propertyForSale = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/list-properties/`)
   const propertyForRent = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/list-properties/`)
  return {
    props: {
      // propertiesForSale:propertyForSale?.results,
      propertiesForRent:propertyForRent?.results,

    }
  }
}
