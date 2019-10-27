import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import {RoundedBlock} from '../../components/RoundedBlock/index';
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
                            <RoundedBlock>
                                <Sidebar>
                                    Col md 4
                                </Sidebar>
                            </RoundedBlock>
                        </Col>
                        <Col md={8}>
                            <RoundedBlock>
                                <Form>
                                    Col md 8
                                </Form>
                            </RoundedBlock>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FormPage;
