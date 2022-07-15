import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

// For video asset to work
import { SanityAssetDocument } from '@sanity/client';

import useAuthStore from '../store/authStore';
import { client } from '../utils/client';


const Upload = () => {
    const [isloading, setIsloading] = useState(false);
    
    // State for video upload case
    const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | undefined>();

    // Wrong file type state
    const [wrongFileType, setWrongFileType] = useState(false);
    
    // Function for uploading video
    const uploadVideo = async (e:any) => {
        const selectedFile = e.target.files[0];
        const fileTypes = ['Video/mp4', 'Video/webm', 'Video/ogg', 'Video/gif'];
        // If uploaded video is in right format
        if (fileTypes.includes(selectedFile.type)){
            client.assets.upload('file', selectedFile, {
                contentType: selectedFile.type,
                filename: selectedFile.name
            })
            .then((data) => {
            //   For this to work we import SanityAssetDocument
                setVideoAsset(data);
                setIsloading(true);
            })
        }else{
            setIsloading(false);
            setWrongFileType(true);
        }
    }
 
  return (
    <div className='flex w-full h-full'>
        <div className='bg-white rounded-lg'>
            <div>
                <div>
                    <p className='text-2xl font-bold'>Upload Video</p>
                    <p className='text-md text-gray-400 mt-1'>Post a video to your account</p>
                </div>
                <div className='border-dashed rounded-xl border-4 
                    border-gray-200 flex flex-col justify-center 
                    items-center outline-none mt-10 w-[260px] h=[460px]
                    p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100'>
                        {isloading ? (
                            <p>Uploading...</p>
                        ) : (
                            <div>
                                {videoAsset ? (
                                    <div>
                                        <video
                                        src={videoAsset.url}
                                        loop
                                        controls
                                        className='rounded-xl h-[450px] mt-16 bg-black'
                                        >
                                        </video>
                                    </div>
                                ) : (
                                    <label className='cursor-pointer'>
                                        <div className='flex flex-col items-center justify-center h-full'>
                                            <div className='flex flex-col items-center justify-center'>
                                                <p className='font-bold text-xl'>
                                                    <FaCloudUploadAlt className='text-gray-300 text-6xl'/>
                                                </p>
                                                <p className='text-xl dont-semibold'>
                                                    Upload Video
                                                </p>
                                            </div>
                                            <p className='text-gray-400 text-center mt-10 text-sm leading-10'>
                                                MP4, WebM, Gif, Ogg <br/>
                                                720*1280 or higher <br/>
                                                Up to 10 minutes <br/>
                                                Less than 100 MB
                                            </p>
                                            <p className='bg-[#9A100E] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none'>
                                                Select File
                                            </p>
                                        </div>
                                        <input
                                        type='file'
                                        name='upload-video'
                                        onChange={uploadVideo}
                                        className='w-0 h-0'
                                        />
                                    </label>
                                )}
                            </div>
                        )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upload