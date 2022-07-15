import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';
import { postDetailQuery } from '../../../utils/queries';


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.method === 'GET'){
    // Here we get the data tha is being passed from url id from [id].tsx
    const {id} = req.query;
    // And here we form the real sanity query with postDetail that we created
    const query = postDetailQuery(id);
    // To get the data
    const data = await client.fetch(query);
    // When we have the data we return it 
    res.status(200).json(data[0]);


}
}


