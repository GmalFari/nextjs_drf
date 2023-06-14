import { useRouter } from "next/router";
import { useState } from "react";
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
     const response = await fetch(url, options)
     const result = await response.json();
     console.log(result)
     if (response.status==="204"){
                
       alert(JSON.stringify(result))
         console.log(result)
      //  setData({...myData,property_title:""})
    }else{
      console.log(result)
     }
   } catch (error) {
    console.log(JSON.stringify(error))
  }
    
}

