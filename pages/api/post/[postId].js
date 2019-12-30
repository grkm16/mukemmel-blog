import posts from './../../../model/Schema/posts';



export default async (req, res) => {
   posts.find({"slug":req.query.postId}).then(a => {

     return res.json({post:a.length ? a : null});

   });

};
