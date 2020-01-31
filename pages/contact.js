import React,{Component} from 'react'
import AppBar from '../components/Temel/Nav'

import HttpPost from '../helper/func.httpPost'

import { FormGroup,TextField,Container,Button,Snackbar,CircularProgress   } from '@material-ui/core';
import {Alert} from '@material-ui/lab'
export default class Home extends Component{


    constructor(){
        super()
        this.state = {
            ad:'',
            email:'',
            baslik:'',
            icerik:'',
            snackbar:{
                open:false,
                msg:'mesaj alanı',
                status:''
            },
            loading:false
        }
        this.updateField = this.updateField.bind(this)
    }

    updateField(value){
        this.setState({ 
            ...value
        })
    }
    async sendMail(){
       
        this.setState({
            loading:true
        })
       
        HttpPost(`${process.env.WEBPATH}/api/actions`,{
            action:'mail',
            name:this.state.ad,
            email:this.state.email,
            subject:this.state.baslik,
            content:this.state.icerik
        }).then(data => {

            this.setState({
                snackbar:{
                    msg:data.message,
                    status:data.status === 'OK' ? 'success':'error'
                }
            })
            
        }).catch(() => {

            this.setState({
                snackbar:{
                    msg:'HATA',
                    status:'error'
                }
            })

        }).finally(()=>{
            this.setState({
                snackbar:{
                    ...this.state.snackbar,
                    open:true
                },
                loading:false,
                ad:'',
                baslik:'',
                icerik:'',
                email:''
            })
        })
    }


    closeSnack(){
        this.setState({
            snackbar:{
                open:false
            }
        })
    }
    

    render(){
        return (
            <div>
            <AppBar />
            <Container maxWidth="sm">
                <FormGroup>
                    <Alert severity="info" style={CSS.textfield}>İletişime geçmek için formu doldurunuz</Alert>
                    <TextField
                        required
                        label="Adınız"
                        variant="outlined"
                        style={CSS.textfield}
                        value={this.state.ad}
                        onChange={((e)=>{ this.updateField({ad:e.target.value})})}
                    />
                    <TextField
                        required
                        label="Email"
                        variant="outlined"
                        style={CSS.textfield}
                        value={this.state.email}
                        onChange={((e)=>{ this.updateField({email:e.target.value})})}
                    />
                    <TextField
                        required
                        label="Konu"
                        variant="outlined"
                        style={CSS.textfield}
                        value={this.state.baslik}
                        onChange={((e)=>{ this.updateField({baslik:e.target.value})})}
                    />
                    <TextField
                        required
                        multiline
                        label="Mesajınız"
                        variant="outlined"
                        style={CSS.textfield}
                        value={this.state.icerik}
                        onChange={((e)=>{ this.updateField({icerik:e.target.value})})}
                    />

                    <Button disabled={this.state.loading} variant="contained" color="primary" onClick={this.sendMail.bind(this)}>
                        {
                            this.state.loading 
                            ? <CircularProgress color="secondary"></CircularProgress>
                            : 'İletişime Geç!'
                        }
                    </Button>
                </FormGroup>
            </Container>

            <Snackbar open={this.state.snackbar.open} autoHideDuration={6000} onClose={this.closeSnack.bind(this)}>
                <Alert severity={this.state.snackbar.status} onClose={this.closeSnack.bind(this)}>
                    {this.state.snackbar.msg}
                </Alert>
            </Snackbar>
            </div>

        )
    }

}



const CSS = {
    textfield : {
        marginBottom:'10px'
    }
}