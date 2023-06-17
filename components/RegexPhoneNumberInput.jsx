import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
const PHONE_REGEX = new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi);

const RegexPhoneNumberInput = () => {

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
     errors["phoneNumber"] = "Invalid phone number. Please try again."
   }
   return PHONE_REGEX.test(phoneNumber);
 }

   return (
        //  <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
           <div>
               <Controller
               name="phone-input"
               control={control}
               rules={{
                 validate: (value) => handleValidate(value)
               }}
               render={({ field: { onChange, value } }) => (
                   <PhoneInput
                    style={{"direction":"ltr","line-height":"44px",border:"1px solid #ddd"}}
                     value={value}
                     onChange={onChange}
                     defaultCountry="YE"
                     id="phone-input"
                   />
               )}
               />
             {!!errors.phoneNumber && <p style={{color: 'red'}}>{errors.phoneNumber}</p>}
           </div>
        //  </form>
   );
};
export default RegexPhoneNumberInput;
