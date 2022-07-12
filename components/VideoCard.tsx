import React from 'react'
import { Video } from '../types';
// 1. Once again we need to create IProps in tsx
interface IProps {
    post:Video;
}

const VideoCard = () => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard