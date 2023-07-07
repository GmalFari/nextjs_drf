import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
const PHONE_REGEX = new RegExp(/"^(?:\+967|)\d{8}$"/gmi);


const RegexPhoneNumberInput = ({phonenumber,setPhonenumber}) => {

   const {
     handleSubmit,
     formState: { errors },
     control
   } = useForm();
   const onSubmit = (data) => {
     console.log({data});
   };

 const handleValidate = (phoneNumber) => {
   if (PHONE_REGEX.test(phoneNumber)) {
     errors["phoneNumber"] = null;
   } else {
     errors["phoneNumber"] = "يجب ان يحتوي رقم التلفون  على 9 ارقام."
   }
   return PHONE_REGEX.test(phoneNumber);
 }
 
   return (
        //  <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
           <div>
                <PhoneInput
                    style={{"direction":"ltr","line-height":"44px",border:"1px solid #ddd"}}
                    
                    value={"+967"+phonenumber}
                    onChange={e=>setPhonenumber(e)}
                     defaultCountry="YE"
                     id="phone-input"
                    // placeholder={"+967 7********"}
                   />
             {!!errors.phoneNumber && <p style={{color: 'red'}}>{errors.phoneNumber}</p>}
           </div>
        //  </form>
   );
};
export default RegexPhoneNumberInput;
