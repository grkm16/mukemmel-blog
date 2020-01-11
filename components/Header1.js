import React,{Component} from 'react';
import HeaderNavigation from './HeaderNavigation';

import './../src/styles/_header.scss';

class Header extends Component{


    render(){
        return(
            <header>
                    <HeaderNavigation/>
                    <div className="banner">
                        <div class="callout">
                            <div className="flex-row">
                            <h1 className="txt">GÖRKEM BAYRAKTAR</h1>
                            </div>
                        </div>
                        <div className="social-icons">
                            <nav>
                                <a href=""><i className="fab fa-instagram"></i></a>
                                <a href=""><i className="fab fa-github"></i></a>
                            </nav>
                        
                        </div>
                    </div>
            </header>

          
        );
    }


}

export default Header;