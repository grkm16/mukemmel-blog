import mongoose from './../model/connect/mlab';
import comments from './../model/Schema/comments';

if (mongoose.connection.readyState === 0) {

  console.log("bağlanti yok!");
}


if(mongoose.connections[0].readyState){}


export const getComments = async (postId = "") => {
  return comments.find({postId,confirm:1},{ipAdres:0,userAgent:0,"date.confirm":0,postId:0,confirm:0}).then(a => a);
};
