// This is our server
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';
import { allPostsQuery } from '../../../utils/queries'

type Data = {
  name: string
}
// req:NextApiRequest means we are using typescript
// Inside NextApiRequest we see what it prints
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    // Its route can be any of the HTTP types post,get etc
  if(req.method === 'GET'){
    // Then we call all the videos
    const query = allPostsQuery();

    // Now we fetch data from sanity with await fetch in async function
    const data = await client.fetch(query);

    res.status(200).json(data);
  }
  // We route post upload here
  else if(req.method === 'POST'){
    const document = req.body;

    client.create(document)
      .then(() => res.status(201).json('Video uploaded')
      )
  }
}
