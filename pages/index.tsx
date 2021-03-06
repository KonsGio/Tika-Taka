// we fetch data-videos from sanity
import type { NextPage } from 'next';
import axios from 'axios';
import {Video} from '../types';
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';
import { BASE_URL } from '../utils';


//6.Whenever we are accepting props inside a typescript tsx page we have to create an interface
//7.We import Video from types and we pass it as an array to videos to get all the data of the video post
interface IProps {
  videos:Video[]
}


//5. props we expect is videos 8. videos is of a type IProps
const Home = ({videos}: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video:Video) => (
          <VideoCard post={video} key={video._id}/>
        ))
      ):(
        <NoResults text={'No videos to see'}/>
     )}
    </div>
  )
}

//1.To fetch data we use getServerSideProps which will side server render the page and used only if we need to render a page whose data must be fetched at requested time
//2.We will be fetching videos each time we reload the page
export const getServerSideProps = async ({

  query: {topic}

} : {

  query: {topic: string}

}) => {

  let response = null;

  if(topic) {

  //3.api request to our own backend

    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);

  } else {

    response = await axios.get(`${BASE_URL}/api/post`);

  }

//4.Anything we pass in props will be populated iside real props on const Home: above
  return{
    props:{
      videos:response.data
    }
  }
}


export default Home
