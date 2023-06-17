import React from 'react'
import { useRouter } from 'next/router'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Box } from '@chakra-ui/react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const SearchAutoComplete = ({onSearch,searchValue,
  setSearchValue,setOnSearch,properties}) => {
    const items = [
        {
          id: 0,
          name: 'للبيع'
        },
        {
          id: 1,
          name: 'للإيجار'
        },
        {
          id: 2,
          name: 'صنعاء'
        },
        {
          id: 3,
          name: 'أراضي'
        },
        {
          id: 4,
          name: 'بيوت'
        }
      ]
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
    setSearchValue(string)
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    const path = router.pathname;
    const {query } = router;
    console.log(setSearchValue)
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
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }
  return (
    <div className="App">
        <Box width={["95vw"]}>
          <ReactSearchAutocomplete
          
            autoFocus={false}
            styling={{borderRadius:"10px"}}
            showIcon={false}
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            formatResult={formatResult}
            className='ReactSearchAutoComplete'
            
          />
        </Box>
    </div>
  )
}

export default SearchAutoComplete
