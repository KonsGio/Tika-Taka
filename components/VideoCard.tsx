import React from 'react'
import { Video } from '../types';
// 2.To specify a type
import {NextPage} from 'next';

// 1. Once again we need to create IProps in tsx
interface IProps {
    post:Video;
}

const VideoCard:NextPage<IProps> =  ({post}) => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard