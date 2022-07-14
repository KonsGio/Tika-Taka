import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const createOrGetUser = async (response: any) => {
  const decoded = jwt_decode(response.credential)
  
  console.log(decoded);
};