import React from 'react'
import {
    TextField,
    Button,
    Box,
    Typography,
    Snackbar,
    CircularProgress
 } from '@material-ui/core';
import {
    Alert,AlertTitle
} from '@material-ui/lab'

import fetch from "isomorphic-unfetch";

export default class CommentField extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            comment : '',
            minCharacter : 20,
            response:{
                icon:'',
                message:'',
                show: false
            },
            loading: false
        }

        this.sendComment = this.sendComment.bind(this);
        this.changeComment = this.changeComment.bind(this);
    }

    async postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
          body: JSON.stringify(data)
        });
        return await response.json();
      }
    

    changeComment(e){
        this.setState({
            comment:e.target.value
        })
    }
    async sendComment(){
        event.preventDefault();
        
        this.setState({
            loading:true
        })

        const result = await this.postData(`${process.env.WEBPATH}/api/actions`,{
          postId:this.props.postId,
          comment:this.state.comment,
          action:"comment"
        });
    
        if(result.error){
           this.setState({
               response:{
                   icon:'error',
                   message:result.error,
                   show : true
               }
           })
        }else{
            this.setState({
                response:{
                    icon:'success',
                    message:result.message,
                    show : true
                }
            })
        }
        this.setState({
            loading:false,
            comment:''
        })

        setTimeout(() => {
            this.setState({
                response:{
                    show:false
                }
            })
        },6000)


    }
    
    render(){
        return (
            <form noValidate autoComplete="off" onSubmit={this.sendComment.bind(this)}>
                <Alert style={{"margin":"10px 0"}} severity="info">Aklınıza takılan konuları sorabilirsiniz.</Alert>
                <Box style={{'margin':'12px 0',"padding":"10px 16px"}}>
  
                            <Box>
                                 <TextField disabled={this.state.loading} fullWidth={true} multiline id="standard-basic" label="Mesajınız" value={this.state.comment} onChange={this.changeComment.bind(this)} />
                            </Box>
                            <Box>
                            <Box style={{'textAlign':"right",'padding':'10px'}}>
                                <Button type="submit" variant="contained" color="primary" disabled={this.state.comment.length < this.state.minCharacter || this.state.loading}>
                                   
                                    { this.state.loading ?  <CircularProgress disableShrink />  : ' Yorum Gönder'}
                                     
                                </Button>
                            </Box>
                            </Box>
                            <Typography variant="body2">
                                    Ziyaretçi olarak yorum yapıyorsunuz.
                            </Typography>
                            <Typography variant="body2" style={{'color':(this.state.comment.length < this.state.minCharacter ? 'red' : 'green')}}>
                                    En az {this.state.minCharacter} karakter girmelisiniz ({this.state.comment.length})
                            </Typography>
                 
                </Box>
                <Snackbar
                    anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
                    key={`bottom,left`}
                    open={this.state.response.show}
                    autoHideDuration={1000}
                >
                        <Alert severity={this.state.response.icon}>
                            <AlertTitle>Bildiri</AlertTitle>
                                {this.state.response.message}
                            </Alert>
                    </Snackbar>
            </form>

        );
    }
}