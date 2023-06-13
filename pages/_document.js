// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
           <meta name="google-site-verification" content="qCuKTQxZHbo3QwDX4uh7B5L6OteCIMl3PCXF504XIDQ" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
