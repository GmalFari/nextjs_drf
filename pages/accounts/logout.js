import { Box } from "@chakra-ui/react";
import MainAlert from "../../components/MainAlert";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Logout = () => {
    const authTokens = localStorage.getItem("authTokens");
    const router = useRouter()
    useEffect(()=>{
      if(!authTokens){
        router.push("/")
      }
    },[authTokens, router])
  return (
    <Box marginTop="5em" textAlign="center">
    {authTokens?
    <Box>
    <Box>هل أنت متأكد أنك تريد تسجيل الخروج</Box>
    <MainAlert/>
    </Box>
    :null
    }
    </Box>
  )
}

export default Logout
