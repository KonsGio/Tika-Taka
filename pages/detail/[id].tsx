// THis file's url is dynamic [id] it will change for every single video
import React, {useState,useEffect,useRef} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiVolumeUp, HiVolumeOff} from 'react-icons/hi';
import axios from 'axios';
import { BASE_URL } from '../../utils';


// We will fetch our data by using the id inside of the url

const Detail = () => {
  return (
    <div>

    </div>
  )
}

export const getServerSideProps = async ({params: {id}
}) => {
  const { data } = await axios.get(`${BASE_URL}/api/post/${id}`)

  return {
    props: { postDetails : data }
  }
}

export default Detail