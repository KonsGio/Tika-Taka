// This is our server
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';
import { allPostsQuery } from '../../../utils/queries'

type Data = {
  name: string
}
// req:NextApiRequest means we are using typescript
// Inside NextApiRequest we see what it prints
export default function handler(req: NextApiRequest,res: NextApiResponse) {
    // Its route can be any of the HTTP types post,get etc
  if(req.method === 'GET'){
    // Then we call all the videos
    const query = allPostsQuery();

    // Now we fetch data from sanity
    // const data = await client...
  }
}
