import React,{Component} from "react";
import Footer from './../components/Footer';
import Header from './../components/Header';
import MainContent from './../components/MainContent';


class Test extends Component{
  constructor(){
      super();
      this.state = {
          isLoading : true
      }
  }

  componentDidMount(){
      setTimeout(() => {
            this.setState({
                isLoading : false
            })
      },2000)
  }
  
  render(){
    return (
        <div className="container">

                <Header />
                
                <MainContent isLoading={this.state.isLoading} />

                <Footer />
        </div>
    );
  };
};

export default Test;
