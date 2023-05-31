import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Grid,
    Text,
    Stack,
    Button,
  } from '@chakra-ui/react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

import {baseUrl,fetchApi} from '../utils/fetchApi';
import Profile from '../components/Profile';  
  export default function SocialProfileWithImage({agencies}) {
    return (
        <Box ms={['2px','50px','100px']} me={['2px','50px','100px']} >
          <Grid templateColumns='repeat( auto-fit, minmax(300px, 1fr) )' gap={6}  >
        {agencies.map((company,index)=>(
           <Box key={index}>
           <Center key={index}> <Box 
              maxW={'300px'}
              w={'full'}
              bg={'white'}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}>
              <Link href={`/profile/${company.slug}`} passHref>
              <Image
                h={'170px'}
                w={'full'}
                src={
                  company.logo.url
                }
                objectFit={'fill'}
                alt={'agencies image'}
              />
              </Link>
              <Box p={6}>
                <Stack spacing={0} align={'center'} mb={5}>
                  <Heading fontSize={'lg'} align={'center'} fontWeight={500} fontFamily={'body'}>
                    {company.name}
                  </Heading>
                </Stack>
                <Stack direction={'row'} justify={'center'} spacing={6}>
                  <Stack spacing={0} align={'center'}>
                    <Text fontWeight={600}>{company.agentsCount}</Text>
                    <Text fontSize={'sm'} color={'gray.500'}>
                      Agent
                    </Text>
                  </Stack>
                  <Stack spacing={0} align={'center'}>
                    <Text fontWeight={600}>{company.stats.adsCount}</Text>
                    <Text fontSize={'sm'} color={'gray.500'}>
                    properties
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Box>
</Center>
</Box>
           
        
       ))}
        </Grid>
        </Box>
    );
  }

  export async function getStaticProps() {
    const agencies = await fetchApi(`${baseUrl}/agencies/list?query=all`);
    return {
      props: {
        agencies:agencies?.hits
  
      }
    }
  }
