import React from 'react';
import AppBar from '../../components/Temel/Nav'

import {
    Container,
    Box,
    Typography,
    TextField,
    Divider,
    FormGroup,
    Button
} from '@material-ui/core'
export default function Login(){


    return (
        <div>
        <AppBar />
        <Container maxWidth="md">
            <Box flexDirection="row" display="flex">
               <Box flexGrow={1} style={{...ClassName.box,...ClassName.login}}>
                     <Typography variant="h5" component="h2">
                            Giriş Yap
                    </Typography>

                    <Divider/>
                    <FormGroup>
                   
                        <TextField  label="Kullanıcı adı" variant="filled" />
                    
                        <TextField  label="Şifre" variant="filled" />
                       
                        <Button variant="contained" color="primary">
                        Giriş Yap
                        </Button>
                    </FormGroup>
                    
               </Box>
               <Box flexGrow={1} style={{...ClassName.box,...ClassName.register}}>
                    <Typography variant="h5" component="h2">
                            Üye ol!
                    </Typography>   

                    
                    <Divider/>
                    <FormGroup>
                   
                        <TextField color="texsecondary"  label="Ad" variant="filled" />
                        <TextField color="textsecondary" label="Kullanıcı adı" variant="filled" />
                    
                        <TextField color="textsecondary"  label="Şifre" variant="filled" />
                        <Button variant="contained" color="primary">
                                Üye ol!
                        </Button>
                    </FormGroup>
               </Box>
            </Box>
        </Container>
        </div>
    )

}

const ClassName = {
    box : {
        'padding':'10px',
        'textAlign':'center',
        'boxSizing':'border-box',
        'display':'block'
    },
    login:{
    },
    register:{
    }
}