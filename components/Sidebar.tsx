import React, {useState} from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const normalLink = 'flex items-center gpa-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#631A18]';
  // userProfile. user login check
  const userProfile = false;
  
  
  return (
    <div>
      <div className='block xl:hidden m-2 ml-4 mt-3 text-xl'
      // callback funstion that contains previews state
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> :
         <AiOutlineMenu />
        }
      </div>
      {/* dynamic block. if showSidebar is true and then*/}
      {showSidebar &&(
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2
                        border-gray-100 xl:border-0 p-3'>
            <div className='cl:border-b-2 border-gray-200 xl:pb-4'>
                <Link href='/'>
                  <div className={normalLink}>
                    <p className='text-2xl'>
                      <AiFillHome/>
                    </p>
                    <span className='text-xl hidden xl:block'>
                      For you
                    </span>
                  </div>
                </Link>
            </div>
            {/* if there is no user profile then login */}
        {!userProfile && (
          // hidden and appearing only on xl devices
          <div className='px-2 py-4 hidden xl:block'>
            <p className='text-gray-400'>Log in to like and comment posts!</p>
            <div className='pr-4'>
              {/* Visit https://www.npmjs.com/package/react-google-login for more info about google login*/}
              <GoogleLogin 
                clientId=''
                render={renderProps => (
                  <button 
                  className='cursor-pointer bg-white text-lg text-[#631A18] border-[1px] 
                  border-[#631A18] font-semibold px-6 py-3 rounded-md
                  outline-noce w-full mt-3 hover:text-white hover:bg-[#631A18]'
                  onClick={renderProps.onClick} 
                  disabled={renderProps.disabled}>Log in</button>
                )}
                onSuccess={() => {}}
                onFailure={() => {}}
                cookiePolicy='single_host_origin'
              />
            </div>
          </div>
        )}
        </div>
      )}
    </div>
  )
}

export default Sidebar