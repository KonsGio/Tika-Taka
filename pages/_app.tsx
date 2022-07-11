// in next.js here we create the structure
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

// starting with asuming SSR server side rendered page 
// useEffect runs at the start to see when it is not SSR
// this check helps in smoother workflow
function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setisSSR] = useState(true);

  useEffect(() => {
    setisSSR(false);
  },[]);

  if(isSSR) return null;

  return (
    <div>
      <Navbar/>
      {/* we use tailwind -> styles inside jsx */}
      <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
          <Sidebar/>
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[84vh] videos flex-1'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
