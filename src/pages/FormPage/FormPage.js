import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import './style.scss';

class FormPage extends Component{
    render() {
        return (
            <div className="form-page">
                <Container>
                    <Row>
                        <Col md={4}>
                            Col md 4
                        </Col>
                        <Col md={8}>
                            Col md 8
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FormPage;
