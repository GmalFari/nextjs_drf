import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Box } from '@chakra-ui/react'
const SearchAutoComplete = () => {
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
    
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
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
        <Box style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </Box>
    </div>
  )
}

export default SearchAutoComplete
