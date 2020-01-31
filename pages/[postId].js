import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Pnotfound from './p404';

import dateFormat from '../helper/func.dateFormat';
import HelperMinRead from '../helper/func.minRead'

import timeAgo from '../helper/func.timeAgo';

import ua from 'universal-analytics'
import Header2 from './../components/Temel/Nav'

import {
    Box,
    Container,
    CardMedia,
    Typography,
    Card
} from '@material-ui/core'

import {
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    AccountCircle as AccountCircleIcon,
    Description as DescriptionIcon,
    AssignmentInd as AssignmentIndIcon
} from '@material-ui/icons'


import FormComment from './../components/Temel/Form.comment'

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

    const data = await fetch(`${process.env.WEBPATH}/api/comments?postId=${this.props.post._id}`).then(data => data.json());
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

        <div>
            <Typography style={{'padding':'10px 0'}} variant="h5">
                YORUMLAR ({this.state.comments.length})
            </Typography>
            {this.state.comments.map( c => (
                  <div key={c._id}>
                     
                      <Box display="flex" style={{'margin':'6px 0'}}>
                          <Box>
                            <AccountCircleIcon fontSize="large" style={{"padding":"0 5px"}}></AccountCircleIcon>   
                          </Box>
                          <Box>
                               <Box>
                                    <Typography variant="subtitle1">
                                        Ziyaretçi  
                                        
                                        <Typography style={{fontSize:"12px"}} variant="body1" color="textSecondary" display="inline"> {timeAgo(c.date.current,'G UA Y UG')} </Typography>
                                    </Typography>
                               </Box>
                               <Box>
                                    <Typography variant="body1">
                                        {c.comment}
                                    </Typography>
                               </Box>
                          </Box>
                      </Box>
                

                  </div>
            ))
            }
        </div>

      );
  }
  
  static async getInitialProps({query}) {
    let p = query.postId;
    const data = await fetch(`${process.env.WEBPATH}/api/post/`+p).then(data => data.json());
    const {post} = data;

   

    const visitor = ua(process.env.GOOGLE_UA);
    visitor.pageview(`/${p}`, process.env.WEBPATH, "Anasayfa", function (err) {});
    if(post == null)
        return {post};
    return { post:post[0] };
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
        
     
       <Container maxWidth="md" style={{'fontFamily':'Arial'}}> 
            <Head>
                <title>{this.props.post.title}</title>
            </Head>    
            <Header2></Header2>
            <Box position="relative">
              <CardMedia 
              component="img"
              height="300"
              image="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              </CardMedia>

            </Box>

     
      
        <Typography variant="h4" style={ {'padding':'10px 0 '}}>
                {this.props.post.title}
        </Typography>
         
        <Box>
          <AssignmentIndIcon /> Görkem Bayraktar 
          
          
          <Typography display="inline" color="textSecondary" style={{"fontSize":'13px',"padding":"0 10px"}}>
               {HelperMinRead(this.props.post.details)}
          </Typography>

          <Typography display="inline" color="textSecondary">
              {dateFormat(this.props.post.date.current,'G UA Y')}
          </Typography>
           
        </Box>
     
        <Box>
          <ReactMarkdown source={this.props.post.details} />
        </Box>
       
        <FacebookIcon/>
        <TwitterIcon />
    
        <FormComment postId={this.props.post._id}></FormComment>
      
     
        

        <this.TempComments />
     
      </Container>
    )

  }
}


export default BlogPost;

