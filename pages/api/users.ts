import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client';
import { allUsersQuery } from '../../utils/queries';

// req:NextApiRequest means we are using typescript
// Inside NextApiRequest we see what it prints
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    // Its route can be any of the HTTP types post,get etc
  if(req.method === 'GET'){

    // CREATION OF ENDPOINT TO FETCH USERS
    const data = await client.fetch(allUsersQuery());

    if(data) {
        res.status(200).json(data)
    
    }else{
        res.json([]);
    }
    
  }
}


