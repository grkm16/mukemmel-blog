import React,{Component} from 'react'
import AppBar from '../components/Temel/Nav'


import { FormGroup,TextField,Container,Button} from '@material-ui/core';
import {Alert} from '@material-ui/lab'
export default class Home extends Component{


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
                    />
                    <TextField
                        required
                        label="Email"
                        variant="outlined"
                        style={CSS.textfield}
                    />
                    <TextField
                        required
                        label="Konu"
                        variant="outlined"
                        style={CSS.textfield}
                    />
                    <TextField
                        required
                        multiline
                        label="Mesajınız"
                        variant="outlined"
                        style={CSS.textfield}
                    />

                    <Button variant="contained" color="primary">
                         İletişime Geç!
                    </Button>
                </FormGroup>
            </Container>
            </div>

        )
    }

}



const CSS = {
    textfield : {
        marginBottom:'10px'
    }
}