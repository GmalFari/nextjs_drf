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
    Link,
    Flex,
  } from '@chakra-ui/react'

const PropertyTable =({
  owner,
  currency,
  property_number,
  purpose,
  property_town,
  property_district,
  rent_frequency,
  ownership_type,
  property_street,
  property_description,
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
  let  dateFormat = new Date(timestamp);
  const date= new Date(timestamp);
  dateFormat = date.getHours() + ":" + date.getMinutes() + ", "+ date.toDateString();
  return (
    <>
<Flex  width={'100%'} minW="100%"
    justifyConten='center' flexWrap='wrap'>
     <TableContainer width="100%" dir='rtl' maxW='100%'>

  <Table variant='striped' width="100%">
    
    <Thead>
      
    </Thead>
    <Tbody>
    {/* {owner.phonenumber &&  */}
    <Tr>
        <Td>طريقة التوثيق</Td>
        <Td> 
          خلال  الفيدو
        <Td>   مقاول المبنى</Td>
        </Td>
        
      </Tr>
    <Tr>
        <Td> رقم /المقاول/المهندس     </Td>
        <Td>
        <Link color={"#006190"} href={"tel:+967776278868"}>7xxxxxxxx</Link> </Td>
        
      </Tr>
    {owner.phonenumber && 
    <Tr>
        <Td> رقم التواصل     </Td>
        <Td> {owner.phonenumber}</Td>
        
      </Tr>
      }
      {property_price && 
      <Tr>
        <Td> السعر      </Td>
        <Td> {`${property_price} ${currency} `}</Td>
        
      </Tr>
      }
      {property_town && 
      <Tr>
        <Td>المدينه</Td>
        <Td>{property_town}</Td>
      </Tr>
      }
      {property_district && 
      <Tr>
        <Td>المدينه</Td>
        <Td>{property_district}</Td>
      </Tr>
      }
      {property_area &&
      <Tr>
        <Td>الحي / المنطقه</Td>
        <Td>{property_area} </Td>
      </Tr>
     }
      {rooms && 
      <Tr>
        <Td>عدد الغرف </Td>
        <Td>{rooms}</Td>
      </Tr>
      }
      {baths &&
      <Tr>
        <Td>عدد الحمامات </Td>
        <Td> { baths}</Td>
      </Tr>
      }
      {sqrt_area && 
      <Tr>
        <Td>مساحة البناء</Td>
        <Td>{sqrt_area}</Td>
        
      </Tr>
        }
      {building_age && 
      <Tr>
        <Td> عمر البناء
      </Td>
        <Td> {building_age}</Td>
        
      </Tr>
      }
      {building_facade && 
      <Tr>
        <Td> واجهة المبنى 
      </Td>
        <Td> {building_facade}</Td>
        
      </Tr>
    }
      <Tr>
        <Td> مفروشة /غير مفروشة      </Td>
        <Td> {furnishingStatus?"مفروشة":"غير مفروشة"}</Td>
        
      </Tr>
      {is_negotiable&&
      <Tr>
        <Td>قابلية التفاوض  
      </Td>
        <Td> {is_negotiable}</Td>
        
      </Tr>
      }
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
