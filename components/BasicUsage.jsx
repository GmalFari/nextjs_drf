import {Flex,Grid,Select ,Box,Text,Input,Avatar,Spinner,Icon,Button,
     PopoverHeader,Center} from '@chakra-ui/react';
import {FaBed,FaBath,FaMapMarked,FaYoutube,FaImages} from 'react-icons/fa';
import {FaWhatsapp,FaEnvelope,FaPhone,FaShare,FaDownload,FaRegHeart} from 'react-icons/fa'
import MyMap from "./Mymap";
import ImageScrollbar from './ImageScrollbar';
import MainBtn from './MainBtn';
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
export function BasicUsage({coverPhoto,geography,photos}) {
  const { isOpen: isOpen , onOpen: onOpen, onClose: onClose } = useDisclosure()
  const { isOpen: isVideoOpen , onOpen: onVideoOpen, onClose: onVideoClose } = useDisclosure()
  const { isOpen: isPictureOpen , onOpen: onPictureOpen, onClose: onPictureClose } = useDisclosure()
  return (
      <Box width="100%" ms={5} me={5}>
        <Grid mb={2} templateColumns='repeat(3, 1fr)' gap={2} >
        <Button color='#006169'  colorScheme='teal' variant='outline' onClick={onPictureOpen}>
        <FaImages /> <small style={{padding:"5px"}}  >الصور</small>     
      </Button>
          <Button  colorScheme='black' variant='outline' padding='1px' color='#006169'  onClick={onOpen}>
                <FaMapMarked /> <small style={{padding:"5px"}}  >  الخريطة</small></Button>       
          <Button colorScheme='teal' variant='outline'padding='2px' color='#006169'  onClick={onVideoOpen}>
              <FaYoutube  /> <small style={{padding:"5px"}}>
                فيديو</small>
        </Button>

        </Grid>
        <Modal size={"full"} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
       
          <ModalHeader textAlign={"center"} >عرض العقارات على الخريطة</ModalHeader>
            <ModalBody ps={0} pe={0} width="100%" minW="100%">
            <ModalCloseButton  position="fixed" zIndex="9999" top="10%" left="90%" bg='#006169'  />
              <MyMap sizes={{mapW:"100vw",mapH:"100vh"}} geoDetail={geography} />
            </ModalBody>
          <ModalFooter>
            <Box p={0} bg='#fff' position={['fixed','fixed','fixed','relative']} left={0} bottom={'0'} width={'100%'}>
            <Grid  templateColumns='repeat(3, 1fr)' gap={2} >
                <MainBtn icon={<FaWhatsapp fontWeight={'bold'} color='#006169' />} bgcolor={'#28b16d'} color={'#fff'} content={'وتس أب'} />
                <MainBtn icon={<FaEnvelope fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} content={'الإيميل'} />
                <MainBtn icon={<FaPhone fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} content={'إتصال'} />
            </Grid>
            </Box>
          </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal size={'full'}    blockScrollOnMount={false} isOpen={isVideoOpen} onClose={onVideoClose}>
          <ModalOverlay />
          <ModalContent  width="100%">
            <ModalBody ps={0} pe={0}>
            <ModalCloseButton  position="fixed" zIndex="9999" top="10%" left="90%" bg='#006169'  />
              <ModalHeader >فيديو </ModalHeader>
              <AspectRatio  ratio={1}>
                <iframe
                  title='naruto'
                  src='https://www.youtube.com/embed/WkflInhRuqE'
                  allowFullScreen
                />
              </AspectRatio>
            </ModalBody>
<ModalFooter>
            <Box p={0} bg='#fff' position={['fixed','fixed','fixed','relative']} left={0} bottom={'0'} width={'100%'}>
            <Grid  templateColumns='repeat(3, 1fr)' gap={2} >
                <MainBtn icon={<FaWhatsapp fontWeight={'bold'} color='#006169' />} bgcolor={'#28b16d'} color={'#fff'} content={'وتس أب'} />
                <MainBtn icon={<FaEnvelope fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} content={'الإيميل'} />
                <MainBtn icon={<FaPhone fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} content={'إتصال'} />
            </Grid>
            </Box>
          </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal p="0" placement="top-end"  size={"full"} blockScrollOnMount={false} isOpen={isPictureOpen} onClose={onPictureClose}>
          <ModalOverlay />
          <ModalContent  w="100%" >
            <ModalBody pe={0} ps={0}>
            <ModalCloseButton  position="fixed" zIndex="9999" top="10%" left="90%" bg="blue.50" />
            {photos && <ImageScrollbar coverPhoto={coverPhoto} data={photos} />}
            </ModalBody>
 
<ModalFooter>
            <Box p={0} bg='#fff' position={['fixed','fixed','fixed','relative']} left={0} bottom={'0'} width={'100%'}>
            <Grid  templateColumns='repeat(3, 1fr)' gap={2} >
                <MainBtn icon={<FaWhatsapp fontWeight={'bold'} color='#006169' />} bgcolor={'#28b16d'} color={'#fff'} content={'وتس أب'} />
                <MainBtn icon={<FaEnvelope fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} content={'الإيميل'} />
                <MainBtn icon={<FaPhone fontWeight={'bold'} color='#28b16d' />} bgcolor={'#006169'} color={'#fff'} content={'إتصال'} />
            </Grid>
            </Box>
          </ModalFooter>
</ModalContent>
        </Modal>
      </Box>
    )
  }
