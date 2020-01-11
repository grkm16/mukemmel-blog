import React,{Component} from 'react';
import Link from 'next/link';


import './../src/styles/_header_navigation.scss';

class HeaderNavigation extends Component{


    render(){
        return(
            <div className="navigation">
                <nav>
                    <Link href=""><a className="nav-item active">Bayraktar</a></Link>
                    <Link href=""><a className="nav-item">Hakkımda</a></Link>
                    <Link href=""><a className="nav-item">İletişim</a></Link>
                </nav>
            </div>
        );
    }

    

}


export default HeaderNavigation