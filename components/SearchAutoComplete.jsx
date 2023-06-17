import React from 'react'
import { useRouter } from 'next/router'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Box } from '@chakra-ui/react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const SearchAutoComplete = ({onSearch,searchValue,
  setSearchValue,setOnSearch,properties,myproperties}) => {
    const items = myproperties.map((v,i)=>(
    {
            id: v.id,
            name: v.property_title
          }
    ))
    console.log(items)
    //  [
    //     {
    //       id: 0,
    //       name: 'للبيع'
    //     },
    //     {
    //       id: 1,
    //       name: 'للإيجار'
    //     },
    //     {
    //       id: 2,
    //       name: 'صنعاء'
    //     },
    //     {
    //       id: 3,
    //       name: 'أراضي'
    //     },
    //     {
    //       id: 4,
    //       name: 'بيوت'
    //     }
    //   ]
      const[loading,setLoading]=useState(false)
      const router = useRouter();
      const searchProperties = (
        (property_title) =>{
          const path = router.pathname;
          const {query } = router;
            query["property_title"] = property_title
            router.push({pathname:path,query})

          })
      // useEffect(()=>{
      //   searchProperties()
      //   if(loading){
      //     axios.get(`https://fortestmimd.pythonanywhere.com/api/list-properties/?property_title=${searchValue}`)
      //     .then((response) => {
      //       console.log(response.data)
      //       // setProperties(response.json)
      //         })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      //   }
      // },[]);
      
  const handleOnSearch = (string, results) => {
    console.log(string)
    setOnSearch(true)
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    const path = router.pathname;
    const {query } = router;
    query["property_title"] = string
    setSearchValue(string)
    console.log(searchValue)
    query["property_title"] = searchValue
    router.push({pathname:path,query})
    


   
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
    setSearchValue(item.name)

  }

  const handleOnFocus = () => {
    console.log('Focused')
  }
  const formatResult = (item) => {
    return (
      <>
        <Box cursor={"pointer !important"} style={{ display: 'block', textAlign: 'left' }}>{item.name}</Box>
      </>
    )
  }
  return (
    <div className="App">
        <Box width={["95vw"]}>
          <ReactSearchAutocomplete
         
            autoFocus={false}
            styling={{borderRadius:"10px",padding:"20px"}}
            showIcon={false}

            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            formatResult={formatResult}
            className='ReactSearchAutoComplete'
            placeholder={'أبحث عن العقارات' }
          />
        </Box>
    </div>
  )
}

export default SearchAutoComplete
