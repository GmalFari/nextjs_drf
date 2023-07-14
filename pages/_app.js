



import Router from "next/router";
import Head from "next/head";
import {Box, ChakraProvider,extendTheme,Container } from "@chakra-ui/react";
import Chakra from "../context/Chakra"
import Layout from '../components/Layout';
import "nprogress/nprogress.css";

// for validate phone number
import 'react-phone-number-input/style.css'
import NProgress  from "nprogress";
import { useEffect,useState,createContext } from "react";
import "./carousel.scss";
import "../styles/Home.module.css"
import { AuthProvider } from "../context/AuthContext";
import theme from"../styles/theme"
const mapContext = createContext()
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
const MyLoading =()=>(

     <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
);
function MyApp({Component,pageProps,router}){
    const [isLoading, setIsLoading] = useState(false);
 
    useEffect(() => {
         const handleChangeStart = (url) => {
            if (url === "<root_to_show_loading>") {
                setIsLoading(true);
            }
        };

        const handleChangeEnd = (url) => {
            if (url === "<root_to_show_loading") {
                setIsLoading(false);
            }
        };
       // const handleRouteStart = () => setLoading(false);
        //const handleRouteDone = () =>  setLoading(true);
        router.events.on("routeChangeStart", handleChangeStart);
        router.events.on("routeChangeComplete", handleChangeEnd);
        router.events.on("routeChangeError", handleChangeEnd);
     
        return () => {
          // Make sure to remove the event handler on unmount!
          router.events.off("routeChangeStart", handleChangeStart);
          router.events.off("routeChangeComplete", handleChangeEnd);
          router.events.off("routeChangeError", handleChangeEnd);
        };
      }, []);
    return (
    
        
      <Chakra theme={theme} >

          <AuthProvider >
     
        (<Layout >
                {isLoading?(
       <>  Loading.....</>
    ):
                    
                        <Component {...pageProps} />
          }
                    </Layout>)
     
            </AuthProvider>
        </Chakra>

        
    );
}


export default MyApp
