import React,{Component} from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

import ua from 'universal-analytics'


import Header from './../components/Header1'
import Header2 from './../components/Temel/Nav'
import Post from './../components/Post'
import Post2 from './../components/Temel/Post'
import Box from '@material-ui/core/Box'
import '../src/styles/_main.sass';

const visitor = ua(process.env.GOOGLE_UA);
visitor.pageview(`/`, process.env.WEBPATH, "Anasayfa", function (err) {});

class Home extends Component{

  constructor(){
    super();
    
    this.state = {
      isLoading : true,
      posts:null,
      in:false
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
          <Header2></Header2>

          <Head>
            <title>Anasayfa</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="google-site-verification" content="eDZ2F-rKi-4pw-juThz_p0Ffz1VIWKwA3TDY5mRfKo8" />
          </Head>
          <Box flexDirection="column" alignItems="center" display="flex">
             
                {
                  this.state.isLoading ? 
                  <p>yükleniyor</p> : this.state.posts.map( post => <Post2 key={post._id} post={post} />)
                } 
          </Box>
        </div>

      );
  }
}


export default Home;
