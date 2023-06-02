import React from 'react'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import {Flex,Box,Text,Icon,Spacer,Heading} from '@chakra-ui/react';
import {BsFilter } from 'react-icons/bs'; 
import SearchFilter from '../components/SearchFilter';
import Main_search from "../components/MainSearch";
import Property from '../components/Property';
import HorizonalCard from "../components/HorizonalCard";
import OtherProperty from '../components/OtherProperty';
import Section2 from "../components/Section2";

import noresult from '../assets/images/noresult.svg';
import {baseUrl,fetchApi} from '../utils/fetchApi';
import Autocomplete from '../components/AutoComplete';
import Map, { GeolocateControl } from "react-map-gl";

import {GoKebabVertical } from 'react-icons/go';
import { BsSortDown } from 'react-icons/bs';
import {FaGripHorizontal,FaList} from 'react-icons/fa';
import axios from 'axios';
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from '@chakra-ui/react';
import Pagination from '../components/Pagination';
// import { paginate } from '../helper/paginate';
const Search = ({data}) => {
    const myproperties = data?.results
    const [pageCount,setPageCount] = useState(data?.count);
    const itemsCount = Math.round(pageCount)
    const [properties,setProperties] = useState(myproperties)
    const [searchFilter,setSearchFilter] = useState(false);
    const [toggleVerticalCard,setToggleVerticalCard] = useState('true');
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1);
    console.log(pageCount)
    const pageSize = 3;


    const onPageChange = (page) => {
      setCurrentPage(page);
    };
    useEffect(() => {
        if(currentPage < 1){
            setCurrentPage(1)
        }
        if(currentPage > itemsCount){
            setCurrentPage(itemsCount)
        }
        const path = router.pathname;
        const {query } = router;  
        query["page"] = currentPage
        router.push({pathname:path,query})

        axios.get(`https://fortestmimd.pythonanywhere.com/api/list-properties/?page=${currentPage}`)
          .then((response) => {
            setPageCount(response.data.count)
            setProperties(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [currentPage, itemsCount, router]);

    const listingsH = [properties.map((property) =>(
               <HorizonalCard   property={property} key={property.id} /> 
                   ))]
    const listingsV = [properties.map((property) =>(
        
       
       <Property property={property} key={property.id} />
        ))]
  return (
    <Box>
        <Flex
        cursor="pointer" 
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p={{"base":"10","md":"2"}}
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilter(!searchFilter)}
        >
        <Text> البحث المتقدم  </Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
        </Flex>
        {searchFilter && <SearchFilter setProperties={setProperties}/>}
        <Flex justifyContent={'space-between'} fontSize={['md','xl','xl','2xl']} p="4" fontWeight="bold">
        <Flex color={'#006169'} flexGrow={1} justifyContent={'right'} >
        <Icon             
            cursor={ 'pointer'} 
            color={!toggleVerticalCard?'#006169':'#ddd'}
             onClick={()=>{setToggleVerticalCard(!toggleVerticalCard)}} 
              ms={2} me={2}
             as={FaGripHorizontal}
              />
              <Icon
                cursor={'pointer'} 
            color={toggleVerticalCard?'#006169':'#ddd'}
             onClick={()=>{setToggleVerticalCard(!toggleVerticalCard)}} 
              ms={2} me={2}
                 as={FaList}/>
               <Icon as={BsSortDown}/> 
             

        </Flex>
        <Text>
        </Text>
        </Flex>
        <Flex flexDirection={['column']}  flexWrap="wrap" justifyContent="center" alignItems="center" >
            {!toggleVerticalCard?
                <Box display={['Flex']} 
        flexDirection={['column','column','column','row']}  
       justifyContent="center"
       alignItems="center"
       >{listingsV}
       </Box>:listingsH}
          </Flex>
          {properties.length !== 0&& <Flex justifyContent={"center"}>
         <Box style={{
           "display": "flex",
          "justify-content": "center",
         " align-items": "center",
          "paddingRight": "0.5rem",
          "paddingLeft": "0.5rem",
          "margin":"0 20px",
          "border": "1px solid #eaeaea",
          "border-radius": "0.5rem",
          "cursor": "pointer",
          "marginTop":"50px",
          "height":"30px",

         }}
         onClick={()=>{setCurrentPage(currentPage -1)}}
         >السابق</Box>
         <Pagination
                items={itemsCount} // 100
                currentPage={currentPage} // 1
                pageSize={pageSize} // 10
                onPageChange={onPageChange}
            />
            <Box style={{   
              "display": "flex",
          "justify-content": "center",
         " align-items": "center",
          "paddingRight": "0.5rem",
          "paddingLeft": "0.5rem",
          "margin":"0 20px",
          "border": "1px solid #eaeaea",
          "border-radius": "0.5rem",
          "cursor": "pointer",
          "marginTop":"50px",
          "height":"30px",
        }}
        onClick={()=>{setCurrentPage(currentPage  + 1)}}
        >
                القادم
            </Box>
         </Flex>}
        {properties.length === 0 && (
            <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
            <Image width="auto" height="auto" alt="no result" src={noresult}/>
            <Text fontSize="2xl" marginTop="3">No Results founds</Text>
            </Flex>
        )}

        <Spacer />
        <Box mt="100px" mb={"100px"} >
        <Box textAlign="center" margin='10px' fontSize="40px" 
      fontWeight="bold">      عقارت أخرى
      </Box>
      <Box overflowX={"scoll"}  justifyContent={"center"}   display="flex"  flexWrap="nowrap" overflowY="scroll" >
      {properties.map((property) => <OtherProperty  property={property}  key={property.id} />)}
    </Box>
        </Box>
      <Box  mt="100px" textAlign="center"  >
      <Heading fontFamily={'body'} as="h2">
      العقارات الأكثر بحثاً
      </Heading>
      <Section2 />
      </Box>  
    </Box>
  )
}

export default Search


export async function getServerSideProps({query}) {
    const purpose = query.purpose || 'for rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const bathsMin = query.bathsMin || '0';
    const roomsMin = query.roomsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4'; 
    const lang = query.lang || 'ar';
    // const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=6&rentFrequency=${rentFrequency}&minPrice=${minPrice}&maxPrice=${maxPrice}&bathsMin=${bathsMin}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&categoryExternalID=${categoryExternalID}&lang=${lang}`);
        const data = await fetchApi(`https://fortestmimd.pythonanywhere.com/api/list-properties/`)
                    return {
                        props:{
                            data:data,
                              }
                    }
}
