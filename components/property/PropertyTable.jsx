import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
  } from '@chakra-ui/react'

const PropertyTable =()=>{
  return (
    <>
<Flex ms="20px" me="20px" width={'100%'} 
    justifyConten='center' flexWrap='wrap'>
     <TableContainer>
  <Table variant='striped' colorScheme='#ddd'>
    <TableCaption placement='top'>
       معلومات العقار</TableCaption>
    <Thead>
      {/* <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
      </Tr> */}
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
 <TableContainer overflow={'hidden'}>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption placement='top'>
       معلومات العقار</TableCaption>
    <Thead>
      {/* <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
      </Tr> */}
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
</Flex>
    </>
  )

}

export default PropertyTable;
