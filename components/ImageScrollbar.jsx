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
    mainImg = coverPhoto?coverPhoto.url:"https://www.pythonanywhere.com/user/fortestmimd/files/home/fortestmimd/realestate_restapi/mediafiles/No_Image_Available.jpg"
    const [defaultImg, setDefaultImg] = useState(mainImg);
    const [imgWH ,setImgWH] =useState({width:"100%",
                                        height:"700px"})
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
  return (
    <Box left={['0','0','0',"10%"]} position="relative" textAlign={"center"} maxW={"1000px"}>
        <Box  overflow={"hidden"}  pt={"10%"} borderRadius="2px"   
                textAlign="center">
            <Img style={{"objectFit":"cover"}}
             src={defaultImg} height={"50rm"}
              overflow="hidden" ref={imageRef}  alt=""
              sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"                
  />
        </Box>
        <Box>
        {defaultImg &&<ScrollMenu position={'initial'} LeftArrow={LeftArrow}
         RightArrow={RightArrow} style={{overflow:"scroll"}}>
        {data.length >1 &&  data.map((item) =>(
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
        }
        </Box>

</Box>)
}

export default ImageScrollbar;
