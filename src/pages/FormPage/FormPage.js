import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import {Sidebar} from '../../components/Sidebar/index';
import {Form} from '../../components/Form/index';

import './style.scss';

class FormPage extends Component{
    render() {
        return (
            <div className="form-page">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Sidebar>
                                Col md 4
                            </Sidebar>
                        </Col>
                        <Col md={8}>
                            <Form>
                                Col md 8
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FormPage;
