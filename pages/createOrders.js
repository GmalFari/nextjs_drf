import React from 'react'
import CurstOrders from '../components/orders/CustOrders'
import { useState } from 'react'
const Orders = () => {
    const [data,setData] = useState(
        {
        property_title:"jamal",
        // coverPhoto:"",
        // "location":{  
        //       latitude:"",
        //       longitude:""},
        proType:"",
        purpose:"",
        rentFrequency:"",
        rentFrequency:"",
        city:"",
        state:"",
        directorate:"",
        district:"",
        district:"",
        street:"",
        isForRent:true,
      
        //form2
        title:"",
        img:"",
      })
  return (
    <>
      <CurstOrders myData={data} />
    </>
  )
}

export default Orders
