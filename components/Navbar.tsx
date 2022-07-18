import React ,{useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

import Logo from '../utils/tikitaka-logo.png';

// 2.Google Authentication with new google login web service (Google Identity Services)
// 3.Installing npm install @react-oauth/google jwt-decode (jwt decode is for loading profile images and such)
import { GoogleLogin,googleLogout } from '@react-oauth/google';
import { createOrGetUser } from '../utils';

// 4.We import user from store/authStore.ts
import useAuthStore from '../store/authStore';


const Navbar = () => {
  //4
  const {userProfile, addUser, removeUser} : any = useAuthStore();

  const [searchValue, setSearchValue] = useState('');

  const router = useRouter();

  const handleSearch = (e : { preventDefault : () => void }) => {

    e.preventDefault();

    if(searchValue) {
      router.push(`/search/${searchValue}`)
    }
  }
  
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
      
      <div className='relative hidden md:block'>
        <form
          onSubmit={handleSearch}
          className='absolute md:static top-10 -left-20 bg-white'
        >
          <input
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search accounts and videos'
            className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0'
          />
          <button 
            onClick={handleSearch}
            className='absolute md:right-5 right-6 top-4 border-left-2 border-gray-300 pl-4 text-2xl text-gray-400'
          >
            <BiSearch />
          </button>
        </form>
      </div>  

      <div>
        {userProfile ? (
          <div className='flex gap-5 md:gap-10'>
            <Link href='/upload'>
              <button className='border-2 px-2 md:px-4
                text-md font-semibold flex items-center
                gap-2'>
                <IoMdAdd className='text-xl'/>{''}
                <span className='hidden md:block'>Upload</span>
              </button>
            </Link>
            {userProfile.image && (
               <Link href='/'>
               {/* 5. You cant put an image as a child component of a link  thats why
               we create a new empty react fragment to put image inside */}
               <>
                 <Image 
                   width={40}
                   height={40}
                   className='rounded-full cursor-pointer'
                   src={userProfile.image}
                   alt='profile photo'
                 />
               </>
             </Link>
            )}
            <button
            type='button'
            className='px-2'
            onClick={()=>{
              // For this to work we add a function in authStore
              googleLogout();
              removeUser();
            }}
            >
              <AiOutlineLogout color='red' fontSize={21}/>
            </button>
          </div>
        ) : (
          <GoogleLogin
          // 4.We add the user
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log('Error')}
          />
        )}
      </div>
    
    </div>
  )
}

export default Navbar