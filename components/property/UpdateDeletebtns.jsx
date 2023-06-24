import React from 'react'
import { Box,Button } from '@chakra-ui/react';
import MainAlert from '../MainAlert';
import { deleteProperty } from '../../utils/fetchApi';
import { useRouter } from 'next/router';
import UpdatePropertyDrower from './UpdatePropertyDrower';
const UpdateDeletebtns = ({propertyDetails,id}) => {
    const router = useRouter()
    let token = JSON.parse(localStorage.getItem("authTokens"))
    // delete alerts 
    let accessToken = token?.access    
    const headerContent = " حذف العقار";
    const alertDialogHeader = "حذف العقار ";
    const alertDialogBody = "هل أنت متأكد أنك تريد حذف العقار ؟";
    const url = `https://fortestmimd.pythonanywhere.com/api/list-properties/${id}/`
    const handleDelete = async (e) =>{
        e.preventDefault();
        deleteProperty(url,accessToken)
        router.push("/")
    }
  return (
    <Box display={"flex "} justifyContent={"space-around"} w="full" mt="2" mb="2" >
                    <MainAlert headerContent={headerContent} 
                    alertDialogHeader={alertDialogHeader} 
                    alertDialogBody={alertDialogBody} 
                    handleSubmit={handleDelete} />
                        
       <UpdatePropertyDrower propertyDetails={propertyDetails} />
        
    </Box>
  )
}

export default UpdateDeletebtns
