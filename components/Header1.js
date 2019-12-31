import React,{Component} from 'react';
import Nav from './Nav'
import './../src/styles/_header.sass';

class Header extends Component{


    render(){
        return(
            <header>
                <div className="logo">
                    GÖRKEM BAYRAKTAR
                </div>

                <Nav />
              
            </header>

          
        );
    }


}

export default Header;