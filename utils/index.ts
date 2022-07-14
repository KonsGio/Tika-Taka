import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const createOrGetUser = async (response: any) => {


//1. We deconstructed the data that we take from google log in fetched object
//2. And we assign these data to user const
  const decoded:{ name : string, picture: string, sub:string} = jwt_decode(response.credential);
 
  const { name, picture, sub} = decoded;
 
  const user = {
    _id:sub,
    _type:'user',
    userName: name,
    image: picture
//3. This was the user object creation
  }
//4. We make an API call with axios
// 5. we are passing the user data and now we will create the API route at api/auth.ts 
await axios.post('hhtp://localhost:3000/api/auth', user);
};