import React, { useState,useEffect } from 'react';
import dayjs from 'dayjs';
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
import { useContext } from 'react';
import useAxios from '../utils/useAxios';
import Autocomplete from './AutoComplete';
import MyMap from './Mymap';
import yemenGis from "../utils/yemenGis.json";
import gadm41_YEM_1 from "../utils/gadm41_YEM_1.json";
import {typeProperty} from "../utils/selectedData";
import {viewList} from "../utils/viewList";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import AuthContext from "../context/AuthContext";


const Form1 = ({data,
                handleChange,
                purposeList,
                rentFrequencyList
                })=> {
  return (
    <>
    
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
      أعلن عن عقارك 
      </Heading>
      
      <FormControl as={GridItem} dir="rtl" colSpan={[6, 3]}>
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
            dir="ltr"
          id="typeProperty"
          name="property_type"
          autoComplete="typeProperty"
          placeholder=" نوع العقار"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
          value={data.property_type}
          >
          {typeProperty.map((typeP)=>{
        return (
            <option key={typeP} value={typeP}>{typeP}</option>
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
            dir="ltr"
          id="purpose"
          name="purpose"
          autoComplete="purpose"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
          value={data.purpose}
          >
          {purposeList.map((purposeItem,index)=>(
          <option key={index} >{purposeItem}</option>
          ))}
        </Select>
      </FormControl>
      {data.isForRent && <Box width={["100%","fit-content"]}>
        <FormLabel htmlFor="view" fontWeight={'normal'}>
          عقد الإيجار
          </FormLabel>
        <Select
         dir="ltr"
          id="typeProperty"
          name="typeProperty"
          autoComplete="typeProperty"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          onChange={handleChange}
          value={data.rent_frequency}
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
        dir="ltr"
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
          onChange={handleChange}
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
        dir="ltr"
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
          onChange={handleChange}
          >
         {yemenGis.features.filter(Directorate => 
            Directorate['properties']['NL_NAME_1'] ==data.city
        ).map((Directorate,index) =>(
          <option key={index} value={`${Directorate['properties']['NL_NAME_2']}`}>{`${Directorate['properties']['NL_NAME_2']}`}</option>
        ))
        }
        </Select>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor=""
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
          name=""
          id=""
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

const Form2 = ({myData,setData,title,handleChange,setTitle,setImg}) => {
  let {loginUser} = useContext(AuthContext)
  console.log()
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
      بيانات العقار
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="title"
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
          name="property_title"
          id="title"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={myData.property_title}
          onChange={handleChange}
          // onChange={e=>{setTitle(e.target.value)}}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="title"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          السعر
        </FormLabel>
        <Input
          type="text"
          name="property_price"
          id="title"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={myData.property_price}
          onChange={handleChange}
          // onChange={e=>{setTitle(e.target.value)}}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="title"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          الصورة الرئيسية للعقار
        </FormLabel>
        <Input
          type="file"
          name="coverPhoto"
          accept="image/png, image/jpeg"                       
          id="mainImg"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e)=>setData({...myData,coverPhoto:e.target.files[0]})}
          // onChange={e=>{e.target.mainImg.files[0]}}
        /> 
      </FormControl>
        
      
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="videoURL"
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
          name="videoURL"
          id="videoURL"
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
const Form3 = ({setPropertyLocation,ChooseLocation}) => {
  const [selectView ,setSelectView] =useState()
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleViewChange = (e)=>{
    setSelectView(e.target.value)
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
dir="ltr"          id="typeProperty"
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
        dir="ltr"
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
           <MyMap sizes={{mapW:"100%",mapH:400}} 
                  setPropertyLocation={setPropertyLocation} 
                  ChooseLocation={ChooseLocation} 
                  geoDetail={["24.50685","54.407687"]} />
      </FormControl>
    </>
  );
};

export default function Multistep({myData,setData}) {
  const [submitted,setSubmitted]=useState(null);
  const [apiMessage,setApiMessage]= useState([])
 const newData = Object.keys(apiMessage).map((key) => {
    return {
      "key": key,
      "value": apiMessage[key]
    };
  });  
  const toast = useToast({
    position: 'top',
    // 'textAlign':'end',
    title: '',
    containerStyle: {
      'textAlign':'center',
      // 'display':'flex',
      // 'justifyContent':'right',
      marginTop:'2em',
      width: '400px',
      Height:"400px",
      maxWidth: '100%',
    },
  });
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  //form1

  const purposeList = ['للإيجار','للبيع']
  const rentFrequencyList = ['يومي','اسبوعي','شهري','سنوي','نصف سنوي','ربع سنوي']
 //  //form2
     const [img,setImg] = useState("")
  // const [data,setData] = useState(myData)
  
   //form3
   const [propertyLocation,setPropertyLocation] = useState({
          longitude:44.20729970272413,latitude:15.348533564724178})
   function ChooseLocation(position){
    setPropertyLocation({longitude:position['longitude'],latitude:position['latitude']})
}
  
  let testApi = async()=>{
    let token = JSON.parse(localStorage.getItem("authTokens"))
    let accessToken = token?.access
    const myform = new FormData()
    {myData.coverPhoto &&myform.append("coverPhoto",myData.coverPhoto,"picture.jpg")};
    myform.append("property_title",myData.property_title);
    myform.append("purpose",myData.purpose);
    myform.append("rent_frequency",myData.rent_frequency);
    myform.append("purpose",myData.property_price);
   
    const url = 'http://127.0.0.1:8000/api/list-properties/'
        const options = {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryIBWMiF3BTtutX0oq',
          "Authorization" : `Bearer ${accessToken}`,
        },

        
      };
      options.body=myform

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (response.status ===201){
          setSubmitted(true)
          setApiMessage(result)
          console.log(result)
          setData({...myData,property_title:""})
          console.log(myform)
        }else {
          // setSubmitted(false)
          setApiMessage(result)
        }          
      } catch (error) {
        // setApiMessage()
        console.log(error)
        setSubmitted(false)
        alert(error)
        setApiMessage(error)
      }
    }
    const handleSubmit = async e => {
      e.preventDefault();
      testApi();
    };
    
    
    const handleChange = (e) => {
      console.log(myData.property_title)

      setData({
        ...myData,
        [e.target.name]: e.target.value,
        // coverPhoto:e.target.files[0],
      });
    };
  return (
    <>
      <Box 
        onSubmit={handleSubmit}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 
                        data={myData}
                        purposeList={purposeList}
                        rentFrequencyList={rentFrequencyList}
                        handleChange={handleChange}
                        />
                         : step === 2 ? <Form2 myData={myData}
                          setData={setData} handleChange={handleChange}
                           title={myData.property_title}  setImg={setImg} /> :
                          <Form3 setPropertyLocation={setPropertyLocation} ChooseLocation={ChooseLocation} />}
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
            {step === 3?(
      <Button
                type="submit"
                w="8rem"
                colorScheme="teal"
                variant="solid"
                onClick={
                  () => {submitted?
        
              toast({
                title: `لقد تم إضافة العقار`,

                status:'success',
                isClosable: true,
              })
            :
              toast({
                title: ` خطأ`,
                description:'لم يتم إضافه العقار هنالك خطأ'
  //   newData.map((m,i)=>(
                  //  <>
                     // {m.key}: {m.value}
                  //  </>
               // ))
                ,
                status: 'error',
                isClosable: true,
              })
            
                }
            }
                >
                إضافة عقار
              </Button>):null}
          </Flex>
        </ButtonGroup>
        
      </Box>
    
    </>
  );
}
