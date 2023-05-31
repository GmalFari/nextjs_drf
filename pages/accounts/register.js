import { useForm, Controller } from "react-hook-form";
import { useContext,useState,useEffect } from "react";
import { Input} from "@chakra-ui/react";
import SignupCard from "../../components/accounts/Signup";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";
const Register = () => {
  // const { control, handleSubmit } = useForm({
  //   defaultValues: {
  //     firstName: '',
  //     select: {}
  //   }
  // });
  // const onSubmit = data => console.log(data);
  const {registerUser} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading,setLoading] = useState(true);
  const router = useRouter();
  const authTokens = localStorage.getItem("authTokens")
  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(firstname,lastname,email, password);
  };
  useEffect(()=>{
    if(authTokens){
      router.push("/")
    }

  })
  return (
    <>
    <SignupCard/>
    </>
     //  <>
  //    <form onSubmit={handleSubmit} method="POST">
  //           firstname <input type="text" name="firstname"                       
  //           onChange={e=>setFirstname(e.target.value)} value={firstname} />
  //           <br/>

  //     lasatname <input type="text" name="lastname" value={lastname}                      
  //           onChange={e=>setLastname(e.target.value)}  />
  //           <br/>
  //     email <input type="email" name="email" 
  //                 onChange={e=>setEmail(e.target.value)} value={email} />
  //             <br/>
  //     password <input type="password" 
  //                 onChange={e=>setPassword(e.target.value)} name="password" value={password}  />
  //               <br/>
  //   <input type="submit" value="submit" />
  //   </form>
  //  </>
  );
};

export default Register;