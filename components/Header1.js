import React,{Component} from 'react';
import Nav from './Nav'

class Header extends Component{


    render(){
        return(
            <header>
                <div>
                    GÖRKEM BAYRAKTAR
                </div>

                <Nav />
              
            </header>

          
        );
    }


}

export default Header;