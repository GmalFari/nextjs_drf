/* eslint-disable react/no-children-prop */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  Flex,
  Box,
  Avatar,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
  Text,
  Tooltip,
  Toast



} from '@chakra-ui/react'
import { BiShare } from 'react-icons/bi';
import { FacebookShareButton, FacebookIcon,WhatsappIcon,
  TwitterIcon,TelegramIcon, TwitterShareButton, } from 'react-share';
import { FaWhatsapp,FaFacebook,FaTwitter,FaInstagram,FaTelegram } from 'react-icons/fa';
import Link from 'next/link';
import { useDisclosure } from '@chakra-ui/react';
import { getShareUrl, SocialPlatforms } from "@phntms/react-share";
import Copy from "./Copy";
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
const Share = () => {
  const router = useRouter();
  const path = router.pathname;

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const mainUrl = `https://nextjs-drf.vercel.app${path}`
  console.log(mainUrl)
  
  return (
  <>
<Button onClick={onOpen} flex='1' variant='ghost' leftIcon={<BiShare />}>
      مشاركة
    </Button>
<Modal   isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent textAlign={"center"}>
    <ModalHeader mb={"4"}>مشاركة الصفحة </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <Text mb={"2"}  fontSize={"sm"}>مشاركة عبر وسائل التواصل الاجتماعي 
</Text>
  <Flex justifyContent={"center"} mb={"4"}>
  <Link href={getShareUrl(SocialPlatforms.WhatsApp, { url: mainUrl })}>
  <Avatar width={"40px"} height={"40px"} ms={"1"} me={"1"} bg={"#28b16d"} color={"white"} fontWeight={"bold"} icon={<FaWhatsapp/>}>
    
  </Avatar>
  </Link>
  <Link href={getShareUrl(SocialPlatforms.Facebook, { url: mainUrl })}>
  <Avatar width={"40px"} height={"40px"} ms={"1"} me={"1"} bg={"#337fff"}
   color={"white"} fontWeight={"bold"}
    icon={<FaFacebook/>}>
    
  </Avatar>
  </Link>
  <Link href={getShareUrl(SocialPlatforms.Twitter, { url: mainUrl })}>
  <Avatar 
        width={"40px"} height={"40px"}
         ms={"1"} me={"1"} bg={"#3cf"} color={"white"} 
  fontWeight={"bold"} icon={<FaTwitter/>}>
    
  </Avatar>
  </Link>
  {/* <Avatar ms={"1"} me={"1"} bg={"#28b16d"} color={"white"} fontWeight={"bold"} icon={<FaWhatsapp/>}>
  <Link href={getShareUrl(SocialPlatforms.mainUrl, { url: mainUrl })}>
    
  </Link>
  </Avatar> */}
 
   
  </Flex>

  <Stack mt={"6"} spacing={4}>
  <InputGroup>

    <InputLeftAddon
    onClick={() =>
        toast({
          description: "تم ا لنسخ",
          status: 'info',
          duration: "2000",
          isClosable: true,
        })
    }

      cursor={"copy"} children={ <Copy />} />
    <Input Editable={false} value={mainUrl} type='tel' placeholder='phone number' />
  </InputGroup>

  {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
</Stack>
    </ModalBody>

    <ModalFooter>
    </ModalFooter>
  </ModalContent>
</Modal>

</>
 
)
};

export default Share;