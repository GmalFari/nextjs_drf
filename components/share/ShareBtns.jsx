import React from 'react';
import { FacebookShareButton, FacebookIcon,WhatsappIcon,TwitterIcon,TelegramIcon, } from 'react-share';
import { LinkBox } from '@chakra-ui/react';
const ShareBtns = () => {
  return (
    <div>
      <FacebookShareButton
        url={'https://www.example.com'}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
};

export default ShareBtns;