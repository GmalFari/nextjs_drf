import React from 'react'
import { useContext } from 'react'
import Image from 'next/image'
import { AspectRatio, Img } from '@chakra-ui/react';
import {Box,Icon,Flex,Center,Grid} from '@chakra-ui/react';
import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft,FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa';
import { useState,useEffect,useRef } from 'react';
const LeftArrow = () =>{
    const {scrollPrev} = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" margin-right="1" >
            <Icon as={FaArrowAltCircleLeft} 
                onClick={() => scrollPrev() } 
                fontSize="2xl"
                cursor="pointer"
                display={['none','none','none','block']}
            />
        </Flex>

    )
}
const RightArrow = () =>{
    const {scrollNext} = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" margin-right="1" >
            <Icon as={FaArrowAltCircleRight} 
                onClick={()=>scrollNext()} 
                fontSize="2xl"
                cursor="pointer"
                display={['none','none','none','block']}
            />
        </Flex>

    )
}

const ImageScrollbar = ({data,coverPhoto}) => {
    const testmap = [1,2,4,4,6,4,32,2,3,3,3];
    //  data = [...data,coverPhoto]
    // console.log(data.length )
    let mainImg = null
    mainImg = coverPhoto?coverPhoto.url: "https://upcdn.io/kW15bRn/raw/No_Image_Available.jpg"
        
    const [defaultImg, setDefaultImg] = useState(mainImg);
    const [imgWH ,setImgWH] =useState({width:"100%",                              height:"700px"})
    const imageRef = useRef()
    useEffect(()=>{
        if (imageRef){
           {imageRef.current.clientHeight  
            <= 700 ? setImgWH({width:"100%",
            height:imageRef.current.clientHeight}):
             {width:"70%",height:"700px",}
           }

        }
    },[defaultImg])
    console.log(data)
  return (
    <Box ms={"auto"} position="relative" textAlign={"center"} maxW={"800px"}>
        <Box textAlign={"center"}  overflow={"hidden"}  pt={"10%"} borderRadius="2px"   
                >
            <Img style={{"objectFit":"cover"}}
             src={defaultImg} height={"40rm"}
             textAlign={"center"}
              overflow="hidden" ref={imageRef}  alt=""
              sizes="(max-width: 500px) 100px, (max-width: 500px) 400px, 800px"                
  />
        </Box>
        <Box>
        {/* {defaultImg && */}
        <ScrollMenu position={'initial'} LeftArrow={LeftArrow}
         RightArrow={RightArrow} style={{overflow:"scroll"}}>
        {data && data.map((item) =>(
            <Box       
                    border={item === defaultImg?"4px solid #127578":"none"}
                    key={item.id} width="100px" height="100px" itemID={item.id}
                     overflow="hidden" p="1">
                <Img
                    onClick={()=>{setDefaultImg(item)}} 
                placeholder='blur' 
                // blurDataURL={item.url} 
                src={item} 
                width="100%"
                height="100%"
                alt="property"
                sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px"     
                objectFit={"cover"}           
                />
            </Box>
            
        ))}
        </ScrollMenu>
        {/* } */}
        </Box>

</Box>)
}

export default ImageScrollbar;
