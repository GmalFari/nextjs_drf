import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

export default function HookForm() {
    const {register ,handleSubmit}  = useForm();
    const onSubmit = data => console.log(data);

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")}/>
       <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
       </select>
       <input type="submit"/>
        </form>
  )
}