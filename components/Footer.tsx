import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Footer() {
    return (
      <Box
        bg={"rgb(23 116 113)"}
        color={"white"}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <Link href={'/'}>الرئيسية</Link>
            <Link href={'/search/?purpose=for sale'}>عقارات للبيع</Link>
            <Link href={'/search/?purpose=for rent'}>عقارات للإيجار</Link>
            <Link href={'#'}>من نحن</Link>
          </Stack>
          <Text>© 2023 Libna house. All rights reserved</Text>
        </Container>
      </Box>
    );
  }
