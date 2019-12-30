import mongoose from './../model/connect/mlab';
import posts from './../model/Schema/posts';

if (mongoose.connection.readyState === 0) {

  console.log("bağlantı yok!");
}


if(mongoose.connections[0].readyState){}


export const getPosts = async () => {
  return posts.find().then(a => a);
};
