import React, { Component } from 'react';
import {
    Container,
    Button,
    Jumbotron
} from 'react-bootstrap';
import { ReactComponent as Logo } from './logo.svg';
import './style.scss';

class Home extends Component{

    goToApp(path) {
        this.props.history.push(path);
    }

    render() {
        return (
           <div className="home">
               <Container>
                   <Jumbotron>
                       <div className="home__logo">
                           <Logo/>
                       </div>

                       <div className="home__description">
                           Hello! I am a test case built using the basic structure of the ReactJS. <br/> To open the case, you must click the button below.
                       </div>
                       <div className="mt-5">
                           <Button variant="info" onClick={() => this.goToApp('/form')}>Let's go</Button>
                       </div>
                   </Jumbotron>
               </Container>
           </div>
        );
    }
}

export default Home;
