// in next.js here we create the structure
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import '../styles/globals.css'


// starting with asuming SSR server side rendered page 
// useEffect runs at the start to see when it is not SSR
// this check helps in smoother workflow
function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setisSSR] = useState(true);

  useEffect(() => {
    setisSSR(false);
  },[]);

  if(isSSR) return null;

  return <Component {...pageProps} />
}

export default MyApp
