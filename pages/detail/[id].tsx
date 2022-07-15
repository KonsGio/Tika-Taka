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


// We will fetch our data by using the id inside of the url

interface IProps {
  postDetails:Video,
}

const Detail = ({postDetails} : IProps) => {
  
  const [post, setPost] = useState(postDetails);

  const videoRef = useRef(null);

  const router = useRouter();

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