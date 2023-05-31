import React from 'react'
import { Router } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Redirect } from 'next';
const PrivateRoute = ({children,...rest}) => {
    let {user } = useContext(AuthContext);
   
    return <Link {...rest}>{!user ? <Redirect to="/login" /> : children}</Link>;

}

export default PrivateRoute
