import React from 'react';
import {MdOutlineVideocamOff} from 'react-icons/md';
import { BiCommentX } from 'react-icons/bi';


// 1.We create IProps
interface IProps{
    text:string;
}

// 2.Second way to specify type destucturing text 
const NoResults = ({text} : IProps) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <p className='text-8xl'>
          {
            text === 'No comments yet!' 
            ? <BiCommentX/> 
            : <MdOutlineVideocamOff />
          }
        </p>
        <p className='text-2xl text-center'>{text}</p>
    </div>
  )
}

export default NoResults