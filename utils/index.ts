import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const createOrGetUser = async (response: any) => {


// We deconstructed the data that we take from google log in fetched object
// And we assign these data to user const
  const decoded:{ name : string, picture: string, sub:string} = jwt_decode(response.credential)
  const { name, picture, sub} = decoded;
  const user = {
    _id:sub,
    _type:'user',
    userName: name,
    image: picture,
// This was the user object creation
  }

  console.log(decoded);
};