import { useFormik } from "formik";
import {
  Box,
  Stack,
  Link,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react';
import MainAlert from "../MainAlert";
import { useRouter } from "next/router";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState,useEffect,useContext } from "react";
import AuthContext from "../../context/AuthContext";
const  LoginComponent=()=> {
  let {loginUser,errors} = useContext(AuthContext)

  const [submitted,setSubmitted]=useState(false);
  const toast = useToast()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState(false);
  const [loading,setLoading] = useState(true);
  const router = useRouter();
  // useEffect(() => {
  //   if (localStorage.getItem('authTokens') !== null) {
      
  //     history.back();
  //   } else {
  //     setLoading(false);
  //   }
  // }, []);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/');
    } else {
      setLoading(false);
    }
  }, []);





  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={loginUser}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">البريد الإلكتروني</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}

              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">كلمة السر </FormLabel>
              <InputGroup>
                  <Input
                  dir="ltr"
                   name="password"
                   value={password}
                  required
                  onChange={e => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variaznt={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              colorScheme="purple"
            >
              Remember me?
            </Checkbox>
            <Button type="submit" colorScheme="purple" width="full">
              تسجيل دخول
            </Button>
          </VStack>
        </form>
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
            ليس لديك حساب <Link href="/accounts/register" color={'blue.400'}>إضافة حساب </Link>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default LoginComponent;