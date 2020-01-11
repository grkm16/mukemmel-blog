import React,{Component} from 'react';
import Link from 'next/link';

import '../../src/styles/_darkblue_login.scss';

class TEMP extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            error:{
                interval:null,
                status:false,
                message:''
            },
            forgotPassword:false,
            email: '',
            password:'',
            form:'LOGIN'
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }
    handleChange(event){
      
    }

    handleRegister(){
        event.preventDefault();
        this.setState({
            form: "REGISTER"
        })
    }
    handleLogin(e){
        e.preventDefault();
        this.setState({
            form : 'LOGIN'
        })
    }
    async submitLogin(e){
        e.preventDefault();
        
        if(this.state.error.interval){
            clearInterval(this.state.error.interval)
            this.setState({
                error:{
                    status:false,
                    message:''
                }
            })

        }
        let interval = setTimeout(()=>{
            this.setState({
                error:{
                    status:false,
                    message:''
                }
            })
        },6000)
        
        
        
        this.setState({
                       error:{
                                interval:interval,
                                status:true,
                                message:"Kullanıcı adı veya şifre yanlış"
                        },
                        password:''
             })

    }
    

    changeInput(type){
        this.setState({
            [type] : event.target.value
        })

    }

    forgotPassword(){
        this.setState({
            forgotPassword:!this.state.forgotPassword
        })
    }

    render(){
        
        if(this.state.form === 'LOGIN')
            return (
                <div className="body--container">
                    <div className={"container--flex "+ (this.state.error.status && "validation--error" ) }>
        
                            <div className="flex--header">
                                {this.state.forgotPassword ? "ŞİFRENİ SIFIRLA":"GİRİŞ YAP"}
                            </div>
                            <div className="flex--form">

                                {
                                    this.state.error.status && 
                                    (
                                        <div className="form--error">
                                            Kullanıcı adı veya şifre yanlış!
                                        </div>
                                    )
                                }
                                

                                <form onSubmit={this.submitLogin.bind(this)}>
                                        <div className="input">
                                            <div className="cap">Kullanıcı adı veya Mail</div>
                                            <div className="icon">
                                                <i className="far fa-user"></i>
                                                <input value={this.state.email} onChange={() => this.changeInput("email") } type="text" placeholder="kullanıcı adı veya mail adresi" />
                                            </div>
                                        </div>
                                        {
                                            !this.state.forgotPassword &&
                                            (<div className="input">
                                                <div className="cap">Şifre</div>
                                                <div className="icon">
                                                <i className="fas fa-lock"></i>
                                                <input value={this.state.password} onChange={() => this.changeInput("password") } type="password" placeholder="şifreni yaz" />
                                                </div>
                                            </div>)
                                        }
                                        <div className="text-right">
                                            <a onClick={this.forgotPassword.bind(this)} href="#">{this.state.forgotPassword ? "Şifremi hatırladım": "Şifremi unuttum"}</a>
                                        </div>
                                        <div className="button">
                                        <button 
                                            className={!(this.state.forgotPassword && this.state.email.length) && !(this.state.email.length && this.state.password.length) ? "button-login button-disabled" : "button-login" } 
                                            disabled={  !(this.state.forgotPassword && this.state.email.length) 
                                                            && 
                                                        !(this.state.email.length && this.state.password.length)
                                                    }
                                            >
                                                {this.state.forgotPassword ? "Bağlantı gönder" : "Giriş yap"}
                                            </button>
                                        </div>
                                </form>
                        </div>
                    </div>
                  </div>
            );
        else if(this.state.form === "REGISTER")
            return(
                <form>
                        REGÄ°STER FORM

                       <a href="void:javascript" onClick={this.handleLogin}>ASDAD</a>
                </form>
            );
    }
}

export default TEMP;