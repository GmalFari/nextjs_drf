import React from 'react'
import { useToast,Button } from '@chakra-ui/react'
const MainToast = ({title,description,statusOutput,duration}) => {
  const toast = useToast({
    position: 'top',
    // 'textAlign':'end',
    title: '',
    containerStyle: {
      'textAlign':'center',
      // 'display':'flex',
      // 'justifyContent':'right',
      marginTop:'2em',
      width: '400px',
      Height:"400px",
      maxWidth: '100%',
    },
  });
  return (
        toast({
          title: title,
          description:description ,
          status:statusOutput,
          duration: duration,
          isClosable: true,
        
        })
  )
  
}

export default MainToast
