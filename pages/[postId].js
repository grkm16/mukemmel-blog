import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Header from "../components/Header1";
import Pnotfound from './p404';

import dateFormat from '../helper/func.dateFormat';

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
      comment:'',
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
                  <div key={c._id}>
                      <p>Ziyaretçi  {dateFormat(c.date.current,'G UA Y UG')} </p>
                      <p>
                          {c.comment}
                      </p>
                  </div>
            ))
            }
        </div>

      );
  }
  async postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  static async getInitialProps({query}) {
    const data = await fetch(`http://localhost:3000/api/post/${query.postId}`).then(data => data.json());
    const {post} = data;
    if(post == null)
        return {post};
    return { post:post[0] };
  }


  async sendComment(){
    event.preventDefault();
    
    const result = await this.postData("http://localhost:3000/api/actions",{
      postId:this.props.post._id,
      comment:this.state.comment,
      action:"comment"
    });

    if(result.error){
      alert(result.error)
    }else{
      const a = this.state.comments;
      a.unshift(result);
      this.setState({
          comment:'',
          comments:a
      });

      
    }


  }

  changeComment(e){

    this.setState({
      comment:e.target.value
    })

  }

  render() {

    /**
     * if article not found 
     * such return p404 page
     */
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
        <div className="blog-date">{dateFormat(this.props.post.date.current,'G UA Y')}</div>
        <hr/>
        
        <form onSubmit={this.sendComment.bind(this)}>
            <label>
               Yorumunuz
              <textarea rows="5" style={
                {
                  width:"100%"
                }
              } value={this.state.comment} onChange={this.changeComment.bind(this)} />
            </label>

            <button type="submit" disabled={this.state.comment.length < 5}>Gönder</button>

        </form>


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

