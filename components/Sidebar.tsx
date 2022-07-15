import React, {useState} from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';



const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const normalLink = 'flex items-center gpa-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#9A100E]';
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
        {/* import components quickly by doubleclicking component and then ctr+space+win */}
        <Discover />
        <SuggestedAccounts />
        <Footer />
        </div>
      )}
    </div>
  )
}

export default Sidebar