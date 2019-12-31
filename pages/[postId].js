import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Header from "../components/Header1";
import Pnotfound from './p404';

/*
const BlogPost = ({ post }) => {

 
  return (
            

            <div className="container">
              <Head>
                  <title>{post.title}</title>
              </Head>
              <Header />
              <div className="blog">
                <h2 className="blog-title">
                  <Link href="/test">
                    <a className="blog-title-link">{post.title}</a>
                  </Link>
                </h2>
                <div className="blog-text">
                  <ReactMarkdown source={post.details} />
                </div>
                <div className="blog-date">{post.date.current}</div>
              </div>
              <style jsx>{`
                .container {
                  max-width: 650px;
                  width: 100%;
                  margin: 0 auto;
                }

                .hero {
                  text-align: center;
                  margin: 96px 0;
                }

                .social-link {
                  margin-right: 8px;
                }

                .hero-title {
                  font-size: 48px;
                }

                .blog-date {
                  text-align: right;
                  color: #cccccc;
                  margin: 12px 0 48px 0;
                }

                a {
                  color: #35459e;
                  text-decoration: none;
                }
              `}</style>
            </div>
        );
}

BlogPost.getInitialProps = async ({ req, query }) => {
  const data = await fetch(`http://localhost:3000/api/post/${query.postId}`).then(data => data.json());
  const {post} = data;
  return { post:post[0] };
};

*/
class BlogPost extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading:true,
      comments:[]
    }

  }
  async componentDidMount(){
    if(! this.props.post) return;

    const data = await fetch(`http://localhost:3000/api/comments?postId=${this.props.post._id}`).then(data => data.json());
    const {comment,error} = data;
    if(error){
      this.setState({
        isLoading:false});
        return;
    }
    this.setState({
      isLoading:false,
      comments:comment
    });
  }

  TempComments = () => {
      if(this.state.isLoading)
         return (<div>Yorumlar yükleniyor .. </div>);
      else if(this.state.comments.length == 0)
         return (<div>Yorum yapılmadı ilk yorum yapan sen ol!</div>);
      return (
        <div className="comments">
            <h1>YORUMLAR ({this.state.comments.length})</h1>
            {this.state.comments.map( c => (
                  <div>
                      <p>Ziyaretçi  {c.date.current} </p>
                      <p>
                          {c.comment}
                      </p>
                  </div>
            ))
            }
        </div>

      );
  }


  static async getInitialProps({query}) {
    const data = await fetch(`http://localhost:3000/api/post/${query.postId}`).then(data => data.json());
    const {post} = data;
    if(post == null)
        return {post};
    return { post:post[0] };
  }

  render() {

    if(this.props.post == null){
     
      return (
          <Pnotfound />
      )
    }
      

    return (
      
      <div className="container">
      <Head>
          <title>{this.props.post.title}</title>
      </Head>
      <Header />
      <div className="blog">
        <h2 className="blog-title">
          <Link href="/test">
            <a className="blog-title-link">{this.props.post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={this.props.post.details} />
        </div>
        <div className="blog-date">{this.props.post.date.current}</div>
        <hr/>
        
        <this.TempComments />
     
      </div>
      <style jsx>{`
        .container {
          max-width: 650px;
          width: 100%;
          margin: 0 auto;
        }

        .hero {
          text-align: center;
          margin: 96px 0;
        }

        .social-link {
          margin-right: 8px;
        }

        .hero-title {
          font-size: 48px;
        }

        .blog-date {
          text-align: right;
          color: #cccccc;
          margin: 12px 0 48px 0;
        }

        a {
          color: #35459e;
          text-decoration: none;
        }
      `}</style>
    </div>
    )

  }
}

export default BlogPost;

