import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Flex,Avatar,Box,Heading,Text,IconButton ,Button} from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import {BiLike,BiChat,BiShare} from "react-icons/bi";
import { StarIcon } from '@chakra-ui/icons';

const  UserInfo=()=> {
      return (
<Card maxW='md' dir='rtl'>
  <CardHeader>
    <Flex spacing='2'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Jamal Farea'  />
        <Box>
          <Heading size='sm'>جمال فارع</Heading>
          <Text>لبنة هاوس</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<FaEllipsisV />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>

    </Text>
  </CardBody>
  

  <CardFooter
    justify='center'
    flexWrap='wrap'
    
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button>
    <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < 4 ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {4} reviews
          </Box>
        </Box>
  </CardFooter>
</Card>
)}
export default UserInfo;
