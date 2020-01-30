import React from 'react'
import {
    TextField,
    Button
 } from '@material-ui/core';
import fetch from "isomorphic-unfetch";

export default class CommentField extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            comment : ''
        }

        this.sendComment = this.sendComment.bind(this);
        this.changeComment = this.changeComment.bind(this)
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
        
        const result = await this.postData(`${process.env.WEBPATH}/api/actions`,{
          postId:this.props.postId,
          comment:this.state.comment,
          action:"comment"
        });
    
        if(result.error){
          alert(result.error)
        }

        this.setState({
            comment:''
        })

    }
    
    render(){
        return (
            <form noValidate autoComplete="off" onSubmit={this.sendComment.bind(this)}>
                   
                    <TextField multiline id="standard-basic" label="Standard" value={this.state.comment} onChange={this.changeComment.bind(this)} />
                    <Button type="submit" variant="contained" color="primary" disabled={this.state.comment.length < 5}>
                        Yorum Gönder
                    </Button>
                 
            </form>

        );
    }
}