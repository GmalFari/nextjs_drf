



import Router from "next/router";
import Head from "next/head";
import { ChakraProvider,extendTheme,Container } from "@chakra-ui/react";
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
function MyApp({Component,pageProps,router}){
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
        const handleRouteStart = () =>{
            setLoading(true);
            NProgress.start()
        };
        const handleRouteDone = () => {
            setLoading(false);
            NProgress.done();}
        router.events.on("routeChangeStart", handleRouteStart);
        router.events.on("routeChangeComplete", handleRouteDone);
        router.events.on("routeChangeError", handleRouteDone);
     
        return () => {
          // Make sure to remove the event handler on unmount!
          router.events.off("routeChangeStart", handleRouteStart);
          router.events.off("routeChangeComplete", handleRouteDone);
          router.events.off("routeChangeError", handleRouteDone);
        };
      }, [router]);
    return (
      <Chakra theme={theme} >

          <AuthProvider >
                    <Layout >
                        <Component {...pageProps} />
                    </Layout>
            </AuthProvider>
        </Chakra>
    );
}


export default MyApp
