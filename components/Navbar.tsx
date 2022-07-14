import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

import Logo from '../utils/tikitaka-logo.png';

// 2.Google Authentication with new google login web service (Google Identity Services)
// 3.Installing npm install @react-oauth/google jwt-decode (jwt decode is for loading profile images and such)
import { GoogleLogin,googleLogout } from '@react-oauth/google';
import { createOrGetUser } from '../utils';


const Navbar = () => {

  const user = false;


  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      {/* 1.link point at home page */}
      <Link href='/'>
        <div className='w-[100px] md:w-[130px]'>
          <Image
            className='cursor-pointer'
            src={Logo}
            alt='TikaTaka'
            layout='responsive'
          />
        </div>
      </Link>

      <div>
        SEARCH
      </div>  
      <div>
        {user ? (
          <div>Logged in</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response)}
            onError={() => console.log('Error')}
          />
        )}
      </div>
    
    </div>
  )
}

export default Navbar