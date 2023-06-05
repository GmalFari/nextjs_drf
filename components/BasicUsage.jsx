import {Flex,Grid,Select ,Box,Text,Input,Avatar,Spinner,Icon,Button,
     PopoverHeader,Center} from '@chakra-ui/react';
import {FaBed,FaBath,FaMapMarked,FaYoutube,FaImages} from 'react-icons/fa';
import {FaWhatsapp,FaEnvelope,FaPhone,FaShare,FaDownload,FaRegHeart} from 'react-icons/fa'
import MyMap from "./Mymap";
import ImageScrollbar from './ImageScrollbar';
import MainBtn from './MainBtn';
import ContactPopover from "./popoverModals/ContactModals";
//popup window
import { useDisclosure,AspectRatio } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import { useEffect,useRef,useState } from 'react';
import { render } from 'nprogress';
export function BasicUsage({coverPhoto,geography,photos,icon,btnContent,comId}) {
  const looping = [1,2,34,5,6,7,7,8]
  const { isOpen: isOpen , onOpen: onOpen, onClose: onClose } = useDisclosure()
  const [renderId,setRenderId]=useState()
  
  let mainContent = useRef(null);
  useEffect(()=>{
    if(comId=="I"){
      mainContent.current = <ImageScrollbar coverPhoto={coverPhoto} data={photos} />
      setRenderId("I")
    }
      else if(comId=="M") {
        setRenderId("M")
        mainContent.current =
        <MyMap sizes={{mapW:"100vw",mapH:"80vh"}}  geoDetail={geography} />
      }
     else if(comId=="V"){
      setRenderId("M")
        mainContent.current =        
                <AspectRatio  ratio={1}>
                  <iframe
                    title='naruto'
                    src='https://www.youtube.com/embed/WkflInhRuqE'
                    allowFullScreen
                  />
                </AspectRatio>              
    }
    const handleClick=()=>{
      
    }
   
// eslint-disable-next-line react-hooks/exhaustive-deps
},[renderId])
  return (
      <Box width="100%">
        {/* <Grid mb={2} templateColumns='repeat(3, 1fr)' gap={2} > */}
        <Button color='#006169' width="100%" colorScheme='teal' variant='outline'
         onClick={onOpen}>
          {icon} <small style={{padding:"5px"}}  >{btnContent}</small>     
      </Button>
      <Modal size={"full"} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          <ModalHeader textAlign={"center"} >
          <Grid  templateColumns='repeat(3, 1fr)' gap={2} >
          
          <Button onClick={()=>{setRenderId("I")}}
           color='#006169' width="100%" colorScheme='teal' variant='outline'>
          <FaImages /> <small style={{padding:"5px"}}  >الصور</small>     
      </Button>
      <Button onClick={()=>{setRenderId("M")}} color='#006169' width="100%" 
      colorScheme='teal' variant='outline'
      >
          <FaMapMarked /> <small style={{padding:"5px"}}  >الموقع</small>     
      </Button>
      <Button  onClick={()=>{setRenderId("V")}} color='#006169' width="100%" colorScheme='teal' variant='outline' onClick={onOpen}>
          <FaYoutube /> <small style={{padding:"5px"}}  >الفيديو</small>     
      </Button>

                {/* <MainBtn icon={<FaEnvelope fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} content={'الإيميل'} />
                <MainBtn icon={<FaPhone fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} content={'إتصال'} /> */}
            </Grid></ModalHeader>
            <ModalBody  ps={0}>
            <ModalCloseButton  position="fixed" zIndex="9999" top="10%" left="90%" bg='#006169'  />
              {mainContent.current}
            </ModalBody>
          <ModalFooter>
          <Grid  width={'100%'} position={'absolute'} bottom={1}   templateColumns='repeat(3, 1fr)' gap={1} >
                
                <ContactPopover contentType="w" contactWith={`967${'776278868'}`}  icon={<FaWhatsapp fontSize={'md'}  content="whatsapp" fontWeight={'bold'}  color='white' />} bgcolor={"#28b16d"}/>
                <ContactPopover contentType="e" contactWith={'gmalfari@gmail.com'} icon={<FaEnvelope fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} />
                <ContactPopover contentType="p" icon={<FaPhone fontSize={'sm'} fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'}  />
                {/* <Link href={`#`}>
                    <Avatar ms="70%"   size="sm" src={agency?.logo?.url} />
                    </Link> */}
            </Grid>
          </ModalFooter>
          </ModalContent>
        </Modal>
        
      </Box>
    )
  }
