import React,{useState,useEffect} from 'react';
import { MdFavorite } from 'react-icons/md';

import useAuthStore from '../store/authStore';

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: any[];
}

const LikeButton = ({likes,handleLike,handleDislike} : IProps) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile } : any = useAuthStore();
  
  
  //2. Has the user already liked the post?
  const filterLikes = likes?.filter((item) => item?._ref === userProfile?._id)


  //1. For the functionality of the like button
  // We use a useEFffect whenever likes array changes
  useEffect(() => {
    if(filterLikes?.length>0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [likes,filterLikes])
  

// handleLike and handleDislike are created in video details [id].tsx
  return (
    <div className='gap-6 '>
      <div className='mt-4 flex flex-col justify-center items-center cursor-pointer'>
        {alreadyLiked ? (
          <div className='bg-primary rounded-full p-2 md:p-4 text-[#9A100E]'
              onClick={handleDislike}
          >
            <MdFavorite className='text-lg md:text-2xl'/>
          </div>
        ) : (
          <div className='bg-primary rounded-full p-2 md:p-4'
              onClick={handleLike}
          >
            <MdFavorite className='text-lg md:text-2xl'/>
          </div>
        )}
        <p className='text-md font-semibold'>
          {likes?.length || 0}
        </p>
      </div>
    </div>
  )
}

export default LikeButton