const baseURL= 'https://jsonplaceholder.typicode.com';
const baseURl = 'https://jsonplaceholder.typicode.com/posts';

const users=`${baseURL}/users`;
const posts = `${baseURL}/posts`;


const urls={
  user:{
    base:users
  },
  post:{
    base:posts
  }
}

export {
  urls,
}


