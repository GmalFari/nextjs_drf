import React, { useState, useEffect,useContext } from 'react';
import LoginComponent from "../../components/accounts/Login"
import AuthContext from "../../context/AuthContext";
import { useRouter } from 'next/router';
const Login = () => {
  let {loginUser} = useContext(AuthContext)
  console.log(loginUser)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('authTokens') !== null) {
      
      history.back();
    } else {
      setLoading(false);
    }
  }, []);

  // const onSubmit = e => {
  //   e.preventDefault();

  //   const user = {
  //     email: email,
  //     password: password
  //   };

  //   fetch('http://127.0.0.1:8000/auth/token/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
    
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.access) {
  //         localStorage.clear();
  //         localStorage.setItem('token', data.access);
  //         console.log(localStorage.getItem('token'))
  //         window.location.replace('http://localhost:3000/');
  //       } else {
  //         setEmail('');
  //         setPassword('');
  //         localStorage.clear();
  //         setErrors(true);
  //       }
  //     });
  // };
  return (
    <div>
    <LoginComponent/>
    </div>
  );
};

export default Login;
