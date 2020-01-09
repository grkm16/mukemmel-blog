import React,{Component} from 'react';
import Link from 'next/link';

import './../src/styles/_header.sass';

class Header extends Component{


    render(){
        return(
            <header>
                <div className="logo">
                    GöRKEM BAYRAKTAR
                </div>

                <nav>
                <Link href="">
                    <a>VV</a>
                </Link>
                <Link href="">
                    <a>Github</a>
                </Link>
                <Link href="">
                    <a>Facebook</a>
                </Link>
                
                <Link href="">
                    <a>Twitter</a>
                </Link>
            </nav>
              
            </header>

          
        );
    }


}

export default Header;