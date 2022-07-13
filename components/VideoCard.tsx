// imports for video buttons and controls
import Link from 'next/link';
import {HiVolumeUp,HiVolumeOff} from 'react-icons/hi';
import { BsPlay,BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import {GoVerified} from 'react-icons/go';
 


import { Video } from '../types';
// 2.To specify a type
import {NextPage} from 'next';





// 1. Once again we need to create IProps in tsx
interface IProps {
    post:Video;
}
// 2.To specify a type
const VideoCard:NextPage<IProps> =  ({post}) => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard