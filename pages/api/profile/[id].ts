import type { NextApiRequest, NextApiResponse } from 'next';
import { singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';

// req:NextApiRequest means we are using typescript
// Inside NextApiRequest we see what it prints
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    // Its route can be any of the HTTP types post,get etc
  if(req.method === 'GET'){
    const { id } = req.query;

    const query = singleUserQuery(id);
    const userVideosQuery = userCreatedPostsQuery(id);
    const userLikedVideosQuery = userLikedPostsQuery(id);

    const user = await client.fetch(query);
    const userVideos = await client.fetch(userVideosQuery)
    const userLikedVideos = await client.fetch(userLikedVideosQuery)

    res.status(200).json({user: user[0], userVideos, userLikedVideos})
    

}
}


// PASSING EVERYTHING WE NEED TO INSIDE OF PROFILE COMPONENT