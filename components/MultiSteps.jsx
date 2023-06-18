/* eslint-disable react/jsx-no-undef */
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

import ImagesUpload from "./images/ImagesUpload";
import {UpdateProperty} from "../utils/fetchApi"
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
import { Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';

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
          id="property_type"
          name="property_type"
          value={data.property_type}
          onChange={handleChange}
          autoComplete="typeProperty"
          placeholder=" نوع العقار"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
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
          value={data.purpose}
          onChange={handleChange}
          autoComplete="purpose"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
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
          id="rent_frequency"
          name="rent_frequency"
          onChange={handleChange}
          value={data.rent_frequency}
          autoComplete="typeProperty"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
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
          id="property_town"
          name="property_town"
          value={data.property_town}
          onChange={handleChange}
          autoComplete="city"
          placeholder="إسم المدينة"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          required="required"
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
          id="property_district"
          name="property_district"
          autoComplete="property_district"
          placeholder="إسم المديرية"
          // value={}
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          required="required"
          onChange={handleChange}
          >
         {yemenGis.features.filter(Directorate => 
            Directorate['properties']['NL_NAME_1'] ==data.property_town
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
          id="property_area" 
          name="property_area"
          value={data.property_area}
          onChange={handleChange}

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
          id="property_street" 
          name="property_street"
          value={data.property_street}
          onChange={handleChange}
          autoComplete="property_street"
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

const Form2 = ({ errors,myData,setData,title,handleChange,setTitle,setImg}) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
      بيانات العقار
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
      {/* عنوان الاعلان */}
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
          عنوان الإعلان 
        </FormLabel>
        <Input
          borderColor={errors?.sqrt_area?'red':'none'}
          type="text"
          name="property_title"
          id="property_title"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={myData.property_title}
          onChange={handleChange}
          // onChange={e=>{setTitle(e.target.value)}}
        />
         <FormLabel color={"red"} display={errors?.property_title?'flex':'none'}>
                 <small>{errors?.property_title?errors.property_title:null}</small>
                 </FormLabel>
      </FormControl>
      {/* رقم الإعلان */}
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="property_number"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          رقم العقار المسجل 
        </FormLabel>
        <Input
          type="text"
          name="property_number"
          id="property_number"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={myData.property_number}
          onChange={handleChange}
          // onChange={e=>{setTitle(e.target.value)}}
        />
      </FormControl>
    {/* السعر */}
      <FormControl display={"flex"} as={GridItem} colSpan={[6, 6, null, 2]}>
        <Box ms={"10px"} me={"10px"}>
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
          id="property_price"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={myData.property_price}
          onChange={handleChange}
          // onChange={e=>{setTitle(e.target.value)}}
        />
        </Box>
        <Box>
        <FormLabel
          htmlFor="typeProperty"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
           نوع العملة
        </FormLabel>
        <Select
            dir="ltr"
          id="currency"
          name="currency"
          value={myData.currency}
          onChange={handleChange}
          autoComplete="typeProperty"
          placeholder=" نوع العملة"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          >
          {['ريال يمني','ريال سعودي','دولار'].map((typeP,index)=>{
        return (
            <option key={index} value={typeP}>{typeP}</option>
        )
  })}
        </Select>
        </Box>
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
          {/* رابط الفيديو ع اليوتيوب */}
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
         {/*  التفاصيل الكاملة للعقار */}
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
            id="property_description"
            name="property_description"
            value={myData.property_description}
            onChange={handleChange}
            rows={"full"}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',

            }}
          />
          <FormHelperText>
         </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};
const Form3 = ({errors, data,handleChange,setPropertyLocation,ChooseLocation}) => {
  // const [selectView ,setSelectView] =useState()
  // const [show, setShow] = React.useState(false);
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
          <Input 
            borderColor={errors?.sqrt_area?'red':'none'}
            type="number"
            id="sqrt_area"
            name="sqrt_area"
            default={0}
            value={data.sqrt_area}
            onChange={handleChange}
            placeholder="المساحة" />
        <FormLabel color={"red"} display={errors?.sqrt_area?'flex':'none'}>
                 <small>{errors?.sqrt_area?errors.sqrt_area:null}</small>
                 </FormLabel>
        </Box>
        <Box width={["100%","fit-content"]}>
        <FormLabel htmlFor="view" fontWeight={'normal'}>
          الإطلالة
          </FormLabel>
        <Select
          dir="ltr"          
          id="building_facade"
          name="building_facade"
          value={data.building_facade}
          onChange={handleChange}

          autoComplete="building_facade"
          placeholder="الإطلالة"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
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
          <Input

           id="rooms"
           name="rooms"
           value={data.rooms}
           onChange={handleChange}
            placeholder="عدد الغرف" />
        </Box>
        <Box width={["100%","fit-content"]}>
          <FormLabel htmlFor="baths" fonsSize={'sm'} fontWeight={'normal'}>
          عدد الحمامات
          </FormLabel>
          <Input 
              id="baths"
              name="baths"
              value={data.baths}
              onChange={handleChange}
               placeholder="عدد الحمامات" />
        </Box>
        <Box width={["100%","fit-content"]}>
        <FormLabel htmlFor="view" fontWeight={'normal'}>
         قابلية للتفاوض
          </FormLabel>
        <Select
            dir="ltr"
           id="is_negotiable"
          name="is_negotiable"
          autoComplete="is_negotiable"
          placeholder=""
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          onChange={handleChange}
          >
            <option value={'قابل للتفاوض'} >قابل للتفاوض</option>
            <option value={'غير قابل للتفاوض'} > غير قابل للتفاوض</option>

        </Select>
        </Box>
        <Box width={["100%","fit-content"]}>
          <FormLabel htmlFor="baths" fonsSize={'sm'} fontWeight={'normal'}>
          سنة الإنشاء
          </FormLabel>
          <Input 
          type="number" 
          id="building_age"
          name="building_age"
          onChange={handleChange}
            placeholder='2010:مثال'/>
        </Box>
        <Box width={["100%","fit-content"]}>
        <FormLabel htmlFor="view" fontWeight={'normal'}>
          نوع التشطيب
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
          onChange={handleChange}
          >
            <option value={' تشطيب كامل'} >تشطيب كامل </option>
            <option value={' عظم '} >  عظم </option>
            <option value={' تشطيب جزئي'} >تشطيب جزئي </option>
        </Select>
        </Box>
        </Grid>
        <FormControl t={"20px"}>
           <MyMap sizes={{mapW:"100%",mapH:400}} 
                  setPropertyLocation={setPropertyLocation} 
                  ChooseLocation={ChooseLocation} 
                  />
      </FormControl>
    </>
  );
};

export default function Multistep({
  myData,setData,
  imageFiles,setImageFiles
            }) {
//  myData.coverPhoto = null 
  const [loading,setLoading] = useState(false)
  let {loginUser,user} = useContext(AuthContext)
  const router = useRouter();
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
  const [progress, setProgress] = useState(25);
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
const [errors,setErrors] = useState()
let token = JSON.parse(localStorage.getItem("authTokens"))
let accessToken = token?.access
let testApi = async()=>{
  setLoading(true);
  const myform = new FormData()
  
  {/*  myform.append("property_number",myData.property_number);
   */}
    myform.append("owner",user.user_id);
    myform.append("property_title",myData.property_title);
    myform.append("property_type",myData.property_type);
    
    {myData.coverPhoto && myform.append("coverPhoto",myData.coverPhoto,"picture.jpg")};
                                                        
    myform.append("purpose",myData.purpose);
    myform.append("property_town",myData.property_town);
    myform.append("location",JSON.stringify(myData.location));
    myform.append("property_district",myData.property_district);
    myform.append("property_area",myData.property_area);
    myform.append("property_street",myData.property_street);
    myform.append("rent_frequency",myData.rent_frequency);
  
    myform.append("property_description",myData.property_description);
    myform.append("property_price",myData.property_price);
    myform.append("currency",myData.currency);
    myform.append("is_negoktiable",myData.is_negotiable);
    myform.append("phone",myData.phone);
    myform.append("rooms",myData.rooms);
    myform.append("baths",myData.baths);
    myform.append("is_negotiable",myData.is_negotiable);
   {myData.sqrt_area !== null? myform.append("sqrt_area",myData.sqrt_area):null};
    myform.append("furnishingStatus",myData.furnishingStatus);
    myform.append("building_facade",myData.building_facade);
    myform.append("building_age",myData.building_age);
    myform.append("state",myData.state);
    myform.append("directorate",myData.directorate); 
    const url = 'https://fortestmimd.pythonanywhere.com/api/list-properties/'
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
          // router.push(`/property/${result.id}`)
          toast(
              {
              title: ` لقد تم  إضافة العقار`,
              description:`${result.property_title}`,
              //   // newData.map((m,i)=>(
              //   //     <>
              //   //       {m.key}: {m.value}
              //   //     </>
              //   // )
              //   // )
              //   ,
                status: 'success',
                isClosable: true
               })
            
          setData({...myData,property_title:""})
          console.log(result)
          alert(JSON.stringify(result))
          setStep(4)
        }else{
          setErrors(result)
        toast(
               {
              title: ` خطأ`,
              description:`${JSON.stringify(result)}`,
                status: 'error',
               isClosable: true
              })
        }
      } catch (error) {
        toast(
               {
              title: ` خطأ`,
              description:`${JSON.stringify(error)}`,
                status: 'error',
               isClosable: true
              })
      }
      setLoading(false)
    }

const handleSubmit = async e => {
  e.preventDefault();
  // testApi()
  {myData.id?UpdateProperty(myData.id,myData,accessToken,setLoading):testApi()};
  // {myData.id && router.reload(window.location.pathname)}

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
        position={'relative'}
        dir={"rtl"}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        type=""
        >
         {loading?<Spinner 
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                position={'absolute'} 
                transform={'translate(-50%, -50%)'}
                top='80%'
                left='50%'
                
                zIndex='9999999999'
                />:null}
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? 
        <Form1 
                        data={myData}
                        purposeList={purposeList}
                        rentFrequencyList={rentFrequencyList}
                        handleChange={handleChange}
                        />
                         : step === 2 ? <Form2 
                         errors={errors}
                         myData={myData}
                          setData={setData} handleChange={handleChange}
                           title={myData.property_title}  setImg={setImg} /> :
                           step === 3?
                          <Form3   
                          errors={errors}                    
                           data={myData}
                           handleChange={handleChange}
                           setPropertyLocation={setPropertyLocation} 
                            /> :
                            <Box>
                            <Box>أختر الصور للعقار</Box>
                            <ImagesUpload 
                            imageFiles={imageFiles} setImageFiles={setImageFiles} />
                            </Box>
                           }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress -25);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
                ms="5px"
                me="5px"
                >
                رجوع
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 4}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 4) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                القادم
              </Button>
            </Flex>
            {step === 3?(
              <form onSubmit={handleSubmit} enctype="multipart/form-data">   
              <Button
                type="submit"
                w="8rem"
                colorScheme="teal"
                variant="solid"
               // onClick={() => {submitted?
        
              
              // toast(
              //   // {
              //   // title: ` خطأ`,
              //   // description:"error"
              //   // newData.map((m,i)=>(
              //   //     <>
              //   //       {m.key}: {m.value}
              //   //     </>
              //   // )
              //   // )
              //   ,
              //   status: 'error',
              //   isClosable: true,
              // })
            
                //}}
                >
                {myData.id?"تعديل العقار ":"إضافة عقار"}
                </Button>
              
        </form>
      ):null}
          </Flex>
        </ButtonGroup>
        
      </Box>
    
    </>
  );
}
