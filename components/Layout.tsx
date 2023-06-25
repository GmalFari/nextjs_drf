import Head from 'next/head';
import {Container, Box, Button, Heading } from '@chakra-ui/react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Sidebar from "./Sidebar";
import Footer1 from "./Footer1";
import { useState, useEffect, ReactNode } from 'react';
import { MetaHeadEmbed } from "@phntms/react-share";
const Layout =  ({ children }:{children: ReactNode}) =>{
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
    <Box  dir="rtl">
    <MetaHeadEmbed
      render={(meta: React.ReactNode) => <Head>{meta}</Head>}
      siteTitle="لبنة بروبيرتي"
      pageTitle="لبنة بروبيرتي"
      titleTemplate="[pageTitle] | [siteTitle]"
      description="لبنة بروبرتي الموقع الرائد لتسويق العقارات في كافة مناطق ومدن الجمهورية اليمنيه يقدم خدماته للأفراد والشركات ويتيح إمكانية البحث عن العقار والوصول للعملاء بكل سهولة ، وهو ما يحقق للباحثين و لأصحاب العقارات . والمكاتب العقارية والمطورين أفضل النتائج"
      baseSiteUrl="https://phantom.land"
      pagePath="/"
      keywords={["سوق اليمن المفتوح عقارات", "لبنة بروبيرتي", "عقارات اليمن"]}
      imageUrl="https://upcdn.io/W142hzB/raw/mainpage.png"
      imageAlt="libna logo."
      twitter={{
        cardSize: "large",
        siteUsername: "@Libnaproperty",
        creatorUsername: "@LibnaProperty",
      }}
    />
      <Box>
      <Container maxW='1400px'>
  
  <Sidebar children={undefined} />

          </Container>
        <main>{children}</main>
      </Box>
      <Footer1/>
    </Box>
  );
}





export default Layout 