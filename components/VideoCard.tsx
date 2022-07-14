// 4. Imports for video buttons and controls
import Link from 'next/link';
import {useRef, useState } from 'react';
import {GoVerified} from 'react-icons/go';
import Image from 'next/image';
import { Video } from '../types';
// 2.To specify a type
import {NextPage} from 'next';
// 1. Once again we need to create IProps in tsx
interface IProps {
    post:Video;
}
// 2.To specify a type
const VideoCard:NextPage<IProps> =  ({post}) => {

  const [playing, setPlaying] = useState(false);
//6.To change the state of the video (plays pause volumes) we need to use ref
  const videoRef = useRef<HTMLVideoElement>(null);
// 8. We create new function on video press and for this to work we change useRef(null) to useRef<HTMLVideoElement>(null)
  const onVideoPress = () => {
    if(playing){
      videoRef?.current?.pause();
      setPlaying(false);
    }else{
      videoRef?.current?.play();
      setPlaying(true);
    }
  }
  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
      <div>
        <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
          <div className='md:w-16 md:h-16 w-10 h-10'>
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
              <div className='flex items-center gap-2'>
                <p className='flex gap-2 items-center md:text-md font-bold text-primary'>
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
      </div>
      <div className='lg:ml-20 flex gap-4 relative'>
            <div 
              className='rounded-xl'>
              <Link href='/'>
                {/* More setting for video
                 interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
                 autoPlay?: boolean | undefined;
                 controls?: boolean | undefined;
                 controlsList?: string | undefined;
                 crossOrigin?: string | undefined;
                 loop?: boolean | undefined;
                 mediaGroup?: string | undefined;
                 muted?: boolean | undefined;
                 playsInline?: boolean | undefined;
                 preload?: string | undefined;
                 src?: string | undefined;
                 }
                  */}
                  <video 
                      onClick={onVideoPress}
                      loop
                      controls
                      //7. Here we attach the useRef to our video 
                      ref={videoRef}
                      className='lg:w-[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg:gray-100'
                      src={post.video.asset.url}>
                      
                  </video>
              </Link>
            </div>
      </div>
    </div>
  )
}

export default VideoCard