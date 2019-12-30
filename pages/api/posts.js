import { getPosts } from "../../src/blog-posts";

const postsPro = new Promise((resolve,reject) => {
      resolve(getPosts());
}) 

export default async (req, res) => {
  postsPro.then(posts => res.json({posts}));
};
