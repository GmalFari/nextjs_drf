import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import {Divider,Avatar,CardBody,Flex,ButtonGroup,Button,Text,CardHeader, Card,Stack, CardFooter,Heading, Box } from '@chakra-ui/react'
const Section1 = ({image,title,content}) => {
  return (
    <Card 
     textAlign="center"
      ms={['2px','5px','50px']}
      me={['2px','5px','10px']}
      height="100%"
      minH={'100%'}
      mt="50px"
      border="1px" 
      borderColor="rgba(0,0,0,0.3)"
      >
    <CardBody display={['block','block','flex','flex','block']} justifyContent="space-between"  width="100%" h={"100%"}>
    <Box height={"100%"} >
    <Image  src={image}  h="100%"  width={['100%']} maxHeight={'60%'} minHeight={"60%"}  alt="default house" />
    </Box>
    <Box>
       <Box>
            <CardHeader p="3px 0 10px " textAlign={"start"} fontSize={['1rem','1.2rem','1.4rem']} fontWeight="600">
            {title}
            </CardHeader>
            <Text mb="20px" textAlign="right" fontSize="md" lineHeight="1.4">
            {content}
            </Text>
            <Stack float="left">
            <Button width="10em"  textColor="rgb(23 116 113)" fontWeight="bold" border="2px" variant='outline'>
                تصفح الاَن
            </Button>
            </Stack>
        </Box>
       </Box>
    </CardBody>
    </Card>
  )
}

export default Section1
