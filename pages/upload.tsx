import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

// For video asset to work
import { SanityAssetDocument } from '@sanity/client';

import useAuthStore from '../store/authStore';
import { client } from '../utils/client';

// Import all topics
import { topics } from '../utils/constants';


const Upload = () => {
    const [isloading, setIsloading] = useState(false);
    
    // State for video upload case
    const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | undefined>();

    // Wrong file type state
    const [wrongFileType, setWrongFileType] = useState(false);
    
    // Caption,category and save post
    const [caption, setCaption] = useState('');
    const [category, setCategory] = useState(topics[0].name);
    const [savingPost, setSavingPost] = useState(false);

    // How to get a user from zustand, user profile of a type (:)
    const { userProfile } : {userProfile: any} = useAuthStore();

    // Initialize router
    const router = useRouter();

    // Function for uploading video
    const uploadVideo = async (e:any) => {
        const selectedFile = e.target.files[0];
        const fileTypes = ['video/mp4', 'video/webm', 'video/ogg', 'video/gif'];
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
//  If all this are true then save post
    const handlePost = async () => {
        if(caption && videoAsset?._id && category){
            setSavingPost(true);

            // We form a new document to be passed to sanity database for saving
            const document = {
                _type:'post',
                caption,
                video:{
                    _type:'file',
                    asset:{
                        _type:'reference',
                        _ref:videoAsset?._id
                    }
                },
                userId: userProfile?._id,
                postedBy:{
                    _type:'postedBy',
                    _ref:userProfile?._id
                },
                topic: category
            }
            // Send it to backend in post -> index.js. We route with next router
            await axios.post('http://localhost:3000/api/post', document);

            router.push('/');
        }
    }

  return (
    <div className='flex w-full h-full absolute left-0 top-[60px] mb-10 pt-10 lg:pt-20 bg-[#f8f8f8] justify-center'>
        <div className='bg-white rounded-lg xl:h-[80vh] w-[60%] flex gap-6 flex-wrap justify-between items-center p-14 pt-6'>
            <div>
                <div>
                    <p className='text-2xl font-bold'>Upload Video</p>
                    <p className='text-md text-gray-400 mt-1'>Post a video to your account</p>
                </div>
                <div className='border-dashed rounded-xl border-4 
                    border-gray-200 flex flex-col justify-center 
                    items-center outline-none mt-10 w-[260px] h-[460px]
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
                                                <p className='text-xl font-semibold'>
                                                    Upload Video
                                                </p>
                                            </div>
                                            <p className='text-gray-400 text-center mt-10 text-sm leading-10'>
                                                MP4, webm, ogg <br/>
                                                720*1280 or higher <br/>
                                                Up to 10 minutes <br/>
                                                Less than 100 MB
                                            </p>
                                            <p className='bg-[#9A100E] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none hover:bg-[#f1100E]'>
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
                        {wrongFileType && (
                            <p className='text-center text-xl text-red-400 font-semibold mt-4 w-[250px]'>
                                Please select a supported video file.
                            </p>
                        )}
                </div>
            </div>
            <div className='flex flex-col gap-3 pb-10'>
                 <label className='text-md font-medium'>Caption</label>
                 <input
                    type='text'
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className='rounded outline-none text-md border-2 border-gray-200 p-2'
                 />
                    <label className='text-md font-medium'>
                        Choose a category
                    </label>
                    <select
                    onChange={(e) => setCategory(e.target.value)}
                    className='outline-none border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer'
                    >
                        {/* Loop all categories when we loop somethin we need a key so react can differentiate it*/}
                        {topics.map((topic) => (
                            <option
                            key={topic.name}
                            className='outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300'
                            value={topic.name}
                            >
                                {topic.name}
                            </option>
                        ))}
                    </select>
                    <div className='flex gap-6 mt-10'>
                            <button
                            onClick={() => {}}
                            type='button'
                            className='border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none hover:bg-primary'
                            >
                                Discard
                            </button>
                            <button
                            onClick={handlePost}
                            type='button'
                            className='bg-[#9A100E] text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none hover:bg-[#f1100E]'
                            >
                                Post
                            </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Upload