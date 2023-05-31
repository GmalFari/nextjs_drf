import React from 'react'
import { Button,Box } from '@chakra-ui/react';

const MainBtn = ({icon,bgcolor,color,content}) => {
  return (
      <Button pt={0}  pb={0} ps={5} pe={5} bg={bgcolor} colorScheme={bgcolor} 
      fontSize fontWeight={700} variant='inline' 
      color={color}
      height={'2.1rem'}
      >
              {icon}<small>
                {content||''}</small>
        </Button>
  )
}

export default MainBtn;
