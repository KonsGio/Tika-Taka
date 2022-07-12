//THIS IS WHAT IS GETTING FETCHED FROM THE SANITY BACKEND
// WE WILL RECREATE THIS IT THIS FILE  


//     {
//         "_id": "31b3984e-600a-43a5-baf4-f62dded16722",
//         "caption": "My first video",
//         "comments": [
//             {
//                 "_key": "a331876119b3",
//                 "comment": "Hahahahhahaah",
//                 "postedBy": {
//                     "_id": "10b6c43f-3595-4be0-bfbb-468fc29b4f3a",
//                     "image": "https://avatars.githubusercontent.com/u/88385243?s=96&v=4",
//                     "userName": "Kgio"
//                 }
//             }
//         ],
//         "likes": [
//             {
//                 "_key": "b2fc353f9cc9",
//                 "_ref": "10b6c43f-3595-4be0-bfbb-468fc29b4f3a",
//                 "_type": "reference"
//             }
//         ],
//         "postedBy": {
//             "_id": "10b6c43f-3595-4be0-bfbb-468fc29b4f3a",
//             "image": "https://avatars.githubusercontent.com/u/88385243?s=96&v=4",
//             "userName": "Kgio"
//         },
//         "userId": "1",
//         "video": {
//             "asset": {
//                 "_id": "file-d8d795d23ced2e6f87b300f38c07f261b6e35c1d-webm",
//                 "url": "https://cdn.sanity.io/files/tchkh799/production/d8d795d23ced2e6f87b300f38c07f261b6e35c1d.webm"
//             }
//         }
//     }
// ]

export interface Video {
    caption: string;
    video: {
      asset: {
        _id: string;
        url: string;
      };
    };
    _id: string;
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
    likes: {
      postedBy: {
        _id: string;
        userName: string;
        image: string;
      };
    }[];
    comments: {
      comment: string;
      _key: string;
      postedBy: {
        _ref: string;
      };
    }[];
    userId: string;
  }
  
  export interface IUser {
    _id: string;
    _type: string;
    userName: string;
    image: string;
  }