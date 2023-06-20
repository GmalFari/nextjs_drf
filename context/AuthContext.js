import  { createContext,useContext, useState, useEffect, use } from "react";
import jwt_decode from "jwt-decode";
// import { useHistory } from "react-router-dom";
import api from "../services/api"
import { useRouter } from "next/router";
import { useToast } from '@chakra-ui/react';
import MainToast from "../components/MainToast";
const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  


  let myAuthToken = null;
  let myUser = null;
  const router = useRouter()
  const [errors,setErrors] = useState()
  useEffect(()=>{
     // eslint-disable-next-line react-hooks/exhaustive-deps
     myAuthToken = localStorage.getItem('authTokens')?
          JSON.parse(localStorage.getItem('authTokens')):null
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    myUser = localStorage.getItem('authTokens')?
          jwt_decode(localStorage.getItem('authTokens')):null
  },[])
  const [authTokens, setAuthTokens] = useState(()=> myAuthToken);
  const [user, setUser] = useState(()=>myUser);
  const [loading, setLoading] = useState(true);
  // const history = useHistory();
useEffect(()=>{
  setAuthTokens(localStorage.getItem("authTokens")
  ? JSON.parse(localStorage.getItem("authTokens"))
  : null)
  setUser(  localStorage.getItem("authTokens")
  ? jwt_decode(localStorage.getItem("authTokens"))
  : null)
},[])
  let loginUser = async (email,password) => {
    // e.preventDefault()
    console.log("form submitted")
    
   try{
    const response = await fetch("https://fortestmimd.pythonanywhere.com/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
       "email":email,"password":password
      })
    });
    
    const data = await response.json();
    if (response.status === 200) {
        setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      console.log(response.status)
      alert("لقد تم تسجيل الدخول")
      history.back();
      // Router.back()
    } else {
        // alert("Something went wrong!");
        alert(`${data.detail} 
        خطأ في تسجيل الدخول
        `)
        setErrors(data)

      }
   }catch(errors){
    alert(` ${errors}`)
    // AlertBox({jamal:1})

   }
    };
  const registerUser = async (firstname,lastname,email,password) => {
    // e.preventDefault()
    try{
      const response = await fetch("https://fortestmimd.pythonanywhere.com/api/users/register/", {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "first_name":firstname,
        "last_name":lastname,
        "email":email,
        "password":password
        // "re_password":e.target.password2.value
      })
    })
    const data = await response.json()
    console.log(response.json)
    // return response.status

    if (response.status === 201) {
      console.log(response.status)
      loginUser(email,password)
      alert("لقد تم إضافة حسابك بنجاح ")
      router.push('/accounts/login')
      MainToast({"title":"خطاء بالبيانات ","description":"خطأ بالبيانات"
      ,"statusOutput":"error","duration":"5000"})
    } else {
      setErrors(data)

      MainToast({"title":"خطاء بالبيانات ","description":"خطأ بالبيانات"
      ,"statusOutput":"error","duration":"5000"})
      // alert("Something went wrong!");
      // console.log(response.status)
      // console.log(data)
      console.log(data)
    }
    }catch(err){
     alert(err)
     
     MainToast(title="خطاء بالبيانات ",description="خطأ بالبيانات"
     ,statusOutput="error",duration="5000")
    }
  };
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    // Router.push('/accounts/login')
    // if(!localStorage.getItem("authTokens")){
    //   router.push("/")
    // }

    
  };
  let updateToken = async ()=>{
    console.log('update tokens')
    try{
      let response = await fetch('https://fortestmimd.pythonanywhere.com/api/token/refresh/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'refresh':authTokens?.refresh})
    })
    let data = await response.json()
    if (response.status === 200) {
      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authTokens',JSON.stringify(data))
      router.push("/")
    }else {
      logoutUser() 
    } if (loading) {
        setLoading(false)
    }
    }catch(errors){
      alert(errors)
    }
  };
  // useEffect(()=>{    
  //   let FiveMinutes = 1000 * 60 * 5
  //   let interval =  setInterval(()=>{
  //     if(authTokens){
  //       updateToken()
  //     }
  
  //   },FiveMinutes)
  //   return ()=> clearInterval(interval)
  // },[authTokens,loading])

  const contextData = {
    user:user,
    // setUser,
    // setAuthTokens,
    registerUser:registerUser,
    loginUser:loginUser,
    authTokens:authTokens,
    logoutUser:logoutUser,
    errors:errors,
  };
  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);
  
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
// export const ProtectRoute = ({ children }) => {
//   const { isAuthenticated, isLoading } = useAuth();
//   if (isLoading || (!isAuthenticated && window.location.pathname !== 'accounts/login')){
//     return <LoadingScreen />; 
//   }
//   return children;
// };
