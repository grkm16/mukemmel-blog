import React,{Component} from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

import ua from 'universal-analytics'


import Header from './../components/Header1'
import Post from './../components/Post'

import '../src/styles/_main.sass';


const visitor = ua(process.env.GOOGLE_UA);
visitor.pageview(`/`, process.env.WEBPATH, "Anasayfa", function (err) {});

/*
const Home = ({ posts }) => (
  <div className="container">

    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    {posts.map(post => <Post post={post}/>)}
    
    { <!--
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="hero-title">Görkem Bayraktar</h1>
      <div className="hero-social-links">
        <Link href="https://medium.com/@selmankahya">
          <a className="social-link">Medium</a>
        </Link>
        <Link href="https://www.twitter.com/selmankahyax">
          <a className="social-link">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/selmankahya">
          <a className="social-link">LinkedIn</a>
        </Link>
        <Link href="https://www.instagram.com/selmankahyax/?hl=en">
          <a className="social-link">Instagram</a>
        </Link>
      </div>
    </div>

    {posts.map(post => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date.current}</div>
      </div>
    ))}

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

    -->}
  </div>
);


Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};
*/


class Home extends Component{

  constructor(){
    super();
    
    this.state = {
      isLoading : true,
      posts:null
    };
  }

  async componentDidMount(){
    this.setState({isLoading : true});
    const {posts} = await fetch(`${process.env.WEBPATH}/api/posts`).then( a => a.json());
    this.setState({posts,isLoading : false});
    
  }

  render(){
    
      return (
        <div className="test">

          <Head>
            <title>Anasayfa</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="google-site-verification" content="eDZ2F-rKi-4pw-juThz_p0Ffz1VIWKwA3TDY5mRfKo8" />
          </Head>
      
          <Header />
          {
            this.state.isLoading ? 
            <p>Yükleniyor</p> : this.state.posts.map( post => <Post key={post._id} post={post} />)
          }
        </div>

      );
  }
}


export default Home;
