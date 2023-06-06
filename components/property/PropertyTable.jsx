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
<Flex  width={'100%'} minW="100%"
    justifyConten='center' flexWrap='wrap'>
     <TableContainer dir='rtl' maxW='100%'>

  <Table variant='striped'>
    
    <Thead>
      
    </Thead>
    <Tbody>
      <Tr>
        <Td>المدينه</Td>
        <Td>صنعاء</Td>
        
      </Tr>
      <Tr>
        <Td>الحي / المنطقه</Td>
        <Td>سعوان </Td>
        
      </Tr>
      <Tr>
        <Td>عدد الغرف </Td>
        <Td>٤ غرف نوم</Td>
        
      </Tr>
      <Tr>
        <Td>عدد الحمامات </Td>
        <Td> حمامين</Td>
        
      </Tr>
      <Tr>
        <Td>مساحة البناء</Td>
        <Td>20 م٢ </Td>
        
      </Tr>
      <Tr>
        <Td>مساحة الأرض
</Td>
        <Td>22 م٢ </Td>
        
      </Tr>
      <Tr>
        <Td>عدد الطوابق</Td>
        <Td>طابقين</Td>
        
      </Tr>
      <Tr>
        <Td> عمر البناء
 </Td>
        <Td>قيد الإنشاء</Td>
        
      </Tr>
      
    </Tbody>
    <Tfoot>
      
        
      
    </Tfoot>
  </Table>
</TableContainer>
<TableContainer display={['none','block']} dir='rtl' maxW='100%'>

  <Table variant='striped'>
    
    <Thead>
      
    </Thead>
    <Tbody>
    <Tr>
        <Td>المدينه</Td>
        <Td>صنعاء</Td>
        
      </Tr>
      <Tr>
        <Td>الحي / المنطق</Td>
        <Td>سعوان </Td>
        
      </Tr>
      <Tr>
        <Td>عدد الغرف </Td>
        <Td>٤ غرف نوم</Td>
        
      </Tr>
      <Tr>
        <Td>عدد الحمامات </Td>
        <Td> حمامين</Td>
        
      </Tr>
      <Tr>
        <Td>مساحة البناء</Td>
        <Td>20 م٢ </Td>
        
      </Tr>
      <Tr>
        <Td>مساحة الأرض
</Td>
        <Td>22 م٢ </Td>
        
      </Tr>
      <Tr>
        <Td>عدد الطوابق</Td>
        <Td>طابقين</Td>
        
      </Tr>
      <Tr>
        <Td> عمر البناء
 </Td>
        <Td>قيد الإنشاء</Td>
        
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
