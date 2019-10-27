import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
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
                           Hello! This is a simple test case of react app to improve knowledges and open the world of react. <br/>
                           Press button to switch to the form.
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
