export default {
    name:'postedBy',
    title:'Posted By',
    type:'reference',
    // reference to an array of users, one user can post multiple comments and we keep track
    to: [{type:'user'}]
}