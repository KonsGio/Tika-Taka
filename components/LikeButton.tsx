import React,{useState,useEffect} from 'react';
import { MdFavorite } from 'react-icons/md';

import useAuthStore from '../store/authStore';

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
}

const LikeButton = ({handleLike,handleDislike} : IProps) => {
  const [alreadyLiked, seAlreadyLiked] = useState(true);
  const { userProfile } = useAuthStore();

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
      </div>
    </div>
  )
}

export default LikeButton