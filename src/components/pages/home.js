import React, {Component} from 'react';
import Header from '../Common/Header'
import image from '../../assets/img/header-bg.jpg'

class Home extends Component{
    render(){
        return(
           <Header 
                title = "The only blog you need."
                subtitle = "ACTUALITY"
                buttonText = "know more"
                link = "/services"
                showButton = {true}
                image = {image}
           />
        );
    }
}

export default Home;