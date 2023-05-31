import React, { useState,useEffect } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  Grid,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import Autocomplete from './AutoComplete';
import MyMap from './Mymap';
import yemenGis from "../utils/yemenGis.json";
import gadm41_YEM_1 from "../utils/gadm41_YEM_1.json";
import {typeProperty} from "../utils/selectedData";
import {viewList} from "../utils/viewList";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';



const Form1 = () => {
  const purposeList = ['للإيجار','للبيع']
  const rentFrequencyList = ['يومي','اسبوعي','شهري','سنوي','نصف سنوي','ربع سنوي']
  const [city , setCity] = useState("")
  const [state , setState] = useState("")
  const [propertyPurpose,setPropertyPurpose] = useState(purposeList[0])
  const [isForRent , setIsForRent] = useState(true)
  const [rentFrequency,setRentFrequency] = useState()
  const handleCityChange = (e)=>{
    setCity(e.target.value)
  }
  const handleStateChange = (e)=>{
    setState(e.target.value)

  }
  const handlePurpose = (e) =>{
    setIsForRent(!isForRent)
    setPropertyPurpose(e.target.value)
    console.log(isForRent)
  }
  const handleRentFrequency = (e) =>{
      setRentFrequency(e.target.value)
  }
  return (
    <>
    
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
      أعلن عن عقارك 
      </Heading>
      
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="typeProperty"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
           نوع العقار
        </FormLabel>
        <Select
          direction="rtl"
          id="typeProperty"
          name="typeProperty"
          autoComplete="typeProperty"
          placeholder=" نوع العقار"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          {typeProperty.map((typeP)=>{
        return (
            <option key={typeP} value={typeP} >{typeP}</option>
        )
  })}
        </Select>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="purpose"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
           الغرض 
        </FormLabel>
        <Select
          direction="rtl"
          id="purpose"
          name="purpose"
          autoComplete="purpose"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handlePurpose}
          >
          {purposeList.map((purposeItem,index)=>(
          <option key={index}  value={propertyPurpose} selected={index===0}>{purposeItem}</option>
          ))}
        </Select>
      </FormControl>
      {isForRent && <Box width={["100%","fit-content"]}>
        <FormLabel htmlFor="view" fontWeight={'normal'}>
          عقد الإيجار
          </FormLabel>
        <Select
          direction="rtl"
          id="typeProperty"
          name="typeProperty"
          autoComplete="typeProperty"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          onChange={handleRentFrequency}
          >
          {rentFrequencyList.map((propertyview)=>{
        return (
            <option key={propertyview} value={propertyview} >{propertyview}</option>
        )
  })}
        </Select>
        </Box>}
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
      إسم المدينة
        </FormLabel>
        <Select
          id="city"
          name="city"
          autoComplete="city"
          placeholder="إسم المدينة"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          required="required"
          onChange={handleCityChange}
          >
         {gadm41_YEM_1.features.map((city,index)=>{
      return (
      <option key={index} value={`${city['properties']['NL_NAME_1']}`}
      >{` ${city['properties']['NL_NAME_1']} `}</option>
      )
      })}
        </Select>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
                  إسم المديرية
        </FormLabel>
        <Select
          id="city"
          name="city"
          autoComplete="city"
          placeholder="إسم المديرية"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          required="required"
          onChange={handleStateChange}
          >
         {yemenGis.features.filter(Directorate => 
            Directorate['properties']['NL_NAME_1'] ==city
        ).map((Directorate,index) =>(
          <option key={index} value={`${Directorate['properties']['NL_NAME_2']}`}>{`${Directorate['properties']['NL_NAME_2']}`}</option>
        ))
        }
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="District"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
                إسم المنطقة/الحي
        </FormLabel>
        <Input
          type="text"
          name="District"
          id="District"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder='مثال: سعوان , السنينة , المطار'
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
      إسم الشارع
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder='مثال: شارع الستين, التحرير, شارع الثلاثين'
        />
      </FormControl>

    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
      بيانات العقار
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="District"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          عنوان الإعلان بالعربي
        </FormLabel>
        <Input
          type="text"
          name="District"
          id="District"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="District"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          رابط الفيديو للعقار على اليوتيوب
        </FormLabel>
        <Input
          type="text"
          name="District"
          id="District"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder='https://www.youtube.com/watch?v=MGrQa4ElR8M'
        />
      </FormControl>

        <FormControl as={GridItem} id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            التفاصيل الكاملة للعقار
          </FormLabel>
          <Textarea
          
            rows={4}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
          التفاصيل الكاملة للعقار
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};
const Form3 = () => {
  const [selectView ,setSelectView] =useState()
  const [propertyLocation,setPropertyLocation] = useState({longitude:44.20729970272413,latitude:15.348533564724178})
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleViewChange = (e)=>{
    setSelectView(e.target.value)
  }

  const ChooseLocation = (position) => {
        setPropertyLocation({longitude:position['longitude'],latitude:position['latitude']})
  }
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
      وصف العقار
      </Heading>
      <Grid
        templateColumns='repeat(auto-fit, minmax(150px, 1fr))'
        gap={4}
>
    <Box width={["100%","fit-content"]}>
          <FormLabel htmlFor="space" fontWeight={'normal'}>
          المساحة بالمتر
          </FormLabel>
          <Input type="number" id="space" placeholder="المساحة" />
        </Box>
        
        <Box width={["100%","fit-content"]}>
        <FormLabel htmlFor="view" fontWeight={'normal'}>
          الإطلالة
          </FormLabel>
        <Select
          direction="rtl"
          id="typeProperty"
          name="typeProperty"
          autoComplete="typeProperty"
          placeholder="الإطلالة"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          onChange={handleViewChange}
          >
          {viewList.map((propertyview)=>{
        return (
            <option key={propertyview} value={propertyview} >{propertyview}</option>
        )
  })}
        </Select>
        </Box>
        <Box width={["100%","fit-content"]}>
          <FormLabel htmlFor="rooms" fonsSize={'sm'} fontWeight={'normal'}>
          عدد الغرف
          </FormLabel>
          <Input id="price" placeholder="عدد الغرف" />
        </Box>
        <Box width={["100%","fit-content"]}>
          <FormLabel htmlFor="baths" fonsSize={'sm'} fontWeight={'normal'}>
          عدد الحمامات
          </FormLabel>
          <Input id="price" placeholder="عدد الحمامات" />
        </Box>
        <Box width={["100%","fit-content"]}>
        <FormLabel htmlFor="view" fontWeight={'normal'}>
         قابلية للتفاوض
          </FormLabel>
        <Select
          direction="rtl"
          id="typeProperty"
          name="typeProperty"
          autoComplete="typeProperty"
          placeholder=""
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          onChange={handleViewChange}
          >
            <option value={'قابل للتفاوض'} >قابل للتفاوض</option>
            <option value={'غير قابل للتفاوض'} > غير قابل للتفاوض</option>

        </Select>
        </Box>
        <Box width={["100%","fit-content"]}>
          <FormLabel htmlFor="baths" fonsSize={'sm'} fontWeight={'normal'}>
          سنة الإنشاء
          </FormLabel>
          <Input type="number" id="price"  placeholder='2010:مثال'/>
        </Box>
        <Box width={["100%","fit-content"]}>
        <FormLabel htmlFor="view" fontWeight={'normal'}>
          نوع التشطيب
          </FormLabel>
        <Select
          direction="rtl"
          id="typeProperty"
          name="typeProperty"
          autoComplete="typeProperty"
          placeholder=""
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          onChange={handleViewChange}
          >
            <option value={' تشطيب كامل'} >تشطيب كامل </option>
            <option value={' عظم '} >  عظم </option>
            <option value={' تشطيب جزئي'} >تشطيب جزئي </option>
        </Select>
        </Box>
        </Grid>
        <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          عنوان العقار
        </FormLabel>
          <Input
            pr="4.5rem"
            type={'text'}
          />
           <MyMap sizes={{mapW:"100%",mapH:400}} ChooseLocation={ChooseLocation} geoDetail={{lat:"24.50685",lng:"54.407687"}} />
      </FormControl>
        <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
      </FormControl>

      


      
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
