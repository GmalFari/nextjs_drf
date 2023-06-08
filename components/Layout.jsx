import Head from 'next/head';
import {Container, Box, Button, Heading } from '@chakra-ui/react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Sidebar from "./Sidebar";
import Footer1 from "./Footer1";
import { useState, useEffect } from 'react';
export default function Layout({ children }) {
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    const isWindow = typeof window !== 'undefined';
    const getWidth = () => isWindow ? window.innerWidth : windowWidth;
    const resize = () => setWindowWidth(getWidth());
    if(isWindow){
      setWindowWidth(getWidth());
        window.addEventListener('resize', resize);
    }
  //eslint-disable-next-line
  }, [windowWidth]);

  return (
    <Box dir="rtl">
      <Box>
      <Container 
  maxW='1400px'>
  
  <Sidebar />
          </Container>
        <main>{children}</main>
      </Box>
      <Footer1/>
    </Box>
  );
}





