import React from 'react'
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  
}
const theme = extendTheme({
  ...config,
  fonts: {
    heading: `'Cairo', sans-serif`,
    body: `'Cairo', sans-serif`,
  }
  })
  
  export default theme