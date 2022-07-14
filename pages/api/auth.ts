// This is our server
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client';

// req:NextApiRequest means we are using typescript
// Inside NextApiRequest we see what it prints
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    // Its route can be any of the HTTP types post,get etc
  if(req.method === 'POST'){
    
    //to get document 
    const user = req.body;
    // call sanity client
    client.createIfNotExists(user)
    .then(()=> res.status(200).json('Login successful'))
    
  }
}

    // #####THIS PROCEDURE WILL ADD NEW USER IN OUR SANITY DATABASE#####

