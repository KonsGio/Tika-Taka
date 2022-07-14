//1. in next.js here we create the structure
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


//5. google auth
import { GoogleOAuthProvider} from '@react-oauth/google';


//2. starting with asuming SSR server side rendered page 
//3. useEffect runs at the start to see when it is not SSR
//4. this check helps in smoother workflow
function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setisSSR] = useState(true);

  useEffect(() => {
    setisSSR(false);
  },[]);

  if(isSSR) return null;

  return (
    // 6. To find clientid we go to https://console.cloud.google.com/ -> create app -> Oauth consent -> Credentials -> create oauth
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
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
    </GoogleOAuthProvider>
  ) 
}

export default MyApp
