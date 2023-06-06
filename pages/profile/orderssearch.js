import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
<Card dir='rtl' >
  <CardHeader>
    <Heading size='md'>
  طلبات عقارات
    </Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          مطلوب بيت من غرفتين وصالة بمدين
        </Heading>
        <Text pt='2' fontSize='sm'>
      مطلوب شقه سكنيةمن المالك مباشر استوديو او غرفة او ثلاث غرف شخصي الدلالين لو سمحتو بعدين
              </Text>
              <Box display='flex' alignItems='base line' mt={4}> 
          <Badge borderRadius='full' px='2' colorScheme='teal' ms='2'>
           جديد
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
      4غرف  &bull;  2حمامات
          </Box>
        </Box>
      </Box>


      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
