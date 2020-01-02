import React,{Component} from 'react';
import Link from 'next/link';

class TEMP extends Component{

    


    constructor(props){
        super(props);
        this.state = {email: '',password:'',form:'LOGIN'};

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

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
    

    render(){
        
        if(this.state.form === 'LOGIN')
            return (
                <form>
                   
                   Email
                    <input value={this.state.email} onChange={(e => this.setState({email:e.target.value})).bind(this)}/>
                    <label>
                    Essay:
                    <input value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Gönder" />
                    <button onClick={this.handleRegister}>Kayıt ol</button>
            </form>
            );
        else if(this.state.form === "REGISTER")
            return(
                <form>
                        REGİSTER FORM

                       <a href="void:javascript" onClick={this.handleLogin}>ASDAD</a>
                </form>
            );
    }
}

export default TEMP;