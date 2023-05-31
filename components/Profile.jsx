import React from 'react'
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
const Profile = ({company}) => {
  // company.agents.map((agent)=>{
  //   console.log(agent)
  // })
  return (
    <Box>
    {company.id}
    {/* <Image src={company.logo.url} width={50} height={50} /> */}
      {/* {company.agents.map((agent)=>{
        <Box key={agent.id}>{agent.id}</Box>
      })} */}
    </Box>
  )
}
export default Profile;
