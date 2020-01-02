import mongoose from './../model/connect/mlab';
import Comment from './../model/Schema/comments';



export const Action = async (postId,comment,ipAdress,userAgent) => {
    
    const newComment = new Comment({
        postId:postId,
        comment:comment,
        date:{
            current:Date.now()
        },
        confirm:1,
        ipAdres:ipAdress,
        userAgent:userAgent
    });

    const response = new Promise((resolve,reject) => {
        newComment.save((err,succ) => {
            if(err) return reject(err);
            resolve(succ);
        })
    })

    return await response.then(result => result).catch(err => err);


  };
  