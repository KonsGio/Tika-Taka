import { useState } from "react";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import VideoCard from "../../components/VideoCard";
import NoResults from "../../components/NoResults";
import { IUser, Video } from "../../types";
import { BASE_URL } from "../../utils";
import useAuthStore from "../../store/authStore";


const Search = ({videos}: {videos: Video[]}) => {

const [isAccounts, setIsAccounts] = useState(false);

const accounts = isAccounts ? 'border-b-2 border-black' : 'text-gray-400'
const isVideos = !isAccounts ? 'border-b-2 border-black' : 'text-gray-400'  

const router = useRouter();
const { searchTerm } :any = router.query;

const { allUsers } :any = useAuthStore();
const searchedAccounts = allUsers.filter((user :IUser) => user.userName.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="w-full ">
         <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
                <p className={`text-xl font-semibold cursor-pointer mt-2 ${accounts}`} onClick={() => setIsAccounts(true)}>Accounts</p>
                <p className={`text-xl font-semibold cursor-pointer mt-2 ${isVideos}`} onClick={() => setIsAccounts(false)}>Videos</p>
            </div>
            {isAccounts ? (
              <div>
                <div className="md:mt-16">
                  {searchedAccounts.length > 0 ? (
                    searchedAccounts.map((user: IUser, idx: number) => (
                      <div className='p-2 items-center' key={idx}>
                        <Link href={`/profile/${user._id}`} key={idx}>
                           <div className='flex p-2 gap-3 font-semibold rounded border-b-2 border-gray-200 hover:cursor-pointer'>    
                                  <div>
                                    <Image src={user.image}
                                      width={55}
                                      height={55}
                                      className='rounded-full'
                                      alt='user profile'
                                      />
                                  </div>
                            <div className='hidden xl:block'>
                                <p className='flex gap-1 items-center text-lg font-bold text-primary lowercase'>
                                  {user.userName.replaceAll(' ','')}
                                  <GoVerified className='text-blue-400'/>
                                </p>
                                <p className='capitalize text-gray-400'>
                                  {user.userName}
                                </p>
                            </div>
                            </div>
                        </Link>
                        </div>
                    ))
                  ) : (
                    <NoResults text={`No video results for : ${searchTerm}`}/>
                  )}
                </div>
              </div>
            ) : 
              <div className="md:mt-16 flex flex-wrap gap-6 md:justify-start">
                {videos.length ? (
                  videos.map((video: Video, idx) => (
                    <VideoCard post={video} key={idx}/>
                  ))
                ) : <NoResults text={`No video results for : ${searchTerm}`}/>}
              </div>
            }
    </div>
  )
}

// In next.js when we have a file [id] we have to fetch data.Here we feych data from the backend
// we create corresponding folder in api/
export const getServerSideProps = async ({ 
  params: {searchTerm}
} : {
  params: {searchTerm: string}
}) => {
  const res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`)

  return {
      props: {videos : res.data}
  }
}


export default Search