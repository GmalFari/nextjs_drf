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

const PropertyTable =({property_number,
  purpose,
  property_town,
  property_district,
  rent_frequency,
  ownership_type,
  property_street,
  property_description,
  currency,
  is_negotiable,
  phone,
  rooms,
  baths,
  furnishingStatus,
  building_facade,
  building_age,
  sqrt_area,
  omities,
  timestamp,
  updated,
      property_price,
  property_area})=>{
  return (
    <>
<Flex  width={'100%'} minW="100%"
    justifyConten='center' flexWrap='wrap'>
     <TableContainer dir='rtl' maxW='100%'>

  <Table variant='striped'>
    
    <Thead>
      
    </Thead>
    <Tbody>
    <Tr>
        <Td> رقم التواصل     </Td>
        <Td> {phone}</Td>
        
      </Tr>
      <Tr>
        <Td> السعر      </Td>
        <Td> {property_price}</Td>
        
      </Tr>
      <Tr>
        <Td>المدينه</Td>
        <Td>{property_town}</Td>
      </Tr>
      <Tr>
        <Td>الحي / المنطقه</Td>
        <Td>{property_area} </Td>
      </Tr>
      <Tr>
        <Td>عدد الغرف </Td>
        <Td>{rooms}</Td>
      </Tr>
      <Tr>
        <Td>عدد الحمامات </Td>
        <Td> {baths}</Td>
      </Tr>
      <Tr>
        <Td>مساحة البناء</Td>
        <Td>{sqrt_area}</Td>
        
      </Tr>
      <Tr>
        <Td> عمر البناء
      </Td>
        <Td> {building_age}</Td>
        
      </Tr>
      <Tr>
        <Td> واجهة المبنى 
      </Td>
        <Td> {building_facade}</Td>
        
      </Tr>
      <Tr>
        <Td> مفروشة /غير مفروشة      </Td>
        <Td> {furnishingStatus?"مفروشة":"غير مفروشة"}</Td>
        
      </Tr>
      <Tr>
        <Td>قابلية التفاوض  
      </Td>
        <Td> {is_negotiable}</Td>
        
      </Tr>
      
      
    </Tbody>
    <Tfoot>
      
        
      
    </Tfoot>
  </Table>
</TableContainer>
</Flex>
    </>
  )

}

export default PropertyTable;
