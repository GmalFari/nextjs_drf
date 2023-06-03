import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import advancedSearch from "../assets/images/advanced.svg";
import image from "../assets/images/webImg1.webp";
import img2 from "../assets/images/img3.webp";
import { useState , useEffect } from 'react';
import { fetchApi } from '../utils/fetchApi';
import MainSearch from "../components/MainSearch";
import { Box,Img,Text,Heading,Stack } from '@chakra-ui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
const Carousel = () => {
  return (
        <Box height={["60vh","70vh"]} className="carousel-inner">
          <Box backgroundImage={img2} backgroundSize="cover" className="carousel-item active">
                
                {/* <Image
                width="100%" minwidth="100%"
                height={"none"}
                minW={"100%"} minH="100%"
                    // boxSize='100px'
                    style={{objectFit:"cover"}}
                    src={img2}
                    alt='carousel image'
                  /> */}
            <Box className="carousel-caption">
              <Heading fontSize={["2xl","3xl"]} mb="2px"  style={{"fontFamily":"Cairo,sans-serif"}}>أبحث الأن عن بيت الأحلام</Heading>
              <Text fontWeight={"bold"}  fontSize={"xl"}>نوفر لك جميع ماتحتاجة عن العقارات في مكان واحد</Text>
              <MainSearch />
              </Box>
          </Box>
  
        </Box>
  )
}

export default Carousel;