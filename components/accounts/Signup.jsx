import { useForm, Controller } from "react-hook-form";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Label,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
import { useState,useContext} from 'react';
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import { Formik, useFormik } from "formik";
import AuthContext from "../../context/AuthContext";
import { useToast } from '@chakra-ui/react';
export default function SignupCard() {

  const {registerUser,loginUser,errors} = useContext(AuthContext);

  const [submitted,setSubmitted]=useState(false);
  const toast = useToast()

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading,setLoading] = useState(true);
  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(firstname,lastname,email, password);
    loginUser
  };
  console.log(errors)
  
    // const { control, handleSubmit } = useForm({
    //   defaultValues: {
    //     firstName: '',
    //     select: {}
    //   }
    // });

  // const formik = useFormik({
  //   initialValues: {
  //     username:"",
  //     email: "",
  //     password1: "",
  //     password2: "",

  //     rememberMe: false
  //   },
    
  //  onSubmit: values => {

  //   // alert(JSON.stringify(values, null, 2))
  //   const user = {
  //     username:formik.values.username,
  //     email: formik.values.email,
  //     password1:formik.values.password1,
  //     password2:formik.values.password2,
  //   };
  //   fetch('http://127.0.0.1:8000/auth/users/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data) {
  //         localStorage.clear();
  //         localStorage.setItem('token', data.auth_token);
  //         console.log(localStorage.getItem('token'))
  //         window.location.replace('http://localhost:3000/accounts/login');

  //       } else {
  //         console.log('not found')
  //         localStorage.clear();
  //       }
  //     });
  // }
  // });

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
          <Heading fontFamily={'body'} margin="auto"  fontWeight="bold">
                      انشاء حساب
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              {/* to enjoy all of our cool features  */}
              تصفح أخر وأفضل العقارات ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
           <form onSubmit={handleSubmit} >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>الإسم الأول</FormLabel>
                    <Input type="text"
                    name="firstname"
                    value={firstname}
                      onChange={e=>setFirstname(e.target.value)}  />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>الإسم الأخير</FormLabel>
                    <Input type="text" name="lastname" 
                            value={lastname}
                            onChange={e=>setLastname(e.target.value)}  />

                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel> البريد الالكتروني</FormLabel>
                <Input type="email"
                  name="email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
               />
                 <FormLabel display={errors?.email?'flex':'none'}>
                 <small>{errors?.email?errors.email:null}</small>
                 </FormLabel>
             </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel> (اختياري) رقم التلفون</FormLabel>
                <Input type="text"
                  name="phone"
                 // value={email}
                 // onChange={e=>setEmail(e.target.value)}
               />
                 <FormLabel display={errors?.email?'flex':'none'}>
                 <small>{errors?.email?errors.email:null}</small>
                 </FormLabel>
             </FormControl>
           
              <FormControl id="password" isRequired>
                <FormLabel>كلمة السر </FormLabel>
                <InputGroup>
                  <Input dir="ltr" type={showPassword ? 'text' : 'password'}
                        value={password}
                        name="password"
                        onChange={e=>setPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <small>{errors?.password?errors.password:null}</small>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>تأكيد كلمة السر</FormLabel>
                <InputGroup>
                  <Input dir="ltr" type={showPassword ? 'text' : 'password'} 
                      name="password2"
                      value={password2}
                      onChange={e=>setPassword2(e.target.value)}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
              <Button type="submit" colorScheme="purple" width="full">
              تسجيل 
            </Button>
              </Stack>
              <Stack pt={6}>
                <Button
                onClick={() => {!submitted?
                 toast({
                    title: apiMessage,
                    description:apiMessage ,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  }): toast({
                    title: 'property created.',
                    description: "We've add your property to listings.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}
                  align={'center'}>
                  لديك حساب بالفعل <Link href="/accounts/login" color={'blue.400'}>تسجيل دخول</Link>
                </Button>
              </Stack>
            </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    );
  }
  
