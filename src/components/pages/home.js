import React, {Component} from 'react';
import Header from '../Common/Header'
import image from '../../assets/img/header-bg.jpg'
import Services from '../Common/services'
import Portfolio from '../Common/portfolio'



class Home extends Component{
    render(){
        return(
            <div>
                <Header 
                title = "The only blog you need."
                subtitle = "ACTUALITY"
                buttonText = "know more"
                link = "/services"
                showButton = {true}
                image = {image}
                 />
                <Services />
                <Portfolio />
            </div>
           
        );
    }
}

export default Home;