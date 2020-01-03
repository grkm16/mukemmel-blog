import React,{Component} from 'react';
import Link from 'next/link';

import '../../src/styles/_login.scss';

class TEMP extends Component{

    


    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
            form:'LOGIN'};

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
    submitLogin(e){
        e.preventDefault();
        

    }

    changeInput(type){
        this.setState({
            [type] : event.target.value
        })

    }

    render(){
        
        if(this.state.form === 'LOGIN')
            return (
                <div className="container--flex">
      
                        <div className="flex--header">
                            Giriş Yap  
                        </div>
                        <div className="flex--form">
                            <form onSubmit={this.submitLogin.bind(this)}>
                                    <div className="input">
                                        <div className="cap">Kullanıcı adı</div>
                                        <div className="icon">
                                            <i className="far fa-user"></i>
                                            <input value={this.state.email} onChange={() => this.changeInput("email") } type="text" placeholder="kullanıcı adını yaz" />
                                        </div>
                                    </div>
                                    <div className="input">
                                        <div className="cap">Şifre</div>
                                        <div className="icon">
                                        <i className="fas fa-lock"></i>
                                        <input value={this.state.password} onChange={() => this.changeInput("password") } type="password" placeholder="şifreni yaz" />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <a href="">Şifremi unuttum</a>
                                    </div>
                                    <div className="button">
                                    <button 
                                        className={!(this.state.email.length && this.state.password.length) ? "button-login button-disabled" : "button-login" } 
                                        disabled={ !(this.state.email.length && this.state.password.length)}
                                        >
                                            Giriş
                                        </button>
                                    </div>
                            </form>
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