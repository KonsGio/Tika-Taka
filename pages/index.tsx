// we fetch data-videos from sanity
import type { NextPage } from 'next';
import axios from 'axios';



const Home: NextPage = () => {
  return (
    <div className='text-3xl font-bold underline'>
      Tika Taka
    </div>
  )
}

//To fetch data we use getServerSideProps which will side server render the page and used only if we need to render a page whose data must be fetched at requested time
// We will be fetching videos each time we reload the page
export const getServerSideProps = async () => {
  // api request to our own backend
  const response = await axios.get(`http://localhost:3000/api/post`);

  console.log(response.data.name);

  return{
    props:{}
  }
}


export default Home
