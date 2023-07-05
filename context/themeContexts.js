/* eslint-disable react/no-unescaped-entities */
import { Box,Switch,Button,useColorMode,useColorModeValue } from "@chakra-ui/react"
const  StyleColorMode=() =>{
    const { toggleColorMode } = useColorMode()
  
    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')
  
    return (
      <>
       
        <Switch ms={2} me={4}
            id="dark_mode"
            colorScheme="teal"
            size={["md","lg"]}
            onChange={toggleColorMode}
          />
      </>
    )
  }

  export default StyleColorMode;