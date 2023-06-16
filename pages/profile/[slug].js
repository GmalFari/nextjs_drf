import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,

  } from '@chakra-ui/react';
  
  
import React, { useState } from 'react'
import { fetchApi,baseUrl } from '../../utils/fetchApi'

import { Uploader } from "uploader";
import { UploadDropzone,UploadButton } from "react-uploader";

// Initialize once (at the start of your app).

const uploader = Uploader({ apiKey: "public_W142hzBE4sj6JPVjh3KruK2CCKQZ" }); // Your real API key.
const uploaderOptions = {
  multi: true,

  // Comment out this line & use 'onUpdate' instead of
  // 'onComplete' to have the dropzone close after upload.
  showFinishButton: true,
  styles: {
    colors: {
      primary: "#377dff"
    }
  }
}



const Company = () => {
  // console.log(agentsDetails)
  const [imageFiles,setImageFiles]=useState([])
const uploadMulti = 
<UploadDropzone uploader={uploader}
options={uploaderOptions}
onUpdate={files => files.map(x => {
          setImageFiles([...imageFiles,x.fileUrl]) 
          } )
          }
onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
width="600px"
height="375px"
/>

    return (
      <>
  {uploadMulti}

<UploadButton uploader={uploader}
                options={{ multi: true }}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button onClick={onClick}>
        
      </button>
    }
  </UploadButton>

      </>
    //     <Center py={6}>
    //   <Box
    //     maxW={'270px'}
    //     w={'full'}
    //     bg={useColorModeValue('white', 'gray.800')}
    //     boxShadow={'2xl'}
    //     rounded={'md'}
    //     overflow={'hidden'}>
    //     <Image
    //       h={'120px'}
    //       w={'full'}
    //       src={
    //         'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    //       }
    //       objectFit={'cover'}
    //      alt="image for agency"

    //      />
    //     <Flex justify={'center'} mt={-12}>
    //       <Avatar
    //         size={'xl'}
    //         src={
    //           'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    //         }
    //         alt={'Author'}
    //         css={{
    //           border: '2px solid white',
    //         }}
    //       />
    //     </Flex>

    //     <Box p={6}>
    //       <Stack spacing={0} align={'center'} mb={5}>
    //         <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
    //           John Doe
    //         </Heading>
    //         <Text color={'gray.500'}>Frontend Developer</Text>
    //       </Stack>

    //       <Stack direction={'row'} justify={'center'} spacing={6}>
    //         <Stack spacing={0} align={'center'}>
    //           <Text fontWeight={600}>23k</Text>
    //           <Text fontSize={'sm'} color={'gray.500'}>
    //             Followers
    //           </Text>
    //         </Stack>
    //         <Stack spacing={0} align={'center'}>
    //           <Text fontWeight={600}>23k</Text>
    //           <Text fontSize={'sm'} color={'gray.500'}>
    //             Followers
    //           </Text>
    //         </Stack>
    //       </Stack>

    //       <Button
    //         w={'full'}
    //         mt={8}
    //         bg={useColorModeValue('#151f21', 'gray.900')}
    //         color={'white'}
    //         rounded={'md'}
    //         _hover={{
    //           transform: 'translateY(-2px)',
    //           boxShadow: 'lg',
    //         }}>
    //         Follow
    //       </Button>
    //     </Box>
    //   </Box>
    // </Center>

  )
}

export default Company;

// export async function getServerSideProps({params: {slug}}){
//     const data = await fetchApi(`${baseUrl}/agencies/get-listings?agencySlug=${slug}&lang=ar`)
//     return {
//         props : {
//             agentsDetails:data?.hits
//         }
//     }
// }

