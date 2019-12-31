import React from 'react';
import Link from 'next/link'
import ReactMarkdown from "react-markdown";


import TimeAgo from '../helper/func.timeAgo'



const Post = ({post}) => (
    <div className="blog">
        <h2 className="blog-title">
        <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
        </Link>
        </h2>
        <div className="blog-text">
        <ReactMarkdown source={post.details} />
        </div>
        
        <div className="blog-date">{TimeAgo(post.date.current) }</div>
  </div>

);



export default Post