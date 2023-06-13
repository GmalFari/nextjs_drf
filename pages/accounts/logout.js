import { Box } from "@chakra-ui/react";
import MainAlert from "../../components/MainAlert";
import { useRouter } from "next/router";
import { useEffect,useContext } from "react";
import AuthContext from "../../context/AuthContext";
const Logout = () => {
  const {logoutUser}=useContext(AuthContext)
  const headerContent = "تسجيل خروج";
  const alertDialogHeader = "تسجيل خروج";
  const alertDialogBody = "هل أنت متأكد أنك تريد تسجيل الخروج ؟"
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
    <MainAlert headerContent={headerContent} 
            alertDialogHeader={alertDialogHeader} 
                alertDialogBody={alertDialogBody} 
              handleSubmit={logoutUser} />
    </Box>
    :null
    }
    </Box>
  )
}

export default Logout
