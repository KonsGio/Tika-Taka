// THis file's url is dynamic [id] it will change for every single video
import React, {useState,useRef} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { MdOutlineArrowBack} from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import axios from 'axios';
import { BASE_URL } from '../../utils';
import { Video } from '../../types';
import useAuthStore from '../../store/authStore';
import LikeButton from '../../components/LikeButton';
import Comments from '../../components/Comments';


// We will fetch our data by using the id inside of the url

interface IProps {
  postDetails:Video,
}

const Detail = ({postDetails} : IProps) => {
  
  const [post, setPost] = useState(postDetails);

  const videoRef = useRef(null);

  const router = useRouter();

  const {userProfile} = useAuthStore();

  if(!post) return null;

  return (
    // Tailwind classes
    <div className='flex w-full
     absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap'>
        <div className='relative flex-2 w-[1000px] lg:w-9/12 
                        flex justify-center items-center bg-black'>
              <div className='absolute top-6 left-2 lg:left-6 flex gap-6 z-50'>
                <p className='cursor-pointer'
                  onClick={() => router.back()}
                >
                  <MdOutlineArrowBack className='text-white text-[35px]'/>
                </p>
              </div>
              <div className='relative '>
                <div className='lg:h-[100vh] h-[60vh]'>
                  <video 
                  ref={videoRef}
                  loop
                  controls
                  onClick={()=>{}}
                  src={post.video.asset.url}
                  className='h-full cursor-pointer'
                  >
                  </video>
                </div>
              </div>
        </div>
        <div className='relative w-[1000px] md:w-[900px] lg:w-[700px]'>
          <div className='lg:mt-20 mt-10 '>
              
          <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
          <div className='ml-4 md:w-20 md:h-20 w-16 h-16'>
            <Link href='/'>
              {/* 5. You cant put an image as a child component of a link  thats why
              we create a new empty react fragment to put image inside */}
              <>
                <Image 
                  width={62}
                  height={62}
                  className='rounded-full'
                  src={post.postedBy.image}
                  alt='profile photo'
                  layout='responsive'
                />
              </>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <div className='mt-3 flex flex-col gap-2'>
                <p className='flex gap-2 md:text-md font-bold text-primary'>
                  {post.postedBy.userName}
                  { ''}
                  <GoVerified 
                  className='text-blue-400 text-md'
                />
                </p>
                <p className='capitalize font-medium text-gray-500
                              text-xs hidden md:block'>
                  {post.postedBy.userName}
                </p>
              </div>  
            </Link>
          </div>
        </div>
              <p className='px-10 text-lg text-gray-600'>{post.caption}</p>
              <div className='mt-10 px-10'>
                {userProfile && (
                  <LikeButton 
                  
                  />
                )}
              </div>
              <Comments 
              
              />
          </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({params: {id}
} : {
  params: {id: string}
}) => {
  const { data } = await axios.get(`${BASE_URL}/api/post/${id}`)

  return {
    props: { postDetails : data }
  }
}

export default Detail