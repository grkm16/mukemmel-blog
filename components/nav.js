import React,{Component} from 'react';
import Link from 'next/link';


class Nav extends Component{


    render(){
        return(

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


        );
    }

    

}


export default Nav