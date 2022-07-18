// This is our server
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/client';
import { searchPostsQuery } from '../../../utils/queries';


// req:NextApiRequest means we are using typescript
// Inside NextApiRequest we see what it prints
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    // Its route can be any of the HTTP types post,get etc
  if(req.method === 'GET'){
    
    //to get document 
    const { searchTerm } = req.query;
  
    const videosQuery = searchPostsQuery(searchTerm);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);

  }
}

    // #####THIS PROCEDURE WILL ADD NEW USER IN OUR SANITY DATABASE#####

