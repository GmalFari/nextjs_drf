import axios from "axios";
import MainToast from "../components/MainToast";
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
      // <MainToast title={"تم تعديل العقار بنجاح"} description={""}
      //   duration={"5000"}
      //    status={"success"} />
       alert(JSON.stringify(result))
         console.log(result)
      //  setData({...myData,property_title:""})
    }else{
      console.log(result)
      alert(result)
     }
   } catch (error) {
    console.log(JSON.stringify(error))
  }
    
}


export const UpdateProperty= async(id,myData,authToken)=> {
  const myform = new FormData()
  {/*  myform.append("property_number",myData.property_number);
   */}
    myform.append("property_title",myData.property_title);
    myform.append("property_type",myData.property_type);
    
    // {myData.coverPhoto && myform.append("coverPhoto",myData.coverPhoto,"picture.jpg")};
                                                        
    myform.append("purpose",myData.purpose);
    myform.append("property_town",myData.property_town);
  
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
    myform.append("sqrt_area",myData.sqrt_area);
    myform.append("furnishingStatus",myData.furnishingStatus);
    myform.append("building_facade",myData.building_facade);
    myform.append("building_age",myData.building_age);
    myform.append("state",myData.state);
    myform.append("directorate",myData.directorate); 
  const url = `https://fortestmimd.pythonanywhere.com/api/list-properties/${id}/`
  const options = {
  method: 'PUT',
  headers: {
    // 'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
    "Authorization" : `Bearer ${authToken}`,
  }
  };

  options.body = myform;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (response.status ===200){        
      // toast(
      //     {
      //     title: ` لقد تم  إضافة العقار`,
      //     description:`${result.property_title}`,
      //     //   // newData.map((m,i)=>(
      //     //   //     <>
      //     //   //       {m.key}: {m.value}
      //     //   //     </>
      //     //   // )
      //     //   // )
      //     //   ,
      //       status: 'success',
      //       isClosable: true
      //      })
      alert("تم تعديل العقار بنجاح")
        location.reload()
      // setData({...myData,property_title:""})
      console.log(result)
    }else{
      // setErrors(result)
    // toast(
    //        {
    //       title: ` خطأ`,
    //       description:`${JSON.stringify(result)}`,
    //         status: 'error',
    //        isClosable: true
    //       })
    alert("خطأ في بيانات  تعديل العقار ")
    }
  } catch (error) {
    // toast(
    //        {
    //       title: ` خطأ`,
    //       description:`${JSON.stringify(error)}`,
    //         status: 'error',
    //        isClosable: true
    //       })
    alert("خظأفي  تعديل العقار ")
  }

}