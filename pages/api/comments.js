import { getComments } from "../../src/blog-comments";


const R_DEFAULT = {
    status_code: 400,
    error: {
      "message": "Invalid params",
      "code": 100,
      "context": "Exception"
    },
    status_txt: "Bad Request"
  }

export default async (req, res) => {
  if( ! req.query.postId) return res.json(R_DEFAULT);

  getComments(req.query.postId).then(comment => res.json({comment}));
};
