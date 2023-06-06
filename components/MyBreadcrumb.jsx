import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Box
  } from '@chakra-ui/react';
  import { ChevronLeftIcon,ChevronRightIcon } from '@chakra-ui/icons';
const MyBreadcrumb = () => {
  return (
    <Box  display={"flex"} textAlign={"center"} dir={"rtl"} ms={4} me={4} >
    <Breadcrumb  spacing='8px' separator={<ChevronLeftIcon color='gray.400' />}>
  <BreadcrumbItem>
    <BreadcrumbLink color='#006169' href='#'>للبيع</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink color='#006169'  href='#'>شقق</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink color='#006169' href='#'>صنعاء</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink color='#006169' href='#'>السنينة</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    </Box>
  )
}

export default MyBreadcrumb
