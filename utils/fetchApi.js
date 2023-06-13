import { useState } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
const initialState = {
  access: typeof window !== "undefined" ? window.localStorage.getItem('authTokens') : false,
  refresh: typeof window !== "undefined" ?  window.localStorage.getItem('refresh') : false,
  isAuthenticated: null,
  user: null
};
export const fetchApi = async (url) => {
  console.log(initialState)
  const {data} = await axios.get((url), {
      headers: {
          // 'Content-Type': 'application/json',
    // Authorization: `Bearer ${initialState?.access.access}     `   
  },
  });
  return data; 
}


export const deleteProperty = async (id,authToken)=>{
  const router = useRouter()
  console.log(authToken)
  const url = `https://fortestmimd.pythonanywhere.com/api/list-properties/${id}/`
  const options = {
     method: 'DELETE',
     headers: {
       'Content-Type': 'application/json',
       "Authorization" : `Bearer ${authToken}`,
     },

     
   };
   try {
     const response = await fetch(url, options);
     const result = await response.json();
     if (response.ok){
                
       router.push(`/`)
       alert(JSON.stringify(result))
         console.log(result)
      //  setData({...myData,property_title:""})
      alert(JSON.stringify(result))
      
      
      
    }else{
      console.log(result)
     }
   } catch (error) {
    console.log(JSON.stringify(error))
    alert(JSON.stringify(error))
  }
    
}

